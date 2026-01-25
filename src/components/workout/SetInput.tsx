import { useState } from 'react';
import { Minus, Plus, Check, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface SetInputProps {
  setNumber: number;
  defaultWeight?: number;
  defaultReps?: number;
  isWarmup?: boolean;
  onComplete: (weight: number, reps: number) => void;
  onDelete?: () => void;
  completed?: boolean;
  completedWeight?: number;
  completedReps?: number;
  isPersonalRecord?: boolean;
}

export function SetInput({
  setNumber,
  defaultWeight = 0,
  defaultReps = 0,
  isWarmup = false,
  onComplete,
  onDelete,
  completed = false,
  completedWeight,
  completedReps,
  isPersonalRecord = false
}: SetInputProps) {
  const [weight, setWeight] = useState(completedWeight ?? defaultWeight);
  const [reps, setReps] = useState(completedReps ?? defaultReps);

  const adjustWeight = (delta: number) => {
    setWeight(prev => Math.max(0, prev + delta));
  };

  const adjustReps = (delta: number) => {
    setReps(prev => Math.max(0, prev + delta));
  };

  if (completed) {
    return (
      <div className={`flex items-center gap-3 p-3 rounded-xl ${
        isPersonalRecord
          ? 'bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30'
          : 'bg-[var(--color-surface-elevated)]'
      }`}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
          isWarmup
            ? 'bg-[var(--color-warning)]/20 text-[var(--color-warning)]'
            : 'bg-[var(--color-success)]/20 text-[var(--color-success)]'
        }`}>
          {isWarmup ? 'W' : setNumber}
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <span className="text-[var(--color-text)] font-semibold">
            {completedWeight} kg
          </span>
          <span className="text-[var(--color-text-secondary)]">×</span>
          <span className="text-[var(--color-text)] font-semibold">
            {completedReps} reps
          </span>
        </div>
        {isPersonalRecord && (
          <span className="text-xs font-bold text-[var(--color-primary)]">PR!</span>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-error)] transition-colors"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-3 rounded-xl bg-[var(--color-surface-elevated)]">
      <div className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center text-sm font-bold ${
        isWarmup
          ? 'bg-[var(--color-warning)]/20 text-[var(--color-warning)]'
          : 'bg-[var(--color-border)] text-[var(--color-text)]'
      }`}>
        {isWarmup ? 'W' : setNumber}
      </div>

      {/* Weight */}
      <div className="flex items-center gap-0.5 flex-1 min-w-0">
        <button
          onClick={() => adjustWeight(-2.5)}
          className="w-7 h-7 shrink-0 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Minus size={14} />
        </button>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-12 min-w-0 h-7 rounded-lg bg-[var(--color-surface)] text-center text-[var(--color-text)] font-semibold text-sm border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <button
          onClick={() => adjustWeight(2.5)}
          className="w-7 h-7 shrink-0 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Plus size={14} />
        </button>
        <span className="text-[10px] text-[var(--color-text-secondary)] w-4 shrink-0">kg</span>
      </div>

      {/* Reps */}
      <div className="flex items-center gap-0.5 flex-1 min-w-0">
        <button
          onClick={() => adjustReps(-1)}
          className="w-7 h-7 shrink-0 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Minus size={14} />
        </button>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          className="w-10 min-w-0 h-7 rounded-lg bg-[var(--color-surface)] text-center text-[var(--color-text)] font-semibold text-sm border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <button
          onClick={() => adjustReps(1)}
          className="w-7 h-7 shrink-0 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-secondary)] active:scale-95 transition-transform"
        >
          <Plus size={14} />
        </button>
      </div>

      {/* Complete button */}
      <Button
        size="sm"
        onClick={() => onComplete(weight, reps)}
        disabled={weight === 0 || reps === 0}
        className="!p-1.5 !min-w-[32px] shrink-0"
      >
        <Check size={16} />
      </Button>
    </div>
  );
}
