// ============================================
// ACHILLES INSIGHTS: Knowledge Base
// Sources: Alexander Cortes, Andrew Huberman, David Sinclair, Bryan Johnson
// ============================================

export interface Insight {
  id: string;
  title: string;
  content: string;
  category: InsightCategory;
  source: InsightSource;
  tags: string[];
  actionable?: string; // Quick actionable tip
  deepDive?: string; // Longer explanation
  relatedInsights?: string[]; // IDs of related insights
}

export type InsightCategory =
  | 'training'
  | 'nutrition'
  | 'fatloss'
  | 'fasting'
  | 'sleep'
  | 'recovery'
  | 'supplements'
  | 'peptides'
  | 'longevity'
  | 'mindset';

export type InsightSource =
  | 'ajac'      // Alexander J.A. Cortes
  | 'huberman'  // Andrew Huberman
  | 'sinclair'  // David Sinclair
  | 'johnson'   // Bryan Johnson
  | 'science';  // General scientific consensus

export const categoryInfo: Record<InsightCategory, { name: string; icon: string; color: string }> = {
  training: { name: 'Entrenamiento', icon: '💪', color: '#ef4444' },
  nutrition: { name: 'Nutrición', icon: '🥗', color: '#22c55e' },
  fatloss: { name: 'Pérdida de Grasa', icon: '🔥', color: '#f97316' },
  fasting: { name: 'Ayuno', icon: '⏰', color: '#8b5cf6' },
  sleep: { name: 'Sueño', icon: '😴', color: '#3b82f6' },
  recovery: { name: 'Recuperación', icon: '🔄', color: '#06b6d4' },
  supplements: { name: 'Suplementos', icon: '💊', color: '#eab308' },
  peptides: { name: 'Péptidos', icon: '🧬', color: '#ec4899' },
  longevity: { name: 'Longevidad', icon: '⏳', color: '#14b8a6' },
  mindset: { name: 'Mentalidad', icon: '🧠', color: '#a855f7' },
};

export const sourceInfo: Record<InsightSource, { name: string; description: string }> = {
  ajac: { name: 'Alexander Cortes', description: 'Entrenador y autor de Achilles' },
  huberman: { name: 'Andrew Huberman', description: 'Neurocientífico de Stanford' },
  sinclair: { name: 'David Sinclair', description: 'Investigador de longevidad de Harvard' },
  johnson: { name: 'Bryan Johnson', description: 'Emprendedor y biohacker' },
  science: { name: 'Consenso Científico', description: 'Evidencia científica establecida' },
};

export const insights: Insight[] = [
  // ============================================
  // TRAINING INSIGHTS
  // ============================================
  {
    id: 'training-volume-hypertrophy',
    title: 'El volumen es el rey de la hipertrofia',
    content: 'Para ganar músculo, el factor más importante es el volumen total de entrenamiento (series × reps × peso). Apunta a 10-20 series semanales por grupo muscular.',
    category: 'training',
    source: 'ajac',
    tags: ['hipertrofia', 'volumen', 'series'],
    actionable: 'Cuenta tus series semanales por músculo. Si estás por debajo de 10, aumenta.',
    deepDive: 'El volumen de entrenamiento tiene una relación dosis-respuesta con la hipertrofia hasta cierto punto. Los principiantes responden bien a 10-12 series semanales, mientras que los avanzados pueden necesitar 15-20+. La clave es progresar gradualmente y permitir recuperación adecuada.',
  },
  {
    id: 'training-progressive-overload',
    title: 'Sobrecarga progresiva: la ley de hierro',
    content: 'Tu cuerpo solo construye músculo si le das una razón. Cada semana debes intentar hacer más: más peso, más reps, o más series.',
    category: 'training',
    source: 'ajac',
    tags: ['progresión', 'fuerza', 'adaptación'],
    actionable: 'Registra todos tus entrenamientos. Si no mejoras en 2 semanas, cambia algo.',
  },
  {
    id: 'training-muscle-insulin',
    title: 'El músculo es tu mejor aliado metabólico',
    content: 'El músculo es el tejido que más glucosa absorbe. Más músculo = mejor sensibilidad a la insulina = más fácil quemar grasa y ganar músculo.',
    category: 'training',
    source: 'ajac',
    tags: ['metabolismo', 'insulina', 'composición corporal'],
    actionable: 'Prioriza ejercicios compuestos que trabajan múltiples músculos.',
    deepDive: 'El músculo esquelético es responsable de hasta el 80% de la captación de glucosa estimulada por insulina. Cada kilo de músculo que ganas mejora tu capacidad de procesar carbohidratos y reduce tu riesgo de diabetes tipo 2.',
  },
  {
    id: 'training-tempo-control',
    title: 'Controla el tempo, controla el crecimiento',
    content: 'La fase excéntrica (bajar el peso) es donde ocurre más daño muscular y estímulo de crecimiento. Baja en 2-3 segundos, sube explosivo.',
    category: 'training',
    source: 'ajac',
    tags: ['técnica', 'excéntrico', 'tiempo bajo tensión'],
    actionable: 'En tu próximo entreno, cuenta "mil uno, mil dos" mientras bajas el peso.',
  },
  {
    id: 'training-morning-exercise',
    title: 'Entrena temprano para optimizar tu día',
    content: 'El ejercicio matutino (dentro de las primeras 3 horas tras despertar) adelanta tu reloj circadiano, mejora el estado de alerta y optimiza la liberación de cortisol.',
    category: 'training',
    source: 'huberman',
    tags: ['circadiano', 'cortisol', 'mañana'],
    actionable: 'Intenta entrenar antes de las 10am al menos 3 días por semana.',
    deepDive: 'El ejercicio matutino aumenta la temperatura corporal y libera catecolaminas (adrenalina, noradrenalina) que te mantienen alerta. También sincroniza mejor tu ritmo circadiano con el ciclo luz-oscuridad.',
  },
  {
    id: 'training-zone2-cardio',
    title: 'Cardio Zona 2: el secreto de la longevidad',
    content: 'El cardio en zona 2 (60-70% FC máx, puedes hablar pero con esfuerzo) mejora la función mitocondrial, la salud cardiovascular y la capacidad de quemar grasa.',
    category: 'training',
    source: 'huberman',
    tags: ['cardio', 'mitocondrias', 'zona 2'],
    actionable: 'Haz 150-180 minutos semanales de cardio donde puedas mantener una conversación.',
    deepDive: 'El cardio zona 2 estimula la biogénesis mitocondrial y mejora la eficiencia del sistema aeróbico. Peter Attia recomienda 3-4 sesiones de 45-60 min semanales para optimizar la salud metabólica.',
  },

  // ============================================
  // NUTRITION INSIGHTS
  // ============================================
  {
    id: 'nutrition-protein-priority',
    title: 'La proteína es el macronutriente rey',
    content: 'Consume 1.6-2.2g de proteína por kg de peso corporal. La proteína tiene el mayor efecto térmico (20-35% de sus calorías se gastan en digerirla).',
    category: 'nutrition',
    source: 'ajac',
    tags: ['proteína', 'termogénesis', 'músculo'],
    actionable: 'Calcula tu objetivo: peso en kg × 2 = gramos de proteína diarios.',
    deepDive: 'La proteína no solo construye músculo, también es el macronutriente más saciante y tiene el mayor efecto térmico. Esto significa que 100 calorías de proteína "cuestan" 20-35 calorías digerirlas, versus solo 3-15% para carbohidratos y grasas.',
  },
  {
    id: 'nutrition-whole-foods',
    title: 'Alimentos reales > Alimentos procesados',
    content: 'Los alimentos integrales son mucho más termogénicos que los procesados. 2000 calorías de avena NO son iguales a 2000 calorías de gominolas.',
    category: 'nutrition',
    source: 'ajac',
    tags: ['alimentos integrales', 'procesados', 'termogénesis'],
    actionable: 'Si no puedes identificar de qué planta o animal viene, probablemente es procesado.',
    deepDive: 'Los alimentos procesados están diseñados para digerirse rápido y no saciarte. Su efecto térmico es mínimo. Los alimentos integrales tienen más fibra, agua, y requieren más energía para digerir. Puedes perder peso simplemente cambiando la calidad de tus alimentos sin cambiar las calorías.',
  },
  {
    id: 'nutrition-meal-timing',
    title: 'Come la mayoría de calorías temprano',
    content: 'Tu sensibilidad a la insulina es mejor por la mañana. Comer más temprano y menos tarde optimiza la composición corporal y el metabolismo.',
    category: 'nutrition',
    source: 'huberman',
    tags: ['timing', 'circadiano', 'insulina'],
    actionable: 'Haz tu comida más grande antes de las 3pm.',
  },
  {
    id: 'nutrition-carbs-training',
    title: 'Los carbohidratos alrededor del entreno',
    content: 'Si vas a comer carbohidratos, hazlo alrededor del entrenamiento cuando tu sensibilidad a la insulina es máxima y los músculos los absorben mejor.',
    category: 'nutrition',
    source: 'ajac',
    tags: ['carbohidratos', 'timing', 'nutrient partitioning'],
    actionable: 'Consume 30-50g de carbohidratos 1 hora antes de entrenar.',
  },
  {
    id: 'nutrition-gut-health',
    title: 'Tu intestino es tu segundo cerebro',
    content: 'El microbioma intestinal afecta tu estado de ánimo, inmunidad, y metabolismo. Alimenta a tus bacterias buenas con fibra fermentable.',
    category: 'nutrition',
    source: 'huberman',
    tags: ['microbioma', 'fibra', 'prebióticos'],
    actionable: 'Come 2-4 porciones de vegetales fermentados o fibra semanalmente.',
    deepDive: 'El eje intestino-cerebro es bidireccional. El 90% de la serotonina se produce en el intestino. Alimentos fermentados (kimchi, chucrut, kéfir) y fibras prebióticas (ajo, cebolla, plátano verde) alimentan bacterias beneficiosas.',
  },

  // ============================================
  // FAT LOSS INSIGHTS
  // ============================================
  {
    id: 'fatloss-insulin-master',
    title: 'La insulina: la hormona maestra del fat loss',
    content: 'La insulina no "engorda" directamente, pero cuando está elevada, tu cuerpo almacena la grasa que comes en lugar de quemarla. Controla la insulina, controla la grasa.',
    category: 'fatloss',
    source: 'ajac',
    tags: ['insulina', 'hormonal', 'metabolismo'],
    actionable: 'Evita picos de azúcar: come proteína/grasa antes de carbohidratos.',
    deepDive: 'Los carbohidratos no se "convierten" en grasa fácilmente (es un proceso muy ineficiente). Lo que hacen es señalar a tu cuerpo para almacenar la grasa que comes. Por eso una dieta alta en carbohidratos Y alta en grasa es la peor combinación.',
  },
  {
    id: 'fatloss-deficit-sustainable',
    title: 'Déficit moderado, resultados sostenibles',
    content: 'El cuerpo puede perder máximo ~1% de peso corporal en grasa por semana. Más rápido = pérdida de músculo, piel flácida, y rebote.',
    category: 'fatloss',
    source: 'ajac',
    tags: ['déficit', 'sostenible', 'músculo'],
    actionable: 'Apunta a perder 0.5-1kg por semana máximo.',
  },
  {
    id: 'fatloss-neat-movement',
    title: 'NEAT: las calorías invisibles',
    content: 'El NEAT (termogénesis por actividad no ejercicio) puede variar 2000+ calorías entre personas. Caminar, estar de pie, y moverse quema más que el gimnasio.',
    category: 'fatloss',
    source: 'science',
    tags: ['NEAT', 'movimiento', 'calorías'],
    actionable: 'Apunta a 8000-10000 pasos diarios además del gym.',
    deepDive: 'Las personas naturalmente delgadas tienden a moverse más inconscientemente (gesticular, cambiar de posición, caminar más). Cuando haces dieta, el NEAT baja automáticamente. Contrarréstalo caminando más.',
  },
  {
    id: 'fatloss-cold-exposure',
    title: 'El frío activa la grasa parda',
    content: 'La exposición al frío activa el tejido adiposo marrón (grasa parda), que quema calorías para generar calor. También mejora la sensibilidad a la insulina.',
    category: 'fatloss',
    source: 'huberman',
    tags: ['frío', 'grasa parda', 'termogénesis'],
    actionable: 'Termina tus duchas con 30-60 segundos de agua fría.',
    deepDive: 'La grasa parda es metabólicamente activa y quema calorías para generar calor. Los adultos tienen más de lo que se pensaba, especialmente alrededor de la clavícula. La exposición regular al frío puede aumentar la cantidad y actividad de este tejido.',
  },

  // ============================================
  // FASTING INSIGHTS
  // ============================================
  {
    id: 'fasting-16-8-basics',
    title: 'Ayuno 16/8: el protocolo estándar',
    content: 'Ayunar 16 horas y comer en una ventana de 8 es el protocolo más sostenible. Mejora sensibilidad a la insulina, control de apetito, y simplifica tu día.',
    category: 'fasting',
    source: 'ajac',
    tags: ['16/8', 'intermitente', 'protocolo'],
    actionable: 'Empieza saltándote el desayuno. Come entre 12pm y 8pm.',
    deepDive: 'El ayuno no es magia para perder grasa - sigue necesitando déficit calórico. Pero facilita el déficit al reducir la ventana de alimentación y mejora marcadores metabólicos independientemente de las calorías.',
  },
  {
    id: 'fasting-what-breaks',
    title: 'Qué rompe el ayuno (y qué no)',
    content: 'Café negro, té, agua: OK. Cualquier cosa con más de 10 calorías rompe el ayuno. Edulcorantes artificiales técnicamente no, pero pueden estimular insulina en algunas personas.',
    category: 'fasting',
    source: 'ajac',
    tags: ['café', 'calorías', 'técnico'],
    actionable: 'Café negro o té sin nada está permitido durante el ayuno.',
  },
  {
    id: 'fasting-autophagy',
    title: 'Autofagia: la limpieza celular',
    content: 'Ayunos más largos (24-72h) activan la autofagia, donde las células reciclan componentes dañados. Potencial anti-envejecimiento significativo.',
    category: 'fasting',
    source: 'sinclair',
    tags: ['autofagia', 'longevidad', 'celular'],
    actionable: 'Considera un ayuno de 24h una vez al mes para beneficios de autofagia.',
    deepDive: 'La autofagia se activa significativamente después de 24-48h sin comida. Las células degradan proteínas dañadas, mitocondrias disfuncionales, y potencialmente células precancerosas. Es uno de los mecanismos clave detrás de los beneficios de longevidad del ayuno.',
  },
  {
    id: 'fasting-training',
    title: 'Entrenar en ayunas: pros y contras',
    content: 'Entrenar en ayunas puede mejorar la oxidación de grasa, pero puede comprometer el rendimiento en sesiones intensas. Cardio ligero = OK. Pesas pesadas = mejor con algo en el estómago.',
    category: 'fasting',
    source: 'ajac',
    tags: ['entrenamiento', 'ayunas', 'rendimiento'],
    actionable: 'Cardio ligero en ayunas OK. Para pesas, al menos toma aminoácidos.',
  },

  // ============================================
  // SLEEP INSIGHTS
  // ============================================
  {
    id: 'sleep-non-negotiable',
    title: 'El sueño no es negociable',
    content: '7-9 horas de sueño de calidad es el factor más importante para recuperación, hormonas, composición corporal, y rendimiento cognitivo.',
    category: 'sleep',
    source: 'huberman',
    tags: ['horas', 'recuperación', 'hormonas'],
    actionable: 'Establece una hora fija de dormir y despertar, incluso fines de semana.',
    deepDive: 'Durante el sueño profundo se libera la hormona del crecimiento (GH), se consolida la memoria, y se reparan los tejidos. La privación de sueño reduce testosterona, aumenta cortisol, y sabotea la pérdida de grasa incluso en déficit calórico.',
  },
  {
    id: 'sleep-light-morning',
    title: 'Luz solar matutina: el reset diario',
    content: 'Ver luz solar directa en los primeros 30-60 minutos tras despertar sincroniza tu reloj circadiano, mejora el estado de ánimo, y facilita el sueño nocturno.',
    category: 'sleep',
    source: 'huberman',
    tags: ['luz', 'circadiano', 'mañana'],
    actionable: 'Sal afuera 5-10 min al despertar, incluso en días nublados.',
    deepDive: 'La luz matutina activa células especiales en la retina (ipRGCs) que señalan al núcleo supraquiasmático (tu reloj maestro). Esto inicia un temporizador de ~16 horas hasta que la melatonina empiece a subir. Sin esta señal, tu ritmo circadiano deriva.',
  },
  {
    id: 'sleep-temperature',
    title: 'El frío nocturno mejora el sueño',
    content: 'Tu cuerpo necesita bajar 1-3°C para iniciar el sueño. Una habitación fría (18-19°C) facilita esto dramáticamente.',
    category: 'sleep',
    source: 'huberman',
    tags: ['temperatura', 'ambiente', 'calidad'],
    actionable: 'Baja el termostato o usa menos cobijas. Objetivo: 18-19°C.',
  },
  {
    id: 'sleep-no-screens',
    title: 'Pantallas y luz azul: el enemigo del sueño',
    content: 'La luz azul de pantallas suprime la melatonina. Evita pantallas 1-2 horas antes de dormir, o usa filtros/gafas bloqueadoras.',
    category: 'sleep',
    source: 'huberman',
    tags: ['luz azul', 'melatonina', 'pantallas'],
    actionable: 'Activa el modo nocturno en todos tus dispositivos después de las 8pm.',
  },
  {
    id: 'sleep-consistency',
    title: 'La consistencia supera la cantidad',
    content: 'Dormir y despertar a la misma hora todos los días es más importante que la cantidad total. La irregularidad fragmenta los ciclos de sueño.',
    category: 'sleep',
    source: 'johnson',
    tags: ['consistencia', 'rutina', 'ciclos'],
    actionable: 'Varía tu hora de dormir máximo 30 min, incluso fines de semana.',
  },

  // ============================================
  // RECOVERY INSIGHTS
  // ============================================
  {
    id: 'recovery-muscle-grows-resting',
    title: 'El músculo crece descansando, no entrenando',
    content: 'El entrenamiento es el estímulo, pero el crecimiento ocurre durante el descanso. Sin recuperación adecuada, solo acumulas fatiga.',
    category: 'recovery',
    source: 'ajac',
    tags: ['descanso', 'crecimiento', 'supercompensación'],
    actionable: 'Deja 48-72h entre entrenamientos del mismo grupo muscular.',
  },
  {
    id: 'recovery-deload',
    title: 'Deloads: el secreto del progreso continuo',
    content: 'Cada 4-6 semanas, reduce el volumen/intensidad 40-50% por una semana. Esto permite recuperación acumulada y prepara para nuevos PRs.',
    category: 'recovery',
    source: 'ajac',
    tags: ['deload', 'fatiga', 'periodización'],
    actionable: 'Programa una semana de deload cada 5-6 semanas de entrenamiento duro.',
  },
  {
    id: 'recovery-sauna',
    title: 'Sauna: cardio pasivo y longevidad',
    content: 'El uso regular de sauna (4+ veces/semana) se asocia con 40% menos riesgo cardiovascular. También mejora la recuperación y libera hormona del crecimiento.',
    category: 'recovery',
    source: 'huberman',
    tags: ['sauna', 'cardiovascular', 'GH'],
    actionable: 'Sauna 15-20 min a 80-100°C, 2-4 veces por semana.',
    deepDive: 'La sauna aumenta la frecuencia cardíaca similar al cardio moderado. Estudios finlandeses muestran beneficios dramáticos para longevidad. También aumenta la hormona del crecimiento, especialmente si se hace después de entrenar.',
  },
  {
    id: 'recovery-cold-inflammation',
    title: 'Frío post-entreno: espada de doble filo',
    content: 'El frío inmediatamente después de entrenar puede reducir la inflamación necesaria para la adaptación muscular. Mejor esperar 4-6 horas.',
    category: 'recovery',
    source: 'huberman',
    tags: ['frío', 'inflamación', 'timing'],
    actionable: 'Si quieres ganar músculo, evita el frío dentro de las 4h post-entreno.',
  },

  // ============================================
  // SUPPLEMENTS INSIGHTS
  // ============================================
  {
    id: 'supplements-creatine',
    title: 'Creatina: el suplemento más estudiado',
    content: 'La creatina monohidrato es segura, barata, y efectiva. Mejora fuerza, potencia, y posiblemente función cognitiva. 5g diarios, sin necesidad de carga.',
    category: 'supplements',
    source: 'science',
    tags: ['creatina', 'fuerza', 'evidencia'],
    actionable: 'Toma 5g de creatina monohidrato diariamente con cualquier comida.',
  },
  {
    id: 'supplements-vitamin-d',
    title: 'Vitamina D: la hormona solar',
    content: 'La mayoría de personas son deficientes en vitamina D. Afecta testosterona, inmunidad, estado de ánimo, y salud ósea. Suplementa 2000-5000 UI diarias.',
    category: 'supplements',
    source: 'huberman',
    tags: ['vitamina D', 'hormonal', 'inmunidad'],
    actionable: 'Hazte un análisis de 25-OH vitamina D. Objetivo: 40-60 ng/mL.',
  },
  {
    id: 'supplements-omega3',
    title: 'Omega-3: el antiinflamatorio esencial',
    content: 'EPA y DHA reducen inflamación sistémica, mejoran salud cerebral y cardiovascular. La mayoría de dietas son deficientes. Apunta a 2-3g de EPA+DHA diarios.',
    category: 'supplements',
    source: 'huberman',
    tags: ['omega-3', 'inflamación', 'cerebro'],
    actionable: 'Toma aceite de pescado de calidad con al menos 1g de EPA+DHA.',
  },
  {
    id: 'supplements-magnesium',
    title: 'Magnesio: el mineral del sueño',
    content: 'El magnesio participa en 300+ reacciones enzimáticas. Mejora sueño, recuperación, y rendimiento. Magnesio glicinato o treonato antes de dormir.',
    category: 'supplements',
    source: 'huberman',
    tags: ['magnesio', 'sueño', 'recuperación'],
    actionable: 'Toma 200-400mg de magnesio glicinato 30-60 min antes de dormir.',
  },
  {
    id: 'supplements-caffeine',
    title: 'Cafeína: úsala estratégicamente',
    content: 'La cafeína mejora rendimiento y enfoque, pero desarrolla tolerancia. Evítala 8-10h antes de dormir. Considera ciclarla para mantener efectividad.',
    category: 'supplements',
    source: 'huberman',
    tags: ['cafeína', 'rendimiento', 'sueño'],
    actionable: 'No tomes cafeína después de las 2pm si quieres dormir bien.',
  },

  // ============================================
  // PEPTIDES INSIGHTS
  // ============================================
  {
    id: 'peptides-intro',
    title: '¿Qué son los péptidos?',
    content: 'Los péptidos son cadenas cortas de aminoácidos que actúan como mensajeros en el cuerpo. Pueden optimizar recuperación, composición corporal, y longevidad.',
    category: 'peptides',
    source: 'ajac',
    tags: ['básico', 'definición', 'señalización'],
    actionable: 'Investiga y consulta con un profesional antes de usar cualquier péptido.',
    deepDive: 'A diferencia de los esteroides, los péptidos trabajan CON los sistemas naturales del cuerpo. Son más sutiles pero también más seguros cuando se usan correctamente. Requieren inyección subcutánea en la mayoría de casos.',
  },
  {
    id: 'peptides-bpc157',
    title: 'BPC-157: el péptido de curación',
    content: 'BPC-157 acelera la curación de tendones, ligamentos, y tejido intestinal. Muy popular para lesiones y salud digestiva.',
    category: 'peptides',
    source: 'ajac',
    tags: ['BPC-157', 'curación', 'lesiones'],
    actionable: 'Considera BPC-157 para lesiones persistentes o problemas digestivos.',
  },
  {
    id: 'peptides-glp1',
    title: 'GLP-1 (Tirzepatide/Semaglutide): revolución en fat loss',
    content: 'Los agonistas GLP-1 reducen dramáticamente el apetito y mejoran sensibilidad a la insulina. Revolucionarios para pérdida de grasa, pero requieren mantener hábitos.',
    category: 'peptides',
    source: 'ajac',
    tags: ['GLP-1', 'apetito', 'tirzepatide'],
    actionable: 'Usa dosis mínima efectiva. Mantén proteína alta y entrena para preservar músculo.',
    deepDive: 'Los GLP-1 no son atajos mágicos. Sin mantener proteína alta (1g/lb) y entrenar, perderás músculo significativo. El objetivo es usar la dosis más baja que funcione y establecer hábitos para cuando dejes de usarlos.',
  },
  {
    id: 'peptides-mk677',
    title: 'MK-677: secretagogo de GH oral',
    content: 'MK-677 aumenta hormona del crecimiento y IGF-1 sin inyecciones. Mejora sueño, recuperación, y composición corporal. Puede aumentar apetito y retención de agua.',
    category: 'peptides',
    source: 'ajac',
    tags: ['MK-677', 'GH', 'recuperación'],
    actionable: 'Empieza con 10-15mg antes de dormir para minimizar efectos secundarios.',
  },

  // ============================================
  // LONGEVITY INSIGHTS
  // ============================================
  {
    id: 'longevity-nad',
    title: 'NAD+: la molécula de la juventud celular',
    content: 'NAD+ declina con la edad y es crucial para la función mitocondrial. Precursores como NMN y NR pueden ayudar a mantener niveles óptimos.',
    category: 'longevity',
    source: 'sinclair',
    tags: ['NAD+', 'mitocondrias', 'NMN'],
    actionable: 'Considera suplementar con NMN (250-500mg) o NR.',
    deepDive: 'David Sinclair ha popularizado la teoría de que el declive de NAD+ es un driver principal del envejecimiento. NAD+ es necesario para las sirtuínas, enzimas que reparan el ADN y regulan el metabolismo. El ejercicio y el ayuno también aumentan NAD+.',
  },
  {
    id: 'longevity-sirtuins',
    title: 'Sirtuínas: los guardianes del genoma',
    content: 'Las sirtuínas son enzimas que reparan ADN y regulan el envejecimiento. Se activan con ayuno, ejercicio, frío, y compuestos como resveratrol.',
    category: 'longevity',
    source: 'sinclair',
    tags: ['sirtuínas', 'ADN', 'resveratrol'],
    actionable: 'Combina ayuno + ejercicio + exposición al frío para activar sirtuínas.',
  },
  {
    id: 'longevity-mtor',
    title: 'mTOR: el acelerador del envejecimiento',
    content: 'mTOR promueve crecimiento (bueno para músculo) pero también acelera envejecimiento. Ciclarlo con períodos de ayuno y restricción proteica puede ser óptimo.',
    category: 'longevity',
    source: 'sinclair',
    tags: ['mTOR', 'crecimiento', 'balance'],
    actionable: 'No comas proteína excesiva constantemente. Cicla con días más bajos.',
    deepDive: 'mTOR es anabólico - necesario para construir músculo. Pero mTOR crónicamente elevado acelera el envejecimiento y puede promover cáncer. El balance ideal es activarlo post-entreno (con proteína) y suprimirlo en otros momentos (ayuno, restricción calórica).',
  },
  {
    id: 'longevity-biomarkers',
    title: 'Mide lo que importa',
    content: 'Monitorea biomarcadores clave: HbA1c, insulina en ayunas, proteína C reactiva, homocisteína, vitamina D, y perfil lipídico completo.',
    category: 'longevity',
    source: 'johnson',
    tags: ['biomarcadores', 'análisis', 'tracking'],
    actionable: 'Hazte análisis de sangre completos al menos 2 veces al año.',
  },
  {
    id: 'longevity-blueprint',
    title: 'Protocolo Blueprint: optimización extrema',
    content: 'Bryan Johnson sigue un protocolo ultra-riguroso: dormir a la misma hora, comer lo mismo, medir todo. Su edad biológica es años menor que la cronológica.',
    category: 'longevity',
    source: 'johnson',
    tags: ['blueprint', 'protocolo', 'optimización'],
    actionable: 'Empieza con consistencia en sueño y alimentación antes de añadir complejidad.',
  },

  // ============================================
  // MINDSET INSIGHTS
  // ============================================
  {
    id: 'mindset-consistency',
    title: 'La consistencia supera la perfección',
    content: '80% de adherencia durante años supera 100% durante semanas. No busques el plan perfecto, busca uno que puedas mantener.',
    category: 'mindset',
    source: 'ajac',
    tags: ['consistencia', 'hábitos', 'largo plazo'],
    actionable: 'Pregúntate: ¿Puedo hacer esto por 5 años? Si no, simplifica.',
  },
  {
    id: 'mindset-identity',
    title: 'Cambia tu identidad, no solo tu comportamiento',
    content: 'No digas "estoy intentando comer sano". Di "soy una persona que come sano". El cambio de identidad precede al cambio de comportamiento sostenible.',
    category: 'mindset',
    source: 'science',
    tags: ['identidad', 'cambio', 'hábitos'],
    actionable: 'Redefine quién eres: "Soy alguien que entrena", no "intento ir al gym".',
  },
  {
    id: 'mindset-discipline',
    title: 'La disciplina es libertad',
    content: 'La gente evita la disciplina porque la ve como restricción. En realidad, la disciplina te libera de las consecuencias de la indisciplina.',
    category: 'mindset',
    source: 'ajac',
    tags: ['disciplina', 'libertad', 'filosofía'],
    actionable: 'Elige tu dolor: el dolor de la disciplina o el dolor del arrepentimiento.',
  },
  {
    id: 'mindset-dopamine',
    title: 'Gestiona tu dopamina',
    content: 'Las redes sociales, comida basura, y entretenimiento fácil agotan tu dopamina. Esto hace que el trabajo duro se sienta imposible. Reduce estímulos baratos.',
    category: 'mindset',
    source: 'huberman',
    tags: ['dopamina', 'motivación', 'recompensa'],
    actionable: 'Haz las tareas difíciles ANTES de darte recompensas fáciles.',
    deepDive: 'La dopamina no es la molécula del placer, es la molécula de la motivación y el deseo. Cuando la agotas con estímulos fáciles (scrolling, pornografía, azúcar), las actividades que requieren esfuerzo se vuelven aversivas. Reserva las recompensas para después del trabajo.',
  },
];

// Helper functions
export function getInsightsByCategory(category: InsightCategory): Insight[] {
  return insights.filter(i => i.category === category);
}

export function getInsightsBySource(source: InsightSource): Insight[] {
  return insights.filter(i => i.source === source);
}

export function getInsightsByTag(tag: string): Insight[] {
  return insights.filter(i => i.tags.includes(tag.toLowerCase()));
}

export function getRandomInsight(): Insight {
  return insights[Math.floor(Math.random() * insights.length)];
}

export function getRandomInsightByCategory(category: InsightCategory): Insight | undefined {
  const categoryInsights = getInsightsByCategory(category);
  if (categoryInsights.length === 0) return undefined;
  return categoryInsights[Math.floor(Math.random() * categoryInsights.length)];
}

export function getDailyInsight(): Insight {
  // Use the date as seed for consistent daily insight
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return insights[seed % insights.length];
}

export function searchInsights(query: string): Insight[] {
  const lowerQuery = query.toLowerCase();
  return insights.filter(i =>
    i.title.toLowerCase().includes(lowerQuery) ||
    i.content.toLowerCase().includes(lowerQuery) ||
    i.tags.some(t => t.includes(lowerQuery))
  );
}
