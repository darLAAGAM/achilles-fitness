import { useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Plus, Minus, SkipForward } from 'lucide-react';
import { useWorkoutStore } from '../../stores/workoutStore';

interface RestTimerProps {
  defaultSeconds?: number;
  nextExercise?: string;
  onComplete?: () => void;
}

export function RestTimer({ defaultSeconds = 90, nextExercise, onComplete }: RestTimerProps) {
  const {
    restTimerActive,
    restTimeRemaining,
    restTimerDefault,
    startRestTimer,
    pauseRestTimer,
    stopRestTimer,
    setRestTime,
    tickRestTimer
  } = useWorkoutStore();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (restTimerActive && restTimeRemaining > 0) {
      interval = setInterval(() => {
        tickRestTimer();
      }, 1000);
    } else if (restTimeRemaining === 0 && restTimerActive) {
      stopRestTimer();
      // Vibrate if supported
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
      onComplete?.();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [restTimerActive, restTimeRemaining, tickRestTimer, stopRestTimer, onComplete]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const handleStart = () => {
    startRestTimer(restTimeRemaining || defaultSeconds);
  };

  const handlePause = () => {
    pauseRestTimer();
  };

  const handleReset = () => {
    stopRestTimer();
    startRestTimer(defaultSeconds);
  };

  const adjustTime = (delta: number) => {
    const currentTime = restTimeRemaining || defaultSeconds;
    const newTime = Math.max(0, currentTime + delta);
    setRestTime(newTime);
  };

  const handleSkip = () => {
    stopRestTimer();
    onComplete?.();
  };

  const timerDefault = restTimerDefault || defaultSeconds;
  const progress = restTimerActive || restTimeRemaining > 0
    ? ((timerDefault - restTimeRemaining) / timerDefault) * 100
    : 0;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-[var(--color-surface)] rounded-2xl">
      {/* Timer circle */}
      <div className="relative w-40 h-40">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="var(--color-border)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="var(--color-primary)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={440}
            strokeDashoffset={440 - (440 * progress) / 100}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-[var(--color-text)]">
            {formatTime(restTimeRemaining || defaultSeconds)}
          </span>
          <span className="text-xs text-[var(--color-text-secondary)] mt-1">
            {restTimerActive ? 'Descansando' : 'Descanso'}
          </span>
        </div>
      </div>

      {/* Time adjustment */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => adjustTime(-15)}
          className="w-10 h-10 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Minus size={18} />
        </button>
        <span className="text-sm text-[var(--color-text-secondary)]">15s</span>
        <button
          onClick={() => adjustTime(15)}
          className="w-10 h-10 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleReset}
          className="w-12 h-12 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={restTimerActive ? handlePause : handleStart}
          className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-black active:scale-95 transition-transform"
        >
          {restTimerActive ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>
        <button
          onClick={handleSkip}
          className="w-12 h-12 rounded-full bg-[var(--color-surface-elevated)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <SkipForward size={20} />
        </button>
      </div>

      {/* Skip rest button */}
      {restTimerActive && (
        <button
          onClick={handleSkip}
          className="mt-2 px-6 py-2 rounded-full bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] text-sm font-medium active:scale-95 transition-transform"
        >
          Saltar descanso
        </button>
      )}

      {/* Next exercise preview */}
      {nextExercise && (
        <div className="mt-2 text-center">
          <p className="text-xs text-[var(--color-text-secondary)]">Siguiente:</p>
          <p className="text-sm font-medium text-[var(--color-text)]">{nextExercise}</p>
        </div>
      )}
    </div>
  );
}
