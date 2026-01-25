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
  restTimerStartedAt: number | null;  // timestamp when timer started
  restTimerDuration: number;           // total duration in seconds
  restTimerPausedRemaining: number;    // remaining seconds when paused
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
  adjustRestTime: (delta: number) => void;
  getRestTimeRemaining: () => number;
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
  restTimerStartedAt: null,
  restTimerDuration: 90,
  restTimerPausedRemaining: 0,
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
    restTimerStartedAt: Date.now(),
    restTimerDuration: seconds,
    restTimerPausedRemaining: 0,
    restTimerDefault: seconds
  }),

  pauseRestTimer: () => {
    const remaining = get().getRestTimeRemaining();
    set({
      restTimerActive: false,
      restTimerStartedAt: null,
      restTimerPausedRemaining: remaining
    });
  },

  stopRestTimer: () => set({
    restTimerActive: false,
    restTimerStartedAt: null,
    restTimerDuration: 0,
    restTimerPausedRemaining: 0
  }),

  adjustRestTime: (delta) => {
    const { restTimerActive, restTimerStartedAt, restTimerDuration, restTimerPausedRemaining } = get();
    
    if (restTimerActive && restTimerStartedAt) {
      // Timer running: adjust duration
      const elapsed = Math.floor((Date.now() - restTimerStartedAt) / 1000);
      const currentRemaining = Math.max(0, restTimerDuration - elapsed);
      const newRemaining = Math.max(0, currentRemaining + delta);
      // Adjust by changing the start time
      set({
        restTimerDuration: elapsed + newRemaining,
        restTimerDefault: elapsed + newRemaining
      });
    } else {
      // Timer paused or stopped: adjust paused remaining
      const current = restTimerPausedRemaining || get().restTimerDefault;
      const newTime = Math.max(0, current + delta);
      set({
        restTimerPausedRemaining: newTime,
        restTimerDefault: newTime
      });
    }
  },

  getRestTimeRemaining: () => {
    const { restTimerActive, restTimerStartedAt, restTimerDuration, restTimerPausedRemaining, restTimerDefault } = get();
    
    if (restTimerActive && restTimerStartedAt) {
      const elapsed = Math.floor((Date.now() - restTimerStartedAt) / 1000);
      return Math.max(0, restTimerDuration - elapsed);
    }
    
    return restTimerPausedRemaining || restTimerDefault;
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
