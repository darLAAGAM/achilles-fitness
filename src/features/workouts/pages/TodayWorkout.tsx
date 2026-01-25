import { useEffect, useState, useMemo } from 'react';
import type { CSSProperties } from 'react';
import { Play, CheckCircle2, Zap, ChevronRight, Trophy, Flame, Dumbbell, Calendar, RotateCcw } from 'lucide-react';
import { useWorkoutStore } from '../../../stores/workoutStore';
import { useUserStore } from '../../../stores/userStore';
import { getProgramById, achillesProgram } from '../../../data/programs';
import { exercises as exerciseData } from '../../../data/exercises';
import { db } from '../../../services/db/database';
import type { WorkoutTemplate, Exercise, ExerciseTemplate, WorkoutSet, WorkoutProgram, ProgramPhase } from '../../../types';
import { ExerciseDetail } from './ExerciseDetail';
import { FastingTracker } from '../../../components/fasting/FastingTracker';
import { AccessoryTracker } from '../../../components/workout/AccessoryTracker';
import { format, startOfWeek, addDays, isToday, isSameDay, differenceInWeeks } from 'date-fns';
import { es } from 'date-fns/locale';

// ============================================
// TYPES
// ============================================
type WorkoutType = 'push' | 'pull' | 'legs' | 'shoulders' | 'arms' | 'chest' | 'back' | 'full' | 'rest';

interface WeekDay {
  date: Date;
  dayName: string;
  dayNumber: number;
  workoutType: WorkoutType;
  isToday: boolean;
}

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
  intensityExplosive: '#f97316',
  push: '#ef4444',
  pull: '#3b82f6',
  legs: '#22c55e',
  shoulders: '#f97316',
  arms: '#a855f7',
  chest: '#ef4444',
  back: '#3b82f6',
  full: '#d4af37',
  rest: '#666666',
};

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: colors.background,
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
  },
  header: {
    padding: '20px 24px 16px',
  },
  headerRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    lineHeight: 1.2,
  },
  headerSubtitle: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginTop: '2px',
    textTransform: 'capitalize' as const,
  },
  weekLabel: {
    fontSize: '13px',
    color: colors.accent,
    fontWeight: '600',
  },
  // Calendar styles
  calendarCard: {
    backgroundColor: colors.card,
    borderRadius: '20px',
    padding: '16px',
    margin: '0 24px 16px',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '6px',
  },
  dayButton: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '10px 4px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    minWidth: 0,
  },
  dayName: {
    fontSize: '11px',
    fontWeight: '500',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
  },
  dayNumber: {
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '4px',
  },
  dayWorkoutBadge: {
    fontSize: '9px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '4px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.3px',
  },
  todayIndicator: {
    width: '4px',
    height: '4px',
    borderRadius: '2px',
    backgroundColor: colors.accent,
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
  workoutHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  workoutIconContainer: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutInfo: {
    flex: 1,
  },
  workoutTitle: {
    fontWeight: '700',
    color: colors.text,
    fontSize: '20px',
    margin: 0,
  },
  workoutMeta: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginTop: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  workoutTypeBadge: {
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
  },
  workoutDescription: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  button: {
    width: '100%',
    backgroundColor: colors.accent,
    color: '#000',
    border: 'none',
    borderRadius: '14px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '12px',
    marginTop: '8px',
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
  restDayCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center' as const,
  },
  restDayIcon: {
    width: '72px',
    height: '72px',
    borderRadius: '20px',
    backgroundColor: 'rgba(102, 102, 102, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  restDayTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
    marginBottom: '8px',
  },
  restDaySubtitle: {
    fontSize: '15px',
    color: colors.textSecondary,
    lineHeight: 1.5,
    margin: 0,
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
  phaseBanner: {
    backgroundColor: `${colors.accent}15`,
    border: `1px solid ${colors.accent}30`,
    borderRadius: '12px',
    padding: '12px 16px',
    margin: '0 24px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  phaseIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: `${colors.accent}20`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phaseInfo: {
    flex: 1,
  },
  phaseName: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.accent,
    margin: 0,
  },
  phaseWeek: {
    fontSize: '12px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '2px',
  },
  circuitBadge: {
    backgroundColor: `${colors.accent}20`,
    color: colors.accent,
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '12px',
  },
};

// ============================================
// HELPERS
// ============================================

const getWorkoutColor = (type: WorkoutType): string => {
  switch (type) {
    case 'push': return colors.push;
    case 'pull': return colors.pull;
    case 'legs': return colors.legs;
    case 'shoulders': return colors.shoulders;
    case 'arms': return colors.arms;
    case 'chest': return colors.chest;
    case 'back': return colors.back;
    case 'full': return colors.full;
    default: return colors.rest;
  }
};

const getWorkoutLabel = (type: WorkoutType): string => {
  switch (type) {
    case 'push': return 'Push';
    case 'pull': return 'Pull';
    case 'legs': return 'Legs';
    case 'shoulders': return 'Hombros';
    case 'arms': return 'Brazos';
    case 'chest': return 'Pecho';
    case 'back': return 'Espalda';
    case 'full': return 'Full';
    default: return 'Rest';
  }
};

const getWorkoutDescription = (template: WorkoutTemplate | null): string => {
  if (!template) return 'Día de recuperación. Tu cuerpo crece mientras descansas.';

  const type = template.type;
  switch (type) {
    case 'push': return 'Pecho, hombros y tríceps. Construye los hombros anchos del guerrero griego.';
    case 'pull': return 'Espalda y bíceps. Desarrolla la V-taper característica de Achilles.';
    case 'legs': return 'Piernas y core. La base atlética de un verdadero hoplita.';
    case 'shoulders': return 'Deltoides anterior, lateral y posterior. Hombros de acero.';
    case 'arms': return 'Bíceps y tríceps. Brazos definidos y funcionales.';
    case 'chest': return 'Pecho desde múltiples ángulos. Desarrollo completo del pectoral.';
    case 'back': return 'Espalda ancha y gruesa. La V-taper del guerrero.';
    case 'full': return template.isCircuit
      ? `Circuito de cuerpo completo. ${template.circuitRounds || 3} rondas de alta intensidad.`
      : 'Entrenamiento de cuerpo completo. Trabaja todos los músculos principales.';
    default: return 'Día de recuperación. Tu cuerpo crece mientras descansas.';
  }
};

// Get current phase for programs with multiple phases
const getCurrentPhase = (program: WorkoutProgram, startDate?: Date): ProgramPhase | null => {
  if (!program.phases || program.phases.length === 0) return null;
  if (!startDate) return program.phases[0];

  const weeksElapsed = differenceInWeeks(new Date(), startDate);
  let accumulatedWeeks = 0;

  for (const phase of program.phases) {
    accumulatedWeeks += phase.weeks;
    if (weeksElapsed < accumulatedWeeks) {
      return phase;
    }
  }

  // If all phases complete, return last phase
  return program.phases[program.phases.length - 1];
};

// Get week number within current phase
const getWeekInPhase = (program: WorkoutProgram, startDate?: Date): number => {
  if (!program.phases || program.phases.length === 0) return 1;
  if (!startDate) return 1;

  const weeksElapsed = differenceInWeeks(new Date(), startDate);
  let accumulatedWeeks = 0;

  for (const phase of program.phases) {
    if (weeksElapsed < accumulatedWeeks + phase.weeks) {
      return weeksElapsed - accumulatedWeeks + 1;
    }
    accumulatedWeeks += phase.weeks;
  }

  return 1;
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

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedExercise, setSelectedExercise] = useState<{
    exercise: Exercise;
    templateExercise: WorkoutTemplate['exercises'][0];
  } | null>(null);

  // Get the user's current program or default to Achilles
  const currentProgram = useMemo(() => {
    const programId = user?.currentProgramId || 'achilles-3day';
    return getProgramById(programId) || achillesProgram;
  }, [user?.currentProgramId]);

  // Get current phase for programs with phases (like Wolverine)
  const currentPhase = useMemo(() => {
    return getCurrentPhase(currentProgram, user?.programStartDate);
  }, [currentProgram, user?.programStartDate]);

  const weekInPhase = useMemo(() => {
    return getWeekInPhase(currentProgram, user?.programStartDate);
  }, [currentProgram, user?.programStartDate]);

  // Get workouts for current phase (or all workouts if no phases)
  const programWorkouts = useMemo(() => {
    if (currentPhase && currentProgram.phases) {
      return currentProgram.workouts.filter(w => w.phaseId === currentPhase.id);
    }
    return currentProgram.workouts;
  }, [currentProgram, currentPhase]);

  // Map days of week to workouts based on program structure
  const getWorkoutForDay = (dayOfWeek: number): WorkoutTemplate | null => {
    // dayOfWeek: 0 = Sunday, 1 = Monday, etc.
    // We need to map program days to actual calendar days
    // Programs specify dayOfWeek in their workout templates
    return programWorkouts.find(w => w.dayOfWeek === dayOfWeek) || null;
  };

  // Generate week days with dynamic workout assignment
  const weekDays: WeekDay[] = useMemo(() => {
    const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // Start on Monday
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(weekStart, i);
      const dayOfWeek = date.getDay();
      const workout = getWorkoutForDay(dayOfWeek);
      return {
        date,
        dayName: format(date, 'EEE', { locale: es }),
        dayNumber: date.getDate(),
        workoutType: (workout?.type || 'rest') as WorkoutType,
        isToday: isToday(date),
      };
    });
  }, [programWorkouts]);

  // Get selected day's workout
  const selectedDayOfWeek = selectedDate.getDay();
  const selectedTemplate = getWorkoutForDay(selectedDayOfWeek);
  const selectedWorkoutType = (selectedTemplate?.type || 'rest') as WorkoutType;
  const isSelectedToday = isToday(selectedDate);

  // Check if current session matches the selected workout
  const isSessionForSelectedWorkout = currentSession && selectedTemplate
    ? currentSession.workoutTemplateId === selectedTemplate.id
    : false;

  useEffect(() => {
    const initializeData = async () => {
      if (exercises.length === 0) {
        const existingExercises = await db.exercises.count();
        if (existingExercises === 0) {
          await db.exercises.bulkAdd(exerciseData);
        }
        await loadExercises();
      }

      // Update workout templates when program changes
      const existingTemplates = await db.workoutTemplates.toArray();
      const currentProgramTemplateIds = currentProgram.workouts.map(w => w.id);
      const needsUpdate = !currentProgramTemplateIds.every(id =>
        existingTemplates.some(t => t.id === id)
      );

      if (needsUpdate) {
        // Add new templates that don't exist
        for (const template of currentProgram.workouts) {
          const exists = existingTemplates.find(t => t.id === template.id);
          if (!exists) {
            await db.workoutTemplates.put(template);
          }
        }
      }
    };

    initializeData();
  }, [exercises.length, loadExercises, currentProgram]);

  const handleStartWorkout = async () => {
    if (selectedTemplate) {
      await startSession(selectedTemplate);
    }
  };

  const handleCompleteWorkout = async () => {
    await completeSession();
  };

  const getExerciseSets = (exerciseId: string) => {
    return currentSession?.sets.filter(s => s.exerciseId === exerciseId) || [];
  };

  const getCompletedExercisesCount = () => {
    if (!isSessionForSelectedWorkout || !selectedTemplate) return 0;
    return selectedTemplate.exercises.filter(te => {
      const sets = getExerciseSets(te.exerciseId).filter(s => !s.isWarmup);
      return sets.length >= te.targetSets;
    }).length;
  };

  const totalExercises = selectedTemplate?.exercises.length || 0;
  const completedExercises = getCompletedExercisesCount();
  const progress = isSessionForSelectedWorkout && totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'heavy': return colors.intensityHeavy;
      case 'medium': return colors.intensityMedium;
      case 'light': return colors.intensityLight;
      case 'explosive': return colors.intensityExplosive;
      default: return colors.textSecondary;
    }
  };

  const getIntensityLabel = (intensity: string) => {
    switch (intensity) {
      case 'heavy': return 'Heavy';
      case 'medium': return 'Medium';
      case 'light': return 'Light';
      case 'explosive': return 'Explosivo';
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
          if (isSessionForSelectedWorkout) {
            setSelectedExercise({ exercise, templateExercise: template });
          }
        }}
      >
        <div style={styles.exerciseRow}>
          <div
            style={{
              ...styles.exerciseProgress,
              ...(isComplete ? styles.exerciseProgressComplete : styles.exerciseProgressIncomplete),
            }}
          >
            {workingSets.length}/{template.targetSets}
          </div>

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
                Último: {workingSets[workingSets.length - 1].weight}kg x {workingSets[workingSets.length - 1].reps}
              </p>
            )}
          </div>

          <ChevronRight size={20} style={styles.arrow} />
        </div>
      </div>
    );
  };

  const workoutColor = getWorkoutColor(selectedWorkoutType);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.headerTitle}>Entreno</h1>
            <p style={styles.headerSubtitle}>
              {format(new Date(), "MMMM yyyy", { locale: es })}
            </p>
          </div>
          <span style={styles.weekLabel}>{currentProgram.name}</span>
        </div>
      </div>

      {/* Phase Banner (for programs with phases like Wolverine) */}
      {currentPhase && currentProgram.phases && (
        <div style={styles.phaseBanner}>
          <div style={styles.phaseIcon}>
            <Calendar size={20} color={colors.accent} />
          </div>
          <div style={styles.phaseInfo}>
            <p style={styles.phaseName}>{currentPhase.name}</p>
            <p style={styles.phaseWeek}>
              Semana {weekInPhase} de {currentPhase.weeks} • {currentPhase.focus === 'strength' ? 'Fuerza' : currentPhase.focus === 'hypertrophy' ? 'Hipertrofia' : currentPhase.focus === 'explosivity' ? 'Explosividad' : 'Acondicionamiento'}
            </p>
          </div>
        </div>
      )}

      {/* Week Calendar */}
      <div style={styles.calendarCard}>
        <div style={styles.calendarGrid}>
          {weekDays.map((day) => {
            const isSelected = isSameDay(day.date, selectedDate);
            const dayColor = getWorkoutColor(day.workoutType);

            return (
              <button
                key={day.date.toISOString()}
                onClick={() => setSelectedDate(day.date)}
                style={{
                  ...styles.dayButton,
                  backgroundColor: isSelected ? dayColor : 'transparent',
                  border: day.isToday && !isSelected ? `2px solid ${colors.accent}` : '2px solid transparent',
                }}
              >
                <span style={{
                  ...styles.dayName,
                  color: isSelected ? '#000' : colors.textSecondary,
                }}>
                  {day.dayName.slice(0, 2)}
                </span>
                <span style={{
                  ...styles.dayNumber,
                  color: isSelected ? '#000' : colors.text,
                }}>
                  {day.dayNumber}
                </span>
                <span style={{
                  ...styles.dayWorkoutBadge,
                  backgroundColor: isSelected ? 'rgba(0,0,0,0.2)' : `${dayColor}22`,
                  color: isSelected ? '#000' : dayColor,
                }}>
                  {getWorkoutLabel(day.workoutType)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Fasting Tracker - Show if program recommends fasting */}
        {currentProgram.nutritionGuidelines?.recommendedFasting && (
          <FastingTracker />
        )}

        {/* Accessory Tracker - Abs & Cardio */}
        <AccessoryTracker
          programId={currentProgram.id}
          currentPhaseId={currentPhase?.id}
        />

        {/* Rest Day */}
        {selectedWorkoutType === 'rest' && (
          <div style={styles.restDayCard}>
            <div style={styles.restDayIcon}>
              <span style={{ fontSize: '32px' }}>😴</span>
            </div>
            <h2 style={styles.restDayTitle}>Día de Descanso</h2>
            <p style={styles.restDaySubtitle}>
              {getWorkoutDescription(null)}
            </p>
          </div>
        )}

        {/* Workout Day */}
        {selectedTemplate && (
          <>
            {/* Progress card (only when session active for this workout) */}
            {isSessionForSelectedWorkout && (
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

            {/* Workout info card (show when no session or session is for different workout) */}
            {!isSessionForSelectedWorkout && (
              <div style={styles.card}>
                {/* Circuit badge for circuit workouts */}
                {selectedTemplate.isCircuit && (
                  <div style={styles.circuitBadge}>
                    <RotateCcw size={14} />
                    Circuito: {selectedTemplate.circuitRounds || 3} rondas
                  </div>
                )}
                <div style={styles.workoutHeader}>
                  <div style={{
                    ...styles.workoutIconContainer,
                    backgroundColor: `${workoutColor}22`,
                  }}>
                    <Dumbbell size={28} color={workoutColor} />
                  </div>
                  <div style={styles.workoutInfo}>
                    <h2 style={styles.workoutTitle}>{selectedTemplate.name}</h2>
                    <div style={styles.workoutMeta}>
                      <span style={{
                        ...styles.workoutTypeBadge,
                        backgroundColor: `${workoutColor}22`,
                        color: workoutColor,
                      }}>
                        {getWorkoutLabel(selectedWorkoutType)}
                      </span>
                      <span>{totalExercises} ejercicios</span>
                      <span>~{selectedTemplate.estimatedDuration || 60} min</span>
                    </div>
                  </div>
                </div>
                <p style={styles.workoutDescription}>
                  {getWorkoutDescription(selectedTemplate)}
                </p>
                {/* Training style note for superset workouts */}
                {selectedTemplate.trainingStyle === 'superset' && (
                  <p style={{
                    fontSize: '12px',
                    color: colors.accent,
                    marginBottom: '12px',
                    padding: '8px 12px',
                    backgroundColor: `${colors.accent}10`,
                    borderRadius: '8px',
                  }}>
                    💪 Entrenamiento con superseries - mínimo descanso entre ejercicios pareados
                  </p>
                )}
                {!isSelectedToday && (
                  <p style={{
                    fontSize: '13px',
                    color: colors.accent,
                    marginBottom: '16px',
                    textAlign: 'center' as const,
                  }}>
                    Programado para {format(selectedDate, "EEEE d", { locale: es })}
                  </p>
                )}
                <button style={styles.button} onClick={handleStartWorkout}>
                  <Play size={20} />
                  {isSelectedToday ? 'Comenzar Entreno' : 'Entrenar Ahora'}
                </button>
              </div>
            )}

            {/* Exercise list */}
            <h2 style={styles.sectionTitle}>Ejercicios</h2>
            {selectedTemplate.exercises.map((templateExercise) => {
              const exercise = exercises.find(e => e.id === templateExercise.exerciseId);
              if (!exercise) return null;

              return renderExerciseCard(
                exercise,
                templateExercise,
                isSessionForSelectedWorkout ? getExerciseSets(exercise.id) : []
              );
            })}

            {/* Complete workout button */}
            {isSessionForSelectedWorkout && progress === 100 && (
              <div style={styles.completeButtonContainer}>
                <button style={styles.button} onClick={handleCompleteWorkout}>
                  <CheckCircle2 size={20} />
                  Completar Entreno
                </button>
              </div>
            )}
          </>
        )}

        {/* No user message */}
        {!user && (
          <div style={styles.noUserCard}>
            <p style={styles.noUserText}>
              Configura tu perfil para comenzar tu transformación Achilles
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
