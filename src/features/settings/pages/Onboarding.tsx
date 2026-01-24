import { useState } from 'react';
import { ChevronRight, Dumbbell, Target, Apple } from 'lucide-react';
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

    // Calculate macros based on phase
    const bwKg = Number(bodyweight);
    const bwLbs = bwKg * 2.205;

    let dailyCalories: number;
    let proteinTarget: number;
    let carbTarget: number;
    let fatTarget: number;

    if (phase === 'bulk') {
      // Lean bulk: +200-300 calories
      dailyCalories = Math.round(bwKg * 33); // ~33 cal/kg
      proteinTarget = Math.round(bwLbs * 1.0); // 1g/lb
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else if (phase === 'cut') {
      // Deficit: -500 calories
      dailyCalories = Math.round(bwKg * 26); // ~26 cal/kg
      proteinTarget = Math.round(bwLbs * 1.2); // Higher protein on cut
      fatTarget = Math.round(dailyCalories * 0.25 / 9);
      carbTarget = Math.round((dailyCalories - (proteinTarget * 4) - (fatTarget * 9)) / 4);
    } else {
      // Maintenance
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

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      {/* Progress bar */}
      <div className="p-4 safe-area-top">
        <div className="flex gap-2 max-w-lg mx-auto">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 max-w-lg mx-auto w-full">
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Dumbbell size={40} className="text-[var(--color-primary)]" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                Bienvenido a Achilles
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-2">
                Tu camino hacia el físico de un guerrero griego comienza aquí.
              </p>
            </div>

            <div className="space-y-4">
              <Input
                label="¿Cómo te llamas?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
              <Input
                label="Edad"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                suffix="años"
              />
              <Input
                label="Altura"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                suffix="cm"
              />
              <Input
                label="Peso actual"
                type="number"
                value={bodyweight}
                onChange={(e) => setBodyweight(e.target.value)}
                suffix="kg"
              />
            </div>

            <Button fullWidth className="mt-8" onClick={nextStep}>
              Continuar
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Target size={40} className="text-[var(--color-primary)]" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                Tu experiencia
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-2">
                Personalicemos el programa a tu nivel.
              </p>
            </div>

            <div className="space-y-4">
              <Input
                label="Años de experiencia en el gimnasio"
                type="number"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                suffix="años"
              />

              <div>
                <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 block">
                  ¿Cuál es tu objetivo actual?
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'bulk', label: 'Ganar músculo', desc: 'Superávit calórico para máximo crecimiento' },
                    { value: 'cut', label: 'Definir', desc: 'Déficit para perder grasa manteniendo músculo' },
                    { value: 'maintain', label: 'Mantener', desc: 'Recomposición corporal gradual' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPhase(option.value as typeof phase)}
                      className={`w-full p-4 rounded-xl text-left transition-colors ${
                        phase === option.value
                          ? 'bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]'
                          : 'bg-[var(--color-surface)] border-2 border-transparent'
                      }`}
                    >
                      <p className={`font-semibold ${
                        phase === option.value ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
                      }`}>
                        {option.label}
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                        {option.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button variant="secondary" onClick={prevStep} className="flex-1">
                Atrás
              </Button>
              <Button onClick={nextStep} className="flex-1">
                Continuar
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Apple size={40} className="text-[var(--color-primary)]" />
              </div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                ¡Todo listo!
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-2">
                Hemos calculado tu plan personalizado.
              </p>
            </div>

            <Card className="mb-6">
              <h3 className="font-semibold text-[var(--color-text)] mb-4">Tu plan Achilles</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Programa</span>
                  <span className="font-medium text-[var(--color-text)]">Achilles 3-Day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Días por semana</span>
                  <span className="font-medium text-[var(--color-text)]">3 (Push/Pull/Legs)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Fase</span>
                  <span className="font-medium text-[var(--color-primary)]">
                    {phase === 'bulk' ? 'Volumen' : phase === 'cut' ? 'Definición' : 'Mantener'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">Calorías estimadas</span>
                  <span className="font-medium text-[var(--color-text)]">
                    ~{Math.round(Number(bodyweight) * (phase === 'bulk' ? 33 : phase === 'cut' ? 26 : 30))} kcal
                  </span>
                </div>
              </div>
            </Card>

            <Card className="bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30 mb-8">
              <p className="text-sm text-[var(--color-text)]">
                <strong>Objetivo:</strong> Alcanzar el físico de Brad Pitt en Troya mediante el desarrollo del torso superior, hombros anchos y cintura estrecha (Índice de Adonis: 1.618).
              </p>
            </Card>

            <div className="flex gap-3">
              <Button variant="secondary" onClick={prevStep} className="flex-1">
                Atrás
              </Button>
              <Button onClick={handleComplete} loading={loading} className="flex-1">
                Comenzar
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
