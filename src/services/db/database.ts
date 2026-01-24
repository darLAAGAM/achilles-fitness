import Dexie, { type EntityTable } from 'dexie';
import type {
  User,
  Exercise,
  WorkoutProgram,
  WorkoutTemplate,
  WorkoutSession,
  WorkoutSet,
  ProgressEntry,
  ProgressPhoto,
  Meal,
  FoodItem,
  DailyNutritionLog
} from '../../types';

// Define the database
class AchillesDatabase extends Dexie {
  users!: EntityTable<User, 'id'>;
  exercises!: EntityTable<Exercise, 'id'>;
  workoutPrograms!: EntityTable<WorkoutProgram, 'id'>;
  workoutTemplates!: EntityTable<WorkoutTemplate, 'id'>;
  workoutSessions!: EntityTable<WorkoutSession, 'id'>;
  workoutSets!: EntityTable<WorkoutSet, 'id'>;
  progressEntries!: EntityTable<ProgressEntry, 'id'>;
  progressPhotos!: EntityTable<ProgressPhoto, 'id'>;
  meals!: EntityTable<Meal, 'id'>;
  foodItems!: EntityTable<FoodItem, 'id'>;
  dailyNutritionLogs!: EntityTable<DailyNutritionLog, 'id'>;

  constructor() {
    super('AchillesDB');

    this.version(1).stores({
      users: 'id, name',
      exercises: 'id, name, muscleGroup, category',
      workoutPrograms: 'id, name',
      workoutTemplates: 'id, name, type',
      workoutSessions: 'id, date, workoutTemplateId, status',
      workoutSets: 'id, sessionId, exerciseId, completedAt',
      progressEntries: 'id, date',
      progressPhotos: 'id, progressEntryId, type, takenAt',
      meals: 'id, name',
      foodItems: 'id, name',
      dailyNutritionLogs: 'id, date'
    });
  }
}

export const db = new AchillesDatabase();

// Helper functions
export async function clearDatabase() {
  await db.delete();
  await db.open();
}

export async function exportData() {
  const data = {
    users: await db.users.toArray(),
    exercises: await db.exercises.toArray(),
    workoutPrograms: await db.workoutPrograms.toArray(),
    workoutTemplates: await db.workoutTemplates.toArray(),
    workoutSessions: await db.workoutSessions.toArray(),
    workoutSets: await db.workoutSets.toArray(),
    progressEntries: await db.progressEntries.toArray(),
    meals: await db.meals.toArray(),
    foodItems: await db.foodItems.toArray(),
    dailyNutritionLogs: await db.dailyNutritionLogs.toArray(),
    exportedAt: new Date().toISOString()
  };
  return JSON.stringify(data, null, 2);
}
