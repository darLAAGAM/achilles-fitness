import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, Tab } from '../types';
import { db } from '../services/db/database';
import { v4 as uuid } from 'uuid';

interface UserState {
  user: User | null;
  activeTab: Tab;
  isOnboarded: boolean;
  currentWorkoutId: string | null;
  isWorkoutActive: boolean;

  // Actions
  setUser: (user: User) => void;
  updateUser: (updates: Partial<User>) => void;
  setActiveTab: (tab: Tab) => void;
  setOnboarded: (value: boolean) => void;
  startWorkout: (workoutId: string) => void;
  endWorkout: () => void;
  initializeUser: (data: Partial<User>) => Promise<void>;
  changeProgram: (programId: string, startPhase?: number) => Promise<void>;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      activeTab: 'workout',
      isOnboarded: false,
      currentWorkoutId: null,
      isWorkoutActive: false,

      setUser: (user) => set({ user }),

      updateUser: async (updates) => {
        const currentUser = get().user;
        if (!currentUser) return;

        const updatedUser = {
          ...currentUser,
          ...updates,
          updatedAt: new Date()
        };

        await db.users.put(updatedUser);
        set({ user: updatedUser });
      },

      setActiveTab: (tab) => set({ activeTab: tab }),

      setOnboarded: (value) => set({ isOnboarded: value }),

      startWorkout: (workoutId) => set({
        currentWorkoutId: workoutId,
        isWorkoutActive: true
      }),

      endWorkout: () => set({
        currentWorkoutId: null,
        isWorkoutActive: false
      }),

      initializeUser: async (data) => {
        const user: User = {
          id: uuid(),
          name: data.name || 'Usuario',
          sex: data.sex || 'male',
          bodyweight: data.bodyweight || 80,
          height: data.height || 180,
          age: data.age || 34,
          experienceYears: data.experienceYears || 5,
          trainingDaysPerWeek: data.trainingDaysPerWeek || 3,
          preferredUnit: data.preferredUnit || 'kg',
          currentPhase: data.currentPhase || 'bulk',
          targetBodyweight: data.targetBodyweight,
          dailyCalories: data.dailyCalories || 2600,
          proteinTarget: data.proteinTarget || 160,
          carbTarget: data.carbTarget || 280,
          fatTarget: data.fatTarget || 70,
          // Program selection
          currentProgramId: data.currentProgramId || 'achilles-3day',
          currentProgramPhase: data.currentProgramPhase,
          programStartDate: data.programStartDate,
          // Equipment
          availableEquipment: data.availableEquipment || ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight'],
          hasGymAccess: data.hasGymAccess ?? true,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        await db.users.put(user);
        set({ user, isOnboarded: true });
      },

      changeProgram: async (programId, startPhase) => {
        const currentUser = get().user;
        if (!currentUser) return;

        const updatedUser = {
          ...currentUser,
          currentProgramId: programId,
          currentProgramPhase: startPhase ?? 0,
          programStartDate: new Date(),
          updatedAt: new Date()
        };

        await db.users.put(updatedUser);
        set({ user: updatedUser });
      }
    }),
    {
      name: 'achilles-user-storage',
      partialize: (state) => ({
        user: state.user,
        isOnboarded: state.isOnboarded,
        activeTab: state.activeTab
      })
    }
  )
);
