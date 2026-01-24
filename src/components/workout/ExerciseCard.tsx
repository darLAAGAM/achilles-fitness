import { ChevronRight, Trophy, Flame } from 'lucide-react';
import type { Exercise, ExerciseTemplate, WorkoutSet } from '../../types';
import { Card } from '../ui/Card';

interface ExerciseCardProps {
  exercise: Exercise;
  template: ExerciseTemplate;
  completedSets: WorkoutSet[];
  onClick: () => void;
}

export function ExerciseCard({ exercise, template, completedSets, onClick }: ExerciseCardProps) {
  const workingSets = completedSets.filter(s => !s.isWarmup);
  const isComplete = workingSets.length >= template.targetSets;
  const hasPersonalRecord = completedSets.some(s => s.isPersonalRecord);

  const intensityColors: Record<string, string> = {
    heavy: 'text-red-500',
    medium: 'text-yellow-500',
    light: 'text-green-500',
    optional: 'text-[var(--color-text-secondary)]',
    explosive: 'text-orange-500'
  };

  const intensityLabels: Record<string, string> = {
    heavy: 'Heavy',
    medium: 'Medium',
    light: 'Light',
    optional: 'Opcional',
    explosive: 'Explosivo'
  };

  return (
    <Card
      onClick={onClick}
      className={`${isComplete ? 'border-[var(--color-success)]/50' : ''}`}
    >
      <div className="flex items-center gap-3">
        {/* Progress indicator */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${
          isComplete
            ? 'bg-[var(--color-success)]/20 text-[var(--color-success)]'
            : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]'
        }`}>
          {workingSets.length}/{template.targetSets}
        </div>

        {/* Exercise info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[var(--color-text)] truncate">
              {exercise.name}
            </h3>
            {hasPersonalRecord && (
              <Trophy size={16} className="text-[var(--color-primary)] flex-shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className={`text-xs font-medium ${intensityColors[template.intensity]}`}>
              <Flame size={12} className="inline mr-0.5" />
              {intensityLabels[template.intensity]}
            </span>
            <span className="text-xs text-[var(--color-text-secondary)]">
              {template.targetSets}x{template.targetRepsMin}-{template.targetRepsMax}
            </span>
          </div>
          {workingSets.length > 0 && (
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              Último: {workingSets[workingSets.length - 1].weight}kg x {workingSets[workingSets.length - 1].reps}
            </p>
          )}
        </div>

        {/* Arrow */}
        <ChevronRight size={20} className="text-[var(--color-text-secondary)] flex-shrink-0" />
      </div>
    </Card>
  );
}
