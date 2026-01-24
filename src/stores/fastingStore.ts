import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FastingSession, FastingType } from '../types';
import { v4 as uuid } from 'uuid';

// Fasting durations in hours
const FASTING_HOURS: Record<FastingType, number> = {
  '12/12': 12,
  '16/8': 16,
  '18/6': 18,
  '20/4': 20,
  'warrior': 20, // Warrior diet is typically 20 hours
};

interface FastingState {
  currentSession: FastingSession | null;
  history: FastingSession[];
  preferredFastingType: FastingType;

  // Actions
  startFast: (type?: FastingType) => void;
  endFast: (completed?: boolean) => void;
  setPreferredFastingType: (type: FastingType) => void;
  getElapsedTime: () => number; // returns milliseconds
  getRemainingTime: () => number; // returns milliseconds
  getProgress: () => number; // returns 0-100
  isInEatingWindow: () => boolean;
  getTodaysFast: () => FastingSession | undefined;
  getWeekStats: () => { completed: number; broken: number; avgDuration: number };
}

export const useFastingStore = create<FastingState>()(
  persist(
    (set, get) => ({
      currentSession: null,
      history: [],
      preferredFastingType: '16/8',

      startFast: (type) => {
        const fastingType = type || get().preferredFastingType;
        const now = new Date();
        const targetHours = FASTING_HOURS[fastingType];
        const targetEnd = new Date(now.getTime() + targetHours * 60 * 60 * 1000);

        const session: FastingSession = {
          id: uuid(),
          startedAt: now,
          targetEndAt: targetEnd,
          fastingType,
          status: 'active',
        };

        set({ currentSession: session });
      },

      endFast: (completed = true) => {
        const { currentSession, history } = get();
        if (!currentSession) return;

        const endedSession: FastingSession = {
          ...currentSession,
          endedAt: new Date(),
          status: completed ? 'completed' : 'broken',
        };

        set({
          currentSession: null,
          history: [...history, endedSession],
        });
      },

      setPreferredFastingType: (type) => set({ preferredFastingType: type }),

      getElapsedTime: () => {
        const { currentSession } = get();
        if (!currentSession) return 0;
        return Date.now() - new Date(currentSession.startedAt).getTime();
      },

      getRemainingTime: () => {
        const { currentSession } = get();
        if (!currentSession) return 0;
        const remaining = new Date(currentSession.targetEndAt).getTime() - Date.now();
        return Math.max(0, remaining);
      },

      getProgress: () => {
        const { currentSession } = get();
        if (!currentSession) return 0;

        const start = new Date(currentSession.startedAt).getTime();
        const end = new Date(currentSession.targetEndAt).getTime();
        const now = Date.now();

        const total = end - start;
        const elapsed = now - start;

        return Math.min(100, Math.max(0, (elapsed / total) * 100));
      },

      isInEatingWindow: () => {
        const { currentSession } = get();
        // No active fast means eating window
        if (!currentSession) return true;

        // If past target end time, in eating window
        const remaining = get().getRemainingTime();
        return remaining === 0;
      },

      getTodaysFast: () => {
        const { history, currentSession } = get();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check current session first
        if (currentSession) {
          const sessionDate = new Date(currentSession.startedAt);
          sessionDate.setHours(0, 0, 0, 0);
          if (sessionDate.getTime() === today.getTime()) {
            return currentSession;
          }
        }

        // Check history
        return history.find(session => {
          const sessionDate = new Date(session.startedAt);
          sessionDate.setHours(0, 0, 0, 0);
          return sessionDate.getTime() === today.getTime();
        });
      },

      getWeekStats: () => {
        const { history } = get();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const weekSessions = history.filter(
          session => new Date(session.startedAt) >= oneWeekAgo
        );

        const completed = weekSessions.filter(s => s.status === 'completed').length;
        const broken = weekSessions.filter(s => s.status === 'broken').length;

        const completedSessions = weekSessions.filter(s => s.status === 'completed' && s.endedAt);
        const avgDuration = completedSessions.length > 0
          ? completedSessions.reduce((sum, s) => {
              const duration = new Date(s.endedAt!).getTime() - new Date(s.startedAt).getTime();
              return sum + duration;
            }, 0) / completedSessions.length
          : 0;

        return { completed, broken, avgDuration };
      },
    }),
    {
      name: 'achilles-fasting-storage',
      partialize: (state) => ({
        currentSession: state.currentSession,
        history: state.history.slice(-30), // Keep last 30 sessions
        preferredFastingType: state.preferredFastingType,
      }),
    }
  )
);
