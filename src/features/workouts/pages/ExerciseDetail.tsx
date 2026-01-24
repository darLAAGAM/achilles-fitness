import { useState, useEffect } from 'react';
import { Info, Clock, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Card, Button } from '../../../components/ui';
import { SetInput, RestTimer, YouTubeEmbed } from '../../../components/workout';
import { useWorkoutStore } from '../../../stores/workoutStore';
import type { Exercise, ExerciseTemplate } from '../../../types';

interface ExerciseDetailProps {
  exercise: Exercise;
  template: ExerciseTemplate;
  onBack: () => void;
}

export function ExerciseDetail({ exercise, template, onBack }: ExerciseDetailProps) {
  const { currentSession, addSet, deleteSet, getPersonalRecord } = useWorkoutStore();
  const [showTechnique, setShowTechnique] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [personalRecord, setPersonalRecord] = useState<{ weight: number; reps: number } | null>(null);
  const [lastWeight, setLastWeight] = useState(0);

  const completedSets = currentSession?.sets.filter(s => s.exerciseId === exercise.id) || [];
  const workingSets = completedSets.filter(s => !s.isWarmup);
  const warmupSets = completedSets.filter(s => s.isWarmup);

  useEffect(() => {
    const loadPR = async () => {
      const pr = await getPersonalRecord(exercise.id);
      setPersonalRecord(pr);
      if (pr) {
        setLastWeight(pr.weight);
      }
    };
    loadPR();
  }, [exercise.id, getPersonalRecord]);

  const handleAddSet = async (weight: number, reps: number, isWarmup = false) => {
    await addSet(exercise.id, weight, reps, isWarmup);
    setLastWeight(weight);
    if (!isWarmup) {
      setShowTimer(true);
    }
  };

  const handleDeleteSet = async (setId: string) => {
    await deleteSet(setId);
  };

  const isComplete = workingSets.length >= template.targetSets;

  const intensityColors = {
    heavy: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    light: 'bg-green-500/20 text-green-400 border-green-500/30',
    optional: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  };

  return (
    <>
      <Header
        title={exercise.name}
        subtitle={`${workingSets.length}/${template.targetSets} series`}
        showBack
        onBack={onBack}
      />
      <PageContainer>
        {/* Video tutorial */}
        {exercise.youtubeUrl && (
          <div className="mb-4">
            <YouTubeEmbed url={exercise.youtubeUrl} title={`Tutorial: ${exercise.name}`} />
          </div>
        )}

        {/* Exercise info */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${intensityColors[template.intensity]}`}>
            {template.intensity.charAt(0).toUpperCase() + template.intensity.slice(1)}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]">
            {template.targetSets}x{template.targetRepsMin}-{template.targetRepsMax}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]">
            <Clock size={12} className="inline mr-1" />
            {template.restSeconds}s
          </span>
        </div>

        {/* Personal record */}
        {personalRecord && (
          <Card className="mb-4 bg-[var(--color-primary)]/10 border-[var(--color-primary)]/30">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--color-text-secondary)]">Récord personal</span>
              <span className="font-bold text-[var(--color-primary)]">
                {personalRecord.weight}kg × {personalRecord.reps}
              </span>
            </div>
          </Card>
        )}

        {/* Notes from template */}
        {template.notes && (
          <Card className="mb-4 bg-[var(--color-warning)]/10 border-[var(--color-warning)]/30">
            <div className="flex gap-2">
              <Info size={18} className="text-[var(--color-warning)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--color-text)]">{template.notes}</p>
            </div>
          </Card>
        )}

        {/* Technique notes */}
        <Card className="mb-4" padding="none">
          <button
            onClick={() => setShowTechnique(!showTechnique)}
            className="w-full flex items-center justify-between p-4"
          >
            <span className="font-medium text-[var(--color-text)]">Notas de técnica</span>
            {showTechnique ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {showTechnique && (
            <div className="px-4 pb-4 space-y-3 border-t border-[var(--color-border)]">
              {exercise.techniqueNotes && exercise.techniqueNotes.length > 0 && (
                <div className="pt-3">
                  <h4 className="text-xs font-medium text-[var(--color-text-secondary)] uppercase mb-2">
                    Ejecución correcta
                  </h4>
                  <ul className="space-y-1">
                    {exercise.techniqueNotes.map((note, i) => (
                      <li key={i} className="text-sm text-[var(--color-text)] flex gap-2">
                        <span className="text-[var(--color-primary)]">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
                <div>
                  <h4 className="text-xs font-medium text-[var(--color-text-secondary)] uppercase mb-2 flex items-center gap-1">
                    <AlertTriangle size={12} className="text-[var(--color-error)]" />
                    Errores comunes
                  </h4>
                  <ul className="space-y-1">
                    {exercise.commonMistakes.map((mistake, i) => (
                      <li key={i} className="text-sm text-[var(--color-text)] flex gap-2">
                        <span className="text-[var(--color-error)]">✕</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Card>

        {/* Rest Timer */}
        {showTimer && (
          <Card className="mb-4">
            <RestTimer
              defaultSeconds={template.restSeconds}
              onComplete={() => setShowTimer(false)}
            />
          </Card>
        )}

        {/* Warmup sets */}
        {warmupSets.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Calentamiento
            </h3>
            <div className="space-y-2">
              {warmupSets.map((set) => (
                <SetInput
                  key={set.id}
                  setNumber={0}
                  completed
                  completedWeight={set.weight}
                  completedReps={set.reps}
                  isWarmup
                  onComplete={() => {}}
                  onDelete={() => handleDeleteSet(set.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Working sets */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-[var(--color-text-secondary)]">
            Series de trabajo ({workingSets.length}/{template.targetSets})
          </h3>

          {/* Completed sets */}
          <div className="space-y-2">
            {workingSets.map((set, index) => (
              <SetInput
                key={set.id}
                setNumber={index + 1}
                completed
                completedWeight={set.weight}
                completedReps={set.reps}
                isPersonalRecord={set.isPersonalRecord}
                onComplete={() => {}}
                onDelete={() => handleDeleteSet(set.id)}
              />
            ))}
          </div>

          {/* Input for next set */}
          {!isComplete && !showTimer && (
            <SetInput
              setNumber={workingSets.length + 1}
              defaultWeight={lastWeight}
              defaultReps={template.targetRepsMin}
              onComplete={(weight, reps) => handleAddSet(weight, reps, false)}
            />
          )}

          {/* Add warmup set */}
          {!showTimer && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleAddSet(lastWeight * 0.5, 10, true)}
              className="w-full"
            >
              + Agregar serie de calentamiento
            </Button>
          )}
        </div>

        {/* Complete message */}
        {isComplete && (
          <Card className="mt-4 bg-[var(--color-success)]/10 border-[var(--color-success)]/30">
            <div className="text-center">
              <p className="text-lg font-bold text-[var(--color-success)]">¡Ejercicio completado!</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Puedes agregar más series o continuar con el siguiente ejercicio.
              </p>
            </div>
          </Card>
        )}
      </PageContainer>
    </>
  );
}
