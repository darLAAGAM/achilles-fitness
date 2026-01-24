import type { WorkoutProgram, WorkoutTemplate } from '../types';

// Achilles 3-Day Program - Adaptación del B3 Bulking
// Diseñado específicamente para el físico de Brad Pitt en Troya
// Índice de Adonis: 1.618 (ratio hombros/cintura)

export const achillesTemplates: WorkoutTemplate[] = [
  {
    id: 'achilles-push',
    name: 'Push Day - Guerrero',
    type: 'push',
    dayOfWeek: 1, // Lunes
    exercises: [
      {
        exerciseId: 'incline-db-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 150,
        notes: 'Enfócate en el pecho superior para los hombros anchos de Achilles'
      },
      {
        exerciseId: 'flat-barbell-press',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Construye la base del pecho'
      },
      {
        exerciseId: 'cable-flyes',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 20,
        restSeconds: 90,
        notes: 'Pump y definición, siente el estiramiento'
      },
      {
        exerciseId: 'lateral-raises',
        order: 4,
        intensity: 'optional',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Clave para el índice de Adonis - hombros anchos'
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 5,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Definición del brazo'
      },
      {
        exerciseId: 'overhead-tricep-extension',
        order: 6,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Cabeza larga del tríceps para brazos completos'
      }
    ]
  },
  {
    id: 'achilles-pull',
    name: 'Pull Day - Espartano',
    type: 'pull',
    dayOfWeek: 3, // Miércoles
    exercises: [
      {
        exerciseId: 'weighted-pullups',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 150,
        notes: 'El ejercicio rey para la V-taper. Achilles standard: BW+50%'
      },
      {
        exerciseId: 'cable-rows',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Grosor de espalda para la postura de guerrero'
      },
      {
        exerciseId: 'face-pulls',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Salud del hombro + deltoides posterior'
      },
      {
        exerciseId: 'barbell-curls',
        order: 4,
        intensity: 'optional',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pico del bíceps'
      },
      {
        exerciseId: 'hammer-curls',
        order: 5,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Braquial para brazos más gruesos'
      },
      {
        exerciseId: 'rear-delt-flyes',
        order: 6,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Balance del hombro, esencial para la estética'
      }
    ]
  },
  {
    id: 'achilles-legs',
    name: 'Legs Day - Hoplita',
    type: 'legs',
    dayOfWeek: 5, // Viernes
    exercises: [
      {
        exerciseId: 'barbell-squats',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 180,
        notes: 'Fundamento de todo atleta. Profundidad completa.'
      },
      {
        exerciseId: 'romanian-deadlifts',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 150,
        notes: 'Isquios y glúteos para piernas proporcionadas'
      },
      {
        exerciseId: 'leg-press',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 20,
        restSeconds: 120,
        notes: 'Volumen adicional para los cuádriceps'
      },
      {
        exerciseId: 'leg-curls',
        order: 4,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Aislamiento de isquiotibiales'
      },
      {
        exerciseId: 'calf-raises',
        order: 5,
        intensity: 'optional',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Los griegos no se saltaban las pantorrillas'
      },
      {
        exerciseId: 'ab-wheel',
        order: 6,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Core de guerrero - los abdominales de Troya'
      }
    ]
  }
];

export const achillesProgram: WorkoutProgram = {
  id: 'achilles-3day',
  name: 'Achilles 3-Day',
  description: `Programa diseñado para lograr el físico de Brad Pitt en Troya.

Basado en el Índice de Adonis (ratio 1.618 hombros/cintura) y los principios del programa B3:
- Ejercicio Heavy: 5x5-8 (fibras grandes, fuerza)
- Ejercicio Medium: 4x6-12 (fibras medianas, hipertrofia)
- Ejercicio Light: 3x10-20 (fibras pequeñas, pump)
- Ejercicios Optional: según energía y tiempo

Enfoque: Torso superior desarrollado (pecho, hombros, espalda), cintura estrecha, abdominales visibles.`,
  daysPerWeek: 3,
  weeks: 12,
  workouts: achillesTemplates
};

// Strength Standards del Programa Achilles Elysium
export const achillesStrengthStandards = {
  'weighted-pullups': {
    description: 'Dominadas con peso adicional',
    metric: 'BW + X%',
    levels: {
      beginner: 'Solo peso corporal x 6',
      intermediate: 'BW + 25% x 6',
      advanced: 'BW + 50% x 6',
      elite: 'BW + 75% x 6'
    }
  },
  'incline-db-press': {
    description: 'Press inclinado con mancuernas',
    metric: 'X% del peso corporal (cada mano)',
    levels: {
      beginner: '30% BW x 10',
      intermediate: '50% BW x 10',
      advanced: '75% BW x 10',
      elite: '100% BW x 10'
    }
  },
  'barbell-squats': {
    description: 'Sentadilla con barra',
    metric: 'X% del peso corporal',
    levels: {
      beginner: '100% BW x 5',
      intermediate: '125% BW x 5',
      advanced: '150% BW x 5',
      elite: '175% BW x 5'
    }
  }
};

// Cálculo del Índice de Adonis
export function calculateAdonisIndex(shoulderCircumference: number, waistCircumference: number): number {
  return shoulderCircumference / waistCircumference;
}

export function getAdonisRating(index: number): string {
  const goldenRatio = 1.618;
  const deviation = Math.abs(index - goldenRatio);

  if (deviation < 0.05) return 'Perfecto - Proporción de Adonis';
  if (deviation < 0.1) return 'Excelente - Muy cerca del ideal';
  if (deviation < 0.2) return 'Bueno - En camino';
  if (index < goldenRatio) return 'Necesita más desarrollo de hombros';
  return 'Cintura por encima del ideal';
}
