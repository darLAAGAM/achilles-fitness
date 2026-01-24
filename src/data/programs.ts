import type { WorkoutProgram, WorkoutTemplate, ProgramPhase, NutritionGuidelines, Equipment } from '../types';

// ============================================
// ACHILLES PROGRAM (3 Days/Week)
// Based on B3 Bulking - Brad Pitt Troy Physique
// ============================================

export const achillesNutrition: NutritionGuidelines = {
  proteinPerKg: 2.0,
  mealFrequency: 4,
  preworkoutTiming: 60,
  postworkoutTiming: 30,
  hydrationLiters: 3,
  supplements: ['Creatina 5g/día', 'Proteína whey post-entreno', 'Vitamina D3'],
  recommendedFoods: [
    'Pechuga de pollo', 'Carne magra', 'Pescado blanco',
    'Arroz', 'Patatas', 'Avena',
    'Verduras verdes', 'Frutas', 'Huevos'
  ],
  notes: [
    'Enfoque en proteína de alta calidad',
    'Carbohidratos alrededor del entreno',
    'Grasas saludables para hormonas'
  ]
};

export const achillesTemplates: WorkoutTemplate[] = [
  {
    id: 'achilles-push',
    name: 'Push Day - Guerrero',
    type: 'push',
    dayOfWeek: 1,
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'incline-db-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 150,
        notes: 'Enfócate en el pecho superior para los hombros anchos de Achilles',
        alternativeExercises: ['incline-barbell-press', 'decline-pushups']
      },
      {
        exerciseId: 'flat-barbell-press',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Construye la base del pecho',
        alternativeExercises: ['db-flat-press', 'pushups']
      },
      {
        exerciseId: 'cable-flyes',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 20,
        restSeconds: 90,
        notes: 'Pump y definición, siente el estiramiento',
        alternativeExercises: ['incline-db-fly', 'deficit-pushups']
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
        notes: 'Definición del brazo',
        alternativeExercises: ['close-grip-pushups', 'bodyweight-skullcrusher']
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
    dayOfWeek: 3,
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'weighted-pullups',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 150,
        notes: 'El ejercicio rey para la V-taper. Achilles standard: BW+50%',
        alternativeExercises: ['chinups', 'lat-pulldown']
      },
      {
        exerciseId: 'cable-rows',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Grosor de espalda para la postura de guerrero',
        alternativeExercises: ['barbell-bent-over-row', 'inverted-row']
      },
      {
        exerciseId: 'face-pulls',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Salud del hombro + deltoides posterior',
        alternativeExercises: ['rear-delt-flyes']
      },
      {
        exerciseId: 'barbell-curls',
        order: 4,
        intensity: 'optional',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pico del bíceps',
        alternativeExercises: ['hammer-curls', 'bodyweight-bicep-curl']
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
    dayOfWeek: 5,
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'barbell-squats',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 180,
        notes: 'Fundamento de todo atleta. Profundidad completa.',
        alternativeExercises: ['goblet-squat', 'bulgarian-split-squat']
      },
      {
        exerciseId: 'romanian-deadlifts',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 150,
        notes: 'Isquios y glúteos para piernas proporcionadas',
        alternativeExercises: ['db-stiff-leg-deadlift']
      },
      {
        exerciseId: 'leg-press',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 20,
        restSeconds: 120,
        notes: 'Volumen adicional para los cuádriceps',
        alternativeExercises: ['walking-lunges', 'jump-squat']
      },
      {
        exerciseId: 'leg-curls',
        order: 4,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Aislamiento de isquiotibiales',
        alternativeExercises: ['romanian-deadlifts']
      },
      {
        exerciseId: 'calf-raises',
        order: 5,
        intensity: 'optional',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Los griegos no se saltaban las pantorrillas',
        alternativeExercises: ['single-leg-calf-raise']
      },
      {
        exerciseId: 'ab-wheel',
        order: 6,
        intensity: 'optional',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Core de guerrero - los abdominales de Troya',
        alternativeExercises: ['plank', 'hanging-leg-raise']
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
  author: 'Alexander Cortes',
  difficulty: 'intermediate',
  goal: 'muscle_gain',
  daysPerWeek: 3,
  weeks: 12,
  equipmentRequired: ['barbell', 'dumbbell', 'cable', 'machine'],
  minEquipmentRequired: ['dumbbell', 'bodyweight'],
  workouts: achillesTemplates,
  nutritionGuidelines: achillesNutrition
};

// ============================================
// WOLVERINE PROGRAM (5 Days/Week, 3 Phases)
// Hugh Jackman's Training Protocol
// ============================================

const wolverinePhases: ProgramPhase[] = [
  {
    id: 'wolverine-phase1',
    name: 'Fase 1: Fuerza y Fundamentos',
    description: 'Construye la base de fuerza con movimientos compuestos pesados',
    weeks: 8,
    focus: 'strength',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 30,
    cardioFrequency: 5,
    notes: [
      'Añade peso cada 2 semanas, mantén las reps dadas',
      'Sin superseries',
      'Una rep antes del fallo',
      'Descansos más largos (2-3 minutos)'
    ]
  },
  {
    id: 'wolverine-phase2',
    name: 'Fase 2: Hipertrofia',
    description: 'Volumen alto con superseries para máximo crecimiento muscular',
    weeks: 9,
    focus: 'hypertrophy',
    trainingStyle: 'superset',
    cardioType: 'hiit',
    cardioDuration: 10,
    cardioFrequency: 5,
    notes: [
      'Pirámide inversa (12-10-8-6 reps)',
      'Superseries obligatorias',
      'Fase de BULKING - come en exceso calórico',
      'HIIT: 10 seg sprint / 50 seg descanso'
    ]
  },
  {
    id: 'wolverine-phase3',
    name: 'Fase 3: Explosividad',
    description: 'Movimientos atléticos y potencia para definición',
    weeks: 4,
    focus: 'explosivity',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 20,
    cardioFrequency: 5,
    notes: [
      'Concéntricos explosivos con momentum controlado',
      'Series rectas (sin superseries)',
      'Ideal para fase de CUTTING',
      'Mantén intensidad alta'
    ]
  }
];

// Phase 1 Workouts
const wolverinePhase1Workouts: WorkoutTemplate[] = [
  {
    id: 'wolverine-p1-legs',
    name: 'Día 1 - Piernas (Fase 1)',
    type: 'legs',
    dayOfWeek: 1,
    phaseId: 'wolverine-phase1',
    estimatedDuration: 90,
    exercises: [
      {
        exerciseId: 'barbell-squats',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 5,
        restSeconds: 180,
        notes: 'Añade peso cada 2 semanas'
      },
      {
        exerciseId: 'leg-curls',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'walking-lunges',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Con mancuernas'
      },
      {
        exerciseId: 'leg-press',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'calf-raises',
        order: 5,
        intensity: 'light',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'wolverine-p1-press',
    name: 'Día 2 - Press (Fase 1)',
    type: 'push',
    dayOfWeek: 2,
    phaseId: 'wolverine-phase1',
    estimatedDuration: 90,
    exercises: [
      {
        exerciseId: 'incline-barbell-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 5,
        restSeconds: 180,
        notes: 'Añade peso cada 2 semanas'
      },
      {
        exerciseId: 'db-flat-press',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'pushups',
        order: 3,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60
      },
      {
        exerciseId: 'lateral-raises',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 5,
        intensity: 'light',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'wolverine-p1-pull',
    name: 'Día 3 - Cadena Posterior (Fase 1)',
    type: 'pull',
    dayOfWeek: 3,
    phaseId: 'wolverine-phase1',
    estimatedDuration: 90,
    exercises: [
      {
        exerciseId: 'deadlift',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 5,
        targetRepsMax: 5,
        restSeconds: 180,
        notes: 'Añade peso cada 2 semanas'
      },
      {
        exerciseId: 'chinups',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 10,
        restSeconds: 90
      },
      {
        exerciseId: 'barbell-bent-over-row',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'hammer-curls',
        order: 4,
        intensity: 'light',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'wolverine-p1-shoulders',
    name: 'Día 4 - Hombros y Brazos (Fase 1)',
    type: 'shoulders',
    dayOfWeek: 4,
    phaseId: 'wolverine-phase1',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'db-shoulder-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 8,
        restSeconds: 120
      },
      {
        exerciseId: 'face-pulls',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'dips',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      }
    ]
  }
];

// Phase 2 Workouts (Hypertrophy - Superseries)
const wolverinePhase2Workouts: WorkoutTemplate[] = [
  {
    id: 'wolverine-p2-chest',
    name: 'Día 1 - Pecho (Fase 2)',
    type: 'chest',
    dayOfWeek: 1,
    phaseId: 'wolverine-phase2',
    trainingStyle: 'superset',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'flat-barbell-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pirámide inversa: 12-10-8-6'
      },
      {
        exerciseId: 'incline-db-fly',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60,
        supersetWith: 'incline-db-press'
      },
      {
        exerciseId: 'incline-db-press',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'standing-cable-fly',
        order: 4,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'dips',
        order: 5,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'front-raises',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'wolverine-p2-back',
    name: 'Día 2 - Espalda (Fase 2)',
    type: 'back',
    dayOfWeek: 2,
    phaseId: 'wolverine-phase2',
    trainingStyle: 'superset',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'snatch-grip-deadlift',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Pirámide inversa: 12-10-8-6'
      },
      {
        exerciseId: 'chinups',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'one-arm-cable-row',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60,
        supersetWith: 'cable-rows'
      },
      {
        exerciseId: 'cable-rows',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'inverted-row',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'db-row',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'wolverine-p2-legs',
    name: 'Día 3 - Piernas (Fase 2)',
    type: 'legs',
    dayOfWeek: 3,
    phaseId: 'wolverine-phase2',
    trainingStyle: 'superset',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'leg-curls',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pirámide inversa: 12-10-8-6'
      },
      {
        exerciseId: 'db-stiff-leg-deadlift',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60,
        supersetWith: 'leg-extension'
      },
      {
        exerciseId: 'leg-extension',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'goblet-squat',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 90
      },
      {
        exerciseId: 'bulgarian-split-squat',
        order: 5,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'leg-press',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 90
      }
    ]
  },
  {
    id: 'wolverine-p2-shoulders',
    name: 'Día 4 - Hombros (Fase 2)',
    type: 'shoulders',
    dayOfWeek: 4,
    phaseId: 'wolverine-phase2',
    trainingStyle: 'superset',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'db-upright-row',
        order: 1,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'db-shoulder-press',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pirámide inversa: 12-10-8-6'
      },
      {
        exerciseId: 'face-pulls',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        supersetWith: 'chest-supported-facepull'
      },
      {
        exerciseId: 'chest-supported-facepull',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'cable-rows',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Para el deltoides posterior'
      }
    ]
  },
  {
    id: 'wolverine-p2-arms',
    name: 'Día 5 - Brazos (Fase 2)',
    type: 'arms',
    dayOfWeek: 5,
    phaseId: 'wolverine-phase2',
    trainingStyle: 'superset',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'barbell-curls',
        order: 1,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 60,
        supersetWith: 'skull-crushers'
      },
      {
        exerciseId: 'skull-crushers',
        order: 2,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'hammer-curls',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60,
        supersetWith: 'tricep-pushdowns'
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      },
      {
        exerciseId: 'incline-db-curl',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        supersetWith: 'overhead-tricep-extension'
      },
      {
        exerciseId: 'overhead-tricep-extension',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  }
];

const wolverineNutrition: NutritionGuidelines = {
  recommendedFasting: '16/8',
  proteinPerKg: 2.9, // 1.3g per lb = ~2.9g per kg
  mealFrequency: 6,
  preworkoutTiming: 90,
  postworkoutTiming: 30,
  hydrationLiters: 4,
  supplements: ['Proteína whey', 'Creatina', 'BCAA', 'Multivitamínico'],
  recommendedFoods: [
    'Pechuga de pollo', 'Pavo molido', 'Carne magra',
    'Arroz integral', 'Brócoli', 'Espinacas',
    'Avena', 'Bayas', 'Huevos'
  ],
  avoidFoods: ['Alimentos procesados', 'Azúcar refinada', 'Carbohidratos después de las 3pm (cutting)'],
  notes: [
    'Bulking: +1000 calorías de exceso',
    'Cutting: déficit calórico con ciclado de carbohidratos',
    'Ayuno 16:8 para mantener grasa corporal baja',
    '6 comidas pequeñas mejor que 3 grandes'
  ]
};

export const wolverineProgram: WorkoutProgram = {
  id: 'wolverine',
  name: 'The Wolverine Program',
  description: `Protocolo de entrenamiento de Hugh Jackman durante 17+ años.

Programa de 21 semanas dividido en 3 fases:
- Fase 1 (8 semanas): Fuerza y Fundamentos - 5x5 + cardio steady state
- Fase 2 (9 semanas): Hipertrofia - Pirámide inversa + HIIT
- Fase 3 (4 semanas): Explosividad - Movimientos atléticos

Filosofía: El esfuerzo y la disciplina superan la genética. Juega a largo plazo.`,
  author: 'Alexander Cortes (basado en Hugh Jackman)',
  difficulty: 'advanced',
  goal: 'muscle_gain',
  daysPerWeek: 5,
  weeks: 21,
  equipmentRequired: ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight'],
  phases: wolverinePhases,
  workouts: [...wolverinePhase1Workouts, ...wolverinePhase2Workouts],
  nutritionGuidelines: wolverineNutrition
};

// ============================================
// BODYWEIGHT HOPLITE (4 Days/Week, No Equipment)
// Based on Ancient Greek Calisthenics
// ============================================

const hopliteNutrition: NutritionGuidelines = {
  recommendedFasting: 'warrior', // 18-20 hours fasting
  proteinPerKg: 2.2,
  mealFrequency: 2,
  preworkoutTiming: 0, // Train fasted
  postworkoutTiming: 60,
  hydrationLiters: 3,
  supplements: ['Electrolitos', 'Proteína whey isolate'],
  recommendedFoods: [
    'Carne de cualquier tipo', 'Pescado', 'Huevos',
    'Verduras de hoja verde', 'Aceite de coco', 'Aceite de oliva',
    'Mantequilla', 'Ghee'
  ],
  notes: [
    'Ayuno de 18 horas diarias (Warrior Diet)',
    'Ventana de alimentación de 4-6 horas',
    'Prioriza proteína animal',
    'Café negro permitido durante ayuno',
    'Resultados: 2-4 kg pérdida primera semana'
  ]
};

const hopliteWorkout1: WorkoutTemplate = {
  id: 'hoplite-workout1',
  name: 'Hoplita - Circuito A',
  type: 'full',
  dayOfWeek: 1,
  isCircuit: true,
  circuitRounds: 3,
  restBetweenRounds: 120,
  trainingStyle: 'circuit',
  estimatedDuration: 45,
  exercises: [
    {
      exerciseId: 'pushups',
      order: 1,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Agarre estándar, pies juntos'
    },
    {
      exerciseId: 'chinups',
      order: 2,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 5,
      targetRepsMax: 15,
      restSeconds: 0,
      isCircuitExercise: true,
      alternativeExercises: ['inverted-row']
    },
    {
      exerciseId: 'judo-pushup',
      order: 3,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 5,
      targetRepsMax: 10,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'bodyweight-skullcrusher',
      order: 4,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'inverted-row',
      order: 5,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Usa sábana, TRX o barra baja'
    },
    {
      exerciseId: 'bodyweight-bicep-curl',
      order: 6,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Con TRX o sistema de suspensión'
    },
    {
      exerciseId: 'jump-squat',
      order: 7,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Movimiento continuo y rítmico'
    },
    {
      exerciseId: 'reverse-lunges',
      order: 8,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Enfócate en equilibrio y forma'
    },
    {
      exerciseId: 'single-leg-calf-raise',
      order: 9,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'flutter-kicks',
      order: 10,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 20,
      targetRepsMax: 40,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Mantén espalda baja pegada al suelo'
    },
    {
      exerciseId: 'bicycle-crunch',
      order: 11,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 20,
      targetRepsMax: 40,
      restSeconds: 0,
      isCircuitExercise: true
    }
  ]
};

const hopliteWorkout2: WorkoutTemplate = {
  id: 'hoplite-workout2',
  name: 'Hoplita - Circuito B',
  type: 'full',
  dayOfWeek: 3,
  isCircuit: true,
  circuitRounds: 3,
  restBetweenRounds: 120,
  trainingStyle: 'circuit',
  estimatedDuration: 45,
  exercises: [
    {
      exerciseId: 'decline-pushups',
      order: 1,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Pies elevados sobre superficie'
    },
    {
      exerciseId: 'inverted-row',
      order: 2,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'close-grip-pushups',
      order: 3,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Codos pegados al cuerpo'
    },
    {
      exerciseId: 'deficit-pushups',
      order: 4,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Mayor rango de movimiento'
    },
    {
      exerciseId: 'face-pulls',
      order: 5,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Con bandas o TRX',
      alternativeExercises: ['rear-delt-flyes']
    },
    {
      exerciseId: 'broad-jump',
      order: 6,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 8,
      targetRepsMax: 15,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Aterrizajes suaves'
    },
    {
      exerciseId: 'bulgarian-split-squat',
      order: 7,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 8,
      targetRepsMax: 15,
      restSeconds: 0,
      isCircuitExercise: true,
      notes: 'Calidad sobre cantidad'
    },
    {
      exerciseId: 'walking-lunges',
      order: 8,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'prone-superman',
      order: 9,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 1,
      targetRepsMax: 1,
      restSeconds: 0,
      isCircuitExercise: true,
      durationSeconds: 60,
      notes: 'Mantén 60 segundos isométrico'
    },
    {
      exerciseId: 'lying-leg-raises',
      order: 10,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 0,
      isCircuitExercise: true
    },
    {
      exerciseId: 'bent-knee-situps',
      order: 11,
      intensity: 'medium',
      targetSets: 1,
      targetRepsMin: 15,
      targetRepsMax: 25,
      restSeconds: 0,
      isCircuitExercise: true
    }
  ]
};

export const hopliteProgram: WorkoutProgram = {
  id: 'bodyweight-hoplite',
  name: 'Bodyweight Hoplite',
  description: `Programa de calistenia basado en los soldados Hoplitas de la Antigua Grecia.

Sin equipamiento necesario (chaleco lastrado opcional para progresión).

Estructura:
- 4 días por semana
- 2 entrenamientos diferentes, cada uno 2 veces por semana
- Formato de circuito: realiza todos los ejercicios seguidos, descansa al final
- 2-5 rondas según nivel de condición física

Progresión:
- Aumenta reps dentro del rango 10-20
- Añade chaleco lastrado (10-20 lbs) cuando sea fácil
- Reduce descanso entre rondas`,
  author: 'Alexander Cortes',
  difficulty: 'beginner',
  goal: 'fat_loss',
  daysPerWeek: 4,
  weeks: 8,
  equipmentRequired: ['bodyweight'],
  minEquipmentRequired: ['bodyweight'],
  workouts: [
    hopliteWorkout1,
    { ...hopliteWorkout2, dayOfWeek: 2, id: 'hoplite-workout1-repeat' },
    hopliteWorkout2,
    { ...hopliteWorkout1, dayOfWeek: 4, id: 'hoplite-workout2-repeat' }
  ],
  nutritionGuidelines: hopliteNutrition
};

// ============================================
// B3 PROGRAM (3 Days/Week, Time Efficient)
// Generic Push/Pull/Legs
// ============================================

const b3Nutrition: NutritionGuidelines = {
  proteinPerKg: 2.0,
  mealFrequency: 4,
  preworkoutTiming: 60,
  postworkoutTiming: 45,
  hydrationLiters: 3,
  notes: [
    'Come en superávit calórico para bulking',
    'Prioriza proteína en cada comida',
    'Carbohidratos alrededor del entreno'
  ]
};

const b3PushTemplate: WorkoutTemplate = {
  id: 'b3-push',
  name: 'B3 - Push Day',
  type: 'push',
  dayOfWeek: 1,
  estimatedDuration: 60,
  exercises: [
    {
      exerciseId: 'flat-barbell-press',
      order: 1,
      intensity: 'heavy',
      targetSets: 5,
      targetRepsMin: 5,
      targetRepsMax: 8,
      restSeconds: 180,
      notes: 'Movimiento pesado principal',
      alternativeExercises: ['incline-barbell-press', 'db-flat-press']
    },
    {
      exerciseId: 'db-shoulder-press',
      order: 2,
      intensity: 'medium',
      targetSets: 4,
      targetRepsMin: 6,
      targetRepsMax: 12,
      restSeconds: 120,
      notes: 'Movimiento moderado',
      alternativeExercises: ['barbell-ohp', 'arnold-press']
    },
    {
      exerciseId: 'tricep-pushdowns',
      order: 3,
      intensity: 'light',
      targetSets: 3,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 60,
      notes: 'Movimiento de pump',
      alternativeExercises: ['skull-crushers', 'close-grip-pushups']
    },
    {
      exerciseId: 'cable-flyes',
      order: 4,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 12,
      targetRepsMax: 20,
      restSeconds: 60
    },
    {
      exerciseId: 'lateral-raises',
      order: 5,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 12,
      targetRepsMax: 20,
      restSeconds: 60
    },
    {
      exerciseId: 'face-pulls',
      order: 6,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 15,
      targetRepsMax: 20,
      restSeconds: 60
    }
  ]
};

const b3PullTemplate: WorkoutTemplate = {
  id: 'b3-pull',
  name: 'B3 - Pull Day',
  type: 'pull',
  dayOfWeek: 3,
  estimatedDuration: 60,
  exercises: [
    {
      exerciseId: 'weighted-pullups',
      order: 1,
      intensity: 'heavy',
      targetSets: 5,
      targetRepsMin: 5,
      targetRepsMax: 8,
      restSeconds: 180,
      notes: 'Movimiento de anchura pesado',
      alternativeExercises: ['chinups', 'lat-pulldown']
    },
    {
      exerciseId: 'barbell-bent-over-row',
      order: 2,
      intensity: 'medium',
      targetSets: 4,
      targetRepsMin: 6,
      targetRepsMax: 12,
      restSeconds: 120,
      notes: 'Movimiento de grosor moderado',
      alternativeExercises: ['t-bar-row', 'db-row']
    },
    {
      exerciseId: 'cable-rows',
      order: 3,
      intensity: 'light',
      targetSets: 3,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 60,
      notes: 'Grosor/anchura secundario',
      alternativeExercises: ['inverted-row']
    },
    {
      exerciseId: 'rear-delt-flyes',
      order: 4,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 12,
      targetRepsMax: 20,
      restSeconds: 60
    },
    {
      exerciseId: 'barbell-curls',
      order: 5,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 8,
      targetRepsMax: 15,
      restSeconds: 60
    },
    {
      exerciseId: 'hammer-curls',
      order: 6,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 10,
      targetRepsMax: 15,
      restSeconds: 60
    }
  ]
};

const b3LegsTemplate: WorkoutTemplate = {
  id: 'b3-legs',
  name: 'B3 - Legs Day',
  type: 'legs',
  dayOfWeek: 5,
  estimatedDuration: 60,
  exercises: [
    {
      exerciseId: 'leg-curls',
      order: 1,
      intensity: 'heavy',
      targetSets: 5,
      targetRepsMin: 5,
      targetRepsMax: 8,
      restSeconds: 150,
      notes: 'Dominante isquios/glúteos pesado',
      alternativeExercises: ['romanian-deadlifts', 'glute-ham-raise']
    },
    {
      exerciseId: 'barbell-squats',
      order: 2,
      intensity: 'medium',
      targetSets: 4,
      targetRepsMin: 6,
      targetRepsMax: 12,
      restSeconds: 150,
      notes: 'Dominante cuádriceps moderado',
      alternativeExercises: ['front-squat', 'leg-press', 'hack-squat']
    },
    {
      exerciseId: 'leg-press',
      order: 3,
      intensity: 'light',
      targetSets: 3,
      targetRepsMin: 10,
      targetRepsMax: 20,
      restSeconds: 90,
      notes: 'Cuádriceps/glúteos secundario',
      alternativeExercises: ['bulgarian-split-squat', 'walking-lunges']
    },
    {
      exerciseId: 'leg-extension',
      order: 4,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 12,
      targetRepsMax: 20,
      restSeconds: 60
    },
    {
      exerciseId: 'seated-leg-curl',
      order: 5,
      intensity: 'optional',
      targetSets: 3,
      targetRepsMin: 12,
      targetRepsMax: 20,
      restSeconds: 60
    },
    {
      exerciseId: 'calf-raises',
      order: 6,
      intensity: 'optional',
      targetSets: 4,
      targetRepsMin: 15,
      targetRepsMax: 25,
      restSeconds: 60
    }
  ]
};

export const b3Program: WorkoutProgram = {
  id: 'b3-bulking',
  name: 'B3 - Bulking in 3 Workouts',
  description: `Programa minimalista de máxima eficiencia: solo 3 horas por semana.

Estructura por entrenamiento:
- Ejercicio 1: 5x5-8 (Pesado) - Tensión mecánica
- Ejercicio 2: 4x6-12 (Moderado) - Daño eccéntrico
- Ejercicio 3: 3x10-20+ (Ligero) - Estrés metabólico
- Ejercicios 4-6: Opcionales, hasta 8 series totales

5 Factores del Crecimiento Muscular:
1. Tensión mecánica
2. Daño eccéntrico (el más importante)
3. Estrés metabólico
4. Hinchazón celular (pump)
5. Estiramiento extremo

Progresión: Aumenta reps cada semana. Si llegas al máximo del rango, añade peso.`,
  author: 'Alexander Cortes',
  difficulty: 'beginner',
  goal: 'muscle_gain',
  daysPerWeek: 3,
  weeks: 8,
  equipmentRequired: ['barbell', 'dumbbell', 'cable', 'machine'],
  minEquipmentRequired: ['dumbbell', 'bodyweight'],
  workouts: [b3PushTemplate, b3PullTemplate, b3LegsTemplate],
  nutritionGuidelines: b3Nutrition
};

// ============================================
// ACHILLES ELYSIUM (5 Days/Week, 3 Phases, 12 Weeks)
// Advanced ATG-Influenced Back-Focused Program
// ============================================

const elysiumPhases: ProgramPhase[] = [
  {
    id: 'elysium-phase1',
    name: 'Fase I: Fundamentos',
    description: 'Construye la base con movimientos ATG y control excéntrico',
    weeks: 4,
    focus: 'strength',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 20,
    cardioFrequency: 3,
    notes: [
      'Enfoque en forma perfecta y rango completo',
      'Tempo controlado en todos los ejercicios',
      'Introduce ejercicios ATG gradualmente',
      'Prioriza salud articular'
    ]
  },
  {
    id: 'elysium-phase2',
    name: 'Fase II: Volumen',
    description: 'Aumenta volumen manteniendo la calidad del movimiento',
    weeks: 4,
    focus: 'hypertrophy',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 20,
    cardioFrequency: 3,
    notes: [
      'Incrementa sets en ejercicios principales',
      'Mantén intensidad RPE 7-8',
      'Añade peso cuando completes todas las reps',
      'Fase de acumulación de volumen'
    ]
  },
  {
    id: 'elysium-phase3',
    name: 'Fase III: Pirámide',
    description: 'Entrenamiento en pirámide para máxima fuerza e hipertrofia',
    weeks: 4,
    focus: 'strength',
    trainingStyle: 'pyramid',
    cardioType: 'none',
    notes: [
      'Pirámide ascendente en ejercicios principales',
      'Aumenta peso, reduce reps cada set',
      'Último set al fallo técnico',
      'Fase de intensificación'
    ]
  }
];

// Elysium Phase 1 Workouts
const elysiumPhase1Workouts: WorkoutTemplate[] = [
  {
    id: 'elysium-p1-lower-posterior',
    name: 'Día 1 - Lower Posterior (Fase I)',
    type: 'legs',
    dayOfWeek: 1,
    phaseId: 'elysium-phase1',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'nordic-leg-curl',
        order: 1,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 3,
        targetRepsMax: 6,
        restSeconds: 120,
        notes: 'Usa asistencia si es necesario. Enfoque en excéntrico.'
      },
      {
        exerciseId: 'atg-split-squat',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Rodilla pasa los dedos. Sin peso o ligero.'
      },
      {
        exerciseId: 'reverse-step-up',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Control total en el descenso.'
      },
      {
        exerciseId: 'single-leg-45-hyper',
        order: 4,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Énfasis en glúteo e isquio.',
        alternativeExercises: ['romanian-deadlifts']
      },
      {
        exerciseId: 'jefferson-curl',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 8,
        targetRepsMax: 10,
        restSeconds: 60,
        notes: 'Peso muy ligero. Movilidad de columna.'
      }
    ]
  },
  {
    id: 'elysium-p1-upper-push',
    name: 'Día 2 - Upper Push (Fase I)',
    type: 'push',
    dayOfWeek: 2,
    phaseId: 'elysium-phase1',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'incline-db-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Banco a 30 grados. Control excéntrico.'
      },
      {
        exerciseId: 'dips',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Inclina hacia adelante para pecho.'
      },
      {
        exerciseId: 'db-pullover',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Estiramiento profundo. Conecta pecho y dorsal.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 4,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Deltoides lateral para amplitud.'
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Squeeze al final del movimiento.'
      }
    ]
  },
  {
    id: 'elysium-p1-upper-pull',
    name: 'Día 3 - Upper Pull (Fase I)',
    type: 'pull',
    dayOfWeek: 3,
    phaseId: 'elysium-phase1',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'wide-grip-pullup',
        order: 1,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 120,
        notes: 'Agarre ancho. Elysium Standard: BW+50% x 6',
        alternativeExercises: ['weighted-pullups', 'lat-pulldown']
      },
      {
        exerciseId: 'gironda-high-angle-row',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Codos altos, tira hacia axilas.'
      },
      {
        exerciseId: 'inverted-row',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Cuerpo en línea recta. Aprieta escápulas.'
      },
      {
        exerciseId: 'powell-raise',
        order: 4,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Deltoides posterior y manguito rotador.'
      },
      {
        exerciseId: 'barbell-curls',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60,
        notes: 'Control estricto sin impulso.'
      }
    ]
  },
  {
    id: 'elysium-p1-lower-anterior',
    name: 'Día 4 - Lower Anterior (Fase I)',
    type: 'legs',
    dayOfWeek: 4,
    phaseId: 'elysium-phase1',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'vmo-squat',
        order: 1,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Talones elevados. Rodillas adelante.'
      },
      {
        exerciseId: 'assisted-pistol-squat',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 5,
        targetRepsMax: 8,
        restSeconds: 90,
        notes: 'Usa TRX o soporte. Trabaja hacia pistol libre.'
      },
      {
        exerciseId: 'leg-extension',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Contracción completa arriba.'
      },
      {
        exerciseId: 'tibialis-raise',
        order: 4,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 15,
        targetRepsMax: 25,
        restSeconds: 60,
        notes: 'Tibial anterior. Prevención de lesiones.'
      },
      {
        exerciseId: 'standing-leg-curl-monkey',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Con Monkey Foot o mancuerna entre pies.',
        alternativeExercises: ['leg-curls']
      }
    ]
  },
  {
    id: 'elysium-p1-shoulders',
    name: 'Día 5 - Shoulders (Fase I)',
    type: 'shoulders',
    dayOfWeek: 5,
    phaseId: 'elysium-phase1',
    estimatedDuration: 50,
    exercises: [
      {
        exerciseId: 'db-shoulder-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Sentado o de pie. Control total.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Deltoides lateral. No uses impulso.'
      },
      {
        exerciseId: 'face-pulls',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60,
        notes: 'Rotación externa al final.'
      },
      {
        exerciseId: 'powell-raise',
        order: 4,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Deltoides posterior aislado.'
      },
      {
        exerciseId: 'db-shrugs',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Trapecios. Pausa arriba.'
      }
    ]
  }
];

// Elysium Phase 2 Workouts (Increased Volume)
const elysiumPhase2Workouts: WorkoutTemplate[] = [
  {
    id: 'elysium-p2-lower-posterior',
    name: 'Día 1 - Lower Posterior (Fase II)',
    type: 'legs',
    dayOfWeek: 1,
    phaseId: 'elysium-phase2',
    estimatedDuration: 70,
    exercises: [
      {
        exerciseId: 'nordic-leg-curl',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 4,
        targetRepsMax: 8,
        restSeconds: 120,
        notes: 'Progresa hacia menos asistencia.'
      },
      {
        exerciseId: 'atg-split-squat',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Añade peso con mancuernas.'
      },
      {
        exerciseId: 'reverse-step-up',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Aumenta altura del cajón si es fácil.'
      },
      {
        exerciseId: 'single-leg-45-hyper',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Añade peso si es necesario.',
        alternativeExercises: ['romanian-deadlifts']
      },
      {
        exerciseId: 'jefferson-curl',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 8,
        targetRepsMax: 10,
        restSeconds: 60,
        notes: 'Progresa peso muy lentamente.'
      },
      {
        exerciseId: 'atg-good-morning',
        order: 6,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Nuevo: Good Morning estilo ATG.'
      }
    ]
  },
  {
    id: 'elysium-p2-upper-push',
    name: 'Día 2 - Upper Push (Fase II)',
    type: 'push',
    dayOfWeek: 2,
    phaseId: 'elysium-phase2',
    estimatedDuration: 70,
    exercises: [
      {
        exerciseId: 'incline-db-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Aumenta peso vs Fase I.'
      },
      {
        exerciseId: 'dips',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Añade peso si superas 12 reps.'
      },
      {
        exerciseId: 'db-pullover',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Aumenta ROM y peso.'
      },
      {
        exerciseId: 'cable-flyes',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Nuevo: Aislamiento de pecho.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 5,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Aumenta volumen de delts.'
      },
      {
        exerciseId: 'tricep-pushdowns',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p2-upper-pull',
    name: 'Día 3 - Upper Pull (Fase II)',
    type: 'pull',
    dayOfWeek: 3,
    phaseId: 'elysium-phase2',
    estimatedDuration: 70,
    exercises: [
      {
        exerciseId: 'wide-grip-pullup',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 5,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Añade peso si superas 10 reps.'
      },
      {
        exerciseId: 'gironda-high-angle-row',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Aumenta peso vs Fase I.'
      },
      {
        exerciseId: 'cable-rows',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Nuevo: Row sentado para grosor.'
      },
      {
        exerciseId: 'inverted-row',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        notes: 'Eleva pies si es fácil.'
      },
      {
        exerciseId: 'powell-raise',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'barbell-curls',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 12,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p2-lower-anterior',
    name: 'Día 4 - Lower Anterior (Fase II)',
    type: 'legs',
    dayOfWeek: 4,
    phaseId: 'elysium-phase2',
    estimatedDuration: 70,
    exercises: [
      {
        exerciseId: 'vmo-squat',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Aumenta peso con mancuernas/barra.'
      },
      {
        exerciseId: 'assisted-pistol-squat',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 90,
        notes: 'Reduce asistencia gradualmente.'
      },
      {
        exerciseId: 'leg-press',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 90,
        notes: 'Nuevo: Volumen de cuádriceps.'
      },
      {
        exerciseId: 'leg-extension',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'tibialis-raise',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 20,
        targetRepsMax: 30,
        restSeconds: 60,
        notes: 'Aumenta volumen de tibial.'
      },
      {
        exerciseId: 'standing-leg-curl-monkey',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60,
        alternativeExercises: ['leg-curls']
      }
    ]
  },
  {
    id: 'elysium-p2-shoulders',
    name: 'Día 5 - Shoulders (Fase II)',
    type: 'shoulders',
    dayOfWeek: 5,
    phaseId: 'elysium-phase2',
    estimatedDuration: 60,
    exercises: [
      {
        exerciseId: 'z-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Nuevo: Press sin soporte de espalda.'
      },
      {
        exerciseId: 'db-shoulder-press',
        order: 2,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Volumen adicional de press.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'face-pulls',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60
      },
      {
        exerciseId: 'powell-raise',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'db-shrugs',
        order: 6,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  }
];

// Elysium Phase 3 Workouts (Pyramid Training)
const elysiumPhase3Workouts: WorkoutTemplate[] = [
  {
    id: 'elysium-p3-lower-posterior',
    name: 'Día 1 - Lower Posterior (Fase III)',
    type: 'legs',
    dayOfWeek: 1,
    phaseId: 'elysium-phase3',
    trainingStyle: 'pyramid',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'nordic-leg-curl',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 3,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Pirámide: 10-8-6-4-3 reps. Añade peso/reduce asistencia.'
      },
      {
        exerciseId: 'atg-split-squat',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Pirámide: 12-10-8-6 reps.'
      },
      {
        exerciseId: 'romanian-deadlifts',
        order: 3,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Nuevo: RDL pesado en pirámide.'
      },
      {
        exerciseId: 'reverse-step-up',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'jefferson-curl',
        order: 5,
        intensity: 'light',
        targetSets: 2,
        targetRepsMin: 8,
        targetRepsMax: 10,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p3-upper-push',
    name: 'Día 2 - Upper Push (Fase III)',
    type: 'push',
    dayOfWeek: 2,
    phaseId: 'elysium-phase3',
    trainingStyle: 'pyramid',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'incline-db-press',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 4,
        targetRepsMax: 12,
        restSeconds: 120,
        notes: 'Pirámide: 12-10-8-6-4 reps.'
      },
      {
        exerciseId: 'flat-barbell-press',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 5,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Nuevo: Press plano en pirámide.'
      },
      {
        exerciseId: 'dips',
        order: 3,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Añade peso en pirámide.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'overhead-tricep-extension',
        order: 5,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p3-upper-pull',
    name: 'Día 3 - Upper Pull (Fase III)',
    type: 'pull',
    dayOfWeek: 3,
    phaseId: 'elysium-phase3',
    trainingStyle: 'pyramid',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'weighted-pullups',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 3,
        targetRepsMax: 10,
        restSeconds: 150,
        notes: 'Pirámide: 10-8-6-4-3 reps. Objetivo: BW+50% x 6.'
      },
      {
        exerciseId: 'barbell-bent-over-row',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Nuevo: Row con barra en pirámide.'
      },
      {
        exerciseId: 'gironda-high-angle-row',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90
      },
      {
        exerciseId: 'face-pulls',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 15,
        targetRepsMax: 20,
        restSeconds: 60
      },
      {
        exerciseId: 'hammer-curls',
        order: 5,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p3-lower-anterior',
    name: 'Día 4 - Lower Anterior (Fase III)',
    type: 'legs',
    dayOfWeek: 4,
    phaseId: 'elysium-phase3',
    trainingStyle: 'pyramid',
    estimatedDuration: 75,
    exercises: [
      {
        exerciseId: 'front-squat',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 4,
        targetRepsMax: 10,
        restSeconds: 150,
        notes: 'Nuevo: Front Squat en pirámide para quads.'
      },
      {
        exerciseId: 'vmo-squat',
        order: 2,
        intensity: 'heavy',
        targetSets: 4,
        targetRepsMin: 8,
        targetRepsMax: 12,
        restSeconds: 90,
        notes: 'Peso moderado, enfoque en VMO.'
      },
      {
        exerciseId: 'assisted-pistol-squat',
        order: 3,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 90,
        notes: 'Intenta reducir asistencia al mínimo.'
      },
      {
        exerciseId: 'leg-extension',
        order: 4,
        intensity: 'medium',
        targetSets: 3,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'tibialis-raise',
        order: 5,
        intensity: 'light',
        targetSets: 3,
        targetRepsMin: 20,
        targetRepsMax: 30,
        restSeconds: 60
      },
      {
        exerciseId: 'calf-raises',
        order: 6,
        intensity: 'light',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 20,
        restSeconds: 60
      }
    ]
  },
  {
    id: 'elysium-p3-shoulders',
    name: 'Día 5 - Shoulders (Fase III)',
    type: 'shoulders',
    dayOfWeek: 5,
    phaseId: 'elysium-phase3',
    trainingStyle: 'pyramid',
    estimatedDuration: 65,
    exercises: [
      {
        exerciseId: 'barbell-ohp',
        order: 1,
        intensity: 'heavy',
        targetSets: 5,
        targetRepsMin: 4,
        targetRepsMax: 10,
        restSeconds: 150,
        notes: 'Pirámide: 10-8-6-5-4 reps.'
      },
      {
        exerciseId: 'z-press',
        order: 2,
        intensity: 'heavy',
        targetSets: 3,
        targetRepsMin: 6,
        targetRepsMax: 10,
        restSeconds: 120,
        notes: 'Después del OHP para volumen.'
      },
      {
        exerciseId: 'lateral-raises',
        order: 3,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'rear-delt-flyes',
        order: 4,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 12,
        targetRepsMax: 15,
        restSeconds: 60
      },
      {
        exerciseId: 'db-shrugs',
        order: 5,
        intensity: 'medium',
        targetSets: 4,
        targetRepsMin: 10,
        targetRepsMax: 15,
        restSeconds: 60
      }
    ]
  }
];

const elysiumNutrition: NutritionGuidelines = {
  recommendedFasting: '16/8',
  proteinPerKg: 2.2,
  mealFrequency: 4,
  preworkoutTiming: 60,
  postworkoutTiming: 30,
  hydrationLiters: 3.5,
  supplements: [
    'Creatina 5g/día',
    'Vitamina D3 5000 IU',
    'Omega-3 (aceite de pescado)',
    'Magnesio glicinato',
    'Colágeno (para articulaciones)'
  ],
  recommendedFoods: [
    'Carne de res grass-fed', 'Salmón salvaje', 'Huevos pasteurizados',
    'Arroz blanco', 'Patatas', 'Frutas',
    'Verduras de hoja verde', 'Aceite de oliva', 'Mantequilla'
  ],
  avoidFoods: [
    'Aceites vegetales refinados',
    'Azúcares procesados',
    'Alimentos ultraprocesados'
  ],
  notes: [
    'Proteína: 1g por libra de peso corporal objetivo',
    'Carbohidratos alrededor del entrenamiento',
    'Grasas saludables para hormonas y articulaciones',
    'Hidratación extra por el volumen de entrenamiento',
    'Considera suplemento de colágeno para salud articular ATG'
  ]
};

// Elysium Strength Standards (based on bodyweight)
export const elysiumStrengthStandards = {
  upperBody: {
    'weighted-pullups': {
      description: 'Dominadas con peso (agarre ancho)',
      target: 'BW + 50% x 6 reps',
      levels: {
        beginner: 'Solo BW x 6',
        intermediate: 'BW + 25% x 6',
        advanced: 'BW + 50% x 6',
        elite: 'BW + 75% x 6'
      }
    },
    'dips': {
      description: 'Fondos con peso',
      target: 'BW + 50% x 6 reps',
      levels: {
        beginner: 'Solo BW x 10',
        intermediate: 'BW + 25% x 8',
        advanced: 'BW + 50% x 6',
        elite: 'BW + 75% x 6'
      }
    },
    'incline-db-press': {
      description: 'Press inclinado con mancuernas',
      target: '75% BW cada mano x 6 reps',
      levels: {
        beginner: '30% BW x 10',
        intermediate: '50% BW x 8',
        advanced: '75% BW x 6',
        elite: '100% BW x 6'
      }
    },
    'barbell-ohp': {
      description: 'Press militar con barra',
      target: 'BW x 1 rep',
      levels: {
        beginner: '0.5x BW x 5',
        intermediate: '0.7x BW x 5',
        advanced: 'BW x 1',
        elite: '1.2x BW x 1'
      }
    }
  },
  lowerBody: {
    'nordic-leg-curl': {
      description: 'Nordic curl sin asistencia',
      target: '6 reps controladas',
      levels: {
        beginner: 'Con asistencia de manos',
        intermediate: 'Asistencia mínima x 6',
        advanced: 'Sin asistencia x 6',
        elite: 'Sin asistencia x 10'
      }
    },
    'atg-split-squat': {
      description: 'ATG Split Squat con peso',
      target: '50% BW cada mano x 8 reps',
      levels: {
        beginner: 'Solo BW x 10',
        intermediate: '25% BW x 10',
        advanced: '50% BW x 8',
        elite: '75% BW x 8'
      }
    },
    'front-squat': {
      description: 'Sentadilla frontal',
      target: 'BW x 5 reps',
      levels: {
        beginner: '0.5x BW x 8',
        intermediate: '0.75x BW x 6',
        advanced: 'BW x 5',
        elite: '1.25x BW x 5'
      }
    },
    'pistol-squat': {
      description: 'Pistol squat sin asistencia',
      target: '5 reps cada pierna',
      levels: {
        beginner: 'Con asistencia',
        intermediate: 'Sin asistencia x 3',
        advanced: 'Sin asistencia x 5',
        elite: 'Con peso x 5'
      }
    }
  }
};

export const achillesElysiumProgram: WorkoutProgram = {
  id: 'achilles-elysium',
  name: 'Achilles Elysium',
  description: `Programa avanzado de 12 semanas inspirado en ATG (Knees Over Toes).

La secuela del Achilles original. Enfocado en ESPALDA como grupo muscular dominante, no pecho.

Filosofía: "Entrena ARTICULACIONES, no solo músculos."
Influencias: ATG (Ben Patrick), GOATA, Functional Patterns.

Estructura de 3 Fases:
- Fase I (4 semanas): Fundamentos - Aprende los movimientos ATG
- Fase II (4 semanas): Volumen - Aumenta sets manteniendo calidad
- Fase III (4 semanas): Pirámide - Intensificación para máxima fuerza

5 días por semana:
1. Lower Posterior (isquios, glúteos)
2. Upper Push (pecho, hombros, tríceps)
3. Upper Pull (espalda, bíceps)
4. Lower Anterior (cuádriceps, tibiales)
5. Shoulders (deltoides, trapecios)

Ejercicios únicos: Nordic Leg Curl, ATG Split Squat, VMO Squat, Jefferson Curl, Powell Raise, Gironda Row.

Objetivo estético: "Hombre de Bronce" - espalda dominante, hombros anchos, piernas atléticas.`,
  author: 'Alexander Cortes',
  difficulty: 'advanced',
  goal: 'athletic',
  daysPerWeek: 5,
  weeks: 12,
  equipmentRequired: ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight'],
  minEquipmentRequired: ['dumbbell', 'bodyweight'],
  phases: elysiumPhases,
  workouts: [...elysiumPhase1Workouts, ...elysiumPhase2Workouts, ...elysiumPhase3Workouts],
  nutritionGuidelines: elysiumNutrition
};

// ============================================
// ALL PROGRAMS EXPORT
// ============================================

export const allPrograms: WorkoutProgram[] = [
  achillesProgram,
  achillesElysiumProgram,
  wolverineProgram,
  hopliteProgram,
  b3Program
];

// Helper functions
export function getProgramById(id: string): WorkoutProgram | undefined {
  return allPrograms.find(p => p.id === id);
}

export function getProgramsByGoal(goal: WorkoutProgram['goal']): WorkoutProgram[] {
  return allPrograms.filter(p => p.goal === goal);
}

export function getProgramsByDifficulty(difficulty: WorkoutProgram['difficulty']): WorkoutProgram[] {
  return allPrograms.filter(p => p.difficulty === difficulty);
}

export function getProgramsByEquipment(equipment: Equipment[]): WorkoutProgram[] {
  return allPrograms.filter(p =>
    p.minEquipmentRequired?.every(eq => equipment.includes(eq)) ??
    p.equipmentRequired.every(eq => equipment.includes(eq))
  );
}

export function getProgramsByDaysPerWeek(days: number): WorkoutProgram[] {
  return allPrograms.filter(p => p.daysPerWeek <= days);
}

// Strength Standards and Adonis Index (from original achilles-program.ts)
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
