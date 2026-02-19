// Mobility & Stretching Routines for Achilles Fitness
// Based on research from Kelly Starrett, Squat University, Huberman Lab, FRC, and more

export type MobilityCategory = 'hip_release' | 'mobility' | 'pilates' | 'yoga' | 'morning';

export interface MobilityExercise {
  name: string;
  duration: number; // seconds
  sets?: number;
  reps?: number;
  description: string;
  youtubeUrl: string;
  isPerSide?: boolean;
}

export interface MobilityRoutine {
  id: string;
  name: string;
  duration: number; // minutes
  category: MobilityCategory;
  icon: string;
  description: string;
  whenToDo: string;
  exercises: MobilityExercise[];
}

export const mobilityRoutines: MobilityRoutine[] = [
  // =============================================
  // ROUTINE 1: Quick Hip Release (10 min)
  // =============================================
  {
    id: 'quick-hip-release',
    name: 'Quick Hip Release',
    duration: 10,
    category: 'hip_release',
    icon: '🔥',
    description: 'Liberación rápida de cadera para combatir las horas sentado. Ideal post-entreno o al llegar a casa.',
    whenToDo: 'Cualquier día — post-entreno, días de descanso o después de estar sentado mucho tiempo',
    exercises: [
      {
        name: 'Hip CARs (de pie)',
        duration: 60,
        description: 'De pie, apóyate con una mano en la pared para mantener el equilibrio. Levanta la rodilla derecha al pecho, luego ábrela hacia fuera rotando la cadera externamente lo máximo posible, lleva la pierna hacia atrás y baja controladamente. Haz el círculo completo de forma MUY lenta (5-8 segundos por rep). Imagina que tu cadera es un compás dibujando el círculo más grande posible. Mantén el torso completamente quieto — solo se mueve la pierna. Aprieta todo el cuerpo (core, glúteo de la pierna de apoyo) para generar "irradiación" y ganar más rango. Haz 3 reps en cada dirección. Deberías sentir trabajo en toda la cápsula articular de la cadera. Error común: mover el torso para compensar falta de movilidad.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Deep Squat Hold',
        duration: 45,
        description: 'Coloca los pies algo más anchos que los hombros, puntas ligeramente hacia fuera (15-30°). Baja a la posición más profunda de sentadilla que puedas, manteniendo los talones en el suelo. Usa los codos para empujar las rodillas hacia fuera. Mantén el pecho erguido y la espalda lo más recta posible. Respira profundamente — cada exhalación intenta hundirte un poco más. Si no puedes mantener los talones abajo, pon algo debajo (un libro, una toalla enrollada). Deberías sentir apertura en caderas, estiramiento en aductores y tobillos. Este es el "reset" natural de la cadera humana.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
      },
      {
        name: '90/90 Stretch',
        duration: 60,
        description: 'Siéntate en el suelo con la pierna derecha delante, rodilla y cadera a 90°, espinilla paralela a tu cuerpo. La pierna izquierda detrás también a 90°, espinilla perpendicular a tu cuerpo. La pierna delantera trabaja rotación EXTERNA de cadera, la trasera rotación INTERNA. Siéntate bien alto, alargando la columna. Inclínate ligeramente hacia delante sobre la pierna delantera manteniendo la espalda recta — NO redondees. Deberías sentir un estiramiento profundo en el glúteo de la pierna delantera y en la cadera interna de la pierna trasera. Respira profundo y relaja en cada exhalación. Si la rodilla trasera se levanta del suelo, está bien — ve ganando rango poco a poco. Mantén 60 segundos y cambia de lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
        isPerSide: true,
      },
      {
        name: 'Half-Kneeling Hip Flexor Stretch',
        duration: 45,
        description: 'Arrodíllate con la pierna derecha adelante en 90° (pie plano en el suelo), rodilla izquierda en el suelo (pon una toalla o cojín si molesta). Las caderas deben estar "cuadradas" mirando al frente. APRIETA el glúteo izquierdo con fuerza — esto es CLAVE, ya que genera una inhibición recíproca del flexor de cadera que quieres estirar. Empuja las caderas ligeramente hacia adelante manteniendo el torso erguido. Deberías sentir un estiramiento intenso en la parte frontal de la cadera izquierda (psoas/iliopsoas). Para intensificar: levanta el brazo izquierdo y inclínate ligeramente hacia la derecha. NO arquees la espalda baja — es el error más común y reduce la efectividad del estiramiento.',
        youtubeUrl: 'https://www.youtube.com/watch?v=bnVfloe6yTo',
        isPerSide: true,
      },
      {
        name: 'Pigeon Pose',
        duration: 60,
        description: 'Desde posición de cuadrupedia, lleva la rodilla derecha hacia la mano derecha y coloca la espinilla en diagonal delante de ti (el pie derecho va hacia la mano izquierda). Extiende la pierna izquierda hacia atrás, empeine en el suelo. La cadera derecha trabaja rotación externa. Mantén las caderas lo más "cuadradas" posible — la cadera izquierda no debe caer hacia un lado. Si sientes presión en la rodilla, acerca más el pie derecho a la cadera (reduce el ángulo). Puedes quedarte erguido con las manos en el suelo, o para profundizar, baja el pecho hacia el suelo y apoya los antebrazos o la frente. Respira profundamente y deja que la gravedad haga el trabajo. Deberías sentir estiramiento en el glúteo y rotadores externos de la pierna delantera.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-6MGjYmHdYQ',
        isPerSide: true,
      },
      {
        name: 'Frog Stretch',
        duration: 60,
        description: 'Desde cuadrupedia, abre las rodillas lo más que puedas, manteniendo las espinillas paralelas entre sí y los pies alineados con las rodillas (empeines en el suelo). Baja las caderas hacia atrás y hacia el suelo, manteniendo la espalda recta. Apóyate en los antebrazos. Deberías sentir un estiramiento intenso en los aductores (cara interna del muslo). Para añadir movimiento, balancea suavemente las caderas hacia delante y hacia atrás. Respira profundamente — cada exhalación relaja un poco más. NO fuerces el rango; la gravedad y el tiempo harán el trabajo. Si es muy intenso, no bajes tanto las caderas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=mO8S7qOdcdU',
      },
      {
        name: 'Happy Baby',
        duration: 60,
        description: 'Túmbate boca arriba. Lleva las rodillas hacia el pecho y luego ábrelas hacia los lados, más anchas que el torso. Agarra la planta de los pies (o los tobillos si no llegas) con las manos, con los brazos por dentro de las piernas. Tira suavemente de los pies hacia el suelo, manteniendo la espalda baja pegada al suelo. Las rodillas deben apuntar hacia las axilas. Puedes balancearte suavemente de lado a lado para un mini-masaje en la zona lumbar. Deberías sentir apertura en caderas, estiramiento en aductores y relajación lumbar. Es una posición restaurativa — respira profundamente y relaja.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Supine Figure-4 Stretch',
        duration: 45,
        description: 'Túmbate boca arriba. Cruza el tobillo derecho sobre la rodilla izquierda (formando un "4"). Levanta la pierna izquierda del suelo y agárrala por detrás del muslo (o por delante de la espinilla) con ambas manos. Tira de la pierna izquierda hacia tu pecho mientras empujas la rodilla derecha hacia afuera con el codo derecho. Mantén la cabeza y hombros en el suelo y relajados. Deberías sentir un estiramiento profundo en el piriforme y los rotadores externos de la cadera derecha (zona profunda del glúteo). Si sientes un hormigueo que baja por la pierna, estás tocando el nervio ciático — reduce la intensidad. Respira profundo, relaja la mandíbula.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
        isPerSide: true,
      },
    ],
  },

  // =============================================
  // ROUTINE 2: Full Body Mobility (18 min)
  // =============================================
  {
    id: 'full-body-mobility',
    name: 'Full Body Mobility',
    duration: 18,
    category: 'mobility',
    icon: '🦴',
    description: 'Movilidad completa de todas las articulaciones principales. El mantenimiento que tu cuerpo necesita.',
    whenToDo: 'Días de descanso o como sesión dedicada. Puede hacerse post-entreno en versión reducida.',
    exercises: [
      {
        name: 'Neck CARs',
        duration: 30,
        description: 'De pie con buena postura, hombros abajo y atrás. Baja la barbilla al pecho, luego rota la cabeza lentamente hacia la derecha llevando la oreja al hombro (sin subir el hombro), continúa hacia atrás extendiendo el cuello, luego hacia la izquierda y de vuelta al inicio. Cada círculo completo debe tomar 8-10 segundos. Mantén tensión en todo el cuerpo (aprieta puños, core) para "irradiar" — esto protege la columna cervical. El movimiento debe ser lo más grande posible pero SIN dolor. Haz 2 reps en cada dirección. Notarás que ciertas zonas tienen menos rango — eso es lo que estamos trabajando.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
      },
      {
        name: 'Shoulder CARs',
        duration: 60,
        description: 'De pie, brazo derecho al costado. Levanta el brazo hacia delante y arriba, rota externamente el hombro al llegar arriba (pulgar mira atrás), continúa el arco hacia atrás y baja por detrás. Cada circunducción completa toma 10-15 segundos. Aprieta el puño, tensa el core y aprieta el glúteo del mismo lado — la irradiación protege la articulación y permite más rango. El movimiento debe ser LENTO y controlado. Si encuentras un punto "atascado", ve más despacio ahí. Haz 3 reps hacia delante y 3 hacia atrás con cada brazo. Deberías sentir trabajo en toda la cápsula del hombro.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Thread the Needle',
        duration: 45,
        description: 'En cuadrupedia (manos bajo hombros, rodillas bajo caderas). Levanta la mano derecha y pásala por debajo del torso hacia la izquierda, deslizando el brazo por el suelo. Rota el torso y baja el hombro derecho y la sien al suelo. El brazo izquierdo puede quedarse estirado o doblarse para profundizar. Deberías sentir una rotación profunda en la columna torácica (parte media de la espalda) y un estiramiento en el hombro derecho. Respira profundo — al exhalar, intenta rotar un poco más. Mantén las caderas quietas y centradas sobre las rodillas. Vuelve a la posición inicial y repite del otro lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=MfUx9FCOb1E',
        isPerSide: true,
      },
      {
        name: 'Dead Hang',
        duration: 30,
        description: 'Cuélgate de una barra con agarre prono (palmas mirando al frente), brazos completamente estirados. Deja que los hombros se "abran" hacia arriba mientras el peso de tu cuerpo te descomprime. Relaja todo excepto el agarre — deja caer las caderas, relaja las piernas. Deberías sentir descompresión espinal, estiramiento en dorsales, pectorales y hombros. Es uno de los mejores ejercicios para la salud del hombro según Jeff Cavaliere (Athlean-X). Si no tienes barra, haz un estiramiento de hombro en un marco de puerta: agarra el marco por arriba y deja caer el peso del cuerpo hacia delante.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
      },
      {
        name: 'Cat/Cow',
        duration: 60,
        reps: 10,
        description: 'En cuadrupedia (manos bajo hombros, rodillas bajo caderas). COW: inhala y deja caer el abdomen hacia el suelo, abre el pecho, mira hacia arriba — arquea la espalda de forma controlada. CAT: exhala y redondea la espalda empujando el suelo con las manos, mete la barbilla al pecho, contrae el abdomen — como un gato asustado. Muévete LENTAMENTE, intentando articular vértebra por vértebra. Cada transición debe tomar 3-4 segundos. Siente cómo cada segmento de la columna se mueve independientemente. Este es el mejor ejercicio para "despertar" la columna — movilidad espinal segmental pura.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Spine Twist (sentado)',
        duration: 45,
        description: 'Siéntate en el suelo con las piernas estiradas o cruzadas. Alarga la columna (imagina que un hilo te tira desde la coronilla). Rota el torso hacia la derecha, colocando la mano izquierda en la rodilla derecha y la derecha detrás de ti. La rotación debe venir de la columna torácica (parte media), NO de la lumbar. Imagina que giras alrededor de un eje vertical que pasa por tu cabeza. Mira por encima del hombro derecho. Inhala para alargarte, exhala para rotar un poco más. Mantén ambos isquiones en contacto con el suelo. Deberías sentir la rotación en las costillas y la espalda media.',
        youtubeUrl: 'https://www.youtube.com/watch?v=MfUx9FCOb1E',
        isPerSide: true,
      },
      {
        name: 'Cobra',
        duration: 30,
        description: 'Túmbate boca abajo, manos bajo los hombros, codos pegados al cuerpo. Presiona las manos contra el suelo y eleva el pecho, manteniendo las caderas y el pubis en contacto con el suelo. Los codos pueden quedarse ligeramente doblados. Abre el pecho, junta los omóplatos y mira hacia delante o ligeramente arriba. NO uses la fuerza de los brazos para empujarte demasiado alto — la extensión debe venir de la columna torácica. Aprieta los glúteos suavemente para proteger la zona lumbar. Deberías sentir extensión espinal y apertura del pecho/abdomen. Respira normalmente.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Hip CARs (de pie)',
        duration: 60,
        description: 'De pie, apóyate con una mano en la pared. Levanta la rodilla al pecho, ábrela hacia fuera en rotación externa máxima, llévala atrás y baja controladamente completando el círculo. Cada rep: 5-8 segundos. Mantén el torso INMÓVIL — solo se mueve la pierna desde la cadera. Aprieta core, puños y glúteo de apoyo para generar irradiación (tensión que protege y permite más rango). 3 reps en cada dirección por lado. Este es el ejercicio #1 para mantener la salud articular de la cadera según el sistema FRC.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Deep Squat Hold',
        duration: 45,
        description: 'Pies algo más anchos que hombros, puntas afuera 15-30°. Baja a sentadilla profunda con talones en el suelo. Empuja rodillas afuera con los codos, pecho erguido. Respira profundo y relájate en la posición. Si los talones se levantan, coloca algo debajo. Es la posición natural de descanso del ser humano.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
      },
      {
        name: '90/90 Stretch',
        duration: 60,
        description: 'Siéntate con pierna derecha delante a 90° (rotación externa) y pierna izquierda detrás a 90° (rotación interna). Siéntate alto, inclínate ligeramente hacia delante sobre la pierna delantera sin redondear la espalda. Siente el estiramiento en el glúteo delantero y la cadera interna trasera. 60 segundos por lado. Para progresar: añade contracciones isométricas de 5s presionando la rodilla contra el suelo antes de profundizar (técnica PAILs/RAILs).',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
        isPerSide: true,
      },
      {
        name: 'Couch Stretch',
        duration: 45,
        description: 'Coloca la rodilla izquierda en el suelo junto a una pared (o sofá), con el empeine izquierdo contra la pared (la espinilla sube por la pared). La pierna derecha adelante en 90° como una zancada. Erguido, aprieta el glúteo izquierdo y empuja las caderas hacia delante. Es el estiramiento MÁS efectivo para los flexores de cadera y el recto femoral según Kelly Starrett. Deberías sentir un estiramiento INTENSO en la parte frontal del muslo izquierdo y la cadera. Si es demasiado intenso, aléjate un poco de la pared. NO arquees la espalda baja.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
        isPerSide: true,
      },
      {
        name: 'Pigeon Pose',
        duration: 60,
        description: 'Desde cuadrupedia, lleva la rodilla derecha hacia la mano derecha, espinilla en diagonal. Extiende la pierna izquierda atrás. Mantén caderas cuadradas. Baja el pecho si puedes para profundizar. Respira y deja que la gravedad trabaje. Estiramiento profundo de glúteo y rotadores externos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-6MGjYmHdYQ',
        isPerSide: true,
      },
      {
        name: 'Cossack Squat',
        duration: 60,
        reps: 8,
        description: 'De pie, piernas muy abiertas (doble ancho de hombros). Desplaza el peso hacia la pierna derecha, bajando en sentadilla lateral profunda mientras la pierna izquierda se estira completamente con la punta del pie mirando al techo. Mantén el talón derecho en el suelo, pecho erguido. Baja lo máximo que puedas con control. Vuelve al centro y repite hacia el otro lado. Deberías sentir estiramiento en los aductores de la pierna estirada y trabajo de movilidad en la cadera de la pierna doblada. 8 reps por lado, lentas y controladas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=tpczTeSkHz0',
        isPerSide: true,
      },
      {
        name: 'Ankle CARs',
        duration: 40,
        description: 'De pie o sentado, levanta un pie del suelo. Dibuja círculos LENTOS y amplios con el pie, moviendo solo el tobillo. Intenta pasar por cada posición: punta abajo (plantarflexión), dentro (inversión), punta arriba (dorsiflexión), fuera (eversión). Cada círculo: 5 segundos. 5 reps en cada dirección por tobillo. Aprieta los dedos del pie al pasar por la plantarflexión. Esto mantiene la salud articular del tobillo — crucial para sentadilla y carrera.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Wall Ankle Mobilization',
        duration: 60,
        reps: 10,
        description: 'De pie frente a una pared, pie derecho a unos 10-12 cm de la pared. Empuja la rodilla derecha hacia delante, intentando tocar la pared con la rodilla sin levantar el talón. Mantén el pie recto (no dejes que se colapse hacia dentro). Cada rep: empuja y mantén 2-3 segundos. Si tocas la pared fácil, aleja más el pie. Si no llegas, acércalo. Deberías sentir estiramiento en el tendón de Aquiles y trabajo en la dorsiflexión del tobillo. Este ejercicio mejora directamente tu sentadilla (Squat University).',
        youtubeUrl: 'https://www.youtube.com/watch?v=-CiWQ2IvY34',
        isPerSide: true,
      },
      {
        name: "Child's Pose",
        duration: 45,
        description: 'Desde cuadrupedia, siéntate sobre los talones y extiende los brazos hacia delante por el suelo. Frente al suelo, deja caer el pecho y relaja todo. Las rodillas pueden estar juntas (más estiramiento lumbar) o abiertas (más apertura de caderas). Empuja suavemente las manos hacia delante para alargar la espalda. Respira profundo, expandiendo la espalda baja con cada inhalación. Esta es una posición de descanso y reset — relaja mandíbula, hombros y caderas completamente.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
    ],
  },

  // =============================================
  // ROUTINE 3: Pilates Core Flow (18 min)
  // =============================================
  {
    id: 'pilates-core-flow',
    name: 'Pilates Core Flow',
    duration: 18,
    category: 'pilates',
    icon: '💪',
    description: 'Rutina de Pilates mat clásico. Core profundo, control postural y movilidad espinal en 18 minutos.',
    whenToDo: 'Días de descanso o post-entreno de upper body. 2-3 veces por semana ideal.',
    exercises: [
      {
        name: 'Respiración Lateral',
        duration: 60,
        reps: 8,
        description: 'Sentado con piernas cruzadas o tumbado boca arriba. Coloca las manos en las costillas laterales (dedos hacia delante). INHALA por la nariz expandiendo las costillas hacia los lados y hacia atrás — imagina que inflas un globo dentro de tu caja torácica. El abdomen NO debe expandirse hacia fuera. EXHALA por la boca contrayendo las costillas hacia dentro y hacia abajo, como si cerraras un corsé. Al exhalar, siente cómo el suelo pélvico y el transverso abdominal se activan. Esta respiración "lateral" es la base de todo el Pilates — conecta respiración con core. 6-8 respiraciones completas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Pelvic Tilts',
        duration: 60,
        reps: 10,
        description: 'Tumbado boca arriba, rodillas dobladas, pies planos en el suelo. ANTEVERSIÓN: arquea suavemente la espalda baja separándola del suelo (la pelvis se inclina hacia delante). RETROVERSIÓN: aplana la espalda contra el suelo apretando el abdomen bajo (la pelvis se inclina hacia atrás). Alterna lentamente, sintiendo cada vértebra lumbar moverse. Esto "despierta" la conciencia de la pelvis neutra — fundamental para todos los ejercicios de Pilates y para los levantamientos pesados. Movimiento pequeño pero MUY consciente. 10 reps lentas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Shoulder Bridge',
        duration: 60,
        reps: 6,
        description: 'Tumbado boca arriba, rodillas dobladas, pies planos separados al ancho de caderas. Exhala y comienza a elevar la pelvis del suelo ARTICULANDO vértebra por vértebra — primero el sacro, luego lumbares, luego torácicas bajas. Arriba: línea recta de rodillas a hombros, glúteos apretados. Inhala arriba. Exhala y baja VÉRTEBRA POR VÉRTEBRA desde la parte más alta de la espalda hasta el sacro. La clave es la articulación segmental — cada vértebra se mueve independientemente. Si sientes calambres en los isquiotibiales, acerca los pies a los glúteos. 6 reps muy lentas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'The Hundred',
        duration: 90,
        description: 'Tumbado boca arriba. Eleva la cabeza y hombros del suelo (mirada al ombligo), piernas a 45° del suelo (o en "table top" con rodillas dobladas si eres principiante). Brazos estirados a los lados del cuerpo, elevados del suelo. Bombea los brazos arriba y abajo con movimientos cortos y rápidos (como si golpearas agua). INHALA durante 5 bombeos, EXHALA durante 5 bombeos. Eso es 1 ciclo — haz 10 ciclos (= 100 bombeos). Mantén la espalda baja pegada al suelo, abdomen hundido. Deberías sentir un FUEGO en los abdominales y una conexión total core-respiración. Es el ejercicio emblema del Pilates.',
        youtubeUrl: 'https://www.youtube.com/watch?v=f-KBjAwQ574',
      },
      {
        name: 'Roll-Up',
        duration: 60,
        reps: 6,
        description: 'Tumbado boca arriba, piernas estiradas, brazos sobre la cabeza. Inhala y lleva los brazos al techo. Exhala y comienza a "pelar" la espalda del suelo VÉRTEBRA POR VÉRTEBRA — barbilla al pecho, luego cervicales, torácicas, lumbares — hasta sentarte erguido y alcanzar los dedos de los pies. Inhala arriba. Exhala y rueda hacia atrás con el mismo control, apoyando vértebra por vértebra. La clave: CONTROL. Si no puedes subir sin impulso, dobla las rodillas o pon los pies bajo algo. Imagina que dibujas una C con la columna en cada dirección. 6 reps.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Single Leg Stretch',
        duration: 60,
        reps: 10,
        description: 'Tumbado boca arriba, cabeza y hombros elevados. Lleva la rodilla derecha al pecho, mano derecha en el tobillo, izquierda en la rodilla. La pierna izquierda se extiende a 45° del suelo. ALTERNA: exhala y cambia de pierna de forma fluida. El torso permanece INMÓVIL — solo se mueven las piernas. Mantén la espalda baja pegada al suelo. El movimiento es de coordinación y estabilización del core. 10 reps por lado. Velocidad: controlada, no rápida.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
        isPerSide: true,
      },
      {
        name: 'Double Leg Stretch',
        duration: 60,
        reps: 8,
        description: 'Tumbado boca arriba, cabeza y hombros elevados, rodillas al pecho. INHALA: extiende brazos hacia atrás (junto a las orejas) y piernas hacia delante a 45° simultáneamente — tu cuerpo se "abre" como una estrella. EXHALA: recoge todo de vuelta, brazos circulan por los lados y las manos agarran las espinillas. La espalda baja NUNCA se despega del suelo — si se despega, sube las piernas más alto. Es un ejercicio de core PROFUNDO intenso. 8-10 reps.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Leg Circles',
        duration: 60,
        reps: 5,
        description: 'Tumbado boca arriba, pierna derecha al techo, pierna izquierda estirada en el suelo (o doblada si eres principiante). Dibuja círculos con la pierna derecha manteniendo la pelvis COMPLETAMENTE ESTABLE en el suelo. Los círculos son del tamaño de un plato — no demasiado grandes. Inhala en la mitad del círculo, exhala en la otra mitad. 5 círculos en cada dirección. La pierna hace el movimiento pero el CORE controla — las caderas no deben rodar de lado a lado. Cambia de pierna.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
        isPerSide: true,
      },
      {
        name: 'Spine Stretch Forward',
        duration: 60,
        reps: 5,
        description: 'Sentado con piernas estiradas al ancho de hombros, pies flexionados, brazos al frente. Inhala y alarga la columna (crece hacia el techo). Exhala y rueda hacia delante empezando por la cabeza — barbilla al pecho, luego cada vértebra se redondea hacia delante. Imagina que ruedas sobre una pelota gigante. Los brazos se extienden paralelos al suelo. NO tires de los hombros hacia delante — el movimiento viene de la COLUMNA. Inhala en la posición más baja y exhala para volver a sentarte vértebra por vértebra. 5 reps.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Saw',
        duration: 60,
        reps: 5,
        description: 'Sentado con piernas abiertas más allá de los hombros, brazos en T (extendidos a los lados). Inhala y rota el torso hacia la derecha. Exhala y flexiona hacia delante, intentando tocar el pie derecho con la mano izquierda (la mano derecha va hacia atrás). "Sierra" el dedo meñique del pie derecho con el meñique de la mano izquierda. Inhala para volver al centro erguido. La pelvis permanece anclada — ambos isquiones en el suelo. Es rotación + flexión = movimiento funcional completo de la columna. 5 reps por lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
        isPerSide: true,
      },
      {
        name: 'Swan Dive (prep)',
        duration: 45,
        reps: 5,
        description: 'Tumbado boca abajo, manos bajo los hombros. Inhala y despega el pecho del suelo usando los extensores de la espalda (NO empujes fuerte con las manos — las manos solo asisten). Eleva el esternón como si un hilo te tirara del pecho. Mantén las piernas en el suelo, glúteos suavemente activados. Exhala y baja con control. La extensión debe venir de la columna TORÁCICA (entre los omóplatos), no de la lumbar. Mira al frente, no hacia arriba. 5 reps. Progresión: soltar las manos del suelo un instante en la posición más alta.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Swimming',
        duration: 30,
        description: 'Tumbado boca abajo, brazos estirados delante, piernas estiradas atrás. Levanta el brazo derecho y la pierna izquierda del suelo simultáneamente, luego alterna con brazo izquierdo y pierna derecha. El movimiento es rápido pero CONTROLADO, como si nadaras. Mantén la cabeza en posición neutra (mirada al suelo), abdomen ligeramente despegado del suelo. Los extensores espinales y los glúteos trabajan intensamente. Respira: inhala 5 "nados", exhala 5 "nados". 30 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Plank Hold',
        duration: 40,
        description: 'Posición de plancha sobre las manos (o antebrazos): manos bajo hombros, cuerpo en línea recta de cabeza a talones. Activa el core como si te fueran a dar un puñetazo en el abdomen. Aprieta los glúteos. Empuja el suelo con las manos separando los omóplatos. NO dejes caer las caderas ni las subas en pico. Mira al suelo, cuello neutro. Respira normalmente — no contengas la respiración. La clave del plank Pilates vs. el plank normal es la CONEXIÓN: siente core, glúteos, hombros, todo integrado. 30-45 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
      },
      {
        name: 'Side Plank',
        duration: 40,
        description: 'Tumbado de lado, apoyado en el antebrazo (codo bajo el hombro). Piernas estiradas, pies apilados (o rodilla inferior en el suelo para principiantes). Eleva las caderas hasta formar una línea recta de cabeza a pies. El brazo superior al techo o en la cadera. Mantén la cadera arriba — NO la dejes caer. Aprieta oblicuos y glúteo medio. 20 segundos por lado. En Pilates se añade una elevación y descenso controlado de la cadera ("side bend") para 6-8 reps.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
        isPerSide: true,
      },
      {
        name: 'Mermaid Stretch',
        duration: 45,
        description: 'Sentado con ambas piernas dobladas hacia el lado derecho (como una sirena). Brazo derecho en el suelo al lado. Inhala y levanta el brazo izquierdo al techo. Exhala e inclínate hacia la derecha, haciendo un arco lateral con todo el lado izquierdo del cuerpo. Siente el estiramiento desde la cadera izquierda hasta la axila. Inhala para volver. Mantén ambos isquiones en el suelo. Es un estiramiento lateral delicioso que abre las costillas y las caderas. 45 segundos por lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=UaqpuUzs1i8',
        isPerSide: true,
      },
      {
        name: "Child's Pose",
        duration: 45,
        description: 'Siéntate sobre los talones, extiende los brazos al frente por el suelo, frente apoyada en el suelo. Relaja todo el cuerpo. Respira profundamente expandiendo la espalda baja. Posición de descanso final para resetear el sistema nervioso después de la sesión de Pilates.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
    ],
  },

  // =============================================
  // ROUTINE 4: Yoga Recovery (20 min)
  // =============================================
  {
    id: 'yoga-recovery',
    name: 'Yoga Recovery',
    duration: 20,
    category: 'yoga',
    icon: '🧘',
    description: 'Yoga restaurativo especialmente diseñado para atletas de fuerza. Recupera y descomprime después de entrenar.',
    whenToDo: 'Post-entreno (especialmente leg day) o días de descanso. Antes de dormir también funciona.',
    exercises: [
      {
        name: 'Supine Twist',
        duration: 90,
        description: 'Tumbado boca arriba, lleva ambas rodillas al pecho. Extiende los brazos en T. Exhala y deja caer ambas rodillas hacia la derecha, manteniendo ambos hombros en contacto con el suelo. La mirada va hacia la izquierda (dirección opuesta a las rodillas). Respira profundamente — cada exhalación deja que las rodillas caigan un poco más. Deberías sentir una rotación profunda en la columna y un estiramiento en el glúteo y la espalda. NO fuerces — la gravedad hace el trabajo. 90 segundos por lado. Uno de los mejores estiramientos para descomprimir la espalda después de pesos muertos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
        isPerSide: true,
      },
      {
        name: 'Happy Baby',
        duration: 90,
        description: 'Tumbado boca arriba, lleva las rodillas hacia las axilas. Agarra la planta de los pies con las manos (brazos por dentro de las piernas). Tira suavemente de los pies hacia el suelo. Espalda baja pegada al suelo. Puedes balancearte suavemente de lado a lado. Posición restaurativa que abre las caderas y relaja la zona lumbar. 90 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Thread the Needle',
        duration: 60,
        description: 'En cuadrupedia, pasa el brazo derecho por debajo del torso hacia la izquierda, bajando el hombro y la sien al suelo. Rotación torácica profunda. Mantén las caderas sobre las rodillas. Respira y profundiza en cada exhalación. 60 segundos por lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=MfUx9FCOb1E',
        isPerSide: true,
      },
      {
        name: 'Cat/Cow',
        duration: 60,
        reps: 10,
        description: 'En cuadrupedia. COW: inhala, abre pecho, mira arriba, deja caer el abdomen. CAT: exhala, redondea la espalda, barbilla al pecho. Muévete lenta y fluidamente, articulando vértebra por vértebra. 8-10 reps lentas para despertar la columna y conectar con la respiración.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: "Child's Pose",
        duration: 60,
        description: 'Siéntate sobre los talones, brazos estirados al frente, frente al suelo. Respira expandiendo la espalda baja. 20s al centro, luego camina las manos a la derecha (20s) y a la izquierda (20s) para añadir estiramiento lateral de caderas y costillas.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Downward Dog',
        duration: 60,
        description: 'Desde cuadrupedia, eleva las caderas formando una V invertida. Manos separadas al ancho de hombros, pies al ancho de caderas. Empuja el suelo con las manos, alarga la espalda. Los talones buscan el suelo (no pasa nada si no llegan). "Pedalea" los pies alternativamente doblando una rodilla mientras estiras la otra — esto estira las pantorrillas y los isquiotibiales de forma dinámica. Relaja la cabeza y el cuello. Respira profundamente. 60 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Low Lunge + Lizard Pose',
        duration: 60,
        description: 'Desde Downward Dog, lleva el pie derecho entre las manos. Baja la rodilla izquierda al suelo. LOW LUNGE: manos en la rodilla o al techo, empuja las caderas hacia delante. Mantén 20s — siente el estiramiento en el flexor de cadera izquierdo. Luego baja las manos al suelo por DENTRO del pie derecho para LIZARD POSE. Baja a los antebrazos si puedes. 40s — estiramiento profundo de flexores de cadera y aductores. Abre la rodilla derecha hacia fuera para profundizar.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-6MGjYmHdYQ',
        isPerSide: true,
      },
      {
        name: 'Half Splits',
        duration: 60,
        description: 'Desde la posición de zancada con la rodilla izquierda en el suelo, desplaza las caderas hacia atrás hasta sentarte sobre el talón izquierdo. Estira la pierna derecha al frente, punta del pie hacia arriba. Manos en el suelo a los lados. Mantén la espalda recta (no redondees) y lleva el pecho hacia la pierna. Deberías sentir un estiramiento intenso en los isquiotibiales de la pierna estirada. 60 segundos por lado. Respira y relaja.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-6MGjYmHdYQ',
        isPerSide: true,
      },
      {
        name: 'Forward Fold',
        duration: 60,
        description: 'De pie, pies juntos o al ancho de caderas. Exhala y dóblate hacia delante desde las caderas (no desde la cintura). Deja que la cabeza, los brazos y el torso cuelguen. Puedes agarrar los codos opuestos y balancearte suavemente. NO fuerces las rodillas rectas — una ligera flexión está bien. Deja que la gravedad estire los isquiotibiales y descomprima la columna. Relaja el cuello completamente. 60 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Pigeon Pose',
        duration: 90,
        description: 'Lleva la rodilla derecha hacia delante, espinilla en diagonal. Pierna izquierda estirada atrás. Caderas cuadradas. Baja el pecho hacia el suelo, apoya antebrazos o frente. Respira profundamente en cada exhalación. 90 segundos por lado. Este es un estiramiento profundo de glúteo y rotadores externos — uno de los más importantes para atletas de fuerza.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-6MGjYmHdYQ',
        isPerSide: true,
      },
      {
        name: 'Cobra',
        duration: 45,
        description: 'Tumbado boca abajo, manos bajo hombros. Presiona suavemente y eleva el pecho, manteniendo caderas en el suelo. Extensión de la columna torácica, apertura del pecho. Glúteos suavemente activos para proteger la lumbar. 45 segundos.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Savasana',
        duration: 60,
        description: 'Tumbado boca arriba, piernas estiradas y separadas, brazos a los lados con palmas hacia arriba. Cierra los ojos. Relaja CADA parte del cuerpo conscientemente: cara, mandíbula, hombros, brazos, abdomen, piernas, pies. Respira naturalmente sin controlar la respiración. Este es el momento donde el cuerpo integra todo el trabajo que has hecho. No te saltes Savasana — es donde la recuperación realmente ocurre. 60 segundos mínimo.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
    ],
  },

  // =============================================
  // ROUTINE 5: Morning Routine (10 min)
  // =============================================
  {
    id: 'morning-routine',
    name: 'Morning Routine',
    duration: 10,
    category: 'morning',
    icon: '☀️',
    description: 'Activación matutina con CARs y movilidad dinámica. Despierta tus articulaciones y prepárate para el día.',
    whenToDo: 'Todos los días al despertar, antes de desayunar. La rutina más importante de todas.',
    exercises: [
      {
        name: 'Neck CARs',
        duration: 30,
        description: 'De pie con buena postura. Baja la barbilla al pecho, rota lentamente hacia un lado (oreja al hombro), hacia atrás, hacia el otro lado, y de vuelta. 8-10 segundos por círculo completo. Tensa todo el cuerpo excepto el cuello (irradiación). 2 reps en cada dirección. El cuello suele ser la articulación más abandonada — dale amor cada mañana.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
      },
      {
        name: 'Shoulder CARs',
        duration: 60,
        description: 'Brazo al costado, levanta hacia delante, arriba, rota externamente al llegar arriba, continúa hacia atrás y baja. 10-15 segundos por circunducción. Aprieta puño, core y glúteo. 3 reps adelante y 3 atrás por brazo. Lentas y controladas — busca cada grado de movimiento disponible.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Hip CARs (de pie)',
        duration: 60,
        description: 'Mano en pared, levanta rodilla al pecho, abre hacia fuera en rotación externa, lleva atrás y baja. 5-8 segundos por rep, 3 reps cada dirección. Torso INMÓVIL — solo mueve la cadera. La articulación más importante del cuerpo necesita este mantenimiento diario.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Ankle CARs',
        duration: 40,
        description: 'Levanta un pie del suelo y dibuja círculos amplios y lentos con el tobillo. 5 reps en cada dirección. Aprieta los dedos en la plantarflexión. Pasa por inversión, dorsiflexión y eversión. 20 segundos por tobillo.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
        isPerSide: true,
      },
      {
        name: 'Cat/Cow',
        duration: 45,
        reps: 8,
        description: 'Cuadrupedia. COW (inhala): abre pecho, mira arriba. CAT (exhala): redondea espalda, barbilla al pecho. 6-8 reps lentas. Despierta la columna segmento por segmento. El mejor ejercicio matutino para la espalda.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: 'Downward Dog',
        duration: 30,
        description: 'V invertida, manos y pies en el suelo, caderas al techo. Pedalea los pies alternativamente para estirar pantorrillas e isquiotibiales. Empuja el suelo con las manos, alarga la espalda. 30 segundos. "Descomprime" toda la cadena posterior.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
      {
        name: "World's Greatest Stretch",
        duration: 45,
        description: 'Da un paso largo con el pie derecho (zancada profunda), rodilla izquierda en el suelo. Coloca la mano izquierda en el suelo junto al pie derecho. Rota el torso y extiende el brazo derecho hacia el techo, mirando la mano. Deberías sentir: estiramiento del flexor de cadera izquierdo, rotación torácica, apertura de pecho, todo al mismo tiempo. Es "el mejor estiramiento del mundo" por una razón — trabaja TODO en un solo movimiento. 45 segundos por lado.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-CiWQ2IvY34',
        isPerSide: true,
      },
      {
        name: 'Deep Squat Hold',
        duration: 30,
        description: 'Sentadilla profunda, talones en el suelo, codos empujando rodillas afuera. Pecho erguido. 30 segundos de mantenimiento. Posición natural del ser humano — si la haces cada mañana, tus caderas te lo agradecerán.',
        youtubeUrl: 'https://www.youtube.com/watch?v=JBHzXF-mVjY',
      },
      {
        name: 'Leg Swings (frontal)',
        duration: 30,
        reps: 10,
        description: 'De pie, mano en pared para balance. Balancea la pierna derecha hacia delante y hacia atrás como un péndulo. Mantén la pierna recta pero no rígida. El movimiento viene de la CADERA, no de la rodilla. Controla con el core — el torso no se mueve. 10 swings por pierna. Aumenta la amplitud gradualmente. Movilidad DINÁMICA que prepara el cuerpo para el movimiento del día.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-CiWQ2IvY34',
        isPerSide: true,
      },
      {
        name: 'Leg Swings (lateral)',
        duration: 30,
        reps: 10,
        description: 'De pie frente a la pared, manos apoyadas. Balancea la pierna derecha de lado a lado cruzando por delante del cuerpo y abriendo hacia fuera. 10 swings por pierna. Trabaja los aductores y abductores de forma dinámica. Controla el torso — que no se balancee.',
        youtubeUrl: 'https://www.youtube.com/watch?v=-CiWQ2IvY34',
        isPerSide: true,
      },
      {
        name: 'Arm Circles',
        duration: 20,
        reps: 10,
        description: 'De pie, brazos abiertos en T. Haz círculos grandes con ambos brazos: 10 hacia delante, 10 hacia atrás. Empieza con círculos pequeños y ve haciéndolos más grandes. Activa los estabilizadores del hombro y mejora la circulación en la parte superior del cuerpo.',
        youtubeUrl: 'https://www.youtube.com/watch?v=AyJ3omVBIho',
      },
      {
        name: 'Standing Forward Fold',
        duration: 30,
        description: 'De pie, dóblate hacia delante dejando colgar la cabeza y los brazos. Puedes agarrar los codos opuestos y balancearte suavemente. Rodillas ligeramente dobladas. Deja que la gravedad descomprima la columna y estire los isquiotibiales. 30 segundos. Cierre perfecto para la rutina matutina.',
        youtubeUrl: 'https://www.youtube.com/watch?v=j97SSGsnCAQ',
      },
    ],
  },
];
