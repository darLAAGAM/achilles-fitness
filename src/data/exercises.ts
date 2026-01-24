import type { Exercise } from '../types';

export const exercises: Exercise[] = [
  // ============================================
  // PUSH EXERCISES - CHEST
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
    id: 'incline-barbell-press',
    name: 'Incline Barbell Press',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU',
    techniqueNotes: [
      'Banco a 30-45 grados',
      'Agarre ligeramente más ancho que los hombros',
      'Baja la barra a la parte superior del pecho',
      'Mantén los codos a 45 grados del cuerpo'
    ],
    commonMistakes: [
      'Ángulo del banco muy alto',
      'Descender la barra demasiado bajo',
      'No retraer escápulas'
    ],
    strengthStandards: {
      beginner: 0.4,
      intermediate: 0.8,
      advanced: 1.2,
      elite: 1.6
    },
    defaultRestSeconds: 150
  },
  {
    id: 'db-flat-press',
    name: 'Dumbbell Flat Press',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
    techniqueNotes: [
      'Mayor rango de movimiento que barra',
      'Permite rotación natural de muñecas',
      'Junta las mancuernas arriba',
      'Controla el descenso'
    ],
    commonMistakes: [
      'Usar demasiado peso perdiendo control',
      'No bajar suficiente',
      'Codos demasiado abiertos'
    ],
    strengthStandards: {
      beginner: 0.25,
      intermediate: 0.45,
      advanced: 0.65,
      elite: 0.85
    },
    defaultRestSeconds: 120
  },
  {
    id: 'incline-db-fly',
    name: 'Incline Dumbbell Fly',
    muscleGroup: 'chest',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=bDaIL_gsvzE',
    techniqueNotes: [
      'Banco a 30-45 grados',
      'Ligera flexión de codos constante',
      'Abre los brazos sintiendo estiramiento',
      'Junta arriba apretando el pecho'
    ],
    commonMistakes: [
      'Flexionar demasiado los codos',
      'Bajar demasiado (riesgo de hombro)',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 90
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
    id: 'standing-cable-fly',
    name: 'Standing Cable Fly',
    muscleGroup: 'chest',
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=taI4XduLpTk',
    techniqueNotes: [
      'Un pie adelante para estabilidad',
      'Poleas a altura del hombro',
      'Mantén tensión constante',
      'Cruza las manos al frente'
    ],
    commonMistakes: [
      'Inclinarse demasiado hacia adelante',
      'Perder la posición del core',
      'Movimiento muy rápido'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'dips',
    name: 'Dips',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As',
    techniqueNotes: [
      'Inclínate hacia adelante para enfatizar pecho',
      'Baja hasta 90 grados de flexión',
      'Codos hacia afuera para pecho',
      'Empuja hasta extensión completa'
    ],
    commonMistakes: [
      'Bajar demasiado (riesgo de hombro)',
      'Mantenerse vertical (más tríceps)',
      'Balancear el cuerpo'
    ],
    strengthStandards: {
      beginner: 0,
      intermediate: 0.25,
      advanced: 0.5,
      elite: 0.75
    },
    defaultRestSeconds: 120
  },
  {
    id: 'pushups',
    name: 'Push-ups',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders_front', 'abs'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    techniqueNotes: [
      'Manos ligeramente más anchas que hombros',
      'Cuerpo en línea recta de cabeza a pies',
      'Baja el pecho al suelo',
      'Core apretado durante todo el movimiento'
    ],
    commonMistakes: [
      'Caderas demasiado altas o bajas',
      'No bajar suficiente',
      'Codos demasiado abiertos'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'decline-pushups',
    name: 'Decline Push-ups',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=SKPab2YC8BE',
    techniqueNotes: [
      'Pies elevados sobre banco o superficie',
      'Mayor énfasis en pecho superior',
      'Mantén el core apretado',
      'Baja el pecho hacia el suelo'
    ],
    commonMistakes: [
      'Elevación demasiado alta',
      'Perder alineación corporal',
      'Rango de movimiento incompleto'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'close-grip-pushups',
    name: 'Close Grip Push-ups',
    muscleGroup: 'triceps',
    secondaryMuscles: ['chest', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=5Gl0zSjHkAE',
    techniqueNotes: [
      'Manos cerca formando un diamante o más juntas',
      'Codos pegados al cuerpo',
      'Baja controlado tocando el pecho',
      'Mayor énfasis en tríceps'
    ],
    commonMistakes: [
      'Codos abiertos hacia afuera',
      'Caderas caídas',
      'Rango de movimiento corto'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'deficit-pushups',
    name: 'Deficit Push-ups',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=cfns1sWVmXY',
    techniqueNotes: [
      'Manos sobre superficies elevadas',
      'Mayor rango de movimiento',
      'Baja más profundo que push-up normal',
      'Excelente para estiramiento del pecho'
    ],
    commonMistakes: [
      'Bajar demasiado rápido',
      'Perder control en la posición baja',
      'Superficies inestables'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'judo-pushup',
    name: 'Judo Push-up',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps', 'abs'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=k5sVvYPY5Co',
    techniqueNotes: [
      'Comienza en V invertida (downward dog)',
      'Baja la cabeza hacia las manos',
      'Desliza hacia adelante rozando el suelo',
      'Empuja hacia arriba arqueando la espalda'
    ],
    commonMistakes: [
      'Movimiento demasiado rápido',
      'No fluir entre posiciones',
      'Golpear la cara contra el suelo'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // PUSH EXERCISES - SHOULDERS
  // ============================================
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
    id: 'front-raises',
    name: 'Front Raises',
    muscleGroup: 'shoulders_front',
    category: 'isolation',
    equipment: ['dumbbell', 'barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=-t7fuZ0KhDA',
    techniqueNotes: [
      'Palmas hacia abajo o neutras',
      'Levanta hasta altura del hombro',
      'Mantén los codos semiflexionados',
      'Controla el descenso'
    ],
    commonMistakes: [
      'Usar impulso del cuerpo',
      'Levantar demasiado alto',
      'Arquear la espalda'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'db-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    muscleGroup: 'shoulders_front',
    secondaryMuscles: ['triceps', 'shoulders_side'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
    techniqueNotes: [
      'Sentado o de pie',
      'Mancuernas a la altura de las orejas',
      'Empuja hacia arriba juntando ligeramente',
      'Baja controlado hasta posición inicial'
    ],
    commonMistakes: [
      'Arquear excesivamente la espalda',
      'No bajar suficiente',
      'Usar demasiado impulso'
    ],
    strengthStandards: {
      beginner: 0.25,
      intermediate: 0.45,
      advanced: 0.65,
      elite: 0.85
    },
    defaultRestSeconds: 120
  },
  {
    id: 'barbell-ohp',
    name: 'Barbell Overhead Press',
    muscleGroup: 'shoulders_front',
    secondaryMuscles: ['triceps', 'shoulders_side', 'abs'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=2yjwXTZQDDI',
    techniqueNotes: [
      'Barra en la clavícula',
      'Agarre ligeramente más ancho que hombros',
      'Empuja la barra sobre la cabeza',
      'Bloquea los codos arriba'
    ],
    commonMistakes: [
      'Inclinarse hacia atrás excesivamente',
      'No bloquear arriba',
      'Agarre demasiado ancho'
    ],
    strengthStandards: {
      beginner: 0.35,
      intermediate: 0.55,
      advanced: 0.8,
      elite: 1.05
    },
    defaultRestSeconds: 150
  },
  {
    id: 'db-upright-row',
    name: 'Dumbbell Upright Row',
    muscleGroup: 'shoulders_side',
    secondaryMuscles: ['shoulders_front', 'biceps'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=um3VVzqunPU',
    techniqueNotes: [
      'Mancuernas frente a los muslos',
      'Tira hacia arriba con codos liderando',
      'Codos más altos que las manos',
      'No subas más allá de los hombros'
    ],
    commonMistakes: [
      'Subir demasiado alto (impingement)',
      'Usar demasiado peso',
      'Muñecas dobladas'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'arnold-press',
    name: 'Arnold Press',
    muscleGroup: 'shoulders_front',
    secondaryMuscles: ['shoulders_side', 'triceps'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=6Z15_WdXmVw',
    techniqueNotes: [
      'Comienza con palmas hacia ti',
      'Rota mientras empujas hacia arriba',
      'Termina con palmas hacia adelante',
      'Invierte el movimiento al bajar'
    ],
    commonMistakes: [
      'Rotación incompleta',
      'Usar demasiado peso',
      'Movimiento muy rápido'
    ],
    strengthStandards: {
      beginner: 0.2,
      intermediate: 0.35,
      advanced: 0.5,
      elite: 0.7
    },
    defaultRestSeconds: 120
  },

  // ============================================
  // PUSH EXERCISES - TRICEPS
  // ============================================
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
  {
    id: 'skull-crushers',
    name: 'Skull Crushers',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['barbell', 'ez_bar', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=d_KZxkY_0cM',
    techniqueNotes: [
      'Barra sobre la frente o ligeramente detrás',
      'Solo mueve los antebrazos',
      'Baja controlado hasta la frente',
      'Extiende completamente arriba'
    ],
    commonMistakes: [
      'Mover los codos hacia adelante/atrás',
      'Bajar a la nariz (riesgo)',
      'Usar demasiado peso'
    ],
    strengthStandards: {
      beginner: 0.2,
      intermediate: 0.35,
      advanced: 0.5,
      elite: 0.7
    },
    defaultRestSeconds: 90
  },
  {
    id: 'bodyweight-skullcrusher',
    name: 'Bodyweight Skull Crusher',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=1I9pGR1Dgkc',
    techniqueNotes: [
      'Manos en barra o superficie elevada',
      'Cuerpo en línea recta',
      'Baja la cabeza hacia las manos',
      'Extiende los codos para subir'
    ],
    commonMistakes: [
      'Caderas caídas',
      'No mantener codos fijos',
      'Superficie muy alta o baja'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'tricep-kickbacks',
    name: 'Tricep Kickbacks',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=6SS6K3lAwZ8',
    techniqueNotes: [
      'Torso paralelo al suelo',
      'Codo a 90 grados pegado al cuerpo',
      'Extiende completamente hacia atrás',
      'Pausa y aprieta arriba'
    ],
    commonMistakes: [
      'Mover el codo',
      'No extender completamente',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // PULL EXERCISES - BACK
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
    id: 'chinups',
    name: 'Chin-ups',
    muscleGroup: 'back_width',
    secondaryMuscles: ['biceps', 'back_thickness'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
    techniqueNotes: [
      'Agarre supino (palmas hacia ti)',
      'Anchura de hombros o más estrecho',
      'Tira del pecho hacia la barra',
      'Mayor activación de bíceps'
    ],
    commonMistakes: [
      'No bajar completamente',
      'Usar impulso',
      'No retraer escápulas'
    ],
    strengthStandards: {
      beginner: 0,
      intermediate: 0.25,
      advanced: 0.5,
      elite: 0.75
    },
    defaultRestSeconds: 120
  },
  {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    muscleGroup: 'back_width',
    secondaryMuscles: ['biceps'],
    category: 'compound',
    equipment: ['cable', 'machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    techniqueNotes: [
      'Agarre ancho, palmas hacia adelante',
      'Tira hacia la parte superior del pecho',
      'Aprieta los dorsales abajo',
      'Controla el ascenso'
    ],
    commonMistakes: [
      'Tirar detrás de la cabeza',
      'Inclinarse demasiado hacia atrás',
      'Usar impulso'
    ],
    strengthStandards: {
      beginner: 0.5,
      intermediate: 0.8,
      advanced: 1.1,
      elite: 1.4
    },
    defaultRestSeconds: 120
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
    id: 'one-arm-cable-row',
    name: 'One Arm Cable Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['biceps'],
    category: 'compound',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=xQNrFHEMhI4',
    techniqueNotes: [
      'De pie o sentado',
      'Tira hacia la cadera',
      'Rota ligeramente el torso',
      'Mayor rango de movimiento unilateral'
    ],
    commonMistakes: [
      'Rotar demasiado el torso',
      'Usar impulso',
      'No controlar la negativa'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'barbell-bent-over-row',
    name: 'Barbell Bent Over Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['back_width', 'biceps', 'hamstrings'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=FWJR5Ve8bnQ',
    techniqueNotes: [
      'Torso a 45-60 grados',
      'Tira hacia el ombligo',
      'Aprieta escápulas arriba',
      'Mantén core apretado'
    ],
    commonMistakes: [
      'Torso muy vertical',
      'Redondear la espalda',
      'Usar impulso'
    ],
    strengthStandards: {
      beginner: 0.5,
      intermediate: 0.75,
      advanced: 1.0,
      elite: 1.3
    },
    defaultRestSeconds: 150
  },
  {
    id: 'db-row',
    name: 'Dumbbell Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['biceps'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
    techniqueNotes: [
      'Una mano y rodilla en banco',
      'Tira la mancuerna hacia la cadera',
      'Aprieta el dorsal arriba',
      'Controla el descenso'
    ],
    commonMistakes: [
      'Rotar el torso',
      'Tirar muy hacia el pecho',
      'No estirar abajo'
    ],
    strengthStandards: {
      beginner: 0.25,
      intermediate: 0.4,
      advanced: 0.6,
      elite: 0.8
    },
    defaultRestSeconds: 90
  },
  {
    id: 't-bar-row',
    name: 'T-Bar Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['back_width', 'biceps'],
    category: 'compound',
    equipment: ['barbell', 'machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=j3Igk5nyZE4',
    techniqueNotes: [
      'Torso a 45 grados',
      'Tira hacia el pecho',
      'Aprieta escápulas juntas',
      'Mantén espalda neutra'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Usar demasiado impulso',
      'Torso muy vertical'
    ],
    strengthStandards: {
      beginner: 0.4,
      intermediate: 0.7,
      advanced: 1.0,
      elite: 1.3
    },
    defaultRestSeconds: 120
  },
  {
    id: 'inverted-row',
    name: 'Inverted Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['biceps', 'back_width'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
    techniqueNotes: [
      'Cuerpo en línea recta',
      'Tira el pecho hacia la barra',
      'Aprieta escápulas arriba',
      'Extensión completa abajo'
    ],
    commonMistakes: [
      'Caderas caídas',
      'No subir suficiente',
      'Codos muy abiertos'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'snatch-grip-deadlift',
    name: 'Snatch Grip Deadlift',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['hamstrings', 'glutes', 'back_width'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=RXvkUyYO0CE',
    techniqueNotes: [
      'Agarre muy ancho (snatch)',
      'Mayor rango de movimiento',
      'Mantén espalda neutra',
      'Empuja con las piernas'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Agarre no suficientemente ancho',
      'Caderas subiendo muy rápido'
    ],
    strengthStandards: {
      beginner: 0.7,
      intermediate: 1.1,
      advanced: 1.5,
      elite: 1.9
    },
    defaultRestSeconds: 180
  },
  {
    id: 'deadlift',
    name: 'Conventional Deadlift',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['hamstrings', 'glutes', 'quads'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q',
    techniqueNotes: [
      'Pies a anchura de caderas',
      'Agarre justo fuera de las piernas',
      'Espalda neutra durante todo el movimiento',
      'Empuja el suelo, no tires'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Caderas subiendo primero',
      'Barra alejada del cuerpo'
    ],
    strengthStandards: {
      beginner: 1.0,
      intermediate: 1.5,
      advanced: 2.0,
      elite: 2.5
    },
    defaultRestSeconds: 180
  },

  // ============================================
  // PULL EXERCISES - REAR DELTS
  // ============================================
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
  {
    id: 'chest-supported-facepull',
    name: 'Chest Supported Face Pull',
    muscleGroup: 'shoulders_rear',
    secondaryMuscles: ['back_thickness'],
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=eFxMixCQPCs',
    techniqueNotes: [
      'Pecho apoyado en banco inclinado',
      'Elimina impulso del cuerpo',
      'Tira con codos altos',
      'Rota externamente al final'
    ],
    commonMistakes: [
      'Despegar el pecho del banco',
      'Codos muy bajos',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // PULL EXERCISES - BICEPS
  // ============================================
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
    id: 'incline-db-curl',
    name: 'Incline Dumbbell Curl',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=soxrZlIl35U',
    techniqueNotes: [
      'Banco a 45-60 grados',
      'Brazos colgando hacia atrás',
      'Mayor estiramiento del bíceps',
      'No dejes que los codos avancen'
    ],
    commonMistakes: [
      'Banco muy vertical',
      'Mover los codos hacia adelante',
      'Usar impulso'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['barbell', 'dumbbell', 'machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=fIWP-FRFNU0',
    techniqueNotes: [
      'Axilas apoyadas en el cojín',
      'Brazos paralelos a la superficie',
      'Sube hasta contracción completa',
      'Baja controlado'
    ],
    commonMistakes: [
      'No apoyar bien las axilas',
      'Bajar muy rápido',
      'Extender completamente (riesgo)'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=0AUGkch3tzc',
    techniqueNotes: [
      'Codo apoyado en muslo interno',
      'Aísla completamente el bíceps',
      'Sube girando la muñeca hacia afuera',
      'Pausa y aprieta arriba'
    ],
    commonMistakes: [
      'Mover el codo',
      'Balancear el cuerpo',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'bodyweight-bicep-curl',
    name: 'Bodyweight Bicep Curl',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=pQi2R7nL3dc',
    techniqueNotes: [
      'Usa TRX o sábana sobre puerta',
      'Cuerpo inclinado hacia atrás',
      'Tira del cuerpo hacia las manos',
      'Solo flexiona los codos'
    ],
    commonMistakes: [
      'Tirar con la espalda',
      'Codos moviéndose',
      'Rango incompleto'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // LEG EXERCISES - QUADS
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
    id: 'front-squat',
    name: 'Front Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'abs'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=m4ytaCJZpl0',
    techniqueNotes: [
      'Barra en deltoides frontales',
      'Codos altos, paralelos al suelo',
      'Torso más vertical que back squat',
      'Mayor énfasis en cuádriceps'
    ],
    commonMistakes: [
      'Codos caídos',
      'Perder la barra',
      'Inclinarse hacia adelante'
    ],
    strengthStandards: {
      beginner: 0.6,
      intermediate: 1.0,
      advanced: 1.4,
      elite: 1.8
    },
    defaultRestSeconds: 180
  },
  {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'abs'],
    category: 'compound',
    equipment: ['dumbbell', 'kettlebell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
    techniqueNotes: [
      'Sostén mancuerna/kettlebell al pecho',
      'Codos entre las rodillas',
      'Baja profundo manteniéndote erguido',
      'Excelente para aprender la sentadilla'
    ],
    commonMistakes: [
      'No bajar suficiente',
      'Inclinarse hacia adelante',
      'Soltar el peso del pecho'
    ],
    defaultRestSeconds: 90
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
    id: 'hack-squat',
    name: 'Hack Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=0tn5K9NlCfo',
    techniqueNotes: [
      'Espalda plana contra el respaldo',
      'Pies adelante en la plataforma',
      'Baja hasta que muslos estén paralelos',
      'Empuja a través de los talones'
    ],
    commonMistakes: [
      'Despegar espalda del respaldo',
      'Rodillas pasando mucho de los pies',
      'Rango incompleto'
    ],
    defaultRestSeconds: 120
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    muscleGroup: 'quads',
    category: 'isolation',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=YyvSfVjQeL0',
    techniqueNotes: [
      'Espalda pegada al respaldo',
      'Rodilla alineada con eje de la máquina',
      'Extiende completamente arriba',
      'Baja controlado'
    ],
    commonMistakes: [
      'Usar impulso',
      'No extender completamente',
      'Despegar caderas del asiento'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['dumbbell', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
    techniqueNotes: [
      'Pie trasero elevado en banco',
      'Torso erguido',
      'Baja hasta que muslo delantero esté paralelo',
      'Empuja a través del talón delantero'
    ],
    commonMistakes: [
      'Inclinarse hacia adelante',
      'Rodilla delantera colapsando hacia adentro',
      'Paso muy corto o largo'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['bodyweight', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
    techniqueNotes: [
      'Paso largo hacia adelante',
      'Rodilla trasera casi toca el suelo',
      'Torso erguido',
      'Empuja desde el talón delantero'
    ],
    commonMistakes: [
      'Paso muy corto',
      'Rodillas colapsando hacia adentro',
      'Inclinarse hacia adelante'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'reverse-lunges',
    name: 'Reverse Lunges',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['bodyweight', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
    techniqueNotes: [
      'Paso hacia atrás',
      'Más fácil de balancear que lunge frontal',
      'Rodilla trasera casi al suelo',
      'Empuja con pierna delantera para volver'
    ],
    commonMistakes: [
      'Paso muy corto',
      'Perder el equilibrio',
      'Torso inclinado'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'jump-squat',
    name: 'Jump Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'calves'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=A-cFYWvaHr0',
    techniqueNotes: [
      'Baja a sentadilla parcial o completa',
      'Explota hacia arriba saltando',
      'Aterriza suave flexionando rodillas',
      'Movimiento continuo y rítmico'
    ],
    commonMistakes: [
      'Aterrizaje rígido',
      'No usar los brazos',
      'Sentadilla muy superficial'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'broad-jump',
    name: 'Broad Jump',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings', 'calves'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=96zJo3nlmHI',
    techniqueNotes: [
      'Posición atlética inicial',
      'Balancea brazos hacia atrás',
      'Explota hacia adelante y arriba',
      'Aterriza suave con flexión de rodillas'
    ],
    commonMistakes: [
      'No usar brazos',
      'Aterrizaje rígido',
      'Saltar muy vertical'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // LEG EXERCISES - HAMSTRINGS/GLUTES
  // ============================================
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
    id: 'db-stiff-leg-deadlift',
    name: 'Dumbbell Stiff Leg Deadlift',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes', 'back_thickness'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=cYKYGwcg0U8',
    techniqueNotes: [
      'Piernas casi rectas',
      'Mayor estiramiento que RDL',
      'Mancuernas cerca de las piernas',
      'Espalda neutra todo el tiempo'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Bloquear completamente rodillas',
      'Bajar demasiado rápido'
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
    id: 'seated-leg-curl',
    name: 'Seated Leg Curl',
    muscleGroup: 'hamstrings',
    category: 'isolation',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Orxowest56U',
    techniqueNotes: [
      'Espalda pegada al respaldo',
      'Cojín sobre los muslos',
      'Flexiona completamente',
      'Mayor estiramiento que acostado'
    ],
    commonMistakes: [
      'Despegar la espalda',
      'Rango incompleto',
      'Usar demasiado peso'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'hip-thrust',
    name: 'Hip Thrust',
    muscleGroup: 'glutes',
    secondaryMuscles: ['hamstrings'],
    category: 'compound',
    equipment: ['barbell', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=SEdqd1n0cvg',
    techniqueNotes: [
      'Espalda alta apoyada en banco',
      'Pies a anchura de caderas',
      'Empuja caderas hacia el techo',
      'Aprieta glúteos arriba'
    ],
    commonMistakes: [
      'Hiperextender la espalda',
      'Pies muy cerca o lejos',
      'No apretar arriba'
    ],
    strengthStandards: {
      beginner: 0.5,
      intermediate: 1.0,
      advanced: 1.5,
      elite: 2.0
    },
    defaultRestSeconds: 120
  },
  {
    id: 'glute-ham-raise',
    name: 'Glute Ham Raise',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['machine', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=lGfcOPrJJhE',
    techniqueNotes: [
      'Rodillas en el cojín',
      'Baja controlado manteniendo caderas extendidas',
      'Usa isquios para subir',
      'Mantén core apretado'
    ],
    commonMistakes: [
      'Flexionar caderas',
      'Caer sin control',
      'No usar todo el rango'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'single-leg-press',
    name: 'Single Leg Press',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=vMrbX0gwnQg',
    techniqueNotes: [
      'Un pie en la plataforma',
      'Pie más alto para más glúteo',
      'Mantén espalda baja pegada',
      'Controla todo el movimiento'
    ],
    commonMistakes: [
      'Despegar espalda del asiento',
      'Bloquear rodilla',
      'Rango incompleto'
    ],
    defaultRestSeconds: 90
  },

  // ============================================
  // LEG EXERCISES - CALVES
  // ============================================
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
    id: 'single-leg-calf-raise',
    name: 'Single Leg Calf Raise',
    muscleGroup: 'calves',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=OB-ANpZgpSA',
    techniqueNotes: [
      'Una mano para equilibrio',
      'Sube lo más alto posible',
      'Pausa arriba apretando',
      'Baja hasta estiramiento completo'
    ],
    commonMistakes: [
      'Movimiento muy rápido',
      'Rango incompleto',
      'Usar demasiado impulso'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'seated-calf-raise',
    name: 'Seated Calf Raise',
    muscleGroup: 'calves',
    category: 'isolation',
    equipment: ['machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=JbyjNymZOt0',
    techniqueNotes: [
      'Trabaja más el sóleo',
      'Rodillas a 90 grados',
      'Rango completo de movimiento',
      'Pausa arriba y abajo'
    ],
    commonMistakes: [
      'Rango muy corto',
      'Demasiado peso',
      'Sin pausa'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // CORE EXERCISES
  // ============================================
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
  },
  {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=ANVdMDaYRts',
    techniqueNotes: [
      'Espalda baja pegada al suelo',
      'Piernas casi rectas',
      'Movimiento alternado pequeño',
      'Manos bajo glúteos para soporte'
    ],
    commonMistakes: [
      'Espalda baja despegada',
      'Patadas muy grandes',
      'Aguantar la respiración'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunch',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=9FGilxCbdz8',
    techniqueNotes: [
      'Manos detrás de la cabeza',
      'Lleva codo a rodilla opuesta',
      'Rota el torso, no solo los codos',
      'Pierna extendida mientras la otra se flexiona'
    ],
    commonMistakes: [
      'Tirar del cuello',
      'Solo mover los codos sin rotar',
      'Movimiento muy rápido'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'lying-leg-raises',
    name: 'Lying Leg Raises',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
    techniqueNotes: [
      'Espalda baja pegada al suelo',
      'Piernas juntas y rectas',
      'Sube hasta 90 grados',
      'Baja controlado sin tocar el suelo'
    ],
    commonMistakes: [
      'Espalda baja despegándose',
      'Usar impulso',
      'Dejar caer las piernas'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'bent-knee-situps',
    name: 'Bent Knee Sit-ups',
    muscleGroup: 'abs',
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=1fbU_MkV7NE',
    techniqueNotes: [
      'Rodillas flexionadas, pies en el suelo',
      'Manos cruzadas al pecho o detrás de la cabeza',
      'Sube el torso completamente',
      'Baja controlado'
    ],
    commonMistakes: [
      'Tirar del cuello',
      'Usar impulso',
      'No subir completamente'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'prone-superman',
    name: 'Prone Superman',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['glutes'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
    techniqueNotes: [
      'Boca abajo con brazos extendidos',
      'Levanta brazos y piernas simultáneamente',
      'Mantén la posición 2-3 segundos',
      'O mantén isométrico 60 segundos'
    ],
    commonMistakes: [
      'Hiperextender el cuello',
      'No levantar suficiente',
      'Aguantar la respiración'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'plank',
    name: 'Plank',
    muscleGroup: 'abs',
    secondaryMuscles: ['shoulders_front'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
    techniqueNotes: [
      'Antebrazos y puntas de pies en el suelo',
      'Cuerpo en línea recta',
      'Core apretado, glúteos contraídos',
      'No dejar caer ni subir caderas'
    ],
    commonMistakes: [
      'Caderas muy altas o bajas',
      'Mirar hacia arriba (cuello)',
      'Aguantar la respiración'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'hanging-leg-raise',
    name: 'Hanging Leg Raise',
    muscleGroup: 'abs',
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Pr1ieGZ5atk',
    techniqueNotes: [
      'Colgado de barra con agarre prono',
      'Piernas rectas o flexionadas',
      'Sube las piernas hasta 90+ grados',
      'Baja controlado sin balanceo'
    ],
    commonMistakes: [
      'Usar impulso/balanceo',
      'No subir suficiente',
      'Soltar el agarre'
    ],
    defaultRestSeconds: 90
  },

  // ============================================
  // CARDIO/CONDITIONING
  // ============================================
  {
    id: 'burpees',
    name: 'Burpees',
    muscleGroup: 'quads',
    secondaryMuscles: ['chest', 'shoulders_front', 'abs'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU',
    techniqueNotes: [
      'De pie → sentadilla → plancha → flexión → sentadilla → salto',
      'Movimiento fluido y continuo',
      'Aterrizaje suave',
      'Excelente para cardio'
    ],
    commonMistakes: [
      'Saltar la flexión',
      'Aterrizaje rígido',
      'Perder forma por velocidad'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'mountain-climbers',
    name: 'Mountain Climbers',
    muscleGroup: 'abs',
    secondaryMuscles: ['shoulders_front', 'quads'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
    techniqueNotes: [
      'Posición de plancha alta',
      'Alterna rodillas hacia el pecho',
      'Mantén caderas bajas',
      'Ritmo constante'
    ],
    commonMistakes: [
      'Caderas muy altas',
      'No llevar rodilla suficientemente adelante',
      'Perder ritmo'
    ],
    defaultRestSeconds: 60
  },

  // ============================================
  // TRAP/NECK
  // ============================================
  {
    id: 'barbell-shrugs',
    name: 'Barbell Shrugs',
    muscleGroup: 'back_thickness',
    category: 'isolation',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=cJRVVxmytaM',
    techniqueNotes: [
      'Brazos rectos, barra frente a los muslos',
      'Sube los hombros hacia las orejas',
      'Pausa arriba apretando trapecios',
      'Baja controlado'
    ],
    commonMistakes: [
      'Rotar los hombros',
      'Flexionar los codos',
      'Usar demasiado peso perdiendo rango'
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'db-shrugs',
    name: 'Dumbbell Shrugs',
    muscleGroup: 'back_thickness',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=cJRVVxmytaM',
    techniqueNotes: [
      'Mancuernas a los lados',
      'Mayor rango que con barra',
      'Sube los hombros rectos',
      'Mantén brazos rectos'
    ],
    commonMistakes: [
      'Rotar los hombros',
      'Flexionar codos',
      'Movimiento muy rápido'
    ],
    defaultRestSeconds: 90
  },

  // ============================================
  // FOREARM EXERCISES
  // ============================================
  {
    id: 'wrist-curls',
    name: 'Wrist Curls',
    muscleGroup: 'forearms',
    category: 'isolation',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=7LtBSmhXLQI',
    techniqueNotes: [
      'Antebrazos apoyados, muñecas colgando',
      'Flexiona las muñecas hacia arriba',
      'Movimiento controlado',
      'Rango completo'
    ],
    commonMistakes: [
      'Mover los antebrazos',
      'Demasiado peso',
      'Rango incompleto'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'reverse-wrist-curls',
    name: 'Reverse Wrist Curls',
    muscleGroup: 'forearms',
    category: 'isolation',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=F8aU6K6RCNE',
    techniqueNotes: [
      'Palmas hacia abajo',
      'Extiende las muñecas hacia arriba',
      'Trabaja extensores del antebrazo',
      'Usa menos peso que wrist curls normales'
    ],
    commonMistakes: [
      'Demasiado peso',
      'Mover antebrazos',
      'Movimiento muy rápido'
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'farmers-walk',
    name: 'Farmers Walk',
    muscleGroup: 'forearms',
    secondaryMuscles: ['back_thickness', 'abs'],
    category: 'compound',
    equipment: ['dumbbell', 'kettlebell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Fkzk_RqlYig',
    techniqueNotes: [
      'Pesos pesados a los lados',
      'Camina con pasos cortos y controlados',
      'Mantén core apretado y postura erguida',
      'Agarre fuerte todo el tiempo'
    ],
    commonMistakes: [
      'Inclinarse hacia adelante',
      'Pasos muy largos',
      'Dejar caer los hombros'
    ],
    defaultRestSeconds: 90
  }
];

// Helper function to get exercise by ID
export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find(e => e.id === id);
}

// Helper function to get exercises by muscle group
export function getExercisesByMuscle(muscleGroup: string): Exercise[] {
  return exercises.filter(e =>
    e.muscleGroup === muscleGroup ||
    e.secondaryMuscles?.includes(muscleGroup as Exercise['muscleGroup'])
  );
}

// Helper function to get exercises by equipment
export function getExercisesByEquipment(equipment: string[]): Exercise[] {
  return exercises.filter(e =>
    e.equipment.some(eq => equipment.includes(eq))
  );
}

// Helper function to get bodyweight exercises
export function getBodyweightExercises(): Exercise[] {
  return exercises.filter(e =>
    e.equipment.includes('bodyweight') && e.equipment.length === 1
  );
}
