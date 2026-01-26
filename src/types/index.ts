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
  trainingDaysPerWeek: 3 | 4 | 5 | 6;
  preferredUnit: 'kg' | 'lbs';
  currentPhase: 'bulk' | 'cut' | 'maintain';
  targetBodyweight?: number;
  dailyCalories: number;
  proteinTarget: number;
  carbTarget: number;
  fatTarget: number;
  // Program selection
  currentProgramId: string;
  currentProgramPhase?: number;
  programStartDate?: Date;
  // Equipment availability
  availableEquipment: Equipment[];
  hasGymAccess: boolean;
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
export type WorkoutDay = 'push' | 'pull' | 'legs' | 'upper' | 'lower' | 'full' | 'arms' | 'chest' | 'back' | 'shoulders' | 'rest';
export type Intensity = 'heavy' | 'medium' | 'light' | 'optional' | 'explosive';
export type TrainingStyle = 'standard' | 'circuit' | 'superset' | 'hiit' | 'pyramid';

export interface ProgramPhase {
  id: string;
  name: string;
  description: string;
  weeks: number;
  focus: 'strength' | 'hypertrophy' | 'explosivity' | 'conditioning' | 'fat_loss';
  trainingStyle: TrainingStyle;
  cardioType?: 'steady_state' | 'hiit' | 'none';
  cardioDuration?: number; // minutes
  cardioFrequency?: number; // days per week
  notes?: string[];
}

export interface WorkoutProgram {
  id: string;
  name: string;
  description: string;
  author: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  goal: 'muscle_gain' | 'fat_loss' | 'strength' | 'athletic' | 'general_fitness';
  daysPerWeek: number;
  weeks: number;
  equipmentRequired: Equipment[];
  minEquipmentRequired?: Equipment[]; // minimum equipment needed
  phases?: ProgramPhase[];
  workouts: WorkoutTemplate[];
  nutritionGuidelines?: NutritionGuidelines;
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  type: WorkoutDay;
  dayOfWeek?: number;
  phaseId?: string; // for programs with phases
  trainingStyle?: TrainingStyle;
  isCircuit?: boolean;
  circuitRounds?: number; // how many times to repeat the circuit
  restBetweenRounds?: number; // seconds rest between circuit rounds
  estimatedDuration?: number; // minutes
  optional?: boolean; // optional workout day (shown differently in UI)
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
  // Circuit training
  isCircuitExercise?: boolean;
  durationSeconds?: number; // for timed exercises (e.g., hold 60 seconds)
  // Supersets
  supersetWith?: string; // exerciseId to superset with
  // Alternative exercises (for equipment flexibility)
  alternativeExercises?: string[]; // array of exerciseIds
  // Tempo training
  tempo?: string; // e.g., "3-1-2-0" (eccentric-pause-concentric-pause)
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
    mealData?: Partial<Meal> & Pick<Meal, 'name' | 'calories' | 'protein' | 'carbs' | 'fat'>; // Cached meal data for display
  }[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  caloriesVsTarget: number;
  proteinVsTarget: number;
}

export type FastingType = '16/8' | '18/6' | '20/4' | '12/12' | 'warrior';

export interface FastingWindow {
  type: FastingType;
  eatingWindowStart: string;
  eatingWindowEnd: string;
}

export interface FastingSession {
  id: string;
  startedAt: Date;
  targetEndAt: Date;
  endedAt?: Date;
  fastingType: FastingType;
  status: 'active' | 'completed' | 'broken';
  notes?: string;
}

export interface NutritionGuidelines {
  recommendedFasting?: FastingType;
  proteinPerKg: number; // grams per kg bodyweight
  mealFrequency?: number; // meals per day
  preworkoutTiming?: number; // minutes before workout
  postworkoutTiming?: number; // minutes after workout
  hydrationLiters?: number; // daily water intake
  supplements?: string[];
  avoidFoods?: string[];
  recommendedFoods?: string[];
  notes?: string[];
}

// ============================================
// UI TYPES
// ============================================
export type Tab = 'workout' | 'progress' | 'nutrition' | 'insights' | 'settings';

export interface AppState {
  activeTab: Tab;
  currentWorkoutId: string | null;
  isWorkoutActive: boolean;
}
