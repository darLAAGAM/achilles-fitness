import { useEffect, useState } from 'react';
import { Play, CheckCircle2, Calendar, Zap } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Button, Card } from '../../../components/ui';
import { ExerciseCard } from '../../../components/workout';
import { useWorkoutStore } from '../../../stores/workoutStore';
import { useUserStore } from '../../../stores/userStore';
import { achillesTemplates } from '../../../data/achilles-program';
import { exercises as exerciseData } from '../../../data/exercises';
import { db } from '../../../services/db/database';
import type { WorkoutTemplate, Exercise } from '../../../types';
import { ExerciseDetail } from './ExerciseDetail';

export function TodayWorkout() {
  const { user } = useUserStore();
  const {
    currentSession,
    exercises,
    loadExercises,
    startSession,
    completeSession
  } = useWorkoutStore();

  const [selectedExercise, setSelectedExercise] = useState<{
    exercise: Exercise;
    templateExercise: WorkoutTemplate['exercises'][0];
  } | null>(null);

  // Get today's workout based on day of week
  const today = new Date().getDay();
  const todayTemplate = achillesTemplates.find(t => {
    if (today === 1 || today === 2) return t.type === 'push'; // Lun, Mar
    if (today === 3 || today === 4) return t.type === 'pull'; // Mie, Jue
    if (today === 5 || today === 6 || today === 0) return t.type === 'legs'; // Vie, Sab, Dom
    return false;
  }) || achillesTemplates[0];

  useEffect(() => {
    const initializeData = async () => {
      // Load exercises into store
      if (exercises.length === 0) {
        // Seed exercises to DB if empty
        const existingExercises = await db.exercises.count();
        if (existingExercises === 0) {
          await db.exercises.bulkAdd(exerciseData);
        }
        await loadExercises();
      }

      // Seed templates if empty
      const existingTemplates = await db.workoutTemplates.count();
      if (existingTemplates === 0) {
        await db.workoutTemplates.bulkAdd(achillesTemplates);
      }
    };

    initializeData();
  }, [exercises.length, loadExercises]);

  const handleStartWorkout = async () => {
    await startSession(todayTemplate);
  };

  const handleCompleteWorkout = async () => {
    await completeSession();
  };

  const getExerciseSets = (exerciseId: string) => {
    return currentSession?.sets.filter(s => s.exerciseId === exerciseId) || [];
  };

  const getCompletedExercisesCount = () => {
    if (!currentSession) return 0;
    return todayTemplate.exercises.filter(te => {
      const sets = getExerciseSets(te.exerciseId).filter(s => !s.isWarmup);
      return sets.length >= te.targetSets;
    }).length;
  };

  const totalExercises = todayTemplate.exercises.length;
  const completedExercises = getCompletedExercisesCount();
  const progress = currentSession ? (completedExercises / totalExercises) * 100 : 0;

  // If exercise detail is open
  if (selectedExercise) {
    return (
      <ExerciseDetail
        exercise={selectedExercise.exercise}
        template={selectedExercise.templateExercise}
        onBack={() => setSelectedExercise(null)}
      />
    );
  }

  return (
    <>
      <Header
        title={todayTemplate.name}
        subtitle={currentSession ? `${completedExercises}/${totalExercises} ejercicios` : 'Programa Achilles'}
      />
      <PageContainer>
        {/* Progress card */}
        {currentSession && (
          <Card className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-[var(--color-primary)]" />
                <span className="font-medium text-[var(--color-text)]">Progreso</span>
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-[var(--color-surface-elevated)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </Card>
        )}

        {/* Workout info when not started */}
        {!currentSession && (
          <Card className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                <Calendar size={24} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">Hoy: {todayTemplate.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {totalExercises} ejercicios • ~60 min
                </p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              {todayTemplate.type === 'push' && 'Enfoque en pecho, hombros y tríceps para los hombros anchos de Achilles.'}
              {todayTemplate.type === 'pull' && 'Espalda y bíceps para la V-taper del guerrero griego.'}
              {todayTemplate.type === 'legs' && 'Piernas y core para la base atlética de un hoplita.'}
            </p>
            <Button fullWidth onClick={handleStartWorkout}>
              <Play size={20} className="mr-2" />
              Comenzar Entreno
            </Button>
          </Card>
        )}

        {/* Exercise list */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
            Ejercicios
          </h2>
          {todayTemplate.exercises.map((templateExercise) => {
            const exercise = exercises.find(e => e.id === templateExercise.exerciseId);
            if (!exercise) return null;

            return (
              <ExerciseCard
                key={templateExercise.exerciseId}
                exercise={exercise}
                template={templateExercise}
                completedSets={getExerciseSets(exercise.id)}
                onClick={() => {
                  if (currentSession) {
                    setSelectedExercise({ exercise, templateExercise });
                  }
                }}
              />
            );
          })}
        </div>

        {/* Complete workout button */}
        {currentSession && progress === 100 && (
          <div className="fixed bottom-20 left-0 right-0 p-4 bg-gradient-to-t from-[var(--color-background)] to-transparent">
            <Button fullWidth onClick={handleCompleteWorkout} className="max-w-lg mx-auto">
              <CheckCircle2 size={20} className="mr-2" />
              Completar Entreno
            </Button>
          </div>
        )}

        {/* Greeting when no user */}
        {!user && (
          <Card className="mt-4">
            <p className="text-center text-[var(--color-text-secondary)]">
              Configura tu perfil para comenzar tu transformación Achilles
            </p>
          </Card>
        )}
      </PageContainer>
    </>
  );
}
