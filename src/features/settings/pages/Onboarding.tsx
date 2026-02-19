import { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, Dumbbell, Home, Clock, Target, Zap } from 'lucide-react';
import { useUserStore } from '../../../stores/userStore';
import { allPrograms, getProgramsByDaysPerWeek } from '../../../data/programs';
import type { WorkoutProgram, Equipment, Sex } from '../../../types';

type Phase = 'bulk' | 'cut' | 'maintain' | 'weight_loss';

export function Onboarding() {
  const { initializeUser } = useUserStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1: Basic info
  const [name, setName] = useState('');
  const [sex, setSex] = useState<Sex>('male');
  const [age, setAge] = useState('34');
  const [height, setHeight] = useState('180');
  const [bodyweight, setBodyweight] = useState('80');

  // Step 2: Training availability
  const [trainingDays, setTrainingDays] = useState<3 | 4 | 5 | 6>(3);
  const [hasGym, setHasGym] = useState(true);
  const [experienceYears, setExperienceYears] = useState('2');

  // Step 3: Goal
  const [phase, setPhase] = useState<Phase>('bulk');

  // Step 4: Program selection (null = auto-select)
  const [manualProgramId, setManualProgramId] = useState<string | null>(null);

  // Filter programs based on training days and equipment
  const availablePrograms = useMemo(() => {
    let programs = getProgramsByDaysPerWeek(trainingDays);

    if (!hasGym) {
      // Only show programs that can be done with bodyweight
      programs = programs.filter(p =>
        p.minEquipmentRequired?.includes('bodyweight') &&
        p.minEquipmentRequired?.length === 1
      );
    }

    // Sort by match with training days (exact match first)
    return programs.sort((a, b) => {
      const aDiff = Math.abs(a.daysPerWeek - trainingDays);
      const bDiff = Math.abs(b.daysPerWeek - trainingDays);
      return aDiff - bDiff;
    });
  }, [trainingDays, hasGym]);

  // Derive selected program: use manual selection or auto-select best match
  const selectedProgramId = useMemo(() => {
    if (manualProgramId && availablePrograms.some(p => p.id === manualProgramId)) {
      return manualProgramId;
    }
    // Auto-select: exact match or first available
    const exactMatch = availablePrograms.find(p => p.daysPerWeek === trainingDays);
    return exactMatch?.id || availablePrograms[0]?.id || 'achilles-3day';
  }, [manualProgramId, availablePrograms, trainingDays]);

  const selectedProgram = allPrograms.find(p => p.id === selectedProgramId);
  
  // Wrapper to set manual selection
  const setSelectedProgramId = (id: string) => setManualProgramId(id);

  const handleComplete = async () => {
    setLoading(true);
    const bwKg = Number(bodyweight);
    const heightCm = Number(height);
    const ageNum = Number(age);

    // Mifflin-St Jeor BMR
    const bmr = sex === 'male'
      ? (10 * bwKg) + (6.25 * heightCm) - (5 * ageNum) + 5
      : (10 * bwKg) + (6.25 * heightCm) - (5 * ageNum) - 161;

    // Activity multiplier based on training days
    const activityMultiplier = trainingDays <= 3 ? 1.55 : trainingDays <= 5 ? 1.65 : 1.75;
    const tdee = Math.round(bmr * activityMultiplier);

    let dailyCalories: number, proteinTarget: number, carbTarget: number, fatTarget: number;

    if (phase === 'bulk') {
      dailyCalories = tdee + 300; // moderate surplus
      proteinTarget = Math.round(bwKg * 2.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'cut') {
      dailyCalories = tdee - 300; // moderate deficit
      proteinTarget = Math.round(bwKg * 2.4); // higher protein to preserve muscle
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'weight_loss') {
      dailyCalories = tdee - 500; // aggressive deficit
      proteinTarget = Math.round(bwKg * 2.0); // good protein but not extreme
      fatTarget = Math.round(dailyCalories * 0.30 / 9); // slightly more fat for satiety
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else {
      dailyCalories = tdee;
      proteinTarget = Math.round(bwKg * 2.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    }

    const equipment: Equipment[] = hasGym
      ? ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight']
      : ['bodyweight'];

    await initializeUser({
      name: name || (sex === 'female' ? 'Guerrera' : 'Guerrero'),
      sex,
      age: Number(age),
      height: Number(height),
      bodyweight: bwKg,
      experienceYears: Number(experienceYears),
      trainingDaysPerWeek: trainingDays,
      preferredUnit: 'kg',
      currentPhase: phase,
      dailyCalories,
      proteinTarget,
      carbTarget,
      fatTarget,
      currentProgramId: selectedProgramId,
      currentProgramPhase: selectedProgram?.phases ? 0 : undefined,
      programStartDate: new Date(),
      availableEquipment: equipment,
      hasGymAccess: hasGym
    });
    setLoading(false);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const totalSteps = 5;

  const styles = {
    container: {
      minHeight: '100dvh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column' as const,
      paddingTop: 'env(safe-area-inset-top)',
    },
    header: {
      flexShrink: 0,
      padding: '16px 24px 8px',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#d4af37',
      fontSize: '16px',
      fontWeight: 500,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    stepIndicator: {
      color: '#888',
      fontSize: '14px',
    },
    progressContainer: {
      display: 'flex',
      gap: '6px',
      marginTop: '16px',
    },
    progressBar: (active: boolean) => ({
      height: '4px',
      flex: 1,
      borderRadius: '2px',
      backgroundColor: active ? '#d4af37' : '#333',
      transition: 'background-color 0.3s',
    }),
    main: {
      flex: 1,
      padding: '24px',
      overflowY: 'auto' as const,
    },
    title: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.2,
      marginBottom: '8px',
    },
    titleGold: {
      color: '#d4af37',
    },
    subtitle: {
      color: '#888',
      fontSize: '16px',
      marginBottom: '24px',
    },
    label: {
      display: 'block',
      color: '#888',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '8px',
    },
    inputContainer: {
      position: 'relative' as const,
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      backgroundColor: '#1a1a1a',
      border: '2px solid #333',
      borderRadius: '16px',
      padding: '16px',
      paddingRight: '60px',
      color: '#fff',
      fontSize: '18px',
      outline: 'none',
      boxSizing: 'border-box' as const,
    },
    inputSuffix: {
      position: 'absolute' as const,
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#666',
      fontSize: '16px',
    },
    gridRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      marginBottom: '20px',
    },
    footer: {
      flexShrink: 0,
      padding: '16px 24px',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
      backgroundColor: '#0a0a0a',
    },
    ctaButton: {
      width: '100%',
      height: '56px',
      backgroundColor: '#d4af37',
      color: '#000',
      fontSize: '18px',
      fontWeight: 700,
      border: 'none',
      borderRadius: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    optionButton: (selected: boolean) => ({
      width: '100%',
      padding: '16px',
      borderRadius: '16px',
      border: selected ? 'none' : '2px solid #333',
      backgroundColor: selected ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '12px',
    }),
    optionEmoji: {
      fontSize: '28px',
    },
    optionLabel: (selected: boolean) => ({
      fontSize: '17px',
      fontWeight: 600,
      color: selected ? '#000' : '#fff',
    }),
    optionDesc: (selected: boolean) => ({
      fontSize: '13px',
      color: selected ? 'rgba(0,0,0,0.7)' : '#888',
    }),
    daysGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      marginBottom: '24px',
    },
    dayButton: (selected: boolean) => ({
      padding: '20px 8px',
      borderRadius: '16px',
      border: selected ? 'none' : '2px solid #333',
      backgroundColor: selected ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer',
      textAlign: 'center' as const,
    }),
    dayNumber: (selected: boolean) => ({
      fontSize: '24px',
      fontWeight: 700,
      color: selected ? '#000' : '#fff',
    }),
    dayLabel: (selected: boolean) => ({
      fontSize: '12px',
      color: selected ? 'rgba(0,0,0,0.7)' : '#888',
      marginTop: '4px',
    }),
    equipmentToggle: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '24px',
    },
    equipmentButton: (selected: boolean) => ({
      padding: '20px',
      borderRadius: '16px',
      border: selected ? 'none' : '2px solid #333',
      backgroundColor: selected ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      gap: '8px',
    }),
    programCard: (selected: boolean, recommended: boolean) => ({
      padding: '16px',
      borderRadius: '16px',
      border: selected ? '2px solid #d4af37' : recommended ? '2px solid rgba(212, 175, 55, 0.5)' : '2px solid #333',
      backgroundColor: selected ? 'rgba(212, 175, 55, 0.1)' : '#1a1a1a',
      cursor: 'pointer',
      marginBottom: '12px',
      position: 'relative' as const,
    }),
    recommendedBadge: {
      position: 'absolute' as const,
      top: '-10px',
      right: '12px',
      backgroundColor: '#d4af37',
      color: '#000',
      fontSize: '11px',
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: '10px',
    },
    programName: (selected: boolean) => ({
      fontSize: '17px',
      fontWeight: 700,
      color: selected ? '#d4af37' : '#fff',
      marginBottom: '4px',
    }),
    programMeta: {
      display: 'flex',
      gap: '16px',
      marginBottom: '8px',
    },
    programMetaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '13px',
      color: '#888',
    },
    programDesc: {
      fontSize: '13px',
      color: '#888',
      lineHeight: 1.4,
    },
    summaryCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '20px',
    },
    summaryRow: (hasBorder: boolean) => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: hasBorder ? '1px solid #333' : 'none',
    }),
    summaryLabel: {
      color: '#888',
      fontSize: '15px',
    },
    summaryValue: (highlight: boolean) => ({
      color: highlight ? '#d4af37' : '#fff',
      fontSize: '15px',
      fontWeight: 600,
    }),
    infoBox: {
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '16px',
      padding: '16px',
    },
    infoText: {
      color: '#fff',
      fontSize: '14px',
      lineHeight: 1.5,
    },
    infoHighlight: {
      color: '#d4af37',
      fontWeight: 700,
    },
  };

  const getProgramIcon = (program: WorkoutProgram) => {
    switch (program.id) {
      case 'wolverine': return '🐺';
      case 'bodyweight-hoplite': return '🛡️';
      case 'achilles-3day': return '⚔️';
      case 'b3-bulking': return '💪';
      default: return '🏋️';
    }
  };

  const getDifficultyLabel = (diff: WorkoutProgram['difficulty']) => {
    switch (diff) {
      case 'beginner': return 'Principiante';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.nav}>
          {step > 1 ? (
            <button onClick={prevStep} style={styles.backButton}>
              <ChevronLeft size={20} strokeWidth={2.5} />
              Atrás
            </button>
          ) : (
            <div style={{ width: 64 }} />
          )}
          <span style={styles.stepIndicator}>{step}/{totalSteps}</span>
          <div style={{ width: 64 }} />
        </div>
        <div style={styles.progressContainer}>
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
            <div key={s} style={styles.progressBar(s <= step)} />
          ))}
        </div>
      </header>

      {/* Content */}
      <main style={styles.main}>
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div>
            <h1 style={styles.title}>
              Bienvenido a<br />
              <span style={styles.titleGold}>Achilles Fitness</span>
            </h1>
            <p style={styles.subtitle}>Entrena como un guerrero griego</p>

            <div>
              <label style={styles.label}>Tu nombre</label>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  autoFocus
                  style={{ ...styles.input, paddingRight: '16px' }}
                />
              </div>

              <label style={styles.label}>Sexo</label>
              <div style={styles.equipmentToggle}>
                <button
                  onClick={() => setSex('male')}
                  style={styles.equipmentButton(sex === 'male')}
                >
                  <span style={{ fontSize: '28px' }}>🙋‍♂️</span>
                  <span style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: sex === 'male' ? '#000' : '#fff'
                  }}>Hombre</span>
                </button>
                <button
                  onClick={() => setSex('female')}
                  style={styles.equipmentButton(sex === 'female')}
                >
                  <span style={{ fontSize: '28px' }}>🙋‍♀️</span>
                  <span style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: sex === 'female' ? '#000' : '#fff'
                  }}>Mujer</span>
                </button>
              </div>

              <div style={styles.gridRow}>
                <div>
                  <label style={styles.label}>Edad</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      style={styles.input}
                    />
                    <span style={styles.inputSuffix}>años</span>
                  </div>
                </div>
                <div>
                  <label style={styles.label}>Altura</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      style={styles.input}
                    />
                    <span style={styles.inputSuffix}>cm</span>
                  </div>
                </div>
              </div>

              <label style={styles.label}>Peso actual</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  inputMode="decimal"
                  value={bodyweight}
                  onChange={(e) => setBodyweight(e.target.value)}
                  style={styles.input}
                />
                <span style={styles.inputSuffix}>kg</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Training Availability */}
        {step === 2 && (
          <div>
            <h1 style={styles.title}>Tu disponibilidad</h1>
            <p style={styles.subtitle}>¿Cuántos días puedes entrenar?</p>

            <label style={styles.label}>Días por semana</label>
            <div style={styles.daysGrid}>
              {([3, 4, 5, 6] as const).map((days) => (
                <button
                  key={days}
                  onClick={() => setTrainingDays(days)}
                  style={styles.dayButton(trainingDays === days)}
                >
                  <div style={styles.dayNumber(trainingDays === days)}>{days}</div>
                  <div style={styles.dayLabel(trainingDays === days)}>días</div>
                </button>
              ))}
            </div>

            <label style={styles.label}>¿Dónde entrenas?</label>
            <div style={styles.equipmentToggle}>
              <button
                onClick={() => setHasGym(true)}
                style={styles.equipmentButton(hasGym)}
              >
                <Dumbbell size={28} color={hasGym ? '#000' : '#888'} />
                <span style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: hasGym ? '#000' : '#fff'
                }}>Gimnasio</span>
                <span style={{
                  fontSize: '12px',
                  color: hasGym ? 'rgba(0,0,0,0.7)' : '#888'
                }}>Equipo completo</span>
              </button>
              <button
                onClick={() => setHasGym(false)}
                style={styles.equipmentButton(!hasGym)}
              >
                <Home size={28} color={!hasGym ? '#000' : '#888'} />
                <span style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: !hasGym ? '#000' : '#fff'
                }}>En casa</span>
                <span style={{
                  fontSize: '12px',
                  color: !hasGym ? 'rgba(0,0,0,0.7)' : '#888'
                }}>Solo cuerpo</span>
              </button>
            </div>

            <label style={styles.label}>Experiencia entrenando</label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                inputMode="numeric"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>años</span>
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {step === 3 && (
          <div>
            <h1 style={styles.title}>Tu objetivo</h1>
            <p style={styles.subtitle}>¿Qué quieres lograr?</p>

            <div>
              {[
                { value: 'bulk', emoji: '💪', label: 'Ganar músculo', desc: 'Superávit calórico, máxima hipertrofia' },
                { value: 'cut', emoji: '🔥', label: 'Definir', desc: 'Déficit moderado, mantener músculo' },
                { value: 'weight_loss', emoji: '⬇️', label: 'Perder peso', desc: 'Déficit agresivo, cardio + fuerza' },
                { value: 'maintain', emoji: '⚖️', label: 'Mantener', desc: 'Recomposición corporal' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setPhase(option.value as Phase)}
                  style={styles.optionButton(phase === option.value)}
                >
                  <span style={styles.optionEmoji}>{option.emoji}</span>
                  <div>
                    <p style={styles.optionLabel(phase === option.value)}>{option.label}</p>
                    <p style={styles.optionDesc(phase === option.value)}>{option.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Program Selection */}
        {step === 4 && (
          <div>
            <h1 style={styles.title}>Tu programa</h1>
            <p style={styles.subtitle}>
              {availablePrograms.length > 1
                ? `${availablePrograms.length} programas disponibles para ${trainingDays} días/semana`
                : 'Programa recomendado para ti'
              }
            </p>

            {availablePrograms.map((program, index) => {
              const isRecommended = index === 0;
              const isSelected = selectedProgramId === program.id;

              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgramId(program.id)}
                  style={styles.programCard(isSelected, isRecommended)}
                >
                  {isRecommended && (
                    <div style={styles.recommendedBadge}>Recomendado</div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '32px' }}>{getProgramIcon(program)}</span>
                    <div style={{ flex: 1, textAlign: 'left' as const }}>
                      <div style={styles.programName(isSelected)}>{program.name}</div>
                      <div style={styles.programMeta}>
                        <span style={styles.programMetaItem}>
                          <Clock size={14} />
                          {program.daysPerWeek} días/sem
                        </span>
                        <span style={styles.programMetaItem}>
                          <Target size={14} />
                          {program.weeks} semanas
                        </span>
                        <span style={styles.programMetaItem}>
                          <Zap size={14} />
                          {getDifficultyLabel(program.difficulty)}
                        </span>
                      </div>
                      <p style={styles.programDesc}>
                        {program.description.split('\n')[0]}
                      </p>
                      {program.phases && (
                        <p style={{ ...styles.programDesc, marginTop: '8px', color: '#d4af37' }}>
                          📊 {program.phases.length} fases de periodización
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}

            {availablePrograms.length === 0 && (
              <div style={styles.infoBox}>
                <p style={styles.infoText}>
                  No hay programas disponibles para tu configuración.
                  Prueba con más días de entrenamiento o acceso a gimnasio.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 5: Summary */}
        {step === 5 && selectedProgram && (
          <div>
            <h1 style={styles.title}>¡Listo, {name || 'Guerrero'}!</h1>
            <p style={styles.subtitle}>Tu plan personalizado</p>

            <div style={styles.summaryCard}>
              {[
                { label: 'Programa', value: selectedProgram.name, highlight: true },
                { label: 'Días/semana', value: `${selectedProgram.daysPerWeek} días`, highlight: false },
                { label: 'Duración', value: `${selectedProgram.weeks} semanas`, highlight: false },
                { label: 'Objetivo', value: phase === 'bulk' ? '💪 Volumen' : phase === 'cut' ? '🔥 Definición' : phase === 'weight_loss' ? '⬇️ Perder peso' : '⚖️ Mantener', highlight: false },
                { label: 'Calorías/día', value: (() => {
                  const bw = Number(bodyweight);
                  const h = Number(height);
                  const a = Number(age);
                  const bmrEst = sex === 'male' ? (10*bw)+(6.25*h)-(5*a)+5 : (10*bw)+(6.25*h)-(5*a)-161;
                  const mult = trainingDays <= 3 ? 1.55 : trainingDays <= 5 ? 1.65 : 1.75;
                  const tdeeEst = Math.round(bmrEst * mult);
                  const cal = phase === 'bulk' ? tdeeEst+300 : phase === 'cut' ? tdeeEst-300 : phase === 'weight_loss' ? tdeeEst-500 : tdeeEst;
                  return `~${cal} kcal`;
                })(), highlight: false }
              ].map((item, i, arr) => (
                <div key={i} style={styles.summaryRow(i < arr.length - 1)}>
                  <span style={styles.summaryLabel}>{item.label}</span>
                  <span style={styles.summaryValue(item.highlight)}>{item.value}</span>
                </div>
              ))}
            </div>

            {selectedProgram.phases && (
              <div style={{ ...styles.summaryCard, marginBottom: '20px' }}>
                <div style={{ marginBottom: '12px', color: '#fff', fontWeight: 600 }}>
                  📊 Fases del programa
                </div>
                {selectedProgram.phases.map((phase, i) => (
                  <div key={phase.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: i < selectedProgram.phases!.length - 1 ? '1px solid #333' : 'none'
                  }}>
                    <span style={{ color: '#888', fontSize: '14px' }}>
                      {i + 1}. {phase.name.split(':')[0].split('-')[1]?.trim() || phase.name}
                    </span>
                    <span style={{ color: '#d4af37', fontSize: '14px' }}>{phase.weeks} sem</span>
                  </div>
                ))}
              </div>
            )}

            <div style={styles.infoBox}>
              <p style={styles.infoText}>
                <span style={styles.infoHighlight}>{getProgramIcon(selectedProgram)} {selectedProgram.name}: </span>
                {selectedProgram.description.split('\n')[0]}
              </p>
              {selectedProgram.nutritionGuidelines?.recommendedFasting && (
                <p style={{ ...styles.infoText, marginTop: '8px' }}>
                  <span style={styles.infoHighlight}>🍽️ Ayuno recomendado: </span>
                  {selectedProgram.nutritionGuidelines.recommendedFasting === 'warrior'
                    ? 'Warrior Diet (18-20h ayuno)'
                    : `Intermitente ${selectedProgram.nutritionGuidelines.recommendedFasting}`
                  }
                </p>
              )}
            </div>
          </div>
        )}
      </main>

      {/* CTA Button */}
      <div style={styles.footer}>
        <button
          onClick={step < totalSteps ? nextStep : handleComplete}
          disabled={loading || (step === 4 && availablePrograms.length === 0)}
          style={{
            ...styles.ctaButton,
            opacity: (loading || (step === 4 && availablePrograms.length === 0)) ? 0.5 : 1
          }}
        >
          {loading ? (
            <div style={{
              width: 20,
              height: 20,
              border: '2px solid rgba(0,0,0,0.3)',
              borderTopColor: '#000',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }} />
          ) : (
            <>
              {step < totalSteps ? 'Continuar' : 'Comenzar entrenamiento'}
              <ChevronRight size={22} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
