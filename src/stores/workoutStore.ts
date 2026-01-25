import { create } from 'zustand';
import { db } from '../services/db/database';
import type { WorkoutSession, WorkoutSet, Exercise, WorkoutTemplate } from '../types';
import { v4 as uuid } from 'uuid';

interface WorkoutState {
  currentSession: WorkoutSession | null;
  exercises: Exercise[];
  templates: WorkoutTemplate[];
  recentSessions: WorkoutSession[];
  currentExerciseIndex: number;
  restTimerActive: boolean;
  restTimeRemaining: number;
  restTimerDefault: number;

  // Actions
  loadExercises: () => Promise<void>;
  loadTemplates: () => Promise<void>;
  loadRecentSessions: () => Promise<void>;
  startSession: (template: WorkoutTemplate) => Promise<WorkoutSession>;
  completeSession: () => Promise<void>;
  addSet: (exerciseId: string, weight: number, reps: number, isWarmup?: boolean) => Promise<WorkoutSet>;
  deleteSet: (setId: string) => Promise<void>;
  setCurrentExercise: (index: number) => void;
  startRestTimer: (seconds: number) => void;
  pauseRestTimer: () => void;
  stopRestTimer: () => void;
  setRestTime: (seconds: number) => void;
  tickRestTimer: () => void;
  getExerciseById: (id: string) => Exercise | undefined;
  getPersonalRecord: (exerciseId: string) => Promise<{ weight: number; reps: number } | null>;
}

export const useWorkoutStore = create<WorkoutState>((set, get) => ({
  currentSession: null,
  exercises: [],
  templates: [],
  recentSessions: [],
  currentExerciseIndex: 0,
  restTimerActive: false,
  restTimeRemaining: 0,
  restTimerDefault: 90,

  loadExercises: async () => {
    const exercises = await db.exercises.toArray();
    set({ exercises });
  },

  loadTemplates: async () => {
    const templates = await db.workoutTemplates.toArray();
    set({ templates });
  },

  loadRecentSessions: async () => {
    const sessions = await db.workoutSessions
      .orderBy('date')
      .reverse()
      .limit(20)
      .toArray();
    set({ recentSessions: sessions });
  },

  startSession: async (template) => {
    const session: WorkoutSession = {
      id: uuid(),
      date: new Date(),
      workoutTemplateId: template.id,
      workoutType: template.type,
      status: 'in_progress',
      startedAt: new Date(),
      sets: [],
      energyLevel: undefined,
      sleepQuality: undefined
    };

    await db.workoutSessions.add(session);
    set({ currentSession: session, currentExerciseIndex: 0 });
    return session;
  },

  completeSession: async () => {
    const { currentSession } = get();
    if (!currentSession) return;

    const completedSession: WorkoutSession = {
      ...currentSession,
      status: 'completed',
      completedAt: new Date()
    };

    await db.workoutSessions.put(completedSession);
    set({ currentSession: null, currentExerciseIndex: 0 });
    get().loadRecentSessions();
  },

  addSet: async (exerciseId, weight, reps, isWarmup = false) => {
    const { currentSession } = get();
    if (!currentSession) throw new Error('No active session');

    const existingSets = currentSession.sets.filter(s => s.exerciseId === exerciseId);
    const setNumber = existingSets.length + 1;

    const volume = weight * reps;
    const estimated1RM = weight * (1 + reps / 30); // Epley formula

    // Check for PR
    const pr = await get().getPersonalRecord(exerciseId);
    const isPersonalRecord = pr ? (weight > pr.weight || (weight === pr.weight && reps > pr.reps)) : true;

    const workoutSet: WorkoutSet = {
      id: uuid(),
      sessionId: currentSession.id,
      exerciseId,
      setNumber,
      weight,
      reps,
      volume,
      estimated1RM,
      isWarmup,
      isPersonalRecord: !isWarmup && isPersonalRecord,
      completedAt: new Date()
    };

    await db.workoutSets.add(workoutSet);

    const updatedSession: WorkoutSession = {
      ...currentSession,
      sets: [...currentSession.sets, workoutSet]
    };

    await db.workoutSessions.put(updatedSession);
    set({ currentSession: updatedSession });

    return workoutSet;
  },

  deleteSet: async (setId) => {
    const { currentSession } = get();
    if (!currentSession) return;

    await db.workoutSets.delete(setId);

    const updatedSession: WorkoutSession = {
      ...currentSession,
      sets: currentSession.sets.filter(s => s.id !== setId)
    };

    await db.workoutSessions.put(updatedSession);
    set({ currentSession: updatedSession });
  },

  setCurrentExercise: (index) => set({ currentExerciseIndex: index }),

  startRestTimer: (seconds) => set({
    restTimerActive: true,
    restTimeRemaining: seconds,
    restTimerDefault: seconds
  }),

  pauseRestTimer: () => set({
    restTimerActive: false
  }),

  stopRestTimer: () => set({
    restTimerActive: false,
    restTimeRemaining: 0
  }),

  setRestTime: (seconds) => set({
    restTimeRemaining: seconds
  }),

  tickRestTimer: () => {
    const { restTimeRemaining } = get();
    if (restTimeRemaining > 0) {
      set({ restTimeRemaining: restTimeRemaining - 1 });
    } else {
      set({ restTimerActive: false });
    }
  },

  getExerciseById: (id) => {
    return get().exercises.find(e => e.id === id);
  },

  getPersonalRecord: async (exerciseId) => {
    const sets = await db.workoutSets
      .where('exerciseId')
      .equals(exerciseId)
      .filter(s => !s.isWarmup)
      .toArray();

    if (sets.length === 0) return null;

    let maxWeight = 0;
    let maxReps = 0;

    sets.forEach(s => {
      if (s.weight > maxWeight || (s.weight === maxWeight && s.reps > maxReps)) {
        maxWeight = s.weight;
        maxReps = s.reps;
      }
    });

    return { weight: maxWeight, reps: maxReps };
  }
}));
