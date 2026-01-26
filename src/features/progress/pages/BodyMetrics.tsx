import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, Save, Target } from 'lucide-react';
import { db } from '../../../services/db/database';
import { useUserStore } from '../../../stores/userStore';
import type { ProgressEntry, BodyMeasurements } from '../../../types';
import { v4 as uuid } from 'uuid';
import { calculateAdonisIndex, getAdonisRating } from '../../../data/achilles-program';

interface BodyMetricsProps {
  onBack: () => void;
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
  } as React.CSSProperties,
  header: {
    position: 'sticky' as const,
    top: 0,
    backgroundColor: '#0a0a0a',
    borderBottom: '1px solid #2a2a2a',
    zIndex: 40,
    paddingTop: 'env(safe-area-inset-top)',
  } as React.CSSProperties,
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '56px',
    padding: '0 16px',
    maxWidth: '500px',
    margin: '0 auto',
  } as React.CSSProperties,
  backButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginLeft: '-8px',
    background: 'none',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
    flex: 1,
    textAlign: 'center' as const,
  } as React.CSSProperties,
  saveButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 12px',
    backgroundColor: '#d4af37',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  } as React.CSSProperties,
  container: {
    padding: '16px 16px calc(env(safe-area-inset-bottom) + 100px) 16px',
    maxWidth: '500px',
    margin: '0 auto',
  } as React.CSSProperties,
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '16px',
  } as React.CSSProperties,
  cardGold: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
  } as React.CSSProperties,
  cardTitle: {
    fontWeight: 600,
    color: '#fff',
    fontSize: '16px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  } as React.CSSProperties,
  cardTitleRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  } as React.CSSProperties,
  cardHint: {
    fontSize: '12px',
    color: '#888',
  } as React.CSSProperties,
  inputGroup: {
    marginBottom: '12px',
  } as React.CSSProperties,
  label: {
    display: 'block',
    fontSize: '12px',
    color: '#888',
    marginBottom: '6px',
  } as React.CSSProperties,
  inputWrapper: {
    position: 'relative' as const,
  } as React.CSSProperties,
  input: {
    width: '100%',
    backgroundColor: '#2a2a2a',
    border: '1px solid #3a3a3a',
    borderRadius: '12px',
    padding: '14px 16px',
    paddingRight: '48px',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box' as const,
  } as React.CSSProperties,
  inputSuffix: {
    position: 'absolute' as const,
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#888',
    fontSize: '14px',
  } as React.CSSProperties,
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  } as React.CSSProperties,
  adonisValue: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
  } as React.CSSProperties,
  adonisNumber: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#d4af37',
  } as React.CSSProperties,
  adonisIdeal: {
    fontSize: '14px',
    color: '#888',
  } as React.CSSProperties,
  adonisRating: {
    fontSize: '14px',
    color: '#fff',
    marginTop: '8px',
  } as React.CSSProperties,
  tipsCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '16px',
  } as React.CSSProperties,
  tipsTitle: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#fff',
    marginBottom: '8px',
  } as React.CSSProperties,
  tipsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  } as React.CSSProperties,
  tipsItem: {
    fontSize: '13px',
    color: '#888',
    marginBottom: '4px',
    display: 'flex',
    gap: '6px',
  } as React.CSSProperties,
  iconGold: {
    color: '#d4af37',
  } as React.CSSProperties,
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(0,0,0,0.3)',
    borderTopColor: '#000',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  } as React.CSSProperties,
};

export function BodyMetrics({ onBack }: BodyMetricsProps) {
  const { user, updateUser } = useUserStore();
  const [bodyweight, setBodyweight] = useState(user?.bodyweight?.toString() || '');
  const [measurements, setMeasurements] = useState<BodyMeasurements>({});
  const [saving, setSaving] = useState(false);
  const [, setLastEntry] = useState<ProgressEntry | null>(null);

  const loadLastEntry = useCallback(async () => {
    const entries = await db.progressEntries
      .orderBy('date')
      .reverse()
      .limit(1)
      .toArray();

    if (entries.length > 0) {
      setLastEntry(entries[0]);
      if (entries[0].bodyweight) {
        setBodyweight(entries[0].bodyweight.toString());
      }
      if (entries[0].measurements) {
        setMeasurements(entries[0].measurements);
      }
    }
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: load async data on mount */
  useEffect(() => {
    loadLastEntry();
  }, [loadLastEntry]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSave = async () => {
    setSaving(true);

    const entry: ProgressEntry = {
      id: uuid(),
      date: new Date(),
      bodyweight: bodyweight ? Number(bodyweight) : undefined,
      measurements: Object.keys(measurements).length > 0 ? measurements : undefined
    };

    await db.progressEntries.add(entry);

    // Update user bodyweight if changed
    if (bodyweight && Number(bodyweight) !== user?.bodyweight) {
      await updateUser({ bodyweight: Number(bodyweight) });
    }

    setSaving(false);
    onBack();
  };

  const updateMeasurement = (key: keyof BodyMeasurements, value: string) => {
    setMeasurements(prev => ({
      ...prev,
      [key]: value ? Number(value) : undefined
    }));
  };

  // Calculate Adonis Index
  const shoulderCirc = measurements.shoulders;
  const waistCirc = measurements.waist;
  const adonisIndex = shoulderCirc && waistCirc ? calculateAdonisIndex(shoulderCirc, waistCirc) : null;
  const adonisRating = adonisIndex ? getAdonisRating(adonisIndex) : null;

  const measurementFields: { key: keyof BodyMeasurements; label: string; placeholder: string }[] = [
    { key: 'shoulders', label: 'Hombros', placeholder: '120' },
    { key: 'chest', label: 'Pecho', placeholder: '100' },
    { key: 'waist', label: 'Cintura', placeholder: '80' },
    { key: 'hips', label: 'Cadera', placeholder: '95' },
    { key: 'bicepLeft', label: 'Bíceps izq.', placeholder: '38' },
    { key: 'bicepRight', label: 'Bíceps der.', placeholder: '38' },
    { key: 'thighLeft', label: 'Muslo izq.', placeholder: '58' },
    { key: 'thighRight', label: 'Muslo der.', placeholder: '58' },
    { key: 'calfLeft', label: 'Pantorrilla izq.', placeholder: '38' },
    { key: 'calfRight', label: 'Pantorrilla der.', placeholder: '38' },
    { key: 'neck', label: 'Cuello', placeholder: '40' }
  ];

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <button onClick={onBack} style={styles.backButton}>
            <ChevronLeft size={24} />
          </button>
          <h1 style={styles.headerTitle}>Medidas corporales</h1>
          <button onClick={handleSave} disabled={saving} style={styles.saveButton}>
            {saving ? (
              <div style={styles.spinner} />
            ) : (
              <>
                <Save size={16} />
                Guardar
              </>
            )}
          </button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Bodyweight */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Peso corporal</h3>
          <div style={styles.inputWrapper}>
            <input
              type="number"
              inputMode="decimal"
              value={bodyweight}
              onChange={(e) => setBodyweight(e.target.value)}
              placeholder="80"
              style={styles.input}
            />
            <span style={styles.inputSuffix}>kg</span>
          </div>
        </div>

        {/* Adonis Index */}
        {adonisIndex && (
          <div style={{ ...styles.card, ...styles.cardGold }}>
            <div style={styles.cardTitle}>
              <Target size={18} style={styles.iconGold} />
              Índice de Adonis
            </div>
            <div style={styles.adonisValue}>
              <span style={styles.adonisNumber}>{adonisIndex.toFixed(2)}</span>
              <span style={styles.adonisIdeal}>(ideal: 1.618)</span>
            </div>
            <p style={styles.adonisRating}>{adonisRating}</p>
          </div>
        )}

        {/* Circumferences */}
        <div style={styles.card}>
          <div style={styles.cardTitleRow}>
            <h3 style={{ ...styles.cardTitle, marginBottom: 0 }}>Circunferencias (cm)</h3>
            <span style={styles.cardHint}>Mide en ayunas</span>
          </div>

          <div style={styles.grid2}>
            {measurementFields.map(({ key, label, placeholder }) => (
              <div key={key} style={styles.inputGroup}>
                <label style={styles.label}>{label}</label>
                <div style={styles.inputWrapper}>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={measurements[key] || ''}
                    onChange={(e) => updateMeasurement(key, e.target.value)}
                    placeholder={placeholder}
                    style={{ ...styles.input, paddingRight: '16px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={styles.tipsCard}>
          <h4 style={styles.tipsTitle}>Consejos para medir</h4>
          <ul style={styles.tipsList}>
            <li style={styles.tipsItem}>
              <span style={styles.iconGold}>•</span>
              Mide siempre a la misma hora (idealmente en ayunas por la mañana)
            </li>
            <li style={styles.tipsItem}>
              <span style={styles.iconGold}>•</span>
              Usa una cinta métrica flexible
            </li>
            <li style={styles.tipsItem}>
              <span style={styles.iconGold}>•</span>
              Hombros: punto más ancho con brazos relajados
            </li>
            <li style={styles.tipsItem}>
              <span style={styles.iconGold}>•</span>
              Cintura: a la altura del ombligo, relajado
            </li>
            <li style={styles.tipsItem}>
              <span style={styles.iconGold}>•</span>
              Bíceps: flexionado, en el punto más grueso
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
