import type { WorkoutProgram, WorkoutTemplate, ProgramPhase, NutritionGuidelines } from '../types';

// ============================================
// TITAN PROGRAM — Seniors 60+ (4 Days/Week, 4 Phases)
// Based on Peter Attia (Outlive), Andy Galpin, Cochrane Reviews
// ============================================

export const titanNutrition: NutritionGuidelines = {
  proteinPerKg: 1.4,
  mealFrequency: 4,
  preworkoutTiming: 60,
  postworkoutTiming: 60,
  hydrationLiters: 2.0,
  supplements: [
    'Creatina 3-5g/día (masa muscular + función cognitiva)',
    'Vitamina D3 2000-4000 IU/día',
    'Calcio 1000-1200 mg/día',
    'Omega-3 2-3g/día',
    'Proteína whey si no llegas con comida'
  ],
  recommendedFoods: [
    'Huevos', 'Pollo, pavo, pescado', 'Lácteos (yogur, queso)',
    'Legumbres', 'Arroz, patatas, pan integral',
    'Verduras variadas', 'Frutas', 'Aceite de oliva', 'Frutos secos'
  ],
  notes: [
    'Proteína: 1.2-1.6 g/kg/día — MÁS que la RDA estándar (Peter Attia)',
    'Distribuir en 3-4 comidas con ≥25-30g proteína cada una (umbral de leucina)',
    'Hidratación: beber por horario, no por sed (menor percepción con la edad)',
    'NO dietas restrictivas — el objetivo es nutrir, no restringir',
    'Creatina tiene evidencia sólida para preservar masa muscular y cognición en seniors'
  ]
};

const titanPhases: ProgramPhase[] = [
  {
    id: 'titan-phase0',
    name: 'Fase 0: Activación',
    description: 'Despertar el cuerpo. Movilidad, patrones básicos, hábito de movimiento. Solo peso corporal + bandas.',
    weeks: 4,
    focus: 'conditioning',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 30,
    cardioFrequency: 3,
    notes: [
      'Solo peso corporal + bandas elásticas',
      '30-40 min por sesión',
      'Énfasis en respiración, postura, balance básico',
      'NO saltarla aunque te sientas bien',
      'Zona 2: caminatas de 30 min 3x/semana'
    ]
  },
  {
    id: 'titan-phase1',
    name: 'Fase 1: Fundación',
    description: 'Aprender ejercicios con carga ligera. Mancuernas + máquinas. RIR 4-5.',
    weeks: 4,
    focus: 'hypertrophy',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 35,
    cardioFrequency: 3,
    notes: [
      'Mancuernas ligeras + máquinas + peso corporal',
      'Rep range: 12-15 reps, RIR 4-5 (lejos del fallo)',
      '40-50 min por sesión',
      'Warm-up extendido: 8-10 min',
      'Zona 2: 35 min 3-4x/semana'
    ]
  },
  {
    id: 'titan-phase2',
    name: 'Fase 2: Fortalecimiento',
    description: 'Progresión de cargas, fuerza funcional real. RIR 3-4.',
    weeks: 4,
    focus: 'strength',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 40,
    cardioFrequency: 3,
    notes: [
      'Mancuernas moderadas + barras + máquinas',
      'Rep range: 10-12 reps, RIR 3-4',
      '45-55 min por sesión',
      'Micro-progresiones: +0.5-1kg/semana máximo',
      'Zona 2: 40 min 3-4x/semana'
    ]
  },
  {
    id: 'titan-phase3',
    name: 'Fase 3: Rendimiento',
    description: 'Peak de fuerza funcional + capacidad cardiovascular. El abuelo/a rocoso/a.',
    weeks: 4,
    focus: 'strength',
    trainingStyle: 'standard',
    cardioType: 'steady_state',
    cardioDuration: 45,
    cardioFrequency: 4,
    notes: [
      'Cargas progresivas + circuitos funcionales',
      'Rep range: 8-12 reps, RIR 2-3',
      '50-60 min por sesión',
      'Introducción de intervalos suaves en bici/caminata',
      'Zona 2: 45 min 4x/semana + 1x intervalos suaves'
    ]
  }
];

// ============================================
// PHASE 0: ACTIVACIÓN (bodyweight + bands only)
// ============================================
const titanPhase0Workouts: WorkoutTemplate[] = [
  {
    id: 'titan-p0-upper',
    name: 'Día 1 — Upper + Estabilidad (Fase 0)',
    type: 'upper',
    dayOfWeek: 1,
    phaseId: 'titan-phase0',
    estimatedDuration: 35,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30, notes: 'Movilidad de columna' },
      { exerciseId: 'wall-angels', order: 2, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30, notes: 'Movilidad de hombros' },
      { exerciseId: 'wall-push-up', order: 3, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, notes: 'Push pattern básico' },
      { exerciseId: 'band-pull-apart', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45, notes: 'Postura y rear delts' },
      { exerciseId: 'dead-bug', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 6, targetRepsMax: 8, restSeconds: 45, notes: 'Core + estabilidad lumbar' },
      { exerciseId: 'bird-dog', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 6, targetRepsMax: 8, restSeconds: 45, notes: 'Coordinación contralateral' }
    ]
  },
  {
    id: 'titan-p0-lower',
    name: 'Día 2 — Lower + Balance (Fase 0)',
    type: 'lower',
    dayOfWeek: 3,
    phaseId: 'titan-phase0',
    estimatedDuration: 35,
    exercises: [
      { exerciseId: 'hip-circles', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30, notes: 'Movilidad de cadera' },
      { exerciseId: 'sit-to-stand', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, notes: 'Desde silla, sin impulso' },
      { exerciseId: 'walking-lunges', order: 3, intensity: 'light', targetSets: 2, targetRepsMin: 6, targetRepsMax: 8, restSeconds: 60, notes: 'Sin peso, pasos cortos' },
      { exerciseId: 'calf-raises', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45, notes: 'Apoyándose en pared si necesario' },
      { exerciseId: 'tandem-walk', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 20, restSeconds: 30, notes: 'Talón-punta, 10-20 pasos' },
      { exerciseId: 'single-leg-stance', order: 6, intensity: 'light', targetSets: 2, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 20, notes: '20 seg cada pierna' }
    ]
  },
  {
    id: 'titan-p0-fullbody',
    name: 'Día 3 — Full Body Funcional (Fase 0)',
    type: 'full',
    dayOfWeek: 5,
    phaseId: 'titan-phase0',
    estimatedDuration: 35,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'wall-push-up', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'sit-to-stand', order: 3, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'band-pull-apart', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'floor-get-up', order: 5, intensity: 'light', targetSets: 2, targetRepsMin: 3, targetRepsMax: 5, restSeconds: 60, notes: 'Levantarse del suelo — ejercicio fundamental' },
      { exerciseId: 'plank', order: 6, intensity: 'light', targetSets: 2, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 15, notes: '15 seg — de rodillas si necesario' }
    ]
  },
  {
    id: 'titan-p0-cardio',
    name: 'Día 4 — Cardio Zona 2 + Flex (Fase 0)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'titan-phase0',
    estimatedDuration: 40,
    optional: true,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'hip-circles', order: 2, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'wall-angels', order: 3, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'single-leg-stance', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 20 },
      { exerciseId: 'tandem-walk', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 30 },
      { exerciseId: 'dead-bug', order: 6, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 }
    ]
  }
];

// ============================================
// PHASE 1: FUNDACIÓN
// ============================================
const titanPhase1Workouts: WorkoutTemplate[] = [
  {
    id: 'titan-p1-upper',
    name: 'Día 1 — Upper + Estabilidad (Fase 1)',
    type: 'upper',
    dayOfWeek: 1,
    phaseId: 'titan-phase1',
    estimatedDuration: 45,
    exercises: [
      { exerciseId: 'wall-angels', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'db-shoulder-press', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90, notes: 'Sentado, mancuernas ligeras' },
      { exerciseId: 'lat-pulldown', order: 3, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90 },
      { exerciseId: 'incline-db-press', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90 },
      { exerciseId: 'face-pulls', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Con banda elástica' },
      { exerciseId: 'farmers-walk', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 30, notes: 'Mancuernas ligeras, 30 seg' },
      { exerciseId: 'dead-bug', order: 7, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 45 }
    ]
  },
  {
    id: 'titan-p1-lower',
    name: 'Día 2 — Lower + Balance (Fase 1)',
    type: 'lower',
    dayOfWeek: 3,
    phaseId: 'titan-phase1',
    estimatedDuration: 45,
    exercises: [
      { exerciseId: 'hip-circles', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'goblet-squat', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90, notes: 'Mancuerna ligera o a silla' },
      { exerciseId: 'romanian-deadlifts', order: 3, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 90, notes: 'Mancuernas ligeras' },
      { exerciseId: 'weighted-step-ups', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60, notes: 'Caja baja, sin peso o ligero' },
      { exerciseId: 'calf-raises', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'tandem-walk', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 15, targetRepsMax: 20, restSeconds: 30 },
      { exerciseId: 'single-leg-stance', order: 7, intensity: 'light', targetSets: 2, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 25, notes: '25 seg cada pierna' }
    ]
  },
  {
    id: 'titan-p1-fullbody',
    name: 'Día 3 — Full Body Funcional (Fase 1)',
    type: 'full',
    dayOfWeek: 5,
    phaseId: 'titan-phase1',
    estimatedDuration: 45,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'pushups', order: 2, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 60, notes: 'Incline push-up en banco' },
      { exerciseId: 'sit-to-stand', order: 3, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'db-row', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'suitcase-carry', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 30, notes: '30 seg cada lado' },
      { exerciseId: 'pallof-press', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 45, notes: 'Con banda o cable' },
      { exerciseId: 'floor-get-up', order: 7, intensity: 'light', targetSets: 3, targetRepsMin: 3, targetRepsMax: 5, restSeconds: 60 }
    ]
  },
  {
    id: 'titan-p1-cardio',
    name: 'Día 4 — Cardio Zona 2 + Flex (Fase 1)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'titan-phase1',
    estimatedDuration: 50,
    optional: true,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'hip-circles', order: 2, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'wall-angels', order: 3, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'bird-dog', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'single-leg-stance', order: 5, intensity: 'light', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 25 },
      { exerciseId: 'tandem-walk', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 20, targetRepsMax: 20, restSeconds: 30 }
    ]
  }
];

// ============================================
// PHASE 2: FORTALECIMIENTO
// ============================================
const titanPhase2Workouts: WorkoutTemplate[] = [
  {
    id: 'titan-p2-upper',
    name: 'Día 1 — Upper + Estabilidad (Fase 2)',
    type: 'upper',
    dayOfWeek: 1,
    phaseId: 'titan-phase2',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'wall-angels', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'db-shoulder-press', order: 2, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90, notes: 'Sentado, progresión de peso' },
      { exerciseId: 'lat-pulldown', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'incline-db-press', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'cable-rows', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'face-pulls', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'farmers-walk', order: 7, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 40 },
      { exerciseId: 'dead-bug', order: 8, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 45 }
    ]
  },
  {
    id: 'titan-p2-lower',
    name: 'Día 2 — Lower + Balance (Fase 2)',
    type: 'lower',
    dayOfWeek: 3,
    phaseId: 'titan-phase2',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'hip-circles', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'goblet-squat', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90, notes: 'Mancuerna más pesada' },
      { exerciseId: 'romanian-deadlifts', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'leg-press', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90, notes: 'Fuerza con soporte lumbar' },
      { exerciseId: 'weighted-step-ups', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'calf-raises', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'tandem-walk', order: 7, intensity: 'light', targetSets: 3, targetRepsMin: 20, targetRepsMax: 20, restSeconds: 30, notes: 'Ojos cerrados si posible' }
    ]
  },
  {
    id: 'titan-p2-fullbody',
    name: 'Día 3 — Full Body Funcional (Fase 2)',
    type: 'full',
    dayOfWeek: 5,
    phaseId: 'titan-phase2',
    estimatedDuration: 50,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'pushups', order: 2, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 15, restSeconds: 60, notes: 'Incline o full push-up' },
      { exerciseId: 'goblet-squat', order: 3, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'db-row', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'suitcase-carry', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 40 },
      { exerciseId: 'pallof-press', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 45 },
      { exerciseId: 'floor-get-up', order: 7, intensity: 'medium', targetSets: 3, targetRepsMin: 4, targetRepsMax: 6, restSeconds: 60 }
    ]
  },
  {
    id: 'titan-p2-cardio',
    name: 'Día 4 — Cardio Zona 2 + Flex (Fase 2)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'titan-phase2',
    estimatedDuration: 50,
    optional: true,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'hip-circles', order: 2, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'wall-angels', order: 3, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'bird-dog', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 30 },
      { exerciseId: 'single-leg-stance', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 30, notes: '30 seg, ojos cerrados si posible' },
      { exerciseId: 'tandem-walk', order: 6, intensity: 'light', targetSets: 3, targetRepsMin: 20, targetRepsMax: 20, restSeconds: 30 }
    ]
  }
];

// ============================================
// PHASE 3: RENDIMIENTO
// ============================================
const titanPhase3Workouts: WorkoutTemplate[] = [
  {
    id: 'titan-p3-upper',
    name: 'Día 1 — Upper + Estabilidad (Fase 3)',
    type: 'upper',
    dayOfWeek: 1,
    phaseId: 'titan-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'wall-angels', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'db-shoulder-press', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'lat-pulldown', order: 3, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'incline-db-press', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'cable-rows', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'face-pulls', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60 },
      { exerciseId: 'farmers-walk', order: 7, intensity: 'medium', targetSets: 4, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 45 },
      { exerciseId: 'plank', order: 8, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 30 }
    ]
  },
  {
    id: 'titan-p3-lower',
    name: 'Día 2 — Lower + Balance (Fase 3)',
    type: 'lower',
    dayOfWeek: 3,
    phaseId: 'titan-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'hip-circles', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'barbell-squats', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 120, notes: 'Progresión desde goblet squat — barra si es seguro' },
      { exerciseId: 'romanian-deadlifts', order: 3, intensity: 'medium', targetSets: 4, targetRepsMin: 8, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'leg-press', order: 4, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 90 },
      { exerciseId: 'weighted-step-ups', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'calf-raises', order: 6, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 45 },
      { exerciseId: 'single-leg-stance', order: 7, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 30, notes: 'Ojos cerrados' }
    ]
  },
  {
    id: 'titan-p3-fullbody',
    name: 'Día 3 — Full Body Funcional (Fase 3)',
    type: 'full',
    dayOfWeek: 5,
    phaseId: 'titan-phase3',
    estimatedDuration: 55,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'pushups', order: 2, intensity: 'medium', targetSets: 4, targetRepsMin: 12, targetRepsMax: 15, restSeconds: 60, notes: 'Full push-ups' },
      { exerciseId: 'goblet-squat', order: 3, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'db-row', order: 4, intensity: 'medium', targetSets: 4, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 60 },
      { exerciseId: 'suitcase-carry', order: 5, intensity: 'medium', targetSets: 4, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 60, durationSeconds: 45 },
      { exerciseId: 'pallof-press', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 45 },
      { exerciseId: 'floor-get-up', order: 7, intensity: 'medium', targetSets: 4, targetRepsMin: 4, targetRepsMax: 6, restSeconds: 60, notes: 'Sin manos si posible' }
    ]
  },
  {
    id: 'titan-p3-cardio',
    name: 'Día 4 — Cardio Zona 2 + Intervalos (Fase 3)',
    type: 'full',
    dayOfWeek: 6,
    phaseId: 'titan-phase3',
    estimatedDuration: 55,
    optional: true,
    exercises: [
      { exerciseId: 'cat-cow', order: 1, intensity: 'light', targetSets: 2, targetRepsMin: 8, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'hip-circles', order: 2, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'wall-angels', order: 3, intensity: 'light', targetSets: 2, targetRepsMin: 10, targetRepsMax: 10, restSeconds: 30 },
      { exerciseId: 'bird-dog', order: 4, intensity: 'light', targetSets: 3, targetRepsMin: 10, targetRepsMax: 12, restSeconds: 30 },
      { exerciseId: 'single-leg-stance', order: 5, intensity: 'medium', targetSets: 3, targetRepsMin: 1, targetRepsMax: 1, restSeconds: 30, durationSeconds: 30 },
      { exerciseId: 'tandem-walk', order: 6, intensity: 'medium', targetSets: 3, targetRepsMin: 20, targetRepsMax: 20, restSeconds: 30, notes: 'Ojos cerrados si posible' }
    ]
  }
];

// ============================================
// TITAN PROGRAM DEFINITION
// ============================================
export const titanProgram: WorkoutProgram = {
  id: 'titan-seniors',
  name: 'Titan',
  description: 'Programa de longevidad para mayores de 60. 4 días/semana con Fase 0 de activación.\nBasado en Peter Attia (Outlive), Andy Galpin y evidencia en sarcopenia.\nLos 4 pilares: Estabilidad → Fuerza → Zona 2 → VO2max.',
  author: 'Achilles Fitness (basado en Attia, Galpin)',
  difficulty: 'beginner',
  goal: 'general_fitness',
  daysPerWeek: 4,
  weeks: 16,
  equipmentRequired: ['dumbbell', 'cable', 'machine', 'bodyweight'],
  minEquipmentRequired: ['bodyweight'],
  phases: titanPhases,
  workouts: [
    ...titanPhase0Workouts,
    ...titanPhase1Workouts,
    ...titanPhase2Workouts,
    ...titanPhase3Workouts
  ],
  nutritionGuidelines: titanNutrition
};
