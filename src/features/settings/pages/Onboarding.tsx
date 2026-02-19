import { useState, useMemo, useCallback, type CSSProperties } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useUserStore } from '../../../stores/userStore';
import { allPrograms } from '../../../data/programs';
import type { WorkoutProgram, Equipment, Sex } from '../../../types';

// ============================================
// TYPES
// ============================================
type FitnessGoal = 'muscle_gain' | 'tone' | 'fat_loss' | 'longevity' | 'athletic';
type TrainingLocation = 'gym' | 'home' | 'bodyweight';
type ExperienceLevel = 'never' | 'less1' | '1to3' | '3to5' | '5plus';
type CurrentTraining = 'regular' | 'sometimes' | 'no';
type Phase = 'bulk' | 'cut' | 'maintain' | 'weight_loss';

interface RecommendedProgram {
  program: WorkoutProgram;
  reason: string;
}

// ============================================
// MATCHING LOGIC
// ============================================
function getRecommendedPrograms(
  sex: Sex,
  age: number,
  goal: FitnessGoal,
  experience: ExperienceLevel,
  daysPerWeek: number,
  location: TrainingLocation
): RecommendedProgram[] {
  const results: RecommendedProgram[] = [];
  const find = (id: string) => allPrograms.find(p => p.id === id);

  // Age 60+ or longevity → Titan
  if (age >= 60 || goal === 'longevity') {
    const titan = find('titan-seniors');
    if (titan) results.push({ program: titan, reason: 'Programa diseñado para longevidad y funcionalidad — basado en Peter Attia y la ciencia de la sarcopenia.' });
  }

  // Woman + tone/fat_loss → Athena
  if (sex === 'female' && (goal === 'tone' || goal === 'fat_loss')) {
    const athena = find('athena-women');
    if (athena) results.push({ program: athena, reason: 'Programa de recomposición femenina — énfasis en glúteos y fuerza, basado en Dr. Stacy Sims y Bret Contreras.' });
  }

  // Woman + muscle → Achilles or B3
  if (sex === 'female' && goal === 'muscle_gain') {
    const b3 = find('b3-bulking');
    if (b3) results.push({ program: b3, reason: 'Programa de volumen intenso — perfecto para ganar músculo con periodización inteligente.' });
  }

  // Home/bodyweight → Hoplite
  if (location === 'home' || location === 'bodyweight') {
    const hoplite = find('bodyweight-hoplite');
    if (hoplite) results.push({ program: hoplite, reason: 'Programa de peso corporal — entrena en casa sin equipamiento.' });
  }

  // Man + muscle + 5+ days → Achilles 5-day
  if (sex === 'male' && goal === 'muscle_gain' && daysPerWeek >= 5) {
    const achilles = find('achilles-3day');
    if (achilles) results.push({ program: achilles, reason: 'El programa Achilles original — 5 días/semana para máxima hipertrofia.' });
  }

  // Man + muscle + 3 days → Blood & Guts
  if (sex === 'male' && goal === 'muscle_gain' && daysPerWeek <= 3) {
    const bg = find('dorian-yates-blood-guts');
    if (bg) results.push({ program: bg, reason: 'Entrenamiento de alta intensidad estilo Dorian Yates — máximo resultado en 4 días.' });
  }

  // Bulk + intermediate → B3
  if (goal === 'muscle_gain' && (experience === '1to3' || experience === '3to5')) {
    const b3 = find('b3-bulking');
    if (b3 && !results.some(r => r.program.id === b3.id)) {
      results.push({ program: b3, reason: 'Programa de bulking con periodización — ideal para intermedios.' });
    }
  }

  // Advanced + intensity → Blood & Guts
  if (experience === '5plus') {
    const bg = find('dorian-yates-blood-guts');
    if (bg && !results.some(r => r.program.id === bg.id)) {
      results.push({ program: bg, reason: 'Intensidad máxima estilo Dorian Yates — para veteranos del gym.' });
    }
  }

  // Default fallback: Achilles 3-day
  if (results.length === 0) {
    const achilles3 = find('achilles-elysium-3day') || find('achilles-3day');
    if (achilles3) results.push({ program: achilles3, reason: 'Programa equilibrado de hipertrofia — ideal para empezar.' });
  }

  // Deduplicate and limit to 2
  const seen = new Set<string>();
  return results.filter(r => {
    if (seen.has(r.program.id)) return false;
    seen.add(r.program.id);
    return true;
  }).slice(0, 2);
}

function goalToPhase(goal: FitnessGoal): Phase {
  switch (goal) {
    case 'muscle_gain': return 'bulk';
    case 'tone': return 'cut';
    case 'fat_loss': return 'weight_loss';
    case 'longevity': return 'maintain';
    case 'athletic': return 'maintain';
  }
}

function experienceToYears(exp: ExperienceLevel): number {
  switch (exp) {
    case 'never': return 0;
    case 'less1': return 0.5;
    case '1to3': return 2;
    case '3to5': return 4;
    case '5plus': return 7;
  }
}

// ============================================
// COMPONENT
// ============================================
export function Onboarding() {
  const { initializeUser } = useUserStore();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // Step 1: Basic info
  const [name, setName] = useState('');
  const [sex, setSex] = useState<Sex>('male');
  const [age, setAge] = useState('34');
  const [height, setHeight] = useState('180');
  const [bodyweight, setBodyweight] = useState('80');

  // Step 2: History
  const [experience, setExperience] = useState<ExperienceLevel>('1to3');
  const [currentTraining, setCurrentTraining] = useState<CurrentTraining>('sometimes');
  const [injuries, setInjuries] = useState<string[]>([]);

  // Step 3: Goal
  const [goal, setGoal] = useState<FitnessGoal>('muscle_gain');

  // Step 4: Life
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [sessionDuration, setSessionDuration] = useState(60);
  const [location, setLocation] = useState<TrainingLocation>('gym');

  // Step 5: Recommendation
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  const totalSteps = 6; // 0=welcome, 1=basic, 2=history, 3=goal, 4=life, 5=recommendation

  const recommendations = useMemo(() =>
    getRecommendedPrograms(sex, Number(age), goal, experience, daysPerWeek, location),
    [sex, age, goal, experience, daysPerWeek, location]
  );

  const finalProgramId = selectedProgramId || recommendations[0]?.program.id || 'achilles-3day';

  const nextStep = useCallback(() => {
    setDirection('left');
    setStep(s => s + 1);
  }, []);

  const prevStep = useCallback(() => {
    setDirection('right');
    setStep(s => s - 1);
  }, []);

  const toggleInjury = (injury: string) => {
    if (injury === 'none') {
      setInjuries([]);
      return;
    }
    setInjuries(prev =>
      prev.includes(injury) ? prev.filter(i => i !== injury) : [...prev.filter(i => i !== 'none'), injury]
    );
  };

  const handleComplete = async () => {
    setLoading(true);
    const bwKg = Number(bodyweight);
    const heightCm = Number(height);
    const ageNum = Number(age);
    const phase = goalToPhase(goal);

    const bmr = sex === 'male'
      ? (10 * bwKg) + (6.25 * heightCm) - (5 * ageNum) + 5
      : (10 * bwKg) + (6.25 * heightCm) - (5 * ageNum) - 161;

    const activityMultiplier = daysPerWeek <= 3 ? 1.55 : daysPerWeek <= 5 ? 1.65 : 1.75;
    const tdee = Math.round(bmr * activityMultiplier);

    let dailyCalories: number, proteinTarget: number, carbTarget: number, fatTarget: number;

    if (phase === 'bulk') {
      dailyCalories = tdee + 300;
      proteinTarget = Math.round(bwKg * 2.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'cut') {
      dailyCalories = tdee - 300;
      proteinTarget = Math.round(bwKg * 2.4);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'weight_loss') {
      dailyCalories = tdee - 500;
      proteinTarget = Math.round(bwKg * 2.0);
      fatTarget = Math.round(dailyCalories * 0.30 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else {
      dailyCalories = tdee;
      proteinTarget = Math.round(bwKg * 2.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    }

    const equipment: Equipment[] = location === 'gym'
      ? ['barbell', 'dumbbell', 'cable', 'machine', 'bodyweight', 'kettlebell']
      : location === 'home'
        ? ['dumbbell', 'bodyweight', 'kettlebell']
        : ['bodyweight'];

    const selectedProgram = allPrograms.find(p => p.id === finalProgramId);
    const trainingDays = (selectedProgram?.daysPerWeek || daysPerWeek) as 3 | 4 | 5 | 6;

    await initializeUser({
      name: name || (sex === 'female' ? 'Guerrera' : 'Guerrero'),
      sex,
      age: ageNum,
      height: heightCm,
      bodyweight: bwKg,
      experienceYears: experienceToYears(experience),
      trainingDaysPerWeek: Math.min(Math.max(trainingDays, 3), 6) as 3 | 4 | 5 | 6,
      preferredUnit: 'kg',
      currentPhase: phase,
      dailyCalories,
      proteinTarget,
      carbTarget,
      fatTarget,
      currentProgramId: finalProgramId,
      currentProgramPhase: selectedProgram?.phases ? 0 : undefined,
      programStartDate: new Date(),
      availableEquipment: equipment,
      hasGymAccess: location === 'gym',
      injuries: injuries.length > 0 ? injuries : undefined,
      sessionDuration,
      trainingLocation: location,
      fitnessGoal: goal
    });
    setLoading(false);
  };

  const canProceed = () => {
    if (step === 1) return Number(bodyweight) > 0 && Number(height) > 0;
    return true;
  };

  // ============================================
  // STYLES
  // ============================================
  const s = {
    container: {
      minHeight: '100dvh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column' as const,
      paddingTop: 'env(safe-area-inset-top)',
      overflow: 'hidden',
    },
    header: { flexShrink: 0, padding: '16px 24px 8px' },
    nav: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
    backBtn: {
      display: 'flex', alignItems: 'center', gap: '4px', color: '#d4af37',
      fontSize: '16px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer',
    } as CSSProperties,
    stepText: { color: '#888', fontSize: '14px' },
    progressWrap: { display: 'flex', gap: '6px', marginTop: '16px' },
    progressDot: (active: boolean): CSSProperties => ({
      height: '4px', flex: 1, borderRadius: '2px',
      backgroundColor: active ? '#d4af37' : '#333',
      transition: 'background-color 0.3s',
    }),
    main: {
      flex: 1, padding: '24px', overflowY: 'auto' as const,
      animation: `slide-${direction} 0.25s ease-out`,
    },
    title: { fontSize: '28px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '8px' } as CSSProperties,
    gold: { color: '#d4af37' },
    sub: { color: '#888', fontSize: '16px', marginBottom: '24px' },
    label: { display: 'block', color: '#888', fontSize: '14px', fontWeight: 500, marginBottom: '8px' } as CSSProperties,
    inputWrap: { position: 'relative' as const, marginBottom: '20px' },
    input: {
      width: '100%', backgroundColor: '#1a1a1a', border: '2px solid #333', borderRadius: '16px',
      padding: '16px', paddingRight: '60px', color: '#fff', fontSize: '18px', outline: 'none',
      boxSizing: 'border-box' as const,
    },
    suffix: {
      position: 'absolute' as const, right: '16px', top: '50%', transform: 'translateY(-50%)',
      color: '#666', fontSize: '16px',
    },
    gridRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' },
    footer: {
      flexShrink: 0, padding: '16px 24px',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
      backgroundColor: '#0a0a0a',
    },
    cta: (disabled: boolean): CSSProperties => ({
      width: '100%', height: '56px', backgroundColor: '#d4af37', color: '#000',
      fontSize: '18px', fontWeight: 700, border: 'none', borderRadius: '16px', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
      opacity: disabled ? 0.5 : 1,
    }),
    optBtn: (sel: boolean): CSSProperties => ({
      width: '100%', padding: '16px', borderRadius: '16px',
      border: sel ? 'none' : '2px solid #333',
      backgroundColor: sel ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px',
    }),
    optLabel: (sel: boolean): CSSProperties => ({ fontSize: '17px', fontWeight: 600, color: sel ? '#000' : '#fff' }),
    optDesc: (sel: boolean): CSSProperties => ({ fontSize: '13px', color: sel ? 'rgba(0,0,0,0.7)' : '#888' }),
    chipGrid: (cols: number): CSSProperties => ({
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '12px', marginBottom: '24px',
    }),
    chip: (sel: boolean): CSSProperties => ({
      padding: '16px 8px', borderRadius: '16px',
      border: sel ? 'none' : '2px solid #333',
      backgroundColor: sel ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer', textAlign: 'center',
    }),
    chipNum: (sel: boolean): CSSProperties => ({ fontSize: '22px', fontWeight: 700, color: sel ? '#000' : '#fff' }),
    chipLabel: (sel: boolean): CSSProperties => ({ fontSize: '12px', color: sel ? 'rgba(0,0,0,0.7)' : '#888', marginTop: '4px' }),
    goalCard: (sel: boolean): CSSProperties => ({
      width: '100%', padding: '20px', borderRadius: '20px',
      border: sel ? '2px solid #d4af37' : '2px solid #333',
      backgroundColor: sel ? 'rgba(212, 175, 55, 0.1)' : '#1a1a1a',
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px',
    }),
    programCard: (sel: boolean): CSSProperties => ({
      padding: '20px', borderRadius: '20px',
      border: sel ? '2px solid #d4af37' : '2px solid #333',
      backgroundColor: sel ? 'rgba(212, 175, 55, 0.1)' : '#1a1a1a',
      cursor: 'pointer', marginBottom: '16px', position: 'relative',
    }),
    badge: {
      position: 'absolute' as const, top: '-10px', right: '12px',
      backgroundColor: '#d4af37', color: '#000', fontSize: '11px',
      fontWeight: 700, padding: '4px 10px', borderRadius: '10px',
    } as CSSProperties,
    sexBtn: (sel: boolean): CSSProperties => ({
      padding: '20px', borderRadius: '16px',
      border: sel ? 'none' : '2px solid #333',
      backgroundColor: sel ? '#d4af37' : '#1a1a1a',
      cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
    }),
    injuryChip: (sel: boolean): CSSProperties => ({
      padding: '12px 16px', borderRadius: '12px',
      border: sel ? 'none' : '2px solid #333',
      backgroundColor: sel ? 'rgba(212, 175, 55, 0.2)' : '#1a1a1a',
      cursor: 'pointer', color: sel ? '#d4af37' : '#fff', fontSize: '14px', fontWeight: 500,
    }),
  };

  const getProgramIcon = (p: WorkoutProgram) => {
    switch (p.id) {
      case 'achilles-3day': return '⚔️';
      case 'achilles-elysium-3day': return '⚔️';
      case 'wolverine': return '🐺';
      case 'bodyweight-hoplite': return '🛡️';
      case 'b3-bulking': return '💪';
      case 'dorian-yates-blood-guts': return '🩸';
      case 'athena-women': return '🏛️';
      case 'titan-seniors': return '⚡';
      default: return '🏋️';
    }
  };

  const getDiffLabel = (d: string) => d === 'beginner' ? 'Principiante' : d === 'intermediate' ? 'Intermedio' : 'Avanzado';

  return (
    <div style={s.container}>
      {/* CSS for slide animations */}
      <style>{`
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      {/* Header (hidden on welcome) */}
      {step > 0 && (
        <header style={s.header}>
          <div style={s.nav}>
            <button onClick={prevStep} style={s.backBtn}>
              <ChevronLeft size={20} strokeWidth={2.5} /> Atrás
            </button>
            <span style={s.stepText}>{step}/{totalSteps - 1}</span>
            <div style={{ width: 64 }} />
          </div>
          <div style={s.progressWrap}>
            {Array.from({ length: totalSteps - 1 }, (_, i) => (
              <div key={i} style={s.progressDot(i < step)} />
            ))}
          </div>
        </header>
      )}

      {/* Content */}
      <main key={step} style={step === 0 ? { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px', animation: 'fade-in 0.5s ease-out' } : s.main}>

        {/* Step 0: Welcome */}
        {step === 0 && (
          <div style={{ textAlign: 'center', maxWidth: 360 }}>
            <div style={{ fontSize: '72px', marginBottom: '24px' }}>💪</div>
            <h1 style={{ ...s.title, fontSize: '36px', marginBottom: '16px' }}>
              <span style={s.gold}>Achilles</span> Fitness
            </h1>
            <p style={{ color: '#888', fontSize: '18px', lineHeight: 1.5, marginBottom: '40px' }}>
              Tu mejor versión física empieza aquí.<br />
              Diseña tu programa perfecto en 2 minutos.
            </p>
          </div>
        )}

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div>
            <h1 style={s.title}>Sobre ti</h1>
            <p style={s.sub}>Datos básicos para personalizar tu plan</p>

            <label style={s.label}>Tu nombre</label>
            <div style={s.inputWrap}>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="¿Cómo te llamas?" autoFocus style={{ ...s.input, paddingRight: '16px' }} />
            </div>

            <label style={s.label}>Sexo</label>
            <div style={s.gridRow}>
              <button onClick={() => setSex('male')} style={s.sexBtn(sex === 'male')}>
                <span style={{ fontSize: '28px' }}>🙋‍♂️</span>
                <span style={{ fontSize: '15px', fontWeight: 600, color: sex === 'male' ? '#000' : '#fff' }}>Hombre</span>
              </button>
              <button onClick={() => setSex('female')} style={s.sexBtn(sex === 'female')}>
                <span style={{ fontSize: '28px' }}>🙋‍♀️</span>
                <span style={{ fontSize: '15px', fontWeight: 600, color: sex === 'female' ? '#000' : '#fff' }}>Mujer</span>
              </button>
            </div>

            <div style={s.gridRow}>
              <div>
                <label style={s.label}>Edad</label>
                <div style={{ position: 'relative' }}>
                  <input type="number" inputMode="numeric" value={age} onChange={e => setAge(e.target.value)} style={s.input} />
                  <span style={s.suffix}>años</span>
                </div>
              </div>
              <div>
                <label style={s.label}>Altura</label>
                <div style={{ position: 'relative' }}>
                  <input type="number" inputMode="numeric" value={height} onChange={e => setHeight(e.target.value)} style={s.input} />
                  <span style={s.suffix}>cm</span>
                </div>
              </div>
            </div>

            <label style={s.label}>Peso actual</label>
            <div style={{ position: 'relative' }}>
              <input type="number" inputMode="decimal" value={bodyweight} onChange={e => setBodyweight(e.target.value)} style={s.input} />
              <span style={s.suffix}>kg</span>
            </div>
          </div>
        )}

        {/* Step 2: History */}
        {step === 2 && (
          <div>
            <h1 style={s.title}>Tu historia</h1>
            <p style={s.sub}>Cuéntanos sobre tu experiencia</p>

            <label style={s.label}>Experiencia entrenando</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {([
                { v: 'never', l: 'Nunca he entrenado', e: '🌱' },
                { v: 'less1', l: 'Menos de 1 año', e: '🌿' },
                { v: '1to3', l: '1-3 años', e: '🌳' },
                { v: '3to5', l: '3-5 años', e: '💪' },
                { v: '5plus', l: '5+ años', e: '🏆' },
              ] as const).map(opt => (
                <button key={opt.v} onClick={() => setExperience(opt.v)} style={s.optBtn(experience === opt.v)}>
                  <span style={{ fontSize: '24px' }}>{opt.e}</span>
                  <span style={s.optLabel(experience === opt.v)}>{opt.l}</span>
                </button>
              ))}
            </div>

            <label style={s.label}>¿Entrenas actualmente?</label>
            <div style={s.chipGrid(3)}>
              {([
                { v: 'regular', l: 'Sí, regular' },
                { v: 'sometimes', l: 'A veces' },
                { v: 'no', l: 'No' },
              ] as const).map(opt => (
                <button key={opt.v} onClick={() => setCurrentTraining(opt.v)} style={s.chip(currentTraining === opt.v)}>
                  <div style={s.chipLabel(currentTraining === opt.v)}>{opt.l}</div>
                </button>
              ))}
            </div>

            <label style={s.label}>Lesiones o zonas sensibles</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { v: 'espalda_baja', l: 'Espalda baja' },
                { v: 'rodillas', l: 'Rodillas' },
                { v: 'hombros', l: 'Hombros' },
                { v: 'cadera', l: 'Cadera' },
                { v: 'none', l: 'Ninguna ✓' },
              ].map(opt => (
                <button key={opt.v} onClick={() => toggleInjury(opt.v)} style={s.injuryChip(opt.v === 'none' ? injuries.length === 0 : injuries.includes(opt.v))}>
                  {opt.l}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Goal */}
        {step === 3 && (
          <div>
            <h1 style={s.title}>Tu objetivo</h1>
            <p style={s.sub}>¿Qué quieres lograr?</p>

            {([
              { v: 'muscle_gain', e: '💪', l: 'Ganar músculo', d: 'Quiero ser más grande y fuerte' },
              { v: 'tone', e: '🔥', l: 'Fibrarme', d: 'Quiero definición, no volumen' },
              { v: 'fat_loss', e: '🏃', l: 'Perder grasa', d: 'Quiero bajar de peso' },
              { v: 'longevity', e: '🪨', l: 'Longevidad', d: 'Quiero moverme bien a los 80' },
              { v: 'athletic', e: '⚡', l: 'Rendimiento', d: 'Quiero ser más atlético' },
            ] as const).map(opt => (
              <button key={opt.v} onClick={() => setGoal(opt.v)} style={s.goalCard(goal === opt.v)}>
                <span style={{ fontSize: '36px' }}>{opt.e}</span>
                <div>
                  <p style={{ fontSize: '17px', fontWeight: 700, color: goal === opt.v ? '#d4af37' : '#fff', marginBottom: '2px' }}>{opt.l}</p>
                  <p style={{ fontSize: '13px', color: goal === opt.v ? '#d4af37' : '#888' }}>{opt.d}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 4: Life */}
        {step === 4 && (
          <div>
            <h1 style={s.title}>Tu vida</h1>
            <p style={s.sub}>¿Cuánto tiempo puedes dedicar?</p>

            <label style={s.label}>Días por semana</label>
            <div style={s.chipGrid(4)}>
              {[2, 3, 4, 5].map(d => (
                <button key={d} onClick={() => setDaysPerWeek(d)} style={s.chip(daysPerWeek === d)}>
                  <div style={s.chipNum(daysPerWeek === d)}>{d}</div>
                  <div style={s.chipLabel(daysPerWeek === d)}>días</div>
                </button>
              ))}
            </div>

            <label style={s.label}>Tiempo por sesión</label>
            <div style={s.chipGrid(4)}>
              {[30, 45, 60, 75].map(m => (
                <button key={m} onClick={() => setSessionDuration(m)} style={s.chip(sessionDuration === m)}>
                  <div style={s.chipNum(sessionDuration === m)}>{m}</div>
                  <div style={s.chipLabel(sessionDuration === m)}>min</div>
                </button>
              ))}
            </div>

            <label style={s.label}>¿Dónde entrenas?</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {([
                { v: 'gym', e: '🏋️', l: 'Gimnasio completo', d: 'Barras, mancuernas, cables, máquinas' },
                { v: 'home', e: '🏠', l: 'Home gym', d: 'Mancuernas, bandas, kettlebells' },
                { v: 'bodyweight', e: '🤸', l: 'Solo peso corporal', d: 'Sin equipamiento' },
              ] as const).map(opt => (
                <button key={opt.v} onClick={() => setLocation(opt.v)} style={s.optBtn(location === opt.v)}>
                  <span style={{ fontSize: '24px' }}>{opt.e}</span>
                  <div>
                    <p style={s.optLabel(location === opt.v)}>{opt.l}</p>
                    <p style={s.optDesc(location === opt.v)}>{opt.d}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Recommendation */}
        {step === 5 && (
          <div>
            <h1 style={s.title}>
              Tu programa,{' '}<span style={s.gold}>{name || 'Guerrero'}</span>
            </h1>
            <p style={s.sub}>Basado en tus respuestas, te recomendamos:</p>

            {recommendations.map((rec, i) => {
              const sel = finalProgramId === rec.program.id;
              return (
                <button key={rec.program.id} onClick={() => setSelectedProgramId(rec.program.id)} style={s.programCard(sel)}>
                  {i === 0 && <div style={s.badge}>Recomendado</div>}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '36px' }}>{getProgramIcon(rec.program)}</span>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <div style={{ fontSize: '20px', fontWeight: 700, color: sel ? '#d4af37' : '#fff', marginBottom: '4px' }}>
                        {rec.program.name}
                      </div>
                      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '13px', color: '#888' }}>📅 {rec.program.daysPerWeek} días/sem</span>
                        <span style={{ fontSize: '13px', color: '#888' }}>⏱️ {rec.program.weeks} semanas</span>
                        <span style={{ fontSize: '13px', color: '#888' }}>📊 {getDiffLabel(rec.program.difficulty)}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: sel ? '#d4af37' : '#aaa', lineHeight: 1.5 }}>
                        {rec.reason}
                      </p>
                      {rec.program.phases && (
                        <p style={{ fontSize: '12px', color: '#d4af37', marginTop: '6px' }}>
                          {rec.program.phases.length} fases de periodización
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* All programs link */}
            <button
              onClick={() => {
                // Show all programs — simple expand for now
                setSelectedProgramId(null);
              }}
              style={{
                width: '100%', padding: '16px', borderRadius: '16px',
                border: '1px solid #333', backgroundColor: 'transparent',
                cursor: 'pointer', color: '#888', fontSize: '14px', marginTop: '8px',
                textAlign: 'center',
              }}
            >
              Ver todos los programas ({allPrograms.length})
            </button>

            {/* Show all programs if no selection matches recommendations */}
            {selectedProgramId === null && (
              <div style={{ marginTop: '16px' }}>
                {allPrograms.filter(p => !recommendations.some(r => r.program.id === p.id)).map(program => (
                  <button key={program.id} onClick={() => setSelectedProgramId(program.id)} style={s.programCard(false)}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '28px' }}>{getProgramIcon(program)}</span>
                      <div style={{ flex: 1, textAlign: 'left' }}>
                        <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{program.name}</div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <span style={{ fontSize: '12px', color: '#888' }}>{program.daysPerWeek}d/sem</span>
                          <span style={{ fontSize: '12px', color: '#888' }}>{program.weeks}sem</span>
                          <span style={{ fontSize: '12px', color: '#888' }}>{getDiffLabel(program.difficulty)}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* CTA Button */}
      <div style={s.footer}>
        <button
          onClick={step < totalSteps - 1 ? nextStep : handleComplete}
          disabled={loading || !canProceed()}
          style={s.cta(loading || !canProceed())}
        >
          {loading ? (
            <div style={{
              width: 20, height: 20,
              border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#000',
              borderRadius: '50%', animation: 'spin 1s linear infinite',
            }} />
          ) : step === 0 ? (
            <>Empezar <ChevronRight size={22} strokeWidth={2.5} /></>
          ) : step < totalSteps - 1 ? (
            <>Continuar <ChevronRight size={22} strokeWidth={2.5} /></>
          ) : (
            <>Empezar con {allPrograms.find(p => p.id === finalProgramId)?.name || 'Achilles'} <ChevronRight size={22} strokeWidth={2.5} /></>
          )}
        </button>
      </div>
    </div>
  );
}
