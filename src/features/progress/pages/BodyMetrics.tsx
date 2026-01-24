import { useState, useEffect } from 'react';
import { Save, Target } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Card, Button, Input } from '../../../components/ui';
import { db } from '../../../services/db/database';
import { useUserStore } from '../../../stores/userStore';
import type { ProgressEntry, BodyMeasurements } from '../../../types';
import { v4 as uuid } from 'uuid';
import { calculateAdonisIndex, getAdonisRating } from '../../../data/achilles-program';

interface BodyMetricsProps {
  onBack: () => void;
}

export function BodyMetrics({ onBack }: BodyMetricsProps) {
  const { user, updateUser } = useUserStore();
  const [bodyweight, setBodyweight] = useState(user?.bodyweight?.toString() || '');
  const [measurements, setMeasurements] = useState<BodyMeasurements>({});
  const [saving, setSaving] = useState(false);
  const [, setLastEntry] = useState<ProgressEntry | null>(null);

  useEffect(() => {
    loadLastEntry();
  }, []);

  const loadLastEntry = async () => {
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
  };

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
    <>
      <Header
        title="Medidas corporales"
        showBack
        onBack={onBack}
        rightAction={
          <Button size="sm" onClick={handleSave} loading={saving}>
            <Save size={16} className="mr-1" />
            Guardar
          </Button>
        }
      />
      <PageContainer>
        {/* Bodyweight */}
        <Card className="mb-4">
          <h3 className="font-semibold text-[var(--color-text)] mb-3">Peso corporal</h3>
          <Input
            type="number"
            value={bodyweight}
            onChange={(e) => setBodyweight(e.target.value)}
            suffix="kg"
            placeholder="80"
          />
        </Card>

        {/* Adonis Index */}
        {adonisIndex && (
          <Card className="mb-4 bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-[var(--color-primary)]" />
              <h3 className="font-semibold text-[var(--color-text)]">Índice de Adonis</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[var(--color-primary)]">
                {adonisIndex.toFixed(2)}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                (ideal: 1.618)
              </span>
            </div>
            <p className="text-sm text-[var(--color-text)] mt-2">
              {adonisRating}
            </p>
          </Card>
        )}

        {/* Circumferences */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--color-text)]">Circunferencias (cm)</h3>
            <span className="text-xs text-[var(--color-text-secondary)]">
              Mide en ayunas
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {measurementFields.map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                  {label}
                </label>
                <input
                  type="number"
                  value={measurements[key] || ''}
                  onChange={(e) => updateMeasurement(key, e.target.value)}
                  placeholder={placeholder}
                  className="w-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/50 focus:outline-none focus:border-[var(--color-primary)] text-sm"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Tips */}
        <Card className="mt-4 bg-[var(--color-surface)]">
          <h4 className="text-sm font-medium text-[var(--color-text)] mb-2">
            Consejos para medir
          </h4>
          <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
            <li>• Mide siempre a la misma hora (idealmente en ayunas por la mañana)</li>
            <li>• Usa una cinta métrica flexible</li>
            <li>• Hombros: punto más ancho con brazos relajados</li>
            <li>• Cintura: a la altura del ombligo, relajado</li>
            <li>• Bíceps: flexionado, en el punto más grueso</li>
          </ul>
        </Card>
      </PageContainer>
    </>
  );
}
