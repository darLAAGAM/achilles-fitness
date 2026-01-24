import { useEffect, useState, CSSProperties } from 'react';
import { Play, CheckCircle2, Calendar, Zap, ChevronRight, Trophy, Flame } from 'lucide-react';
import { useWorkoutStore } from '../../../stores/workoutStore';
import { useUserStore } from '../../../stores/userStore';
import { achillesTemplates } from '../../../data/achilles-program';
import { exercises as exerciseData } from '../../../data/exercises';
import { db } from '../../../services/db/database';
import type { WorkoutTemplate, Exercise, ExerciseTemplate, WorkoutSet } from '../../../types';
import { ExerciseDetail } from './ExerciseDetail';

// ============================================
// STYLES
// ============================================
const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  success: '#22c55e',
  intensityHeavy: '#ef4444',
  intensityMedium: '#eab308',
  intensityLight: '#22c55e',
};

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: colors.background,
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
  },
  header: {
    padding: '24px',
    paddingTop: 'calc(16px + env(safe-area-inset-top))',
  },
  headerTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    lineHeight: 1.2,
  },
  headerSubtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginTop: '4px',
  },
  content: {
    padding: '0 24px 24px',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '16px',
  },
  cardClickable: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
  cardComplete: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '12px',
    cursor: 'pointer',
    border: `1px solid ${colors.success}50`,
  },
  progressHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  progressLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  progressLabelText: {
    fontWeight: '500',
    color: colors.text,
    fontSize: '14px',
  },
  progressPercent: {
    fontSize: '14px',
    color: colors.textSecondary,
  },
  progressBarContainer: {
    height: '8px',
    backgroundColor: colors.cardElevated,
    borderRadius: '9999px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: '9999px',
    transition: 'width 0.5s ease',
  },
  workoutInfoHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  workoutIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: `${colors.accent}33`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutTitle: {
    fontWeight: '600',
    color: colors.text,
    fontSize: '16px',
    margin: 0,
  },
  workoutMeta: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginTop: '2px',
  },
  workoutDescription: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginBottom: '16px',
    lineHeight: 1.5,
  },
  button: {
    width: '100%',
    backgroundColor: colors.accent,
    color: '#000',
    border: 'none',
    borderRadius: '12px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'opacity 0.2s',
  },
  sectionTitle: {
    fontSize: '12px',
    fontWeight: '500',
    color: colors.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  exerciseRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  exerciseProgress: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '700',
  },
  exerciseProgressIncomplete: {
    backgroundColor: colors.cardElevated,
    color: colors.textSecondary,
  },
  exerciseProgressComplete: {
    backgroundColor: `${colors.success}33`,
    color: colors.success,
  },
  exerciseInfo: {
    flex: 1,
    minWidth: 0,
  },
  exerciseNameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  exerciseName: {
    fontWeight: '600',
    color: colors.text,
    fontSize: '15px',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },
  exerciseDetails: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '4px',
  },
  intensityBadge: {
    fontSize: '12px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  setsReps: {
    fontSize: '12px',
    color: colors.textSecondary,
  },
  lastSet: {
    fontSize: '12px',
    color: colors.textSecondary,
    marginTop: '4px',
  },
  arrow: {
    color: colors.textSecondary,
    flexShrink: 0,
  },
  completeButtonContainer: {
    position: 'fixed' as const,
    bottom: '80px',
    left: 0,
    right: 0,
    padding: '16px 24px',
    paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
    background: `linear-gradient(to top, ${colors.background}, transparent)`,
  },
  noUserCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '20px',
    marginTop: '16px',
    textAlign: 'center' as const,
  },
  noUserText: {
    color: colors.textSecondary,
    fontSize: '14px',
  },
};

// ============================================
// COMPONENT
// ============================================
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

  // Get intensity color
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'heavy': return colors.intensityHeavy;
      case 'medium': return colors.intensityMedium;
      case 'light': return colors.intensityLight;
      default: return colors.textSecondary;
    }
  };

  const getIntensityLabel = (intensity: string) => {
    switch (intensity) {
      case 'heavy': return 'Heavy';
      case 'medium': return 'Medium';
      case 'light': return 'Light';
      default: return 'Opcional';
    }
  };

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

  // Render Exercise Card inline
  const renderExerciseCard = (
    exercise: Exercise,
    template: ExerciseTemplate,
    completedSets: WorkoutSet[]
  ) => {
    const workingSets = completedSets.filter(s => !s.isWarmup);
    const isComplete = workingSets.length >= template.targetSets;
    const hasPersonalRecord = completedSets.some(s => s.isPersonalRecord);

    return (
      <div
        key={template.exerciseId}
        style={isComplete ? styles.cardComplete : styles.cardClickable}
        onClick={() => {
          if (currentSession) {
            setSelectedExercise({ exercise, templateExercise: template });
          }
        }}
      >
        <div style={styles.exerciseRow}>
          {/* Progress indicator */}
          <div
            style={{
              ...styles.exerciseProgress,
              ...(isComplete ? styles.exerciseProgressComplete : styles.exerciseProgressIncomplete),
            }}
          >
            {workingSets.length}/{template.targetSets}
          </div>

          {/* Exercise info */}
          <div style={styles.exerciseInfo}>
            <div style={styles.exerciseNameRow}>
              <h3 style={styles.exerciseName}>{exercise.name}</h3>
              {hasPersonalRecord && (
                <Trophy size={16} color={colors.accent} style={{ flexShrink: 0 }} />
              )}
            </div>
            <div style={styles.exerciseDetails}>
              <span
                style={{
                  ...styles.intensityBadge,
                  color: getIntensityColor(template.intensity),
                }}
              >
                <Flame size={12} style={{ marginRight: '2px' }} />
                {getIntensityLabel(template.intensity)}
              </span>
              <span style={styles.setsReps}>
                {template.targetSets}x{template.targetRepsMin}-{template.targetRepsMax}
              </span>
            </div>
            {workingSets.length > 0 && (
              <p style={styles.lastSet}>
                Ultimo: {workingSets[workingSets.length - 1].weight}kg x {workingSets[workingSets.length - 1].reps}
              </p>
            )}
          </div>

          {/* Arrow */}
          <ChevronRight size={20} style={styles.arrow} />
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>{todayTemplate.name}</h1>
        <p style={styles.headerSubtitle}>
          {currentSession ? `${completedExercises}/${totalExercises} ejercicios` : 'Programa Achilles'}
        </p>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Progress card */}
        {currentSession && (
          <div style={styles.card}>
            <div style={styles.progressHeader}>
              <div style={styles.progressLabel}>
                <Zap size={18} color={colors.accent} />
                <span style={styles.progressLabelText}>Progreso</span>
              </div>
              <span style={styles.progressPercent}>{Math.round(progress)}%</span>
            </div>
            <div style={styles.progressBarContainer}>
              <div
                style={{
                  ...styles.progressBarFill,
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Workout info when not started */}
        {!currentSession && (
          <div style={styles.card}>
            <div style={styles.workoutInfoHeader}>
              <div style={styles.workoutIcon}>
                <Calendar size={24} color={colors.accent} />
              </div>
              <div>
                <h3 style={styles.workoutTitle}>Hoy: {todayTemplate.name}</h3>
                <p style={styles.workoutMeta}>{totalExercises} ejercicios - ~60 min</p>
              </div>
            </div>
            <p style={styles.workoutDescription}>
              {todayTemplate.type === 'push' && 'Enfoque en pecho, hombros y triceps para los hombros anchos de Achilles.'}
              {todayTemplate.type === 'pull' && 'Espalda y biceps para la V-taper del guerrero griego.'}
              {todayTemplate.type === 'legs' && 'Piernas y core para la base atletica de un hoplita.'}
            </p>
            <button style={styles.button} onClick={handleStartWorkout}>
              <Play size={20} />
              Comenzar Entreno
            </button>
          </div>
        )}

        {/* Exercise list */}
        <div>
          <h2 style={styles.sectionTitle}>Ejercicios</h2>
          {todayTemplate.exercises.map((templateExercise) => {
            const exercise = exercises.find(e => e.id === templateExercise.exerciseId);
            if (!exercise) return null;

            return renderExerciseCard(
              exercise,
              templateExercise,
              getExerciseSets(exercise.id)
            );
          })}
        </div>

        {/* Complete workout button */}
        {currentSession && progress === 100 && (
          <div style={styles.completeButtonContainer}>
            <button style={styles.button} onClick={handleCompleteWorkout}>
              <CheckCircle2 size={20} />
              Completar Entreno
            </button>
          </div>
        )}

        {/* Greeting when no user */}
        {!user && (
          <div style={styles.noUserCard}>
            <p style={styles.noUserText}>
              Configura tu perfil para comenzar tu transformacion Achilles
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
