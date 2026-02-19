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
  description?: string;
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
  videoUrl?: string;
  description?: string;
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
    notes: 'Contracción controlada, no uses impulso',
    videoUrl: 'https://www.youtube.com/watch?v=G8937xqkxDo',
    description: 'Siéntate en la máquina con los pies firmes y agarra las asas. Exhala mientras contraes el abdomen hacia abajo, enfocándote en acortar la distancia entre el esternón y el ombligo. Evita tirar con los brazos — todo el movimiento debe venir de la contracción abdominal.'
  },
  {
    id: 'stability-ball-crunch',
    name: 'Stability Ball Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 20,
    notes: 'Extiende completamente sobre la pelota',
    videoUrl: 'https://www.youtube.com/watch?v=BKS9NRVko0g',
    description: 'Acuéstate con la espalda baja apoyada en la pelota, pies firmes en el suelo a la anchura de hombros. Extiéndete hacia atrás para estirar completamente el abdomen, luego contrae subiendo el torso. El rango de movimiento extendido es la clave — aprovecha el estiramiento completo que la pelota te permite.'
  },
  {
    id: 'bosu-crunch',
    name: 'Bosu Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 20,
    notes: 'Lado redondo hacia arriba',
    videoUrl: 'https://www.youtube.com/watch?v=s3wftEw2gZs',
    description: 'Coloca el bosu con el lado redondo hacia arriba y acuéstate con la zona lumbar centrada. Manos detrás de la cabeza sin tirar del cuello. Contrae el abdomen elevando los hombros, mantén la tensión arriba 1 segundo. La superficie inestable activa más fibras del core.'
  },
  {
    id: 'incline-situp',
    name: 'Incline Sit-up',
    type: 'upper',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Añade peso con disco en el pecho para progresar',
    videoUrl: 'https://www.youtube.com/watch?v=TEvQB9FAdjs',
    description: 'Engancha los pies en el banco inclinado y baja el torso de forma controlada. Sube contrayendo el abdomen, no tirando del cuello. Para progresar, sostén un disco en el pecho. Evita usar impulso al subir — si necesitas balancearte, baja el peso.'
  },
  {
    id: 'pulldown-crunch',
    name: 'Pulldown Crunch',
    type: 'upper',
    sets: 4,
    repsMin: 10,
    repsMax: 15,
    notes: 'Con cuerda en polea alta, lleva codos a rodillas',
    videoUrl: 'https://www.youtube.com/watch?v=AV5PmZJIrrw',
    description: 'Arrodíllate frente a la polea alta con la cuerda detrás de la cabeza. Mantén las caderas fijas y flexiona el tronco llevando los codos hacia las rodillas. El movimiento sale de la cintura, no de los brazos. Controla la vuelta arriba — la negativa es igual de importante.'
  },
  {
    id: 'ab-wheel',
    name: 'Ab Wheel Rollout',
    type: 'upper',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Mantén core apretado, no arquees la espalda',
    videoUrl: 'https://www.youtube.com/watch?v=ikkOq5mHaho',
    description: 'Desde rodillas, agarra la rueda y extiéndete hacia adelante manteniendo el core contraído. No dejes que la espalda baja se hunda — si se arquea, has ido demasiado lejos. Vuelve contrayendo el abdomen. Progresa aumentando el rango de movimiento gradualmente.'
  },
  {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunches',
    type: 'upper',
    sets: 4,
    repsMin: 15,
    repsMax: 30,
    notes: 'Toca codo con rodilla opuesta',
    videoUrl: 'https://www.youtube.com/watch?v=wpRI3xBhJmo',
    description: 'Acuéstate con manos detrás de la cabeza y piernas elevadas. Rota el torso llevando el codo a la rodilla opuesta mientras extiendes la otra pierna. El movimiento debe ser controlado — no pedalees rápido sin control. Siente la contracción en los oblicuos con cada rotación.'
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
    notes: 'Mantén espalda baja pegada al suelo',
    videoUrl: 'https://www.youtube.com/watch?v=Wp4BlxcFTkE',
    description: 'Acuéstate boca arriba con las manos debajo de los glúteos o a los lados. Eleva las piernas juntas y rectas hasta 90 grados, luego baja lentamente sin tocar el suelo. La clave es mantener la espalda baja pegada al suelo — si se despega, no bajes tanto las piernas.'
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    type: 'lower',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Piernas rectas o rodillas dobladas para principiantes',
    videoUrl: 'https://www.youtube.com/watch?v=Pr1ieGZ5atk',
    description: 'Cuélgate de una barra con agarre firme y hombros activos. Eleva las piernas rectas hasta la horizontal o más arriba, controlando el balanceo. Si no puedes con piernas rectas, dobla las rodillas. Concéntrate en elevar la pelvis, no solo las piernas — ahí está la contracción real del abdomen inferior.'
  },
  {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    type: 'lower',
    sets: 4,
    repsMin: 20,
    repsMax: 40,
    notes: 'Movimiento rápido y controlado',
    videoUrl: 'https://www.youtube.com/watch?v=ANVdMDaYRts',
    description: 'Acuéstate boca arriba con las manos bajo los glúteos. Eleva ambas piernas ligeramente del suelo y alterna subiendo y bajando como si nadaras. Mantén la zona lumbar pegada al suelo en todo momento. El movimiento es pequeño y rápido pero controlado — no dejes que las piernas caigan.'
  },
  {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    type: 'lower',
    sets: 4,
    repsMin: 12,
    repsMax: 20,
    notes: 'Lleva las rodillas al pecho, levanta caderas',
    videoUrl: 'https://www.youtube.com/watch?v=yH-oSzE5_g0',
    description: 'Acuéstate con las rodillas dobladas a 90 grados. Contrae el abdomen inferior para llevar las rodillas hacia el pecho, elevando las caderas del suelo. El secreto es el despegue de caderas — sin él, solo doblas las piernas sin trabajar el abdomen. Baja de forma controlada.'
  },
  {
    id: 'stability-ball-pike',
    name: 'Stability Ball Pike',
    type: 'lower',
    sets: 4,
    repsMin: 8,
    repsMax: 15,
    notes: 'Pies en la pelota, sube caderas hacia el techo',
    videoUrl: 'https://www.youtube.com/watch?v=eFcjeQ9tuEQ',
    description: 'Colócate en posición de plancha con los pies sobre la pelota de estabilidad. Contrae el core y eleva las caderas hacia el techo formando una V invertida, manteniendo las piernas rectas. Baja con control. Es un ejercicio avanzado — si pierdes estabilidad, empieza con rodillas al pecho en su lugar.'
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
    { name: 'Anterior Tibialis Raise', sets: '2-3', reps: '8-15', videoUrl: 'https://www.youtube.com/watch?v=RHWRxiBe1iU', description: 'Apóyate contra una pared con los pies adelantados. Levanta las puntas de los pies hacia las espinillas, manteniendo los talones en el suelo. Contrae arriba 1 segundo y baja con control. Fortalece el tibial anterior y previene dolor de espinillas.' },
    { name: 'Seated Calf Raise', sets: '2-3', reps: '8-15', videoUrl: 'https://www.youtube.com/watch?v=ORY-ke6vcgk', description: 'Siéntate con las rodillas bajo la almohadilla y la punta de los pies en el borde. Empuja hacia arriba contrayendo el sóleo, mantén 1 segundo arriba, y baja lentamente. Este ejercicio aísla el sóleo, fundamental para la parte inferior de la pantorrilla.' },
    { name: 'Standing Calf Raise (BW)', sets: '2-3', reps: '8-15', videoUrl: 'https://www.youtube.com/watch?v=k67UjgvJdEk', description: 'Párate en el borde de un escalón con los talones colgando. Sube empujando con los dedos hasta máxima contracción, luego baja estirando completamente. Haz cada rep lenta y controlada — sin rebotes. Puedes hacerlo a una pierna para mayor intensidad.' }
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
        { name: 'Standing Calf Raise', sets: '3', reps: '12-15', videoUrl: 'https://www.youtube.com/watch?v=k67UjgvJdEk', description: 'Colócate en la máquina con las almohadillas sobre los hombros y la punta de los pies en el borde de la plataforma. Sube empujando con los dedos hasta máxima contracción, luego baja lentamente estirando completamente el talón. La negativa de 3 segundos es clave — no rebotes abajo.' },
        { name: 'Seated Calf Raise', sets: '3', reps: '15-20', videoUrl: 'https://www.youtube.com/watch?v=ORY-ke6vcgk', description: 'Siéntate con las rodillas bajo la almohadilla y la punta de los pies en el borde de la plataforma. Empuja hacia arriba contrayendo el sóleo, mantén 1 segundo arriba, y baja lentamente con negativa de 3 segundos. Este ejercicio trabaja el sóleo, que es el músculo más grande de la pantorrilla.' }
      ],
      notes: 'Negativas lentas 3 seg — mismo principio Blood & Guts'
    },
    phaseOverrides: {
      'bg-phase1': { cardio: 'normal', absFrequency: '3x/semana', notes: 'Adapta intensidad gradualmente' },
      'bg-phase2': { cardio: 'normal', absFrequency: '3x/semana' },
      'bg-phase3': { cardio: 'normal', absFrequency: '4x/semana', notes: 'Máxima intensidad en todo' }
    }
  },
  // ============================================
  // ATHENA ACCESSORY PLAN
  // ============================================
  {
    programId: 'athena-women',
    absWorkouts: [
      {
        id: 'athena-core-circuit',
        name: 'Athena Core Circuit',
        exercises: [
          { id: 'dead-bug-acc', name: 'Dead Bug', type: 'lower', sets: 3, repsMin: 10, repsMax: 15, notes: 'Espalda baja pegada al suelo' },
          { id: 'plank-acc', name: 'Plank Hold', type: 'full', sets: 3, repsMin: 1, repsMax: 1, notes: '30-45 seg' },
          { id: 'bicycle-crunch-acc', name: 'Bicycle Crunch', type: 'oblique', sets: 3, repsMin: 15, repsMax: 20 },
          { id: 'hanging-leg-acc', name: 'Hanging Knee Raise', type: 'lower', sets: 3, repsMin: 10, repsMax: 15 }
        ],
        frequency: '2-3x/semana (incluido en Día 2)',
        notes: ['Core funcional, no crunch infinitos', 'Priorizar estabilidad lumbar']
      }
    ],
    cardioWorkouts: [
      {
        id: 'athena-hiit',
        name: 'HIIT Protocol (Incluido en Día 4)',
        type: 'hiit',
        duration: 12,
        frequency: 1,
        intensity: '80%+ FC máx',
        exercises: [
          '8 × 20s sprint / 40s descanso (bici, remo o running)',
          'O: EMOM 10 min con ejercicio compuesto'
        ],
        notes: [
          'HIIT real = 80%+ durante minutos (Dr. Stacy Sims)',
          'No confundir con "sudar mucho en una clase"',
          'Ya incluido en Día 4 del programa'
        ]
      },
      {
        id: 'athena-walks',
        name: 'Caminatas Zona 2 (Opcional)',
        type: 'aerobic',
        duration: 35,
        frequency: 2,
        intensity: 'Conversación cómoda',
        notes: ['Días de descanso', 'No obligatorio — la pesa es la prioridad']
      }
    ]
  },
  // ============================================
  // TITAN ACCESSORY PLAN
  // ============================================
  {
    programId: 'titan-seniors',
    absWorkouts: [
      {
        id: 'titan-stability-circuit',
        name: 'Titan Stability Circuit',
        exercises: [
          { id: 'dead-bug-titan', name: 'Dead Bug', type: 'lower', sets: 3, repsMin: 8, repsMax: 10, notes: 'Lento y controlado' },
          { id: 'bird-dog-titan', name: 'Bird Dog', type: 'full', sets: 3, repsMin: 8, repsMax: 10 },
          { id: 'plank-titan', name: 'Plank', type: 'full', sets: 2, repsMin: 1, repsMax: 1, notes: '15-30 seg, de rodillas si necesario' }
        ],
        frequency: '3-4x/semana (incluido en sesiones)',
        notes: ['Balance integrado en CADA sesión', 'Evitar flexión espinal cargada si osteoporosis']
      }
    ],
    cardioWorkouts: [
      {
        id: 'titan-zona2',
        name: 'Cardio Zona 2 (Pilar fundamental)',
        type: 'aerobic',
        duration: 40,
        frequency: 4,
        intensity: 'Conversación cómoda, lactato <2 mmol/L',
        exercises: ['Caminar rápido', 'Bici estática', 'Elíptica', 'Nadar'],
        notes: [
          '150-200 min/semana zona 2 (WHO/ACSM)',
          '80% del cardio en zona 2',
          'Incluido como Día 4 + caminatas adicionales'
        ]
      },
      {
        id: 'titan-intervalos',
        name: 'Intervalos Suaves (Solo Fase 3)',
        type: 'hiit',
        duration: 20,
        frequency: 1,
        intensity: 'Moderada-alta (NO all-out)',
        exercises: [
          '4 × 2-3 min esfuerzo alto / 2-3 min recuperación',
          'En bici o caminata rápida en cuesta'
        ],
        notes: [
          'Empezar con 2 intervalos, añadir 1 cada 2 semanas',
          'NUNCA sprints all-out — controlado',
          'Monitorizar frecuencia cardíaca'
        ]
      }
    ],
    phaseOverrides: {
      'titan-phase0': { cardio: 'reduced', absFrequency: '2x/semana', notes: 'Solo caminatas zona 2 + movilidad básica' },
      'titan-phase1': { cardio: 'normal', absFrequency: '3x/semana' },
      'titan-phase2': { cardio: 'normal', absFrequency: '3x/semana' },
      'titan-phase3': { cardio: 'normal', absFrequency: '4x/semana', notes: 'Añadir intervalos suaves 1x/semana' }
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
