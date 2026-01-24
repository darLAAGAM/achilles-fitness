import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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

  return (
    <div
      className="min-h-[100dvh] bg-[#0a0a0a] flex flex-col"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      {/* Header */}
      <header className="shrink-0 px-6 pt-4 pb-2">
        <div className="flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-1 text-[#d4af37] text-base font-medium active:opacity-70"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
              Atrás
            </button>
          ) : (
            <div className="w-16" />
          )}
          <span className="text-[#888] text-sm">{step}/3</span>
          <div className="w-16" />
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                s <= step ? 'bg-[#d4af37]' : 'bg-[#333]'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 pt-6 overflow-y-auto">
        {step === 1 && (
          <div className="animate-fade-in">
            <h1 className="text-[28px] font-bold text-white leading-tight">
              Bienvenido a<br />
              <span className="text-[#d4af37]">Achilles</span>
            </h1>
            <p className="text-[#888] text-base mt-2 mb-8">
              Construye el físico de un guerrero griego
            </p>

            <div className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="text-[#888] text-sm font-medium block mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  autoFocus
                  className="w-full bg-[#1a1a1a] border-2 border-[#333] rounded-xl px-4 py-4 text-white text-lg placeholder:text-[#555] focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              {/* Edad y Altura */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[#888] text-sm font-medium block mb-2">
                    Edad
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="numeric"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full bg-[#1a1a1a] border-2 border-[#333] rounded-xl px-4 py-4 text-white text-lg pr-16 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] text-base">
                      años
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-[#888] text-sm font-medium block mb-2">
                    Altura
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="numeric"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-[#1a1a1a] border-2 border-[#333] rounded-xl px-4 py-4 text-white text-lg pr-12 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] text-base">
                      cm
                    </span>
                  </div>
                </div>
              </div>

              {/* Peso */}
              <div>
                <label className="text-[#888] text-sm font-medium block mb-2">
                  Peso actual
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    value={bodyweight}
                    onChange={(e) => setBodyweight(e.target.value)}
                    className="w-full bg-[#1a1a1a] border-2 border-[#333] rounded-xl px-4 py-4 text-white text-lg pr-12 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] text-base">
                    kg
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in">
            <h1 className="text-[28px] font-bold text-white leading-tight">
              Tu objetivo
            </h1>
            <p className="text-[#888] text-base mt-2 mb-8">
              Personalizamos el programa para ti
            </p>

            <div className="space-y-6">
              {/* Experiencia */}
              <div>
                <label className="text-[#888] text-sm font-medium block mb-2">
                  Años de experiencia en el gym
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="numeric"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                    className="w-full bg-[#1a1a1a] border-2 border-[#333] rounded-xl px-4 py-4 text-white text-lg pr-16 focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] text-base">
                    años
                  </span>
                </div>
              </div>

              {/* Objetivo */}
              <div>
                <label className="text-[#888] text-sm font-medium block mb-3">
                  ¿Qué quieres lograr?
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'bulk', emoji: '💪', label: 'Ganar músculo', desc: 'Superávit calórico para crecer' },
                    { value: 'cut', emoji: '🔥', label: 'Definir', desc: 'Déficit para quemar grasa' },
                    { value: 'maintain', emoji: '⚖️', label: 'Mantener', desc: 'Recomposición corporal' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPhase(option.value as typeof phase)}
                      className={`w-full p-4 rounded-2xl text-left transition-all active:scale-[0.98] flex items-center gap-4 ${
                        phase === option.value
                          ? 'bg-[#d4af37] shadow-lg shadow-[#d4af37]/30'
                          : 'bg-[#1a1a1a] border-2 border-[#333]'
                      }`}
                    >
                      <span className="text-3xl">{option.emoji}</span>
                      <div className="flex-1">
                        <p className={`text-lg font-semibold ${
                          phase === option.value ? 'text-black' : 'text-white'
                        }`}>
                          {option.label}
                        </p>
                        <p className={`text-sm ${
                          phase === option.value ? 'text-black/70' : 'text-[#888]'
                        }`}>
                          {option.desc}
                        </p>
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
            <h1 className="text-[28px] font-bold text-white leading-tight">
              ¡Listo, {name || 'Guerrero'}!
            </h1>
            <p className="text-[#888] text-base mt-2 mb-8">
              Tu plan personalizado
            </p>

            {/* Plan summary */}
            <div className="bg-[#1a1a1a] rounded-2xl p-5 mb-6">
              <div className="space-y-4">
                {[
                  { label: 'Programa', value: 'Achilles 3-Day' },
                  { label: 'Rutina', value: 'Push / Pull / Legs' },
                  { label: 'Objetivo', value: phase === 'bulk' ? '💪 Volumen' : phase === 'cut' ? '🔥 Definición' : '⚖️ Mantener', highlight: true },
                  { label: 'Calorías/día', value: `~${Math.round(Number(bodyweight) * (phase === 'bulk' ? 33 : phase === 'cut' ? 26 : 30))} kcal` }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-3 ${
                      i < 3 ? 'border-b border-[#333]' : ''
                    }`}
                  >
                    <span className="text-[#888] text-base">{item.label}</span>
                    <span className={`text-base font-semibold ${
                      item.highlight ? 'text-[#d4af37]' : 'text-white'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objetivo Achilles */}
            <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl p-5">
              <p className="text-[15px] text-white leading-relaxed">
                <span className="text-[#d4af37] font-bold">Objetivo Achilles:</span> Desarrollar torso superior, hombros anchos y cintura estrecha. Ratio dorado 1.618.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Fixed bottom button */}
      <div
        className="shrink-0 px-6 pt-4 pb-6 bg-[#0a0a0a]"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)' }}
      >
        <button
          onClick={step < 3 ? nextStep : handleComplete}
          disabled={loading}
          className="w-full h-14 bg-[#d4af37] hover:bg-[#c9a432] active:bg-[#b8942d] active:scale-[0.98] text-black text-lg font-bold rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
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
