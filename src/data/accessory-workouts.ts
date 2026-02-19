// ============================================
// ACCESSORY WORKOUTS: ABS & CARDIO
// Based on Alexander Cortes' documentation
// ============================================

export interface AbsExercise {
  id: string;
  name: string;
  type: 'upper' | 'lower' | 'oblique' | 'full';
  sets: number;
  repsMin: number;
  repsMax: number;
  notes?: string;
  videoUrl?: string;
}

export interface AbsWorkout {
  id: string;
  name: string;
  exercises: AbsExercise[];
  frequency: string; // e.g., "3-4x/semana"
  notes?: string[];
}

export interface CardioWorkout {
  id: string;
  name: string;
  type: 'aerobic' | 'hiit' | 'none';
  duration: number; // minutes
  frequency: number; // times per week
  intensity?: string;
  exercises?: string[];
  notes?: string[];
}

export interface CalvesExercise {
  name: string;
  sets: string;
  reps: string;
}

export interface AccessoryPlan {
  programId: string;
  absWorkouts: AbsWorkout[];
  cardioWorkouts: CardioWorkout[];
  calves?: {
    frequency: string;
    exercises: CalvesExercise[];
    notes?: string;
  };
  phaseOverrides?: {
    [phaseId: string]: {
      cardio?: 'none' | 'reduced' | 'normal';
      absFrequency?: string;
      notes?: string;
    };
  };
}

// ============================================
// ACHILLES 3.0 ABS & CARDIO PLAN
// ============================================

const achillesUpperAbsExercises: AbsExercise[] = [
  {
    id: 'machine-crunch',
    name: 'Machine Crunches',
    type: 'upper',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Contracción controlada, no uses impulso'
  },
  {
    id: 'stability-ball-crunch',
    name: 'Stability Ball Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 20,
    notes: 'Extiende completamente sobre la pelota'
  },
  {
    id: 'bosu-crunch',
    name: 'Bosu Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 20,
    notes: 'Lado redondo hacia arriba'
  },
  {
    id: 'incline-situp',
    name: 'Incline Sit-up',
    type: 'upper',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Añade peso con disco en el pecho para progresar'
  },
  {
    id: 'pulldown-crunch',
    name: 'Pulldown Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 15,
    notes: 'Con cuerda en polea alta, lleva codos a rodillas'
  },
  {
    id: 'ab-wheel',
    name: 'Ab Wheel Rollout',
    type: 'upper',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Mantén core apretado, no arquees la espalda'
  },
  {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunches',
    type: 'upper',
    sets: 4,
    repsMin: 15,
    repsMax: 30,
    notes: 'Toca codo con rodilla opuesta'
  }
];

const achillesLowerAbsExercises: AbsExercise[] = [
  {
    id: 'lying-leg-raise',
    name: 'Lying Leg Raise',
    type: 'lower',
    sets: 4,
    repsMin: 10,
    repsMax: 20,
    notes: 'Mantén espalda baja pegada al suelo'
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    type: 'lower',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Piernas rectas o rodillas dobladas para principiantes'
  },
  {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    type: 'lower',
    sets: 4,
    repsMin: 20,
    repsMax: 40,
    notes: 'Movimiento rápido y controlado'
  },
  {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    type: 'lower',
    sets: 4,
    repsMin: 12,
    repsMax: 20,
    notes: 'Lleva las rodillas al pecho, levanta caderas'
  },
  {
    id: 'stability-ball-pike',
    name: 'Stability Ball Pike',
    type: 'lower',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Pies en la pelota, sube caderas hacia el techo'
  }
];

export const achillesAbsPlan: AbsWorkout[] = [
  {
    id: 'achilles-abs-upper',
    name: 'Abs Upper',
    exercises: achillesUpperAbsExercises,
    frequency: '2x/semana',
    notes: [
      'Elige 1 ejercicio por sesión',
      '4 series de 8-15 reps',
      'Para bodyweight puedes duplicar las reps',
      'Progresa en peso cuando sea posible'
    ]
  },
  {
    id: 'achilles-abs-lower',
    name: 'Abs Lower',
    exercises: achillesLowerAbsExercises,
    frequency: '2x/semana',
    notes: [
      'Elige 1 ejercicio por sesión',
      '4 series de 10-20 reps',
      'Enfócate en control, no velocidad'
    ]
  }
];

export const achillesCardioPlan: CardioWorkout[] = [
  {
    id: 'achilles-cardio-aerobic',
    name: 'Cardio Aeróbico',
    type: 'aerobic',
    duration: 60,
    frequency: 1,
    intensity: '60-70% FC máxima',
    exercises: [
      'Caminar rápido',
      'Bicicleta estática',
      'Elíptica',
      'Nadar',
      'Trotar suave'
    ],
    notes: [
      'Mantén ritmo cardíaco constante',
      'Puedes ver series o escuchar podcasts',
      'El objetivo es quemar calorías sin fatiga excesiva'
    ]
  },
  {
    id: 'achilles-cardio-hiit',
    name: 'HIIT',
    type: 'hiit',
    duration: 20,
    frequency: 2,
    intensity: '85-95% FC máxima en sprints',
    exercises: [
      'Sprints (calle o cinta)',
      'Sled Push',
      'Saltar la cuerda',
      'Burpees',
      'Golpear saco pesado',
      'Bicicleta de spinning',
      'Remo Concept 2'
    ],
    notes: [
      'Calentamiento: 5 min caminata a 4mph',
      'Sprint 10-20 segundos',
      'Descanso 40-50 segundos',
      'Repite 10-15 veces',
      'Enfriamiento: 3-5 min caminata suave'
    ]
  }
];

// ============================================
// ELYSIUM ABS & CARDIO PLAN
// ============================================

const elysiumAbsExercises: AbsExercise[] = [
  {
    id: 'hip-flexor-raise',
    name: 'Hip Flexor Raises',
    type: 'lower',
    sets: 3,
    repsMin: 10,
    repsMax: 20,
    notes: 'Sentado en banco, eleva rodillas hacia el pecho'
  },
  {
    id: 'ql-raise',
    name: 'Quadratus Lumborum Raise',
    type: 'oblique',
    sets: 3,
    repsMin: 10,
    repsMax: 20,
    notes: 'Side plank dinámico, sube y baja la cadera'
  },
  {
    id: 'decline-crunch-weighted',
    name: 'Decline Crunch (con peso)',
    type: 'upper',
    sets: 3,
    repsMin: 10,
    repsMax: 20,
    notes: 'Sostén disco en el pecho, sobrecarga progresiva'
  }
];

export const elysiumAbsPlan: AbsWorkout[] = [
  {
    id: 'elysium-abs-circuit',
    name: 'Circuito Abs Elysium',
    exercises: elysiumAbsExercises,
    frequency: '3x/semana',
    notes: [
      'Haz los 3 ejercicios en cada sesión',
      '1-3 series de cada uno',
      'Enfócate en sobrecarga progresiva',
      'Añade peso cuando llegues a 20 reps'
    ]
  }
];

export const elysiumCalvesPlan = {
  frequency: '2x/semana (mínimo 2 días entre sesiones)',
  exercises: [
    { name: 'Anterior Tibialis Raise', sets: '2-3', reps: '8-15' },
    { name: 'Seated Calf Raise', sets: '2-3', reps: '8-15' },
    { name: 'Standing Calf Raise (BW)', sets: '2-3', reps: '8-15' }
  ],
  notes: 'Haz TODOS los ejercicios en cada sesión de pantorrillas'
};

export const elysiumCardioPlan: CardioWorkout[] = [
  {
    id: 'elysium-cardio-steady',
    name: 'Cardio Steady State',
    type: 'aerobic',
    duration: 20,
    frequency: 3,
    intensity: '60-70% FC máxima',
    notes: [
      'Caminar, bicicleta o elíptica',
      'El objetivo es recuperación activa',
      'No debe interferir con las pesas'
    ]
  }
];

// ============================================
// WOLVERINE ABS & CARDIO PLAN
// ============================================

export const wolverineCardioPlan: CardioWorkout[] = [
  {
    id: 'wolverine-cardio-p1',
    name: 'Cardio Fase 1 (Steady State)',
    type: 'aerobic',
    duration: 30,
    frequency: 3,
    intensity: '65% FC máxima',
    notes: [
      'Caminata en inclinación 10-15%',
      'Post-entrenamiento o días de descanso'
    ]
  },
  {
    id: 'wolverine-cardio-p2',
    name: 'Cardio Fase 2 (HIIT)',
    type: 'hiit',
    duration: 20,
    frequency: 2,
    intensity: 'Alta intensidad',
    exercises: [
      'Sprints en cinta',
      'Battle ropes',
      'Prowler push'
    ],
    notes: [
      '30s trabajo / 30s descanso',
      'Enfocado en definición'
    ]
  }
];

// ============================================
// ACCESSORY PLANS POR PROGRAMA
// ============================================

export const accessoryPlans: AccessoryPlan[] = [
  {
    programId: 'achilles-3day',
    absWorkouts: achillesAbsPlan,
    cardioWorkouts: achillesCardioPlan,
    phaseOverrides: {
      'achilles-phase4': {
        cardio: 'none',
        notes: 'CERO cardio durante Man of Bronze. Solo abs y pesas.'
      }
    }
  },
  {
    programId: 'achilles-elysium',
    absWorkouts: elysiumAbsPlan,
    cardioWorkouts: elysiumCardioPlan,
    calves: elysiumCalvesPlan
  },
  {
    programId: 'wolverine',
    absWorkouts: achillesAbsPlan, // Usar el mismo plan de abs
    cardioWorkouts: wolverineCardioPlan
  },
  {
    programId: 'bodyweight-hoplite',
    absWorkouts: [], // Abs incluidos en los circuitos
    cardioWorkouts: [] // El programa es cardio en sí mismo
  },
  {
    programId: 'b3-bulking',
    absWorkouts: achillesAbsPlan,
    cardioWorkouts: [
      {
        id: 'b3-cardio-optional',
        name: 'Cardio Opcional',
        type: 'aerobic',
        duration: 20,
        frequency: 2,
        notes: [
          'Solo si quieres mantener condición cardiovascular',
          'No es obligatorio para bulking'
        ]
      }
    ]
  },
  {
    programId: 'dorian-yates-blood-guts',
    absWorkouts: achillesAbsPlan,
    cardioWorkouts: [
      {
        id: 'bg-hiit-sprints',
        name: 'HIIT Sprints (Protocolo Dorian)',
        type: 'hiit',
        duration: 10,
        frequency: 3,
        intensity: 'ALL-OUT',
        exercises: [
          '5 min calentamiento bici estática',
          '3-5 sprints de 20 seg ALL-OUT',
          '40 seg recuperación entre sprints',
          '5 min vuelta a la calma'
        ],
        notes: [
          'Equivale a 45-60 min cardio tradicional (Huberman Lab)',
          'Bici estática preferible — menos impacto articular',
          'Si no hay bici: sprints en cinta al máximo incline'
        ]
      }
    ],
    calves: {
      frequency: '2x/semana (días de descanso)',
      exercises: [
        { name: 'Standing Calf Raise', sets: '3', reps: '12-15' },
        { name: 'Seated Calf Raise', sets: '3', reps: '15-20' }
      ],
      notes: 'Negativas lentas 3 seg — mismo principio Blood & Guts'
    },
    phaseOverrides: {
      'bg-phase1': { cardio: 'normal', absFrequency: '3x/semana', notes: 'Adapta intensidad gradualmente' },
      'bg-phase2': { cardio: 'normal', absFrequency: '3x/semana' },
      'bg-phase3': { cardio: 'normal', absFrequency: '4x/semana', notes: 'Máxima intensidad en todo' }
    }
  }
];

// Helper function to get accessory plan by program
export function getAccessoryPlanByProgram(programId: string): AccessoryPlan | undefined {
  return accessoryPlans.find(p => p.programId === programId);
}

// Weekly schedule template
export interface WeeklyAccessorySchedule {
  monday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  tuesday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  wednesday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  thursday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  friday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  saturday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
  sunday: { abs?: 'upper' | 'lower' | 'circuit'; cardio?: 'aerobic' | 'hiit'; calves?: boolean };
}

// Default Achilles schedule
export const achillesAccessorySchedule: WeeklyAccessorySchedule = {
  monday: { abs: 'upper' },
  tuesday: { abs: 'lower', cardio: 'hiit' },
  wednesday: {},
  thursday: { abs: 'upper', cardio: 'hiit' },
  friday: { abs: 'lower' },
  saturday: { cardio: 'aerobic' },
  sunday: {}
};

// Default Elysium schedule
export const elysiumAccessorySchedule: WeeklyAccessorySchedule = {
  monday: { abs: 'circuit', calves: true },
  tuesday: { cardio: 'aerobic' },
  wednesday: { abs: 'circuit' },
  thursday: { cardio: 'aerobic', calves: true },
  friday: { abs: 'circuit' },
  saturday: { cardio: 'aerobic' },
  sunday: {}
};
