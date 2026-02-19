import type { WorkoutProgram, WorkoutTemplate, ProgramPhase, NutritionGuidelines } from '../types';

// ============================================
// ATHENA PROGRAM — Women's Recomposition (4 Days/Week, 3 Phases)
// Based on Dr. Stacy Sims, Bret Contreras, RP Female Templates
// ============================================

export const athenaNutrition: NutritionGuidelines = {
  proteinPerKg: 2.0,
  mealFrequency: 4,
  preworkoutTiming: 45,
  postworkoutTiming: 45,
  hydrationLiters: 2.5,
  supplements: ['Proteína whey 30-40g post-entreno', 'Creatina 3-5g/día', 'Vitamina D3', 'Magnesio'],
  recommendedFoods: [
    'Pollo, pavo, pescado', 'Huevos', 'Yogur griego', 'Arroz, patatas, avena',
    'Verduras verdes', 'Frutas variadas', 'Frutos secos', 'Aceite de oliva'
  ],
  avoidFoods: ['Ayuno intermitente prolongado', 'Déficit calórico agresivo (>300 kcal)'],
  notes: [
    'NO entrenar en ayunas — consume 15-20g proteína antes de entrenar (Dr. Stacy Sims)',
    'Post-entreno: 30-40g proteína dentro de 45 min',
    'Proteína diaria: 1.6-2.2 g/kg peso corporal',
    'No temas a los carbohidratos — son esenciales para hormonas femeninas',
    'Déficit calórico moderado (200-300 kcal) si el objetivo es perder grasa',
    'Comer según ritmo circadiano: ~8am-8pm',
    'Perimenopausia (40+): Aumentar proteína a 40-60g post-entreno'
  ]
};

const athenaPhases: ProgramPhase[] = [
  {
    id: 'athena-phase1',
    name: 'Fase I: Fundación',
    description: 'Aprender patrones de movimiento, establecer baseline de fuerza. RIR 3-4.',
    weeks: 4,
    focus: 'hypertrophy',
    trainingStyle: 'standard',
    cardioType: 'none',
    notes: [
      'Rep range: 10-15 reps',
      'RIR 3-4 (lejos del fallo)',
      '12-14 sets por grupo muscular/semana',
      'Enfoque en técnica perfecta antes de subir peso',
      'HIIT opcional 1x/semana en Día 4'
    ]
  },
  {
    id: 'athena-phase2',
    name: 'Fase II: Construcción',
    description: 'Aumentar cargas, construir fuerza y densidad muscular. RIR 2-3.',
    weeks: 4,
    focus: 'hypertrophy',
    trainingStyle: 'standard',
    cardioType: 'hiit',
    cardioDuration: 12,
    cardioFrequency: 1,
    notes: [
      'Rep range: 8-12 reps',
      'RIR 2-3 (más cerca del fallo)',
      '14-18 sets por grupo muscular/semana',
      'Prioriza PRs en hip thrust, squat, RDL',
      'HIIT 1x/semana incluida en Día 4'
    ]
  },
  {
    id: 'athena-phase3',
    name: 'Fase III: Definición',
    description: 'Peak de intensidad + componente metabólico. RIR 1-2 + finishers.',
    weeks: 4,
    focus: 'fat_loss',
    trainingStyle: 'standard',
    cardioType: 'hiit',
    cardioDuration: 15,
    cardioFrequency: 2,
    notes: [
      'Rep range: 6-10 pesados + finishers 15-20 reps',
      'RIR 1-2 en ejercicios principales',
      '16-20 sets por grupo muscular/semana',
      'HIIT 1-2x/semana (Día 4 + opcional)',
      'Semana 12: deload (reduce volumen 50%)'
    ]
  }
];

// ============================================
// PHASE 1 WORKOUTS
// ============================================
const athenaPhase1Workouts: WorkoutTemplate[] = [
  {
    id: 'athena-p1-lower-glute',
    name: 'Día 1 — Lower Body: Glute Focus (Fase I)',
    type: 'lower',
    dayOfWeek: 1,
    phaseId: 'athena-phase1',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'banded-lateral-walk', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 30, notes: 'Activación de glute medius — warm-up' },
      { exerciseId: 'hip-thrust', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Ejercicio #1 para glúteos (Bret Contreras)' },
      { exerciseId: 'bulgarian-split-squat', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90, notes: 'Con mancuernas — unilateral' },
      { exerciseId: 'romanian-deadlifts', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Barra o mancuernas — siente el estiramiento en isquios' },
      { exerciseId: 'cable-kickback', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Aislamiento de glúteo — pump final' },
      { exerciseId: 'sumo-squat', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Con mancuerna pesada' }
    ]
  },
  {
    id: 'athena-p1-upper-core',
    name: 'Día 2 — Upper Body + Core (Fase I)',
    type: 'upper',
    dayOfWeek: 2,
    phaseId: 'athena-phase1',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'db-shoulder-press', order: 1, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Sentada o de pie' },
      { exerciseId: 'lat-pulldown', order: 2, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Espalda ancha = cintura visual más estrecha' },
      { exerciseId: 'incline-db-press', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Banco a 30-45°' },
      { exerciseId: 'face-pulls', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Postura y rear delts' },
      { exerciseId: 'barbell-curls', order: 5, intensity: 'light', targetSets: 2, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, supersetWith: 'tricep-pushdowns' },
      { exerciseId: 'tricep-pushdowns', order: 6, intensity: 'light', targetSets: 2, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'dead-bug', order: 7, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 45, notes: 'Core funcional — espalda baja pegada al suelo' },
      { exerciseId: 'hanging-leg-raise', order: 8, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 45, notes: 'O knee raise si es difícil' }
    ]
  },
  {
    id: 'athena-p1-lower-legs',
    name: 'Día 3 — Lower Body: Legs (Fase I)',
    type: 'lower',
    dayOfWeek: 4,
    phaseId: 'athena-phase1',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'goblet-squat', order: 1, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 90, notes: 'Patrón fundamental — quads + glutes' },
      { exerciseId: 'leg-press', order: 2, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90, notes: 'Pies altos para glúteos, bajos para quads' },
      { exerciseId: 'walking-lunges', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90, notes: 'Con mancuernas' },
      { exerciseId: 'leg-curls', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Aislamiento de hamstrings' },
      { exerciseId: 'single-leg-hip-thrust', order: 5, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 60, notes: 'Unilateral — corrige asimetrías' },
      { exerciseId: 'calf-raises', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 45 }
    ]
  },
  {
    id: 'athena-p1-fullbody-hiit',
    name: 'Día 4 — Full Body + HIIT (Fase I)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'athena-phase1',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'kettlebell-swing', order: 1, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Posterior chain explosivo' },
      { exerciseId: 'pushups', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 60, notes: 'De rodillas si necesario' },
      { exerciseId: 'goblet-squat', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'db-row', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60, notes: 'Un brazo a la vez' },
      { exerciseId: 'weighted-step-ups', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60, notes: 'Caja moderada, mancuernas ligeras' },
      { exerciseId: 'plank', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 30, notes: '30 seg por set' }
    ]
  }
];

// ============================================
// PHASE 2 WORKOUTS
// ============================================
const athenaPhase2Workouts: WorkoutTemplate[] = [
  {
    id: 'athena-p2-lower-glute',
    name: 'Día 1 — Lower Body: Glute Focus (Fase II)',
    type: 'lower',
    dayOfWeek: 1,
    phaseId: 'athena-phase2',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'banded-lateral-walk', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 30, notes: 'Activación' },
      { exerciseId: 'hip-thrust', order: 2, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 120, notes: 'Sube peso — busca PRs' },
      { exerciseId: 'bulgarian-split-squat', order: 3, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 90 },
      { exerciseId: 'romanian-deadlifts', order: 4, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 120, notes: 'Barra — peso progresivo' },
      { exerciseId: 'cable-kickback', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'sumo-squat', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 }
    ]
  },
  {
    id: 'athena-p2-upper-core',
    name: 'Día 2 — Upper Body + Core (Fase II)',
    type: 'upper',
    dayOfWeek: 2,
    phaseId: 'athena-phase2',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'db-shoulder-press', order: 1, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 120 },
      { exerciseId: 'lat-pulldown', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'incline-db-press', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'face-pulls', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'barbell-curls', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, supersetWith: 'tricep-pushdowns' },
      { exerciseId: 'tricep-pushdowns', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'dead-bug', order: 7, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'hanging-leg-raise', order: 8, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 45 }
    ]
  },
  {
    id: 'athena-p2-lower-legs',
    name: 'Día 3 — Lower Body: Legs (Fase II)',
    type: 'lower',
    dayOfWeek: 4,
    phaseId: 'athena-phase2',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'barbell-squats', order: 1, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 120, notes: 'Progresión desde goblet squat' },
      { exerciseId: 'leg-press', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'walking-lunges', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'leg-curls', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'single-leg-hip-thrust', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'calf-raises', order: 6, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 }
    ]
  },
  {
    id: 'athena-p2-fullbody-hiit',
    name: 'Día 4 — Full Body + HIIT (Fase II)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'athena-phase2',
    estimatedDuration: 60,
    exercises: [
      { exerciseId: 'kettlebell-swing', order: 1, intensity: 'heavy', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'pushups', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'goblet-squat', order: 3, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'db-row', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'weighted-step-ups', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'burpees', order: 6, intensity: 'explosive', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, notes: 'HIIT finisher' }
    ]
  }
];

// ============================================
// PHASE 3 WORKOUTS
// ============================================
const athenaPhase3Workouts: WorkoutTemplate[] = [
  {
    id: 'athena-p3-lower-glute',
    name: 'Día 1 — Lower Body: Glute Focus (Fase III)',
    type: 'lower',
    dayOfWeek: 1,
    phaseId: 'athena-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'banded-lateral-walk', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 30 },
      { exerciseId: 'hip-thrust', order: 2, intensity: 'heavy', targetSets: 5, targetRepsMin: 6, targetRepsMax: 10, restSeconds: 120, notes: 'Peso máximo con buena forma' },
      { exerciseId: 'bulgarian-split-squat', order: 3, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 90 },
      { exerciseId: 'romanian-deadlifts', order: 4, intensity: 'heavy', targetSets: 4, targetRepsMin: 6, targetRepsMax: 10, restSeconds: 120 },
      { exerciseId: 'cable-kickback', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 45, notes: 'Finisher — alto reps' },
      { exerciseId: 'banded-lateral-walk', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 20, targetRepsMax: 25, restSeconds: 30, notes: 'Burnout final' }
    ]
  },
  {
    id: 'athena-p3-upper-core',
    name: 'Día 2 — Upper Body + Core (Fase III)',
    type: 'upper',
    dayOfWeek: 2,
    phaseId: 'athena-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'db-shoulder-press', order: 1, intensity: 'heavy', targetSets: 4, targetRepsMin: 6, targetRepsMax: 8, restSeconds: 120 },
      { exerciseId: 'lat-pulldown', order: 2, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 90 },
      { exerciseId: 'incline-db-press', order: 3, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 90 },
      { exerciseId: 'face-pulls', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'barbell-curls', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, supersetWith: 'tricep-pushdowns' },
      { exerciseId: 'tricep-pushdowns', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'hanging-leg-raise', order: 7, intensity: 'heavy', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'plank', order: 8, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 45 }
    ]
  },
  {
    id: 'athena-p3-lower-legs',
    name: 'Día 3 — Lower Body: Legs (Fase III)',
    type: 'lower',
    dayOfWeek: 4,
    phaseId: 'athena-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'barbell-squats', order: 1, intensity: 'heavy', targetSets: 5, targetRepsMin: 6, targetRepsMax: 8, restSeconds: 150, notes: 'Peso máximo con buena forma' },
      { exerciseId: 'leg-press', order: 2, intensity: 'heavy', targetSets: 4, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 90 },
      { exerciseId: 'walking-lunges', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'leg-curls', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'single-leg-hip-thrust', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'calf-raises', order: 6, intensity: 'medium', targetSets: 4, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 45, notes: 'Negativa lenta 3 seg' }
    ]
  },
  {
    id: 'athena-p3-fullbody-hiit',
    name: 'Día 4 — Full Body + HIIT (Fase III)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'athena-phase3',
    estimatedDuration: 60,
    isCircuit: true,
    circuitRounds: 3,
    restBetweenRounds: 120,
    exercises: [
      { exerciseId: 'kettlebell-swing', order: 1, intensity: 'explosive', targetSets: 4, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 45, isCircuitExercise: true },
      { exerciseId: 'pushups', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 20, restSeconds: 30, isCircuitExercise: true },
      { exerciseId: 'jump-squat', order: 3, intensity: 'explosive', targetSets: 4, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 30, isCircuitExercise: true },
      { exerciseId: 'db-row', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 30, isCircuitExercise: true },
      { exerciseId: 'mountain-climbers', order: 5, intensity: 'explosive', targetSets: 4, targetRepsMin: 20, targetRepsMax: 30, restSeconds: 30, isCircuitExercise: true, notes: 'HIIT finisher' },
      { exerciseId: 'burpees', order: 6, intensity: 'explosive', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, isCircuitExercise: true }
    ]
  }
];

// ============================================
// ATHENA PROGRAM DEFINITION
// ============================================
export const athenaProgram: WorkoutProgram = {
  id: 'athena-women',
  name: 'Athena',
  description: 'Programa de recomposición para mujeres. 4 días/semana, énfasis en glúteos y fuerza.\nBasado en Dr. Stacy Sims, Bret Contreras y RP Female Templates.\n"Fuerte, no grande" — entrena con intensidad real, confía en tu fisiología.',
  author: 'Achilles Fitness (basado en Sims, Contreras, RP)',
  difficulty: 'intermediate',
  goal: 'fat_loss',
  daysPerWeek: 4,
  weeks: 12,
  equipmentRequired: ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight', 'kettlebell'],
  minEquipmentRequired: ['dumbbell', 'bodyweight'],
  phases: athenaPhases,
  workouts: [
    ...athenaPhase1Workouts,
    ...athenaPhase2Workouts,
    ...athenaPhase3Workouts
  ],
  nutritionGuidelines: athenaNutrition
};
