/**
 * Calculate estimated 1 Rep Max using Epley formula
 */
export function calculate1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

/**
 * Calculate total volume (weight x reps)
 */
export function calculateVolume(weight: number, reps: number): number {
  return weight * reps;
}

/**
 * Calculate macros based on bodyweight and phase
 */
export function calculateMacros(
  bodyweightKg: number,
  phase: 'bulk' | 'cut' | 'maintain'
): {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
} {
  const bwLbs = bodyweightKg * 2.205;

  let calories: number;
  let protein: number;

  switch (phase) {
    case 'bulk':
      calories = Math.round(bodyweightKg * 33);
      protein = Math.round(bwLbs * 1.0);
      break;
    case 'cut':
      calories = Math.round(bodyweightKg * 26);
      protein = Math.round(bwLbs * 1.2);
      break;
    case 'maintain':
    default:
      calories = Math.round(bodyweightKg * 30);
      protein = Math.round(bwLbs * 1.0);
  }

  const fat = Math.round(calories * 0.25 / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);

  return { calories, protein, carbs, fat };
}

/**
 * Format seconds to MM:SS
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Calculate strength level based on lift and bodyweight
 */
export function calculateStrengthLevel(
  liftWeight: number,
  bodyweight: number,
  standards: { beginner: number; intermediate: number; advanced: number; elite: number }
): 'beginner' | 'intermediate' | 'advanced' | 'elite' {
  const ratio = liftWeight / bodyweight;

  if (ratio >= standards.elite) return 'elite';
  if (ratio >= standards.advanced) return 'advanced';
  if (ratio >= standards.intermediate) return 'intermediate';
  return 'beginner';
}

/**
 * Calculate percentage towards elite level
 */
export function calculatePercentOfElite(
  liftWeight: number,
  bodyweight: number,
  eliteRatio: number
): number {
  const eliteWeight = bodyweight * eliteRatio;
  return Math.min(100, Math.round((liftWeight / eliteWeight) * 100));
}
