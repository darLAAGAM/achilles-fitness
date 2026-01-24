// ============================================
// USER TYPES
// ============================================
export interface User {
  id: string;
  name: string;
  bodyweight: number;
  height: number;
  age: number;
  experienceYears: number;
  trainingDaysPerWeek: 3 | 4 | 5;
  preferredUnit: 'kg' | 'lbs';
  currentPhase: 'bulk' | 'cut' | 'maintain';
  targetBodyweight?: number;
  dailyCalories: number;
  proteinTarget: number;
  carbTarget: number;
  fatTarget: number;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// EXERCISE TYPES
// ============================================
export type MuscleGroup =
  | 'chest'
  | 'back_width'
  | 'back_thickness'
  | 'shoulders_front'
  | 'shoulders_side'
  | 'shoulders_rear'
  | 'biceps'
  | 'triceps'
  | 'forearms'
  | 'quads'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'abs';

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'cable'
  | 'machine'
  | 'bodyweight'
  | 'kettlebell'
  | 'ez_bar';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  secondaryMuscles?: MuscleGroup[];
  category: 'compound' | 'isolation';
  equipment: Equipment[];
  youtubeUrl?: string;
  techniqueNotes?: string[];
  commonMistakes?: string[];
  strengthStandards?: {
    beginner: number;
    intermediate: number;
    advanced: number;
    elite: number;
  };
  defaultRestSeconds: number;
}

// ============================================
// WORKOUT TYPES
// ============================================
export type WorkoutDay = 'push' | 'pull' | 'legs';
export type Intensity = 'heavy' | 'medium' | 'light' | 'optional';

export interface WorkoutProgram {
  id: string;
  name: string;
  description: string;
  daysPerWeek: number;
  weeks: number;
  workouts: WorkoutTemplate[];
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  type: WorkoutDay;
  dayOfWeek?: number;
  exercises: ExerciseTemplate[];
}

export interface ExerciseTemplate {
  exerciseId: string;
  order: number;
  intensity: Intensity;
  targetSets: number;
  targetRepsMin: number;
  targetRepsMax: number;
  restSeconds: number;
  notes?: string;
}

export interface WorkoutSession {
  id: string;
  date: Date;
  workoutTemplateId: string;
  workoutType: WorkoutDay;
  status: 'in_progress' | 'completed' | 'skipped';
  startedAt: Date;
  completedAt?: Date;
  sets: WorkoutSet[];
  notes?: string;
  energyLevel?: 1 | 2 | 3 | 4 | 5;
  sleepQuality?: 1 | 2 | 3 | 4 | 5;
}

export interface WorkoutSet {
  id: string;
  sessionId: string;
  exerciseId: string;
  setNumber: number;
  weight: number;
  reps: number;
  volume: number;
  estimated1RM?: number;
  isWarmup: boolean;
  isPersonalRecord: boolean;
  completedAt: Date;
  notes?: string;
}

// ============================================
// PROGRESS TYPES
// ============================================
export interface ProgressEntry {
  id: string;
  date: Date;
  bodyweight?: number;
  bodyFatPercentage?: number;
  measurements?: BodyMeasurements;
  notes?: string;
}

export interface BodyMeasurements {
  chest?: number;
  waist?: number;
  hips?: number;
  bicepLeft?: number;
  bicepRight?: number;
  thighLeft?: number;
  thighRight?: number;
  calfLeft?: number;
  calfRight?: number;
  neck?: number;
  shoulders?: number;
}

export interface ProgressPhoto {
  id: string;
  progressEntryId: string;
  type: 'front' | 'side' | 'back' | 'custom';
  imageData: Blob;
  thumbnail: string;
  takenAt: Date;
}

export interface ExerciseProgress {
  exerciseId: string;
  maxWeight: number;
  maxReps: number;
  max1RM: number;
  history: {
    date: Date;
    bestSet: {
      weight: number;
      reps: number;
      volume: number;
    };
  }[];
  currentLevel: 'beginner' | 'intermediate' | 'advanced' | 'elite';
  percentOfElite: number;
}

// ============================================
// NUTRITION TYPES
// ============================================
export interface Meal {
  id: string;
  name: string;
  foods: FoodItem[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodItem {
  id: string;
  name: string;
  servingSize: number;
  servingUnit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
}

export type MealTime = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'pre_workout' | 'post_workout';

export interface DailyNutritionLog {
  id: string;
  date: Date;
  meals: {
    mealId: string;
    mealTime: MealTime;
    consumedAt: Date;
    portionMultiplier: number;
  }[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  caloriesVsTarget: number;
  proteinVsTarget: number;
}

export type FastingType = '16/8' | '18/6' | '12/12';

export interface FastingWindow {
  type: FastingType;
  eatingWindowStart: string;
  eatingWindowEnd: string;
}

// ============================================
// UI TYPES
// ============================================
export type Tab = 'workout' | 'progress' | 'nutrition' | 'settings';

export interface AppState {
  activeTab: Tab;
  currentWorkoutId: string | null;
  isWorkoutActive: boolean;
}
