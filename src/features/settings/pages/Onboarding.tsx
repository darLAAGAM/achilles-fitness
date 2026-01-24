import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useUserStore } from '../../../stores/userStore';

export function Onboarding() {
  const { initializeUser } = useUserStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('34');
  const [height, setHeight] = useState('180');
  const [bodyweight, setBodyweight] = useState('80');
  const [experienceYears, setExperienceYears] = useState('5');
  const [phase, setPhase] = useState<'bulk' | 'cut' | 'maintain'>('bulk');

  const handleComplete = async () => {
    setLoading(true);
    const bwKg = Number(bodyweight);
    const bwLbs = bwKg * 2.205;

    let dailyCalories: number, proteinTarget: number, carbTarget: number, fatTarget: number;

    if (phase === 'bulk') {
      dailyCalories = Math.round(bwKg * 33);
      proteinTarget = Math.round(bwLbs * 1.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'cut') {
      dailyCalories = Math.round(bwKg * 26);
      proteinTarget = Math.round(bwLbs * 1.2);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else {
      dailyCalories = Math.round(bwKg * 30);
      proteinTarget = Math.round(bwLbs * 1.0);
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    }

    await initializeUser({
      name: name || 'Guerrero',
      age: Number(age),
      height: Number(height),
      bodyweight: bwKg,
      experienceYears: Number(experienceYears),
      trainingDaysPerWeek: 3,
      preferredUnit: 'kg',
      currentPhase: phase,
      dailyCalories,
      proteinTarget,
      carbTarget,
      fatTarget
    });
    setLoading(false);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Estilos inline para garantizar que se aplican
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
      gap: '8px',
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
      fontSize: '32px',
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
      marginBottom: '32px',
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
      marginBottom: '24px',
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
      marginBottom: '24px',
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
      fontSize: '32px',
    },
    optionLabel: (selected: boolean) => ({
      fontSize: '18px',
      fontWeight: 600,
      color: selected ? '#000' : '#fff',
    }),
    optionDesc: (selected: boolean) => ({
      fontSize: '14px',
      color: selected ? 'rgba(0,0,0,0.7)' : '#888',
    }),
    summaryCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '24px',
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
      fontSize: '16px',
    },
    summaryValue: (highlight: boolean) => ({
      color: highlight ? '#d4af37' : '#fff',
      fontSize: '16px',
      fontWeight: 600,
    }),
    infoBox: {
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '16px',
      padding: '20px',
    },
    infoText: {
      color: '#fff',
      fontSize: '15px',
      lineHeight: 1.5,
    },
    infoHighlight: {
      color: '#d4af37',
      fontWeight: 700,
    },
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
          <span style={styles.stepIndicator}>{step}/3</span>
          <div style={{ width: 64 }} />
        </div>
        <div style={styles.progressContainer}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={styles.progressBar(s <= step)} />
          ))}
        </div>
      </header>

      {/* Content */}
      <main style={styles.main}>
        {step === 1 && (
          <div>
            <h1 style={styles.title}>
              Bienvenido a<br />
              <span style={styles.titleGold}>Achilles</span>
            </h1>
            <p style={styles.subtitle}>Construye el físico de un guerrero griego</p>

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

        {step === 2 && (
          <div>
            <h1 style={styles.title}>Tu objetivo</h1>
            <p style={styles.subtitle}>Personalizamos el programa para ti</p>

            <label style={styles.label}>Años de experiencia</label>
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <input
                type="number"
                inputMode="numeric"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                style={styles.input}
              />
              <span style={styles.inputSuffix}>años</span>
            </div>

            <label style={styles.label}>¿Qué quieres lograr?</label>
            <div style={{ marginTop: '12px' }}>
              {[
                { value: 'bulk', emoji: '💪', label: 'Ganar músculo', desc: 'Superávit calórico' },
                { value: 'cut', emoji: '🔥', label: 'Definir', desc: 'Déficit controlado' },
                { value: 'maintain', emoji: '⚖️', label: 'Mantener', desc: 'Recomposición' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setPhase(option.value as typeof phase)}
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

        {step === 3 && (
          <div>
            <h1 style={styles.title}>¡Listo, {name || 'Guerrero'}!</h1>
            <p style={styles.subtitle}>Tu plan personalizado</p>

            <div style={styles.summaryCard}>
              {[
                { label: 'Programa', value: 'Achilles 3-Day', highlight: false },
                { label: 'Rutina', value: 'Push / Pull / Legs', highlight: false },
                { label: 'Objetivo', value: phase === 'bulk' ? '💪 Volumen' : phase === 'cut' ? '🔥 Definición' : '⚖️ Mantener', highlight: true },
                { label: 'Calorías/día', value: `~${Math.round(Number(bodyweight) * (phase === 'bulk' ? 33 : phase === 'cut' ? 26 : 30))} kcal`, highlight: false }
              ].map((item, i) => (
                <div key={i} style={styles.summaryRow(i < 3)}>
                  <span style={styles.summaryLabel}>{item.label}</span>
                  <span style={styles.summaryValue(item.highlight)}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={styles.infoBox}>
              <p style={styles.infoText}>
                <span style={styles.infoHighlight}>Objetivo Achilles: </span>
                Desarrollar torso superior, hombros anchos y cintura estrecha. Ratio dorado 1.618.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* CTA Button */}
      <div style={styles.footer}>
        <button
          onClick={step < 3 ? nextStep : handleComplete}
          disabled={loading}
          style={styles.ctaButton}
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
              {step < 3 ? 'Continuar' : 'Comenzar'}
              <ChevronRight size={22} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
