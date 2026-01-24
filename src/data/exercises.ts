import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  // ============================================
  // PUSH EXERCISES
  // ============================================
  {
    id: 'incline-db-press',
    name: 'Incline Dumbbell Press',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8',
    techniqueNotes: [
      'Banco a 30-45 grados',
      'Retrae y deprime las escápulas',
      'Baja controlado hasta que los codos formen 90 grados',
      'Empuja hacia arriba y ligeramente hacia adentro'
    ],
    commonMistakes: [
      'Arquear demasiado la espalda',
      'Ángulo del banco muy alto (convierte en press de hombro)',
      'Bajar demasiado los codos'
    ],
    strengthStandards: {
      beginner: 0.3,
      intermediate: 0.5,
      advanced: 0.75,
      elite: 1.0
    },
    defaultRestSeconds: 150
  },
  {
    id: 'flat-barbell-press',
    name: 'Flat Barbell Press',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
    techniqueNotes: [
      'Agarre ligeramente más ancho que los hombros',
      'Arco lumbar controlado, pies firmes',
      'Baja la barra al pecho medio-bajo',
      'Bloquea los codos arriba sin hiperextender'
    ],
    commonMistakes: [
      'Rebotar la barra en el pecho',
      'Levantar los glúteos del banco',
      'Agarre demasiado ancho o estrecho'
    ],
    strengthStandards: {
      beginner: 0.5,
      intermediate: 1.0,
      advanced: 1.5,
      elite: 2.0
    },
    defaultRestSeconds: 180
  },
  {
    id: 'cable-flyes',
    name: 'Cable Flyes',
    muscleGroup: 'chest',
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
    techniqueNotes: [
      'Poleas a la altura del pecho',
      'Ligera flexión de codos constante',
      'Siente el estiramiento en el pecho',
      'Junta las manos al frente apretando el pecho'
    ],
    commonMistakes: [
      'Usar demasiado peso y perder la forma',
      'Flexionar mucho los codos (se convierte en press)',
      'No controlar la fase negativa'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'lateral-raises',
    name: 'Lateral Raises',
    muscleGroup: 'shoulders_side',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=3VcKaXpzqRo',
    techniqueNotes: [
      'Codos ligeramente flexionados',
      'Levanta hasta la altura del hombro',
      'Pequeña pausa arriba',
      'Controla el descenso'
    ],
    commonMistakes: [
      'Usar impulso del cuerpo',
      'Subir los hombros hacia las orejas',
      'Levantar demasiado alto'
    ],
    strengthStandards: {
      beginner: 0.1,
      intermediate: 0.15,
      advanced: 0.2,
      elite: 0.25
    },
    defaultRestSeconds: 60
  },
  {
    id: 'tricep-pushdowns',
    name: 'Tricep Pushdowns',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=2-LAMcpzODU',
    techniqueNotes: [
      'Codos pegados al cuerpo',
      'Solo mueve el antebrazo',
      'Extiende completamente abajo',
      'Contrae el tríceps en la posición final'
    ],
    commonMistakes: [
      'Mover los codos hacia adelante',
      'Inclinarse sobre el cable',
      'No extender completamente'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'overhead-tricep-extension',
    name: 'Overhead Tricep Extension',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['dumbbell', 'cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=YbX7Wd8jQ-Q',
    techniqueNotes: [
      'Mantén los codos apuntando al techo',
      'Baja controlado detrás de la cabeza',
      'Extiende hasta casi bloquear',
      'Enfócate en el estiramiento de la cabeza larga'
    ],
    commonMistakes: [
      'Arquear la espalda',
      'Dejar que los codos se abran',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // PULL EXERCISES
  // ============================================
  {
    id: 'weighted-pullups',
    name: 'Weighted Pull-ups',
    muscleGroup: 'back_width',
    secondaryMuscles: ['biceps', 'back_thickness'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
    techniqueNotes: [
      'Agarre prono, ligeramente más ancho que los hombros',
      'Inicia retrayendo las escápulas',
      'Tira del pecho hacia la barra',
      'Baja controlado hasta extensión completa'
    ],
    commonMistakes: [
      'Usar kipping o impulso',
      'No bajar completamente',
      'Tirar solo con los brazos'
    ],
    strengthStandards: {
      beginner: 0,
      intermediate: 0.25,
      advanced: 0.5,
      elite: 0.75
    },
    defaultRestSeconds: 150
  },
  {
    id: 'cable-rows',
    name: 'Seated Cable Rows',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['back_width', 'biceps'],
    category: 'compound',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74',
    techniqueNotes: [
      'Espalda recta, pecho alto',
      'Tira hacia el ombligo',
      'Aprieta las escápulas al final',
      'Controla la vuelta estirando los dorsales'
    ],
    commonMistakes: [
      'Inclinarse demasiado hacia adelante o atrás',
      'Tirar solo con los brazos',
      'No estirar completamente'
    ],
    strengthStandards: {
      beginner: 0.5,
      intermediate: 0.75,
      advanced: 1.0,
      elite: 1.25
    },
    defaultRestSeconds: 120
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    muscleGroup: 'shoulders_rear',
    secondaryMuscles: ['back_thickness'],
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
    techniqueNotes: [
      'Cuerda a la altura de la cara',
      'Tira hacia la cara separando las manos',
      'Rota externamente los hombros',
      'Mantén los codos altos'
    ],
    commonMistakes: [
      'Usar demasiado peso',
      'No rotar los hombros externamente',
      'Inclinar el torso'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'barbell-curls',
    name: 'Barbell Curls',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['barbell', 'ez_bar'],
    youtubeUrl: 'https://www.youtube.com/watch?v=kwG2ipFRgfo',
    techniqueNotes: [
      'Codos pegados al cuerpo',
      'Sube hasta contracción completa',
      'Baja controlado sin bloquear',
      'Evita balancear el cuerpo'
    ],
    commonMistakes: [
      'Usar impulso del cuerpo',
      'Mover los codos hacia adelante',
      'No bajar completamente'
    ],
    strengthStandards: {
      beginner: 0.3,
      intermediate: 0.5,
      advanced: 0.7,
      elite: 0.9
    },
    defaultRestSeconds: 90
  },
  {
    id: 'hammer-curls',
    name: 'Hammer Curls',
    muscleGroup: 'biceps',
    secondaryMuscles: ['forearms'],
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4',
    techniqueNotes: [
      'Agarre neutro (palmas mirándose)',
      'Codos fijos al costado',
      'Sube hasta la contracción máxima',
      'Trabaja el braquial y braquiorradial'
    ],
    commonMistakes: [
      'Rotar las muñecas',
      'Balancear el cuerpo',
      'Rango de movimiento incompleto'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'rear-delt-flyes',
    name: 'Rear Delt Flyes',
    muscleGroup: 'shoulders_rear',
    category: 'isolation',
    equipment: ['dumbbell', 'cable', 'machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=EA7u4Q_8HQ0',
    techniqueNotes: [
      'Inclinación hacia adelante (70-80 grados)',
      'Brazos colgando perpendiculares al suelo',
      'Levanta hacia los lados manteniendo codos semiflexionados',
      'Aprieta las escápulas arriba'
    ],
    commonMistakes: [
      'Levantar demasiado alto',
      'Usar impulso',
      'No inclinar suficiente el torso'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // LEG EXERCISES
  // ============================================
  {
    id: 'barbell-squats',
    name: 'Barbell Squats',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8',
    techniqueNotes: [
      'Barra en trapecios superiores (high bar) o en deltoides posteriores (low bar)',
      'Pies a la anchura de los hombros, puntas ligeramente hacia afuera',
      'Baja hasta que los muslos estén paralelos o más abajo',
      'Rodillas en línea con los dedos de los pies'
    ],
    commonMistakes: [
      'Rodillas colapsando hacia adentro',
      'Levantar los talones',
      'Inclinarse demasiado hacia adelante',
      'No alcanzar profundidad adecuada'
    ],
    strengthStandards: {
      beginner: 0.75,
      intermediate: 1.25,
      advanced: 1.75,
      elite: 2.25
    },
    defaultRestSeconds: 180
  },
  {
    id: 'romanian-deadlifts',
    name: 'Romanian Deadlifts',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes', 'back_thickness'],
    category: 'compound',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
    techniqueNotes: [
      'Espalda recta durante todo el movimiento',
      'Flexión de rodillas mínima y constante',
      'Empuja las caderas hacia atrás',
      'Siente el estiramiento en los isquiotibiales'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Flexionar demasiado las rodillas',
      'Bajar demasiado (perdiendo tensión)'
    ],
    strengthStandards: {
      beginner: 0.75,
      intermediate: 1.25,
      advanced: 1.75,
      elite: 2.25
    },
    defaultRestSeconds: 150
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ',
    techniqueNotes: [
      'Pies a la anchura de los hombros en la plataforma',
      'Espalda baja pegada al respaldo',
      'Baja controlado hasta 90 grados de flexión de rodilla',
      'No bloquees las rodillas arriba'
    ],
    commonMistakes: [
      'Despegar la espalda baja del asiento',
      'Bloquear las rodillas completamente',
      'Usar un rango muy corto'
    ],
    defaultRestSeconds: 120
  },
  {
    id: 'leg-curls',
    name: 'Leg Curls',
    muscleGroup: 'hamstrings',
    category: 'isolation',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs',
    techniqueNotes: [
      'Rodilla alineada con el eje de la máquina',
      'Flexiona completamente llevando el talón al glúteo',
      'Controla el descenso',
      'Mantén las caderas pegadas al banco'
    ],
    commonMistakes: [
      'Levantar las caderas',
      'Usar impulso',
      'Rango de movimiento incompleto'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'calf-raises',
    name: 'Standing Calf Raises',
    muscleGroup: 'calves',
    category: 'isolation',
    equipment: ['machine', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=-M4-G8p8fmc',
    techniqueNotes: [
      'Pies a la anchura de las caderas',
      'Sube hasta la contracción máxima',
      'Pausa de 1-2 segundos arriba',
      'Baja hasta sentir estiramiento completo'
    ],
    commonMistakes: [
      'Rango de movimiento muy corto',
      'Subir muy rápido sin control',
      'No estirar completamente abajo'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'ab-wheel',
    name: 'Ab Wheel Rollout',
    muscleGroup: 'abs',
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=rqiTPdK1c_I',
    techniqueNotes: [
      'Empieza de rodillas',
      'Core apretado, espalda neutra',
      'Rueda hacia adelante controladamente',
      'No dejes que la cadera caiga'
    ],
    commonMistakes: [
      'Arquear la espalda baja',
      'Extenderse demasiado al inicio',
      'No controlar el movimiento'
    ],
    defaultRestSeconds: 90
  }
];
