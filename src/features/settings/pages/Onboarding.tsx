import { useState } from 'react';
import { ChevronRight, ChevronLeft, Dumbbell, Target, Sparkles } from 'lucide-react';
import { Button, Input, Card } from '../../../components/ui';
import { useUserStore } from '../../../stores/userStore';

export function Onboarding() {
  const { initializeUser } = useUserStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form data
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

    let dailyCalories: number;
    let proteinTarget: number;
    let carbTarget: number;
    let fatTarget: number;

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

  const canContinueStep1 = name.trim().length > 0 && age && height && bodyweight;

  return (
    <div className="min-h-[100dvh] bg-[var(--color-background)] flex flex-col safe-area-top">
      {/* Header con progress */}
      <div className="shrink-0 px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-[var(--color-text-secondary)]">Paso {step} de 3</p>
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] active:text-[var(--color-text)]"
            >
              <ChevronLeft size={14} />
              Atrás
            </button>
          )}
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto px-5 pb-32">
        {step === 1 && (
          <div className="animate-fade-in">
            {/* Hero compacto */}
            <div className="flex items-center gap-4 py-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Dumbbell size={28} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--color-text)]">
                  Bienvenido a Achilles
                </h1>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Construye el físico de un guerrero
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <Input
                label="¿Cómo te llamas?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                autoFocus
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Edad"
                  type="number"
                  inputMode="numeric"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  suffix="años"
                />
                <Input
                  label="Altura"
                  type="number"
                  inputMode="numeric"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  suffix="cm"
                />
              </div>

              <Input
                label="Peso actual"
                type="number"
                inputMode="decimal"
                value={bodyweight}
                onChange={(e) => setBodyweight(e.target.value)}
                suffix="kg"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            {/* Hero */}
            <div className="flex items-center gap-4 py-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Target size={28} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--color-text)]">
                  Tu objetivo
                </h1>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Personalizamos el programa para ti
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <Input
                label="Años de experiencia"
                type="number"
                inputMode="numeric"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                suffix="años"
              />

              <div>
                <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-3 block">
                  ¿Qué quieres lograr?
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'bulk', label: 'Ganar músculo', desc: 'Superávit calórico', emoji: '💪' },
                    { value: 'cut', label: 'Definir', desc: 'Déficit controlado', emoji: '🔥' },
                    { value: 'maintain', label: 'Mantener', desc: 'Recomposición', emoji: '⚖️' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPhase(option.value as typeof phase)}
                      className={`w-full p-4 rounded-2xl text-left transition-all active:scale-[0.98] ${
                        phase === option.value
                          ? 'bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/25'
                          : 'bg-[var(--color-surface)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{option.emoji}</span>
                        <div>
                          <p className={`font-semibold ${
                            phase === option.value ? 'text-black' : 'text-[var(--color-text)]'
                          }`}>
                            {option.label}
                          </p>
                          <p className={`text-xs ${
                            phase === option.value ? 'text-black/70' : 'text-[var(--color-text-secondary)]'
                          }`}>
                            {option.desc}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            {/* Hero */}
            <div className="flex items-center gap-4 py-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Sparkles size={28} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--color-text)]">
                  ¡Todo listo, {name || 'Guerrero'}!
                </h1>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Tu plan personalizado está listo
                </p>
              </div>
            </div>

            <Card className="mb-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Programa</span>
                  <span className="font-semibold text-[var(--color-text)]">Achilles 3-Day</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Rutina</span>
                  <span className="font-semibold text-[var(--color-text)]">Push / Pull / Legs</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Objetivo</span>
                  <span className="font-semibold text-[var(--color-primary)]">
                    {phase === 'bulk' ? '💪 Volumen' : phase === 'cut' ? '🔥 Definición' : '⚖️ Mantener'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-[var(--color-text-secondary)]">Calorías/día</span>
                  <span className="font-semibold text-[var(--color-text)]">
                    ~{Math.round(Number(bodyweight) * (phase === 'bulk' ? 33 : phase === 'cut' ? 26 : 30))} kcal
                  </span>
                </div>
              </div>
            </Card>

            <div className="p-4 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
              <p className="text-sm text-[var(--color-text)] leading-relaxed">
                <strong className="text-[var(--color-primary)]">El objetivo Achilles:</strong> Desarrollar un torso superior imponente, hombros anchos y cintura estrecha siguiendo la proporción dorada (1.618).
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Botón fijo en bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)] to-transparent pt-10 safe-area-bottom">
        <div className="max-w-lg mx-auto">
          {step < 3 ? (
            <Button
              fullWidth
              onClick={nextStep}
              disabled={step === 1 && !canContinueStep1}
              className="h-14 text-base font-semibold shadow-lg shadow-[var(--color-primary)]/25"
            >
              Continuar
              <ChevronRight size={20} className="ml-2" />
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={handleComplete}
              loading={loading}
              className="h-14 text-base font-semibold shadow-lg shadow-[var(--color-primary)]/25"
            >
              Comenzar mi transformación
              <ChevronRight size={20} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
