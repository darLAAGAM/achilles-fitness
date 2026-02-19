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
    defaultRestSeconds: 150,
    alternatives: [
      {
        name: 'Incline Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=cfns5VDVVvk',
        briefTechnique: 'Manos en superficie elevada (banco/escalón), inclinación reduce dificultad'
      },
      {
        name: 'Resistance Band Chest Press',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=Z6ly4c3YC6o',
        briefTechnique: 'Banda anclada atrás, empuja al frente con contracción del pecho'
      }
    ]
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
    defaultRestSeconds: 180,
    alternatives: [
      {
        name: 'Dumbbell Flat Press',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
        briefTechnique: 'Mayor rango de movimiento, permite rotación natural de muñecas, junta arriba'
      },
      {
        name: 'Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
        briefTechnique: 'Manos ligeramente más anchas que hombros, cuerpo en línea recta, baja el pecho al suelo'
      },
      {
        name: 'Dips',
        reason: 'Solo barras paralelas',
        youtubeUrl: 'https://www.youtube.com/watch?v=2z8JmcrW-As',
        briefTechnique: 'Inclínate adelante para énfasis en pecho, baja hasta 90° de flexión de codo'
      }
    ]
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
    defaultRestSeconds: 150,
    alternatives: [
      {
        name: 'Incline Dumbbell Press',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8',
        briefTechnique: 'Banco a 30-45°, mancuernas permiten mayor rango de movimiento'
      },
      {
        name: 'Decline Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=SKPab2YC8BE',
        briefTechnique: 'Pies elevados, énfasis en pecho superior como press inclinado'
      },
      {
        name: 'Band Incline Press',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=Z6ly4c3YC6o',
        briefTechnique: 'Banda anclada abajo, empuja hacia arriba y adelante en ángulo'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Flat Barbell Press',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
        briefTechnique: 'Agarre ligeramente más ancho que hombros, baja al pecho medio-bajo'
      },
      {
        name: 'Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
        briefTechnique: 'Cuerpo en línea recta, baja el pecho al suelo, equivalente horizontal'
      },
      {
        name: 'Floor Press',
        reason: 'En casa - limitado ROM',
        youtubeUrl: 'https://www.youtube.com/watch?v=uUGDRwge4F8',
        briefTechnique: 'Acostado en el suelo, tríceps tocan suelo, press hasta extensión completa'
      }
    ]
  },
  {
    id: 'incline-db-fly',
    name: 'Incline Dumbbell Fly',
    muscleGroup: 'chest',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Incline Band Fly',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=Z6ly4c3YC6o',
        briefTechnique: 'Banda anclada atrás y abajo, movimiento de vuelo hacia arriba y adelante'
      },
      {
        name: 'Incline Push-up con pausa',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=cfns5VDVVvk',
        briefTechnique: 'Push-up inclinado con pausa de 2 seg. abajo para maximizar estiramiento'
      },
      {
        name: 'Cable Fly',
        reason: 'Solo cable/polea',
        youtubeUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
        briefTechnique: 'Poleas a altura del pecho, mismo patrón de movimiento horizontal'
      }
    ]
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Incline Dumbbell Fly',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
        briefTechnique: 'Banco a 30-45°, abre los brazos sintiendo estiramiento, junta arriba apretando pecho'
      },
      {
        name: 'Push-ups con pausa',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
        briefTechnique: 'Push-up normal pero con pausa de 2 segundos abajo para maximizar estiramiento del pecho'
      }
    ]
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Dumbbell Fly',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
        briefTechnique: 'Acostado en banco, brazos abiertos con codos semiflexionados, junta arriba'
      },
      {
        name: 'Push-ups con brazos anchos',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
        briefTechnique: 'Manos muy separadas para énfasis en estiramiento del pecho'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Chair Dips',
        reason: 'Solo silla/banco',
        youtubeUrl: 'https://www.youtube.com/watch?v=jDafIn0WMUw',
        briefTechnique: 'Manos en borde de silla detrás de ti, baja flexionando codos hacia atrás'
      },
      {
        name: 'Diamond Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos juntas formando diamante, codos pegados al cuerpo, énfasis en tríceps'
      },
      {
        name: 'Decline Push-ups',
        reason: 'Solo superficie elevada',
        youtubeUrl: 'https://www.youtube.com/watch?v=B47qabhNqQY',
        briefTechnique: 'Pies elevados, mayor énfasis en pecho superior como en dips'
      }
    ]
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Incline Push-ups',
        reason: 'Más fácil - superficie elevada',
        youtubeUrl: 'https://www.youtube.com/watch?v=cfns5VDVVvk',
        briefTechnique: 'Manos en superficie elevada, reduce dificultad manteniendo forma'
      },
      {
        name: 'Knee Push-ups',
        reason: 'Progresión más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=jWxvty2KROs',
        briefTechnique: 'Apoyado en rodillas en lugar de pies, mantén línea de rodillas a cabeza'
      },
      {
        name: 'Archer Push-ups',
        reason: 'Progresión más difícil',
        youtubeUrl: 'https://www.youtube.com/watch?v=lnR_kb7ZJKE',
        briefTechnique: 'Un brazo empuja, otro se extiende al lado, alterna lados'
      }
    ]
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Handstand Push-ups',
        reason: 'Progresión avanzada',
        youtubeUrl: 'https://www.youtube.com/watch?v=tQhrk6WMcKw',
        briefTechnique: 'Contra pared, cabeza hacia abajo, mayor énfasis en hombros'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Preparación para handstand',
        youtubeUrl: 'https://www.youtube.com/watch?v=x4YNq24tYwM',
        briefTechnique: 'V invertida, baja cabeza hacia manos, similar a decline'
      }
    ]
  },
  {
    id: 'close-grip-pushups',
    name: 'Close Grip Push-ups',
    muscleGroup: 'triceps',
    secondaryMuscles: ['chest', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=W3gBdsTzDrk',
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Tricep Dips',
        reason: 'Mayor énfasis en tríceps',
        youtubeUrl: 'https://www.youtube.com/watch?v=0326dy_-CzM',
        briefTechnique: 'En silla o barras paralelas, codos hacia atrás'
      },
      {
        name: 'Diamond Push-ups progresión',
        reason: 'Manos en triángulo',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos forman diamante, máximo énfasis en tríceps'
      }
    ]
  },
  {
    id: 'deficit-pushups',
    name: 'Deficit Push-ups',
    muscleGroup: 'chest',
    secondaryMuscles: ['triceps', 'shoulders_front'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=K_ftgRYit5U',
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Ring/TRX Push-ups',
        reason: 'Inestabilidad añadida',
        youtubeUrl: 'https://www.youtube.com/watch?v=4jRoHFNMbRM',
        briefTechnique: 'Manos en anillas o TRX, mayor rango de movimiento e inestabilidad'
      },
      {
        name: 'Medicine Ball Push-ups',
        reason: 'Una mano elevada',
        youtubeUrl: 'https://www.youtube.com/watch?v=cU8hv2hZBWE',
        briefTechnique: 'Una mano en pelota, alterna lados, mayor rango unilateral'
      }
    ]
  },
  {
    id: 'judo-pushup',
    name: 'Judo Push-up',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps', 'abs'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=pcQA61tWqL8',
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Hindu Push-ups',
        reason: 'Movimiento similar fluido',
        youtubeUrl: 'https://www.youtube.com/watch?v=oDZ4q4jXGwo',
        briefTechnique: 'Movimiento fluido de perro hacia arriba a perro hacia abajo'
      },
      {
        name: 'Dive Bomber Push-ups',
        reason: 'Variación de movimiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=mPqyOh8NQAQ',
        briefTechnique: 'Similar a judo pero movimiento más profundo y controlado'
      }
    ]
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
    alternatives: [
      {
        name: 'Band Lateral Raises',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=gfEyrmxbCbw',
        briefTechnique: 'Banda bajo los pies, levanta brazos hacia los lados con tensión constante'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=NlGt4unfx6M',
        briefTechnique: 'V invertida, baja cabeza hacia manos, trabaja deltoides frontales'
      }
    ],
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Band Front Raise',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=vryWeqG2b1I',
        briefTechnique: 'Banda bajo los pies, levanta hacia adelante hasta altura hombros'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=x4YNq24tYwM',
        briefTechnique: 'V invertida, trabaja deltoides frontal como front raise'
      }
    ]
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
    alternatives: [
      {
        name: 'Band Shoulder Press',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0rLjkQweIDg',
        briefTechnique: 'Banda bajo los pies, empuja hacia arriba con tensión creciente'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=NlGt4unfx6M',
        briefTechnique: 'V invertida, baja cabeza hacia manos trabajando deltoides'
      }
    ],
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
    defaultRestSeconds: 150,
    alternatives: [
      {
        name: 'Dumbbell Shoulder Press',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
        briefTechnique: 'Mancuernas a la altura de las orejas, empuja hacia arriba juntando ligeramente'
      },
      {
        name: 'Arnold Press',
        reason: 'Solo mancuernas - mayor ROM',
        youtubeUrl: 'https://www.youtube.com/watch?v=6Z15_WdXmVw',
        briefTechnique: 'Empieza con palmas hacia ti, rota mientras empujas hacia arriba'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Posición de V invertida, baja la cabeza hacia el suelo flexionando codos'
      }
    ]
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Band Upright Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=vryWeqG2b1I',
        briefTechnique: 'Banda bajo pies, tira hacia arriba con codos liderando'
      },
      {
        name: 'High Pull-ups',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=tZGhA-g1Rkg',
        briefTechnique: 'Pull-up explosivo tirando más alto que normal'
      }
    ]
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
    alternatives: [
      {
        name: 'Band Shoulder Press con rotación',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0rLjkQweIDg',
        briefTechnique: 'Banda bajo pies, empuja rotando palmas de neutro a adelante'
      },
      {
        name: 'Pike Push-ups con rotación',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=A3swtLdbFsw',
        briefTechnique: 'V invertida, baja y sube rotando posición de manos'
      }
    ],
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Overhead Tricep Extension',
        reason: 'Sin cable - solo mancuerna',
        youtubeUrl: 'https://www.youtube.com/watch?v=YbX7Wd8jQ-Q',
        briefTechnique: 'Mancuerna sobre la cabeza, extiende los codos manteniendo los brazos fijos junto a las orejas'
      },
      {
        name: 'Diamond Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos juntas formando diamante, codos pegados al cuerpo durante todo el movimiento'
      },
      {
        name: 'Tricep Kickbacks',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=6SS6K3lAwZ8',
        briefTechnique: 'Torso paralelo al suelo, extiende el codo completamente hacia atrás y aprieta'
      }
    ]
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Diamond Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos juntas formando diamante, codos pegados al cuerpo'
      },
      {
        name: 'Bodyweight Skull Crusher',
        reason: 'Solo barra o superficie',
        youtubeUrl: 'https://www.youtube.com/watch?v=99TWIhjzXuw',
        briefTechnique: 'Manos en barra baja, baja la cabeza hacia las manos, extiende codos'
      }
    ]
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Overhead Tricep Extension',
        reason: 'Solo mancuerna',
        youtubeUrl: 'https://www.youtube.com/watch?v=YbX7Wd8jQ-Q',
        briefTechnique: 'Mancuerna sobre la cabeza, extiende los codos manteniendo brazos fijos'
      },
      {
        name: 'Close Grip Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=W3gBdsTzDrk',
        briefTechnique: 'Manos cerca, codos pegados al cuerpo, énfasis en tríceps'
      },
      {
        name: 'Bodyweight Skull Crusher',
        reason: 'Solo barra baja',
        youtubeUrl: 'https://www.youtube.com/watch?v=99TWIhjzXuw',
        briefTechnique: 'Manos en barra, baja la cabeza hacia las manos flexionando codos'
      }
    ]
  },
  {
    id: 'bodyweight-skullcrusher',
    name: 'Bodyweight Skull Crusher',
    muscleGroup: 'triceps',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=99TWIhjzXuw',
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
    alternatives: [
      {
        name: 'Tricep Dips en banco',
        reason: 'Con banco o silla',
        youtubeUrl: 'https://www.youtube.com/watch?v=0326dy_-CzM',
        briefTechnique: 'Borde de banco, manos hacia atrás, baja flexionando codos'
      },
      {
        name: 'Diamond Push-ups',
        reason: 'Solo suelo',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos juntas formando diamante, codos pegados al cuerpo'
      }
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
    alternatives: [
      {
        name: 'Band Tricep Kickback',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=IBqwFj25bbU',
        briefTechnique: 'Banda anclada, brazo pegado al cuerpo, extiende hacia atrás'
      },
      {
        name: 'Diamond Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=J0DnG1_S92I',
        briefTechnique: 'Manos formando diamante, codos pegados, enfoque en tríceps'
      }
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
    defaultRestSeconds: 150,
    alternatives: [
      {
        name: 'Chin-ups',
        reason: 'Más fácil - agarre supino',
        youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
        briefTechnique: 'Agarre supino (palmas hacia ti), más activación de bíceps, más fácil que pullups'
      },
      {
        name: 'Inverted Row',
        reason: 'Progresión más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo una barra baja, cuerpo en línea, tira el pecho hacia la barra'
      },
      {
        name: 'Negative Pull-ups',
        reason: 'Para construir fuerza',
        youtubeUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
        briefTechnique: 'Salta arriba y baja muy lento (5-10 segundos), construye fuerza para pullups'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Assisted Chin-ups',
        reason: 'Con banda o máquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
        briefTechnique: 'Usa banda elástica o máquina de asistencia para reducir peso corporal'
      },
      {
        name: 'Inverted Row supino',
        reason: 'En casa con mesa',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo mesa, agarre supino (palmas hacia ti), tira pecho hacia barra'
      },
      {
        name: 'Band Lat Pulldown supino',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=gfEyrmxbCbw',
        briefTechnique: 'Banda anclada arriba, tira con agarre supino hacia el pecho'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Pull-ups / Chin-ups',
        reason: 'Solo barra de dominadas',
        youtubeUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
        briefTechnique: 'Colgado de barra, retrae escápulas primero, tira el pecho hacia la barra'
      },
      {
        name: 'Inverted Row',
        reason: 'En casa con mesa/barra baja',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Cuerpo en línea bajo una barra baja, tira el pecho hacia la barra'
      },
      {
        name: 'Incline Row con sábana',
        reason: 'Solo sábana y puerta',
        youtubeUrl: 'https://www.youtube.com/watch?v=rloXYB8M3vU',
        briefTechnique: 'Ata sábana a puerta, inclínate hacia atrás y tira del cuerpo hacia la puerta'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Dumbbell Row',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
        briefTechnique: 'Rodilla y mano en banco, tira la mancuerna hacia la cadera apretando el dorsal'
      },
      {
        name: 'Inverted Row',
        reason: 'Sin equipamiento - usa mesa',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo una mesa sólida, agarra el borde y tira el pecho hacia arriba'
      },
      {
        name: 'Bent Over Barbell Row',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=FWJR5Ve8bnQ',
        briefTechnique: 'Torso a 45-60°, tira la barra hacia el ombligo apretando escápulas'
      }
    ]
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
    alternatives: [
      {
        name: 'Single Arm Band Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=i8bwIc-Wdn0',
        briefTechnique: 'Banda anclada, tira hacia la cadera con rotación mínima'
      },
      {
        name: 'One Arm Dumbbell Row',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
        briefTechnique: 'Rodilla en banco, tira hacia cadera apretando dorsal'
      }
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
    alternatives: [
      {
        name: 'Bent Over Band Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies, inclínate y tira hacia ombligo'
      },
      {
        name: 'Inverted Row',
        reason: 'Sin equipamiento - mesa',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo mesa sólida, tira pecho hacia arriba manteniendo línea corporal'
      },
      {
        name: 'Dumbbell Bent Over Row',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
        briefTechnique: 'Ambas mancuernas, inclinado, tira hacia el ombligo'
      }
    ],
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
    alternatives: [
      {
        name: 'Bent Over Band Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies, tira hacia cadera con un brazo'
      },
      {
        name: 'Inverted Row unilateral',
        reason: 'Sin equipamiento - mesa',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo mesa, un brazo trabaja, mayor desafío unilateral'
      }
    ],
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
    alternatives: [
      {
        name: 'Landmine Row',
        reason: 'Solo barra y esquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=j3Igk5nyZE4',
        briefTechnique: 'Barra en esquina, agarre con V-grip o toalla, mismo ángulo'
      },
      {
        name: 'Bent Over Dumbbell Row',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=pYcpY20QaE8',
        briefTechnique: 'Ambas mancuernas, tira hacia pecho/ombligo'
      },
      {
        name: 'Resistance Band Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda anclada, ángulo similar al T-bar'
      }
    ],
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
    alternatives: [
      {
        name: 'Pull-ups asistidas',
        reason: 'Más desafiante - progresión',
        youtubeUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g',
        briefTechnique: 'Dominadas con ayuda de banda o compañero para construir fuerza'
      },
      {
        name: 'TRX Row',
        reason: 'Con TRX/anillas',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Agarres de TRX, mismo movimiento pero ajustable'
      },
      {
        name: 'Bent Over Band Row',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies, inclinado, tira hacia ombligo'
      }
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
    youtubeUrl: 'https://www.youtube.com/watch?v=5BvrPOHNkME',
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
    alternatives: [
      {
        name: 'Wide Grip Dumbbell Deadlift',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=cYKYGwcg0U8',
        briefTechnique: 'Mancuernas a los lados, agarre amplio simulado, mayor rango'
      },
      {
        name: 'Single Leg Romanian Deadlift',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, mayor desafío unilateral y estabilidad'
      },
      {
        name: 'Resistance Band Deadlift',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies, agarre amplio, similar patrón de movimiento'
      }
    ],
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
    alternatives: [
      {
        name: 'Romanian Deadlift',
        reason: 'Solo mancuernas/barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Menos rango, enfoque en isquios, más fácil de dominar'
      },
      {
        name: 'Goblet Squat',
        reason: 'Solo mancuerna/kettlebell',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Patrón similar de cadera, peso al frente más seguro'
      },
      {
        name: 'Hip Hinge con banda',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda anclada atrás, practica bisagra de cadera'
      }
    ],
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Rear Delt Flyes',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=EA7u4Q_8HQ0',
        briefTechnique: 'Inclinación 70-80°, levanta hacia los lados con codos semiflexionados, aprieta escápulas'
      },
      {
        name: 'Prone Y Raises',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, levanta brazos formando Y con rotación externa, mantén 2 segundos'
      },
      {
        name: 'Band Pull-Aparts',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Banda frente a ti, separa las manos llevándolas hacia los lados hasta tocar el pecho'
      }
    ]
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
    alternatives: [
      {
        name: 'Band Pull-Aparts',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Banda frente a ti, separa brazos llevando a los lados'
      },
      {
        name: 'Prone Y Raises',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, brazos en Y, levanta con rotación externa'
      },
      {
        name: 'Cable Reverse Fly',
        reason: 'Solo cable/polea',
        youtubeUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
        briefTechnique: 'Cables cruzados, separa brazos hacia atrás y arriba'
      }
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
    youtubeUrl: 'https://www.youtube.com/watch?v=tAp2J8tM6kw',
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
    alternatives: [
      {
        name: 'Face Pulls regulares',
        reason: 'Solo cable/banda',
        youtubeUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
        briefTechnique: 'De pie, cable a altura cara, separa manos tirando hacia cara'
      },
      {
        name: 'Band Pull-Aparts',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Banda frente a ti, altura del pecho, separa brazos'
      },
      {
        name: 'Prone T Raises',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, brazos en T, levanta trabajando deltoides posterior'
      }
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Hammer Curls',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=zC3nLlEvin4',
        briefTechnique: 'Agarre neutro (palmas mirándose), codos fijos, trabaja braquial'
      },
      {
        name: 'Incline Dumbbell Curl',
        reason: 'Mayor estiramiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=soxrZlIl35U',
        briefTechnique: 'Banco a 45-60°, brazos colgando hacia atrás, mayor estiramiento del bíceps'
      },
      {
        name: 'Chin-ups',
        reason: 'Compuesto para bíceps',
        youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
        briefTechnique: 'Agarre supino, alta activación de bíceps además de espalda'
      }
    ]
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
    alternatives: [
      {
        name: 'Band Hammer Curls',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=gfEyrmxbCbw',
        briefTechnique: 'Banda bajo pies, agarre neutro, flexiona codos manteniendo posición'
      },
      {
        name: 'Towel Chin-ups',
        reason: 'Solo toalla y barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
        briefTechnique: 'Toalla sobre barra, agarre neutro, dominada trabajando braquial'
      }
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
    alternatives: [
      {
        name: 'Band Bicep Curl',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=gfEyrmxbCbw',
        briefTechnique: 'Banda anclada atrás, brazo hacia atrás para estiramiento similar'
      },
      {
        name: 'Prone Incline Curl',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=soxrZlIl35U',
        briefTechnique: 'Acostado boca abajo en banco inclinado, brazos colgando'
      }
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
    alternatives: [
      {
        name: 'Concentration Curl',
        reason: 'Solo mancuerna',
        youtubeUrl: 'https://www.youtube.com/watch?v=0AUGkch3tzc',
        briefTechnique: 'Codo en muslo, aislamiento similar al preacher'
      },
      {
        name: 'Spider Curl',
        reason: 'Banco inclinado',
        youtubeUrl: 'https://www.youtube.com/watch?v=fIWP-FRFNU0',
        briefTechnique: 'Pecho contra banco inclinado, brazos colgando perpendicular'
      }
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
    alternatives: [
      {
        name: 'Single Arm Band Curl',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=gfEyrmxbCbw',
        briefTechnique: 'Banda bajo pie, un brazo, misma concentración'
      },
      {
        name: 'Wall Bicep Curl',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=0AUGkch3tzc',
        briefTechnique: 'Espalda contra pared, codos fijos, curl con botella de agua'
      }
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'bodyweight-bicep-curl',
    name: 'Bodyweight Bicep Curl',
    muscleGroup: 'biceps',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=vByJfI8acOw',
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
    alternatives: [
      {
        name: 'Chin-ups',
        reason: 'Mayor activación bíceps',
        youtubeUrl: 'https://www.youtube.com/watch?v=brhRXlOhsAM',
        briefTechnique: 'Agarre supino, alta activación de bíceps además de espalda'
      },
      {
        name: 'Inverted Chin-ups',
        reason: 'Progresión más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo mesa, agarre supino, tira hacia arriba'
      }
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
    defaultRestSeconds: 180,
    alternatives: [
      {
        name: 'Goblet Squat',
        reason: 'Solo mancuerna/kettlebell',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Sostén peso al pecho, codos entre rodillas, baja profundo manteniendo torso erguido'
      },
      {
        name: 'Bulgarian Split Squat',
        reason: 'En casa con banco/silla',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Pie trasero en banco, baja hasta muslo paralelo, empuja con talón delantero'
      },
      {
        name: 'Jump Squat',
        reason: 'Sin equipamiento - explosivo',
        youtubeUrl: 'https://www.youtube.com/watch?v=A-cFYWvaHr0',
        briefTechnique: 'Sentadilla con salto explosivo arriba, aterriza suave flexionando rodillas'
      }
    ]
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
    alternatives: [
      {
        name: 'Goblet Squat',
        reason: 'Solo mancuerna/kettlebell',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Peso al pecho, mismo énfasis en cuádriceps, más fácil de aprender'
      },
      {
        name: 'Overhead Squat',
        reason: 'Solo barra/mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8',
        briefTechnique: 'Peso sobre la cabeza, mayor desafío de core y movilidad'
      },
      {
        name: 'Jump Squat',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=A-cFYWvaHr0',
        briefTechnique: 'Sentadilla con salto, énfasis explosivo en cuádriceps'
      }
    ],
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
    alternatives: [
      {
        name: 'Bodyweight Squat',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8',
        briefTechnique: 'Brazos al frente para balance, mismo patrón sin peso'
      },
      {
        name: 'Band Squat',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies y sobre hombros para tensión'
      },
      {
        name: 'Zercher Squat',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Barra en codos, posición similar al goblet'
      }
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Goblet Squat',
        reason: 'Solo mancuerna/kettlebell',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Sostén peso al pecho, codos entre rodillas, baja profundo manteniendo torso erguido'
      },
      {
        name: 'Bulgarian Split Squat',
        reason: 'En casa con banco/silla',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Pie trasero en banco, baja hasta muslo paralelo, empuja con talón delantero'
      },
      {
        name: 'Walking Lunges',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
        briefTechnique: 'Paso largo hacia adelante, rodilla trasera casi al suelo, alterna piernas caminando'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Front Squat',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=m4ytaCJZpl0',
        briefTechnique: 'Barra en deltoides frontales, codos altos, torso vertical'
      },
      {
        name: 'Goblet Squat',
        reason: 'Solo mancuerna',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Peso al pecho, énfasis en cuádriceps por torso vertical'
      },
      {
        name: 'Bulgarian Split Squat',
        reason: 'En casa',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Pie trasero elevado, gran activación de cuádriceps'
      }
    ]
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
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Reverse Lunges',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
        briefTechnique: 'Paso hacia atrás, rodilla trasera casi al suelo, empuja con pierna delantera para volver'
      },
      {
        name: 'Sissy Squat',
        reason: 'Solo peso corporal',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Talones elevados, inclínate hacia atrás flexionando rodillas, mantén caderas extendidas'
      },
      {
        name: 'Wall Sit Isométrico',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=y-wV4Venusw',
        briefTechnique: 'Espalda contra pared, muslos paralelos al suelo, mantén 30-60 segundos'
      }
    ]
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
    alternatives: [
      {
        name: 'Reverse Lunges',
        reason: 'Sin banco - más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
        briefTechnique: 'Paso hacia atrás, mismo trabajo unilateral pero más estable'
      },
      {
        name: 'Single Leg Box Step-down',
        reason: 'Solo cajón/banco',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'De pie en cajón, baja una pierna controlado'
      },
      {
        name: 'Curtsy Lunge',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
        briefTechnique: 'Paso diagonal hacia atrás, variación del lunge'
      }
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
    alternatives: [
      {
        name: 'Stationary Lunges',
        reason: 'Más controlado',
        youtubeUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
        briefTechnique: 'Posición fija de lunge, sube y baja sin moverse'
      },
      {
        name: 'Jump Lunges',
        reason: 'Sin equipamiento - explosivo',
        youtubeUrl: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
        briefTechnique: 'Lunge con salto alternando piernas en el aire'
      }
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
    alternatives: [
      {
        name: 'Forward Lunges',
        reason: 'Variación hacia adelante',
        youtubeUrl: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
        briefTechnique: 'Paso hacia adelante, mismo patrón pero diferente dirección'
      },
      {
        name: 'Split Squats',
        reason: 'Sin desplazamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
        briefTechnique: 'Posición fija, no hay paso, más estable'
      }
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
    alternatives: [
      {
        name: 'Box Jump',
        reason: 'Con cajón - menos impacto',
        youtubeUrl: 'https://www.youtube.com/watch?v=96zJo3nlmHI',
        briefTechnique: 'Salto a cajón, menos impacto en aterrizaje'
      },
      {
        name: 'Squat Hold',
        reason: 'Sin impacto - isométrico',
        youtubeUrl: 'https://www.youtube.com/watch?v=bEv6CCg2BC8',
        briefTechnique: 'Mantén posición de sentadilla profunda 30-60 segundos'
      }
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
    alternatives: [
      {
        name: 'Standing Long Jump',
        reason: 'Mismo movimiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=96zJo3nlmHI',
        briefTechnique: 'Igual que broad jump, salto horizontal desde parado'
      },
      {
        name: 'Squat Jump',
        reason: 'Vertical en lugar de horizontal',
        youtubeUrl: 'https://www.youtube.com/watch?v=A-cFYWvaHr0',
        briefTechnique: 'Sentadilla con salto hacia arriba en lugar de adelante'
      }
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
    alternatives: [
      {
        name: 'Single Leg RDL',
        reason: 'Solo peso corporal',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, mayor desafío de estabilidad y activación unilateral'
      },
      {
        name: 'Good Mornings',
        reason: 'Solo barra/peso corporal',
        youtubeUrl: 'https://www.youtube.com/watch?v=vKPGe8zb2S4',
        briefTechnique: 'Barra en hombros, flexión de cadera similar'
      },
      {
        name: 'Band RDL',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=YJiwzLHHKp8',
        briefTechnique: 'Banda bajo pies, mismo patrón de bisagra de cadera'
      }
    ],
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
    alternatives: [
      {
        name: 'Single Leg Stiff Leg DL',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=cYKYGwcg0U8',
        briefTechnique: 'Una pierna, toca suelo con dedos, mayor estiramiento'
      },
      {
        name: 'Romanian Deadlift',
        reason: 'Menos rígido - más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Rodillas ligeramente flexionadas, menos extremo'
      }
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Romanian Deadlift',
        reason: 'Solo mancuernas o barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Espalda recta, empuja caderas atrás, siente el estiramiento en isquios'
      },
      {
        name: 'Slider Leg Curl',
        reason: 'Solo calcetines en suelo liso',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Boca arriba, talones en toalla/slider, desliza talones hacia glúteos'
      },
      {
        name: 'Nordic Curl (negativa)',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=5BvrPOHNkME',
        briefTechnique: 'De rodillas, alguien sujeta tobillos, baja controlado hacia adelante'
      }
    ]
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
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Band Hamstring Curl sentado',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=04wrwxwrCnI',
        briefTechnique: 'Banda en tobillo, sentado en silla, flexiona hacia atrás contra resistencia'
      },
      {
        name: 'Lying Leg Curl',
        reason: 'Sin máquina sentada',
        youtubeUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs',
        briefTechnique: 'Boca abajo, flexiona piernas hacia glúteos, mismo movimiento acostado'
      },
      {
        name: 'Single Leg RDL',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, bisagra de cadera, enfoque en estiramiento de isquiotibiales'
      }
    ]
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
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Glute Bridge',
        reason: 'Sin banco - en el suelo',
        youtubeUrl: 'https://www.youtube.com/watch?v=SEdqd1n0cvg',
        briefTechnique: 'Acostado boca arriba, pies en suelo, empuja caderas hacia arriba apretando glúteos'
      },
      {
        name: 'Single Leg Glute Bridge',
        reason: 'Sin equipamiento - unilateral',
        youtubeUrl: 'https://www.youtube.com/watch?v=SEdqd1n0cvg',
        briefTechnique: 'Una pierna extendida, empuja con una sola pierna para mayor intensidad'
      }
    ]
  },
  {
    id: 'glute-ham-raise',
    name: 'Glute Ham Raise',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['machine', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=1TlhdiFSJrU',
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
    alternatives: [
      {
        name: 'Nordic Hamstring Curl',
        reason: 'Sin equipamiento específico',
        youtubeUrl: 'https://www.youtube.com/watch?v=HUXS3S2xSX4',
        briefTechnique: 'De rodillas, baja controlado con isquios, alguien sujeta pies'
      },
      {
        name: 'Single Leg RDL',
        reason: 'Solo peso corporal',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, enfoque en isquios y glúteos'
      }
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
    youtubeUrl: 'https://www.youtube.com/watch?v=ZYDTJaAM-gE',
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
    alternatives: [
      {
        name: 'Bulgarian Split Squat',
        reason: 'Sin máquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Pie trasero elevado, enfoque unilateral similar'
      },
      {
        name: 'Single Leg Goblet Squat',
        reason: 'Solo mancuerna',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Una pierna, peso al pecho, mayor desafío'
      }
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
    alternatives: [
      {
        name: 'Jump Rope',
        reason: 'Sin equipamiento - dinámico',
        youtubeUrl: 'https://www.youtube.com/watch?v=-M4-G8p8fmc',
        briefTechnique: 'Salto en puntas de pies, trabajo dinámico de pantorrillas'
      },
      {
        name: 'Wall Calf Raises',
        reason: 'Solo pared para balance',
        youtubeUrl: 'https://www.youtube.com/watch?v=-M4-G8p8fmc',
        briefTechnique: 'Mano en pared, sube en puntas de pies'
      }
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'single-leg-calf-raise',
    name: 'Single Leg Calf Raise',
    muscleGroup: 'calves',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=ORT4oJ_R8Qs',
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
    alternatives: [
      {
        name: 'Single Leg Hops',
        reason: 'Más dinámico',
        youtubeUrl: 'https://www.youtube.com/watch?v=ORT4oJ_R8Qs',
        briefTechnique: 'Pequeños saltos en una pierna trabajando pantorrilla'
      },
      {
        name: 'Calf Raise con peso',
        reason: 'Con mancuerna/botella',
        youtubeUrl: 'https://www.youtube.com/watch?v=ORT4oJ_R8Qs',
        briefTechnique: 'Una mano con peso, sube en punta del pie'
      }
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
    alternatives: [
      {
        name: 'Seated Calf Raise con mancuernas',
        reason: 'Sin máquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=JbyjNymZOt0',
        briefTechnique: 'Sentado, mancuernas en muslos, sube en puntas'
      },
      {
        name: 'Standing Calf Raises',
        reason: 'Sin asiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=-M4-G8p8fmc',
        briefTechnique: 'De pie trabajando ambas cabezas del gastrocnemio'
      }
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
    alternatives: [
      {
        name: 'Plank',
        reason: 'Sin equipamiento - isométrico',
        youtubeUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        briefTechnique: 'Antebrazos al suelo, cuerpo recto, core apretado'
      },
      {
        name: 'Dead Bug',
        reason: 'Más fácil - controlado',
        youtubeUrl: 'https://www.youtube.com/watch?v=rqiTPdK1c_I',
        briefTechnique: 'Boca arriba, brazo y pierna opuestos se extienden'
      }
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
    alternatives: [
      {
        name: 'Lying Leg Raises',
        reason: 'Movimiento más controlado',
        youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        briefTechnique: 'Piernas juntas, sube a 90° y baja controlado'
      },
      {
        name: 'Dead Bug',
        reason: 'Menor tensión en espalda',
        youtubeUrl: 'https://www.youtube.com/watch?v=ANVdMDaYRts',
        briefTechnique: 'Alterna brazo y pierna opuestos, core estable'
      }
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
    alternatives: [
      {
        name: 'Russian Twists',
        reason: 'Mismo patrón de rotación',
        youtubeUrl: 'https://www.youtube.com/watch?v=9FGilxCbdz8',
        briefTechnique: 'Sentado, rota torso lado a lado, pies elevados opcional'
      },
      {
        name: 'Cross Body Crunch',
        reason: 'Más simple - un lado',
        youtubeUrl: 'https://www.youtube.com/watch?v=9FGilxCbdz8',
        briefTechnique: 'Codo hacia rodilla opuesta, menos coordinación'
      }
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
    alternatives: [
      {
        name: 'Knee Raises',
        reason: 'Más fácil - rodillas flexionadas',
        youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        briefTechnique: 'Rodillas al pecho en lugar de piernas rectas'
      },
      {
        name: 'Reverse Crunch',
        reason: 'Menor rango de movimiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        briefTechnique: 'Rodillas hacia pecho, cadera se eleva ligeramente'
      }
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
    alternatives: [
      {
        name: 'Crunches',
        reason: 'Menor rango - más seguro',
        youtubeUrl: 'https://www.youtube.com/watch?v=1fbU_MkV7NE',
        briefTechnique: 'Solo levanta hombros del suelo, no torso completo'
      },
      {
        name: 'Plank',
        reason: 'Isométrico - menos estrés',
        youtubeUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        briefTechnique: 'Mantén posición de plancha para core'
      }
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
    alternatives: [
      {
        name: 'Bird Dog',
        reason: 'Más controlado',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Cuadrupedia, extiende brazo y pierna opuestos'
      },
      {
        name: 'Good Morning',
        reason: 'De pie - funcional',
        youtubeUrl: 'https://www.youtube.com/watch?v=vKPGe8zb2S4',
        briefTechnique: 'Bisagra de cadera trabajando extensores'
      }
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
    alternatives: [
      {
        name: 'Wall Sit',
        reason: 'Isométrico diferente',
        youtubeUrl: 'https://www.youtube.com/watch?v=y-wV4Venusw',
        briefTechnique: 'Espalda contra pared, muslos paralelos al suelo'
      },
      {
        name: 'Dead Bug',
        reason: 'Core dinámico',
        youtubeUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        briefTechnique: 'Boca arriba, alterna extensión de extremidades opuestas'
      }
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
    alternatives: [
      {
        name: 'Lying Leg Raises',
        reason: 'Sin barra - en suelo',
        youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        briefTechnique: 'Acostado, mismo movimiento de piernas sin colgarse'
      },
      {
        name: 'Knee Raises colgado',
        reason: 'Más fácil - rodillas flexionadas',
        youtubeUrl: 'https://www.youtube.com/watch?v=Pr1ieGZ5atk',
        briefTechnique: 'Colgado, lleva rodillas al pecho en lugar de piernas rectas'
      }
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
    alternatives: [
      {
        name: 'Modified Burpee',
        reason: 'Más fácil - sin salto',
        youtubeUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU',
        briefTechnique: 'Mismo movimiento pero sin salto final'
      },
      {
        name: 'Squat Thrusts',
        reason: 'Sin flexión',
        youtubeUrl: 'https://www.youtube.com/watch?v=TU8QYVW0gDU',
        briefTechnique: 'Sentadilla a plancha sin push-up'
      }
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
    alternatives: [
      {
        name: 'Plank Knee Tucks',
        reason: 'Más controlado',
        youtubeUrl: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
        briefTechnique: 'Plancha, lleva ambas rodillas al pecho lentamente'
      },
      {
        name: 'High Knees',
        reason: 'De pie - menos intenso',
        youtubeUrl: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
        briefTechnique: 'Corriendo en el lugar levantando rodillas alto'
      }
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
    alternatives: [
      {
        name: 'Dumbbell Shrugs',
        reason: 'Solo mancuernas',
        youtubeUrl: 'https://www.youtube.com/watch?v=cJRVVxmytaM',
        briefTechnique: 'Mancuernas a los lados, mayor rango de movimiento'
      },
      {
        name: 'Band Shrugs',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Banda bajo pies, tira hombros hacia orejas'
      }
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
    alternatives: [
      {
        name: 'Barbell Shrugs',
        reason: 'Solo barra',
        youtubeUrl: 'https://www.youtube.com/watch?v=cJRVVxmytaM',
        briefTechnique: 'Barra frente a muslos, hombros hacia orejas'
      },
      {
        name: 'Prone Y Raises',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, brazos en Y, trabaja trapecios superiores'
      }
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
    youtubeUrl: 'https://www.youtube.com/watch?v=3VLTzIrnb5g',
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
    alternatives: [
      {
        name: 'Rice Bucket Training',
        reason: 'En casa creativo',
        youtubeUrl: 'https://www.youtube.com/watch?v=3VLTzIrnb5g',
        briefTechnique: 'Manos en recipiente con arroz, cierra y abre puños'
      },
      {
        name: 'Towel Wringing',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=3VLTzIrnb5g',
        briefTechnique: 'Escurre toalla húmeda retorciendo muñecas'
      }
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'reverse-wrist-curls',
    name: 'Reverse Wrist Curls',
    muscleGroup: 'forearms',
    category: 'isolation',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=hCMC4Vh2g_s',
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
    alternatives: [
      {
        name: 'Band Wrist Extension',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=hCMC4Vh2g_s',
        briefTechnique: 'Banda en palma, extiende muñeca contra resistencia'
      },
      {
        name: 'Wall Push-ups con dedos',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=hCMC4Vh2g_s',
        briefTechnique: 'Push-up en pared apoyado en dedos, fortalece extensores'
      }
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
    alternatives: [
      {
        name: 'Static Hold',
        reason: 'Sin caminar',
        youtubeUrl: 'https://www.youtube.com/watch?v=Fkzk_RqlYig',
        briefTechnique: 'Sostén pesos a los lados sin caminar, isométrico'
      },
      {
        name: 'Suitcase Carry',
        reason: 'Un lado - unilateral',
        youtubeUrl: 'https://www.youtube.com/watch?v=Fkzk_RqlYig',
        briefTechnique: 'Peso en un lado, camina manteniendo postura recta'
      },
      {
        name: 'Grocery Bag Carry',
        reason: 'En casa funcional',
        youtubeUrl: 'https://www.youtube.com/watch?v=Fkzk_RqlYig',
        briefTechnique: 'Bolsas de compra pesadas, mismo patrón de movimiento'
      }
    ],
    defaultRestSeconds: 90
  },

  // ============================================
  // ATG / ACHILLES ELYSIUM EXERCISES
  // ============================================
  {
    id: 'nordic-leg-curl',
    name: 'Nordic Leg Curl',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=HUXS3S2xSX4',
    techniqueNotes: [
      'Rodillas sobre cojín, pies anclados',
      'Baja el cuerpo controladamente usando isquiotibiales',
      'Mantén caderas extendidas todo el tiempo',
      'Usa las manos para asistir si es necesario'
    ],
    commonMistakes: [
      'Flexionar las caderas durante el descenso',
      'Caer sin control',
      'No usar rango completo'
    ],
    strengthStandards: {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
      elite: 0
    },
    alternatives: [
      {
        name: 'Glute Ham Raise',
        reason: 'Con máquina GHR',
        youtubeUrl: 'https://www.youtube.com/watch?v=1TlhdiFSJrU',
        briefTechnique: 'En máquina GHR, mismo patrón de movimiento'
      },
      {
        name: 'Eccentric Hamstring Lower',
        reason: 'Solo la negativa',
        youtubeUrl: 'https://www.youtube.com/watch?v=HUXS3S2xSX4',
        briefTechnique: 'Solo baja controlado, usa manos para ayudar a subir'
      }
    ],
    defaultRestSeconds: 120
  },
  {
    id: 'atg-split-squat',
    name: 'ATG Split Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['dumbbell', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=kkdmHTASZg8',
    techniqueNotes: [
      'Rodilla delantera pasa los dedos del pie (ATG style)',
      'Talón trasero elevado, rodilla casi toca el suelo',
      'Mayor rango que Bulgarian split squat',
      'Fortalece rodillas en posiciones extremas'
    ],
    commonMistakes: [
      'No permitir que la rodilla avance',
      'Perder el equilibrio',
      'Torso demasiado inclinado'
    ],
    alternatives: [
      {
        name: 'Bulgarian Split Squat profundo',
        reason: 'Sin ATG específico',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Split squat normal pero bajando más profundo'
      },
      {
        name: 'Deep Step-up',
        reason: 'Cajón alto',
        youtubeUrl: 'https://www.youtube.com/watch?v=kkdmHTASZg8',
        briefTechnique: 'Cajón alto permite mayor rango de movimiento'
      }
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'vmo-squat',
    name: 'VMO Squat (Heel Elevated)',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['dumbbell', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=hbcAUlNwDpk',
    techniqueNotes: [
      'Talones elevados sobre cuña o disco',
      'Rodillas avanzan sobre los dedos',
      'Enfoca el VMO (vastus medialis)',
      'Baja profundo manteniendo tensión'
    ],
    commonMistakes: [
      'Talones no suficientemente elevados',
      'No bajar suficiente',
      'Colapsar rodillas hacia adentro'
    ],
    alternatives: [
      {
        name: 'Goblet Squat con talones elevados',
        reason: 'Solo mancuerna y cuña',
        youtubeUrl: 'https://www.youtube.com/watch?v=MeIiIdhvXT4',
        briefTechnique: 'Goblet squat pero con talones en discos o cuña'
      },
      {
        name: 'Wall Squat',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=hbcAUlNwDpk',
        briefTechnique: 'Espalda contra pared, permite rodillas adelante'
      }
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'jefferson-curl',
    name: 'Jefferson Curl',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['back_thickness', 'glutes'],
    category: 'isolation',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=nYS0R4c3qCA',
    techniqueNotes: [
      'De pie sobre superficie elevada',
      'Rueda la columna vértebra por vértebra',
      'Estira isquios y espalda baja',
      'Peso ligero, control total'
    ],
    commonMistakes: [
      'Usar demasiado peso',
      'Movimiento muy rápido',
      'Doblar las rodillas'
    ],
    alternatives: [
      {
        name: 'Cat-Cow Stretch',
        reason: 'Sin equipamiento - movilidad',
        youtubeUrl: 'https://www.youtube.com/watch?v=nYS0R4c3qCA',
        briefTechnique: 'Cuadrupedia, flexión/extensión vertebral segmentaria'
      },
      {
        name: 'Standing Forward Fold',
        reason: 'Más seguro - vertical',
        youtubeUrl: 'https://www.youtube.com/watch?v=nYS0R4c3qCA',
        briefTechnique: 'De pie, rueda hacia abajo vértebra por vértebra'
      }
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'powell-raise',
    name: 'Powell Raise',
    muscleGroup: 'shoulders_rear',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=CE8H1DZMDhU',
    techniqueNotes: [
      'Acostado de lado sobre banco inclinado',
      'Brazo colgando perpendicular al suelo',
      'Levanta hacia afuera y arriba',
      'Trabaja deltoides posterior y manguito rotador'
    ],
    commonMistakes: [
      'Usar demasiado peso',
      'Usar impulso',
      'No controlar la negativa'
    ],
    alternatives: [
      {
        name: 'Side Lying Rear Delt Fly',
        reason: 'Sin banco inclinado',
        youtubeUrl: 'https://www.youtube.com/watch?v=CE8H1DZMDhU',
        briefTechnique: 'De lado en suelo, brazo superior levanta mancuerna'
      },
      {
        name: 'External Rotation con banda',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Codo fijo, rota brazo hacia afuera contra banda'
      }
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'gironda-high-angle-row',
    name: 'Gironda High Angle Row',
    muscleGroup: 'back_thickness',
    secondaryMuscles: ['shoulders_rear', 'biceps'],
    category: 'compound',
    equipment: ['cable', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=fhvQQxi7fZM',
    techniqueNotes: [
      'Banco inclinado a 45 grados, pecho apoyado',
      'Tira hacia las axilas con codos altos',
      'Énfasis en deltoides posterior y espalda alta',
      'Creado por Vince Gironda'
    ],
    commonMistakes: [
      'Tirar hacia el ombligo (no es el objetivo)',
      'No mantener pecho en el banco',
      'Codos muy bajos'
    ],
    alternatives: [
      {
        name: 'Chest Supported Row',
        reason: 'Sin banco específico',
        youtubeUrl: 'https://www.youtube.com/watch?v=fhvQQxi7fZM',
        briefTechnique: 'Cualquier banco inclinado, tira hacia pecho alto'
      },
      {
        name: 'Prone Y Raise',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, brazos en Y, enfoque en deltoides posterior'
      }
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'reverse-step-up',
    name: 'Reverse Step-Up',
    muscleGroup: 'glutes',
    secondaryMuscles: ['hamstrings', 'quads'],
    category: 'compound',
    equipment: ['bodyweight', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=F_a9Jvg106c',
    techniqueNotes: [
      'Comienza de pie sobre cajón',
      'Baja una pierna hacia atrás controladamente',
      'Toca suavemente el suelo y sube',
      'Excelente para glúteos y control'
    ],
    commonMistakes: [
      'Caer sin control',
      'Empujar con la pierna de abajo',
      'Cajón muy alto para comenzar'
    ],
    alternatives: [
      {
        name: 'Step-up normal',
        reason: 'Hacia adelante en lugar de atrás',
        youtubeUrl: 'https://www.youtube.com/watch?v=F_a9Jvg106c',
        briefTechnique: 'Sube al cajón hacia adelante, énfasis similar en glúteos'
      },
      {
        name: 'Single Leg Glute Bridge',
        reason: 'Sin cajón',
        youtubeUrl: 'https://www.youtube.com/watch?v=SEdqd1n0cvg',
        briefTechnique: 'En suelo, una pierna, enfoque en glúteos'
      }
    ],
    defaultRestSeconds: 90
  },
  {
    id: 'single-leg-45-hyper',
    name: 'Single Leg 45° Hyperextension',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['glutes', 'back_thickness'],
    category: 'isolation',
    equipment: ['machine', 'bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=KTPABgPK5Kc',
    techniqueNotes: [
      'En máquina de hiperextensión a 45°',
      'Una pierna trabaja, la otra descansa',
      'Énfasis en isquio y glúteo unilateral',
      'Baja hasta sentir estiramiento'
    ],
    commonMistakes: [
      'Hiperextender la espalda',
      'No usar rango completo',
      'Usar impulso'
    ],
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Single Leg RDL',
        reason: 'Sin máquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, bisagra de cadera, enfoque unilateral en isquios y glúteos'
      },
      {
        name: 'Single Leg Good Morning',
        reason: 'Solo peso corporal',
        youtubeUrl: 'https://www.youtube.com/watch?v=vKPGe8zb2S4',
        briefTechnique: 'Una pierna atrás, flexión de cadera manteniendo espalda recta'
      },
      {
        name: 'Swiss Ball Hyperextension',
        reason: 'Solo pelota de ejercicio',
        youtubeUrl: 'https://www.youtube.com/shorts/jebYweZO9wU',
        briefTechnique: 'Cadera en pelota, extiende torso hacia arriba trabajando erectores'
      }
    ]
  },
  {
    id: 'assisted-pistol-squat',
    name: 'Assisted Pistol Squat',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes', 'hamstrings'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=qDcniqddTeE',
    techniqueNotes: [
      'Sostente de TRX, poste o banda',
      'Baja en una pierna hasta abajo',
      'Pierna libre extendida al frente',
      'Progresión hacia pistol squat completa'
    ],
    commonMistakes: [
      'Depender demasiado del soporte',
      'No bajar suficiente',
      'Perder balance'
    ],
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Single Leg Box Squat',
        reason: 'Con cajón para mayor control',
        youtubeUrl: 'https://www.youtube.com/watch?v=Pzm_v06MUyk',
        briefTechnique: 'Sentarse en cajón con una pierna, levantarse sin impulso, progresión más fácil'
      },
      {
        name: 'Bulgarian Split Squat',
        reason: 'Más accesible',
        youtubeUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE',
        briefTechnique: 'Pie trasero elevado, énfasis en pierna delantera, más estable'
      },
      {
        name: 'Single Leg Ball Squat',
        reason: 'Con pelota para soporte',
        youtubeUrl: 'https://www.youtube.com/watch?v=gm91uio4SVM',
        briefTechnique: 'Espalda contra pelota en pared, una pierna, mayor estabilidad'
      }
    ]
  },
  {
    id: 'atg-good-morning',
    name: 'ATG Good Morning',
    muscleGroup: 'hamstrings',
    secondaryMuscles: ['back_thickness', 'glutes'],
    category: 'compound',
    equipment: ['barbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=vKPGe8zb2S4',
    techniqueNotes: [
      'Barra en trapecios (high bar)',
      'Flexiona desde las caderas manteniendo espalda neutra',
      'Rodillas ligeramente flexionadas',
      'Estiramiento profundo de isquios'
    ],
    commonMistakes: [
      'Redondear la espalda',
      'Bloquear las rodillas',
      'Usar demasiado peso'
    ],
    strengthStandards: {
      beginner: 0.3,
      intermediate: 0.5,
      advanced: 0.75,
      elite: 1.0
    },
    alternatives: [
      {
        name: 'Romanian Deadlift',
        reason: 'Sin ATG específico',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Good morning estándar con flexión de rodillas'
      },
      {
        name: 'Hip Hinge Stretch',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=vKPGe8zb2S4',
        briefTechnique: 'Patrón de bisagra de cadera sin peso'
      }
    ],
    defaultRestSeconds: 120
  },
  {
    id: 'tibialis-raise',
    name: 'Tibialis Raise',
    muscleGroup: 'calves',
    category: 'isolation',
    equipment: ['bodyweight', 'machine'],
    youtubeUrl: 'https://www.youtube.com/watch?v=gNS_QjGAs_k',
    techniqueNotes: [
      'Talones en superficie elevada o máquina tib',
      'Levanta los dedos hacia las espinillas',
      'Trabaja el tibial anterior',
      'Prevención de shin splints'
    ],
    commonMistakes: [
      'Rango de movimiento corto',
      'Movimiento muy rápido',
      'No contraer arriba'
    ],
    alternatives: [
      {
        name: 'Wall Sit con flexión dorsal',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=gNS_QjGAs_k',
        briefTechnique: 'Wall sit levantando dedos de pies repetidamente'
      },
      {
        name: 'Caminar en talones',
        reason: 'Funcional - en casa',
        youtubeUrl: 'https://www.youtube.com/watch?v=gNS_QjGAs_k',
        briefTechnique: 'Camina solo en talones manteniendo dedos elevados'
      }
    ],
    defaultRestSeconds: 60
  },
  {
    id: 'standing-leg-curl-monkey',
    name: 'Standing Leg Curl (Monkey Foot)',
    muscleGroup: 'hamstrings',
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=-yzbS3Yg74Y',
    techniqueNotes: [
      'De pie, mancuerna sujeta entre los pies',
      'Flexiona la rodilla llevando talón al glúteo',
      'Sostente de algo para equilibrio',
      'Alternativa a máquina de leg curl'
    ],
    commonMistakes: [
      'Balancear el cuerpo',
      'No usar rango completo',
      'Mover la cadera'
    ],
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Band Standing Leg Curl',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=04wrwxwrCnI',
        briefTechnique: 'Banda en tobillo, de pie, flexiona rodilla hacia atrás contra resistencia'
      },
      {
        name: 'Single Leg RDL',
        reason: 'Sin equipamiento adicional',
        youtubeUrl: 'https://www.youtube.com/watch?v=jEy_czb3RKA',
        briefTechnique: 'Una pierna, bisagra de cadera, trabaja isquios de forma funcional'
      },
      {
        name: 'Lying Leg Curl',
        reason: 'Boca abajo alternativo',
        youtubeUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs',
        briefTechnique: 'Acostado boca abajo, flexiona piernas hacia glúteos con o sin peso'
      }
    ]
  },
  {
    id: 'wide-grip-pullup',
    name: 'Wide Grip Pull-up',
    muscleGroup: 'back_width',
    secondaryMuscles: ['biceps', 'shoulders_rear'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
    techniqueNotes: [
      'Agarre 1.5x ancho de hombros',
      'Tira el pecho hacia la barra',
      'Énfasis en dorsales',
      'Baja controlado hasta extensión completa'
    ],
    commonMistakes: [
      'Agarre demasiado ancho',
      'Usar kipping',
      'No bajar completamente'
    ],
    strengthStandards: {
      beginner: 0,
      intermediate: 0.15,
      advanced: 0.35,
      elite: 0.6
    },
    alternatives: [
      {
        name: 'Wide Grip Lat Pulldown',
        reason: 'Asistido con máquina',
        youtubeUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
        briefTechnique: 'Mismo agarre ancho pero con peso ajustable'
      },
      {
        name: 'Wide Grip Inverted Row',
        reason: 'Progresión más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=XZV9IwluPjw',
        briefTechnique: 'Bajo mesa/barra, agarre ancho, tira pecho hacia barra'
      },
      {
        name: 'Band Wide Pull-Apart',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0GsVJsS6474',
        briefTechnique: 'Banda frente a ti, agarre ancho, separa hacia atrás'
      }
    ],
    defaultRestSeconds: 120
  },
  {
    id: 'hip-flexor-raise',
    name: 'Hip Flexor Raise',
    muscleGroup: 'abs',
    secondaryMuscles: ['quads'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=uQwelDX1h7Y',
    techniqueNotes: [
      'Colgado o en Roman Chair',
      'Levanta piernas rectas hacia arriba',
      'Trabaja flexores de cadera y abs inferiores',
      'Control total sin balanceo'
    ],
    commonMistakes: [
      'Usar impulso',
      'Flexionar las rodillas demasiado',
      'Balancear el cuerpo'
    ],
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Lying Leg Raises',
        reason: 'Sin barra - en suelo',
        youtubeUrl: 'https://www.youtube.com/watch?v=JB2oyawG9KI',
        briefTechnique: 'Acostado, piernas rectas, levanta hacia 90°, trabaja flexores de cadera'
      },
      {
        name: 'High Knees',
        reason: 'Dinámico - sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
        briefTechnique: 'Corriendo en el lugar, levanta rodillas alto trabajando flexores'
      },
      {
        name: 'Mountain Climbers',
        reason: 'Funcional - core incluido',
        youtubeUrl: 'https://www.youtube.com/watch?v=nmwgirgXLYM',
        briefTechnique: 'Plancha, alterna rodillas al pecho, trabaja flexores dinámicamente'
      }
    ]
  },
  {
    id: 'ql-raise',
    name: 'QL Raise (Side Plank Hip Lift)',
    muscleGroup: 'abs',
    secondaryMuscles: ['back_thickness'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=UhgQi_cz5zA',
    techniqueNotes: [
      'Posición de side plank',
      'Baja la cadera hacia el suelo',
      'Levanta la cadera hacia el techo',
      'Trabaja el cuadrado lumbar (QL)'
    ],
    commonMistakes: [
      'Rotar el torso',
      'Rango de movimiento corto',
      'No mantener alineación'
    ],
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Side Plank',
        reason: 'Isométrico - más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=ASdvN_XEl_c',
        briefTechnique: 'Mantén posición de side plank estática, trabaja QL isométricamente'
      },
      {
        name: 'Bird Dog lateral',
        reason: 'Cuadrupedia - más estable',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Cuadrupedia, levanta brazo y pierna del mismo lado, core lateral'
      },
      {
        name: 'Standing Side Bend',
        reason: 'De pie - funcional',
        youtubeUrl: 'https://www.youtube.com/watch?v=UhgQi_cz5zA',
        briefTechnique: 'De pie, inclínate hacia un lado, regresa al centro, trabaja QL'
      }
    ]
  },
  {
    id: 'decline-crunch',
    name: 'Decline Crunch',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=FRzQXeN1hro',
    techniqueNotes: [
      'En banco declinado, pies enganchados',
      'Sube el torso usando solo abdominales',
      'No uses impulso',
      'Contrae fuerte arriba'
    ],
    commonMistakes: [
      'Subir con impulso',
      'Tirar del cuello',
      'No controlar el descenso'
    ],
    defaultRestSeconds: 60,
    alternatives: [
      {
        name: 'Regular Crunches',
        reason: 'Sin banco declinado',
        youtubeUrl: 'https://www.youtube.com/watch?v=1fbU_MkV7NE',
        briefTechnique: 'En suelo, flexiona solo la parte superior del torso, menos intenso'
      },
      {
        name: 'Weighted Crunches',
        reason: 'Más intensidad sin decline',
        youtubeUrl: 'https://www.youtube.com/watch?v=1fbU_MkV7NE',
        briefTechnique: 'Crunch normal con peso en pecho para mayor resistencia'
      },
      {
        name: 'V-Ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=9FGilxCbdz8',
        briefTechnique: 'Acostado, piernas y torso suben al mismo tiempo formando V'
      }
    ]
  },
  {
    id: 'db-pullover',
    name: 'Dumbbell Pullover',
    muscleGroup: 'chest',
    secondaryMuscles: ['back_width', 'triceps'],
    category: 'isolation',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=FK4rHfWKEac',
    techniqueNotes: [
      'Acostado perpendicular al banco',
      'Baja la mancuerna detrás de la cabeza',
      'Estira dorsales y pecho',
      'Sube hasta posición vertical'
    ],
    commonMistakes: [
      'Flexionar demasiado los codos',
      'Bajar demasiado (riesgo de hombro)',
      'Arquear la espalda baja'
    ],
    defaultRestSeconds: 90,
    alternatives: [
      {
        name: 'Incline Dumbbell Fly',
        reason: 'Mismo estiramiento de pecho',
        youtubeUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
        briefTechnique: 'Banco inclinado, abre brazos sintiendo estiramiento, menor riesgo'
      },
      {
        name: 'Cable Pullover',
        reason: 'Con cable o banda',
        youtubeUrl: 'https://www.youtube.com/watch?v=FK4rHfWKEac',
        briefTechnique: 'Cable alto, tira hacia abajo y adelante, mismo patrón de movimiento'
      },
      {
        name: 'Prone Y Raise',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=z6PJMT2y8GQ',
        briefTechnique: 'Boca abajo, brazos en Y, trabaja dorsales y pecho posterior'
      }
    ]
  },
  {
    id: 'z-press',
    name: 'Z Press',
    muscleGroup: 'shoulders_front',
    secondaryMuscles: ['triceps', 'abs'],
    category: 'compound',
    equipment: ['barbell', 'dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=8CR-WckW3LY',
    techniqueNotes: [
      'Sentado en el suelo con piernas extendidas',
      'Press por encima de la cabeza',
      'Sin apoyo de espalda - requiere core fuerte',
      'Elimina asistencia de piernas'
    ],
    commonMistakes: [
      'Inclinarse hacia atrás',
      'Flexionar las piernas',
      'Usar demasiado peso'
    ],
    strengthStandards: {
      beginner: 0.25,
      intermediate: 0.4,
      advanced: 0.6,
      elite: 0.8
    },
    defaultRestSeconds: 120,
    alternatives: [
      {
        name: 'Overhead Press sentado',
        reason: 'Con respaldo - más fácil',
        youtubeUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
        briefTechnique: 'Sentado con respaldo, press normal sin desafío de core'
      },
      {
        name: 'Pike Push-ups',
        reason: 'Sin equipamiento',
        youtubeUrl: 'https://www.youtube.com/watch?v=x4YNq24tYwM',
        briefTechnique: 'V invertida, baja cabeza hacia manos, trabaja hombros sin core extremo'
      },
      {
        name: 'Band Shoulder Press',
        reason: 'Solo banda elástica',
        youtubeUrl: 'https://www.youtube.com/watch?v=0rLjkQweIDg',
        briefTechnique: 'Banda bajo pies, press hacia arriba, menos desafío de estabilidad'
      }
    ]
  },

  // ============================================
  // NEW EXERCISES — ATHENA & TITAN PROGRAMS
  // ============================================

  // --- Athena exercises ---
  {
    id: 'cable-kickback',
    name: 'Cable Glute Kickback',
    muscleGroup: 'glutes',
    secondaryMuscles: ['hamstrings'],
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dJa5qPfEMdU',
    techniqueNotes: ['Tobillera en el cable bajo', 'Extiende la cadera sin arquear la espalda', 'Aprieta el glúteo arriba'],
    defaultRestSeconds: 60
  },
  {
    id: 'sumo-squat',
    name: 'Sumo Squat',
    muscleGroup: 'glutes',
    secondaryMuscles: ['quads'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=9ZuXKqRbT9k',
    techniqueNotes: ['Pies más anchos que los hombros, puntas hacia fuera', 'Baja hasta que los muslos estén paralelos', 'Empuja con los talones'],
    defaultRestSeconds: 90
  },
  {
    id: 'banded-lateral-walk',
    name: 'Banded Lateral Walk',
    muscleGroup: 'glutes',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=XqnlYSEqSiw',
    techniqueNotes: ['Banda por encima de las rodillas o en los tobillos', 'Mantén tensión constante', 'Pasos controlados laterales'],
    defaultRestSeconds: 45
  },
  {
    id: 'single-leg-hip-thrust',
    name: 'Single-Leg Hip Thrust',
    muscleGroup: 'glutes',
    secondaryMuscles: ['hamstrings'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=AVAXhy6pl7o',
    techniqueNotes: ['Espalda alta en el banco', 'Una pierna extendida', 'Aprieta el glúteo arriba 1-2 seg'],
    defaultRestSeconds: 60
  },
  {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing',
    muscleGroup: 'glutes',
    secondaryMuscles: ['hamstrings', 'abs'],
    category: 'compound',
    equipment: ['kettlebell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=YSxHifyI6s8',
    techniqueNotes: ['Hip hinge explosivo', 'Brazos relajados, la fuerza viene de las caderas', 'Glúteos apretados arriba'],
    defaultRestSeconds: 60
  },
  {
    id: 'weighted-step-ups',
    name: 'Weighted Step-Ups',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=dQqApCGd5Ss',
    techniqueNotes: ['Caja a la altura de la rodilla', 'Empuja con el pie de arriba sin impulsar con el de abajo', 'Control en la bajada'],
    defaultRestSeconds: 90
  },

  // --- Titan exercises (seniors) ---
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=I5xbsA71v1A',
    techniqueNotes: ['Espalda baja pegada al suelo', 'Extiende brazo y pierna opuestos lentamente', 'Exhala al extender'],
    defaultRestSeconds: 45
  },
  {
    id: 'bird-dog',
    name: 'Bird Dog',
    muscleGroup: 'abs',
    secondaryMuscles: ['glutes'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=wiFNA3sqjCA',
    techniqueNotes: ['En cuadrupedia', 'Extiende brazo y pierna opuestos', 'Mantén la cadera nivelada'],
    defaultRestSeconds: 45
  },
  {
    id: 'tandem-walk',
    name: 'Tandem Walk (Heel-to-Toe)',
    muscleGroup: 'calves',
    secondaryMuscles: ['quads'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=sRPgGK_o2ys',
    techniqueNotes: ['Talón toca la punta del otro pie', '10-20 pasos en línea recta', 'Mirada al frente'],
    defaultRestSeconds: 30
  },
  {
    id: 'floor-get-up',
    name: 'Floor Get-Up',
    muscleGroup: 'abs',
    secondaryMuscles: ['quads', 'glutes'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=0dHYwLqaOoY',
    techniqueNotes: ['Desde tumbado en el suelo, levántate sin apoyar las manos si puedes', 'Progresión: usa una mano, luego ninguna'],
    defaultRestSeconds: 60
  },
  {
    id: 'sit-to-stand',
    name: 'Sit-to-Stand',
    muscleGroup: 'quads',
    secondaryMuscles: ['glutes'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=FwYMJwfEPao',
    techniqueNotes: ['Desde una silla, levántate sin impulso', 'Controla la bajada 3 segundos', 'Progresión: brazos cruzados en el pecho'],
    defaultRestSeconds: 45
  },
  {
    id: 'wall-push-up',
    name: 'Wall Push-Up',
    muscleGroup: 'chest',
    secondaryMuscles: ['shoulders_front', 'triceps'],
    category: 'compound',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=a6YHbXD2XlU',
    techniqueNotes: ['Manos en la pared a la altura de los hombros', 'Cuerpo recto, baja controlado', 'Progresión: incline push-up en banco'],
    defaultRestSeconds: 60
  },
  {
    id: 'band-pull-apart',
    name: 'Band Pull-Apart',
    muscleGroup: 'shoulders_rear',
    secondaryMuscles: ['back_thickness'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=AWoaIdRDBMg',
    techniqueNotes: ['Agarra la banda con brazos extendidos', 'Separa las manos tirando con los dorsales y deltoides posteriores'],
    defaultRestSeconds: 45
  },
  {
    id: 'pallof-press',
    name: 'Pallof Press',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['cable'],
    youtubeUrl: 'https://www.youtube.com/watch?v=AH_QZLm_0-s',
    techniqueNotes: ['Cable a la altura del pecho', 'Extiende los brazos resistiendo la rotación', 'Core activado todo el tiempo'],
    defaultRestSeconds: 45
  },
  {
    id: 'suitcase-carry',
    name: 'Suitcase Carry',
    muscleGroup: 'abs',
    secondaryMuscles: ['forearms'],
    category: 'compound',
    equipment: ['dumbbell'],
    youtubeUrl: 'https://www.youtube.com/watch?v=bLzD69YnMzk',
    techniqueNotes: ['Mancuerna en una mano', 'Camina recto sin inclinarte', 'Cambia de mano a mitad'],
    defaultRestSeconds: 60
  },
  {
    id: 'wall-angels',
    name: 'Wall Angels',
    muscleGroup: 'shoulders_rear',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=M3iS3TB8Qkg',
    techniqueNotes: ['Espalda y cabeza contra la pared', 'Desliza los brazos arriba y abajo manteniendo contacto'],
    defaultRestSeconds: 30
  },
  {
    id: 'cat-cow',
    name: 'Cat-Cow Stretch',
    muscleGroup: 'abs',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=kqnua4rHVVA',
    techniqueNotes: ['En cuadrupedia', 'Arquea la espalda (gato) y luego extiéndela (vaca)', 'Coordina con la respiración'],
    defaultRestSeconds: 30
  },
  {
    id: 'single-leg-stance',
    name: 'Single-Leg Stance',
    muscleGroup: 'calves',
    secondaryMuscles: ['quads'],
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=F4UVjz5tn5s',
    techniqueNotes: ['Levanta un pie del suelo', 'Mantén 30 segundos', 'Progresión: ojos cerrados'],
    defaultRestSeconds: 30
  },
  {
    id: 'hip-circles',
    name: 'Hip Circles',
    muscleGroup: 'glutes',
    category: 'isolation',
    equipment: ['bodyweight'],
    youtubeUrl: 'https://www.youtube.com/watch?v=4AOslFGFnSo',
    techniqueNotes: ['De pie, haz círculos amplios con la cadera', '10 en cada dirección'],
    defaultRestSeconds: 30
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
