import { useState, useEffect } from 'react';
import { Flame, Target, ChevronDown, ChevronUp, Check, Clock } from 'lucide-react';
import { getAccessoryPlanByProgram, type AbsWorkout, type CardioWorkout } from '../../data/accessory-workouts';
import { format, startOfWeek, addDays } from 'date-fns';

interface AccessoryTrackerProps {
  programId: string;
  currentPhaseId?: string;
}

interface CompletedAccessory {
  date: string; // ISO date
  type: 'abs-upper' | 'abs-lower' | 'abs-circuit' | 'cardio-aerobic' | 'cardio-hiit' | 'calves';
}

const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  success: '#22c55e',
  warning: '#f59e0b',
  danger: '#ef4444',
  cardio: '#ef4444',
  abs: '#8b5cf6',
};

const styles = {
  container: {
    marginBottom: '16px',
  } as React.CSSProperties,
  card: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    overflow: 'hidden',
  } as React.CSSProperties,
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    cursor: 'pointer',
  } as React.CSSProperties,
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  } as React.CSSProperties,
  iconContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  headerSubtitle: {
    fontSize: '12px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '2px',
  } as React.CSSProperties,
  weekProgress: {
    display: 'flex',
    gap: '4px',
  } as React.CSSProperties,
  weekDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  } as React.CSSProperties,
  content: {
    padding: '0 16px 16px',
  } as React.CSSProperties,
  section: {
    marginBottom: '16px',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '12px',
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: '8px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  } as React.CSSProperties,
  workoutCard: {
    backgroundColor: colors.cardElevated,
    borderRadius: '12px',
    padding: '12px',
    marginBottom: '8px',
  } as React.CSSProperties,
  workoutHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  } as React.CSSProperties,
  workoutName: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  workoutMeta: {
    fontSize: '12px',
    color: colors.textSecondary,
  } as React.CSSProperties,
  exerciseList: {
    marginTop: '8px',
  } as React.CSSProperties,
  exercise: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    padding: '6px 0',
    borderBottom: `1px solid ${colors.card}`,
  } as React.CSSProperties,
  exerciseLast: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    padding: '6px 0',
  } as React.CSSProperties,
  exerciseBullet: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: colors.accent,
    marginTop: '6px',
    flexShrink: 0,
  } as React.CSSProperties,
  exerciseContent: {
    flex: 1,
  } as React.CSSProperties,
  exerciseName: {
    fontSize: '13px',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  exerciseDetail: {
    fontSize: '11px',
    color: colors.textSecondary,
    margin: 0,
  } as React.CSSProperties,
  completeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
  } as React.CSSProperties,
  completedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    backgroundColor: `${colors.success}20`,
    color: colors.success,
    borderRadius: '6px',
    fontSize: '11px',
    fontWeight: '600',
  } as React.CSSProperties,
  tipBox: {
    backgroundColor: `${colors.accent}10`,
    borderRadius: '8px',
    padding: '10px 12px',
    marginTop: '12px',
  } as React.CSSProperties,
  tipText: {
    fontSize: '12px',
    color: colors.accent,
    margin: 0,
    lineHeight: 1.4,
  } as React.CSSProperties,
  noCardioNote: {
    backgroundColor: `${colors.warning}15`,
    borderRadius: '8px',
    padding: '12px',
    textAlign: 'center' as const,
  } as React.CSSProperties,
  noCardioText: {
    fontSize: '13px',
    color: colors.warning,
    margin: 0,
  } as React.CSSProperties,
};

export function AccessoryTracker({ programId, currentPhaseId }: AccessoryTrackerProps) {
  const [expanded, setExpanded] = useState(false);
  const [completedToday, setCompletedToday] = useState<CompletedAccessory[]>([]);
  const [completedThisWeek, setCompletedThisWeek] = useState<CompletedAccessory[]>([]);

  const plan = getAccessoryPlanByProgram(programId);
  const today = format(new Date(), 'yyyy-MM-dd');
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

  // Check if cardio is disabled for current phase
  const phaseOverride = plan?.phaseOverrides?.[currentPhaseId || ''];
  const isCardioDisabled = phaseOverride?.cardio === 'none';

  useEffect(() => {
    loadCompletedAccessories();
  }, []);

  const loadCompletedAccessories = () => {
    try {
      const stored = localStorage.getItem('achilles-accessory-completed');
      if (stored) {
        const all: CompletedAccessory[] = JSON.parse(stored);

        // Filter for today
        setCompletedToday(all.filter(a => a.date === today));

        // Filter for this week
        const weekDates = Array.from({ length: 7 }, (_, i) =>
          format(addDays(weekStart, i), 'yyyy-MM-dd')
        );
        setCompletedThisWeek(all.filter(a => weekDates.includes(a.date)));
      }
    } catch (e) {
      console.error('Error loading accessories:', e);
    }
  };

  const markComplete = (type: CompletedAccessory['type']) => {
    const newEntry: CompletedAccessory = { date: today, type };

    try {
      const stored = localStorage.getItem('achilles-accessory-completed');
      const all: CompletedAccessory[] = stored ? JSON.parse(stored) : [];

      // Check if already completed today
      const alreadyDone = all.find(a => a.date === today && a.type === type);
      if (alreadyDone) return;

      const updated = [...all, newEntry];
      localStorage.setItem('achilles-accessory-completed', JSON.stringify(updated));

      setCompletedToday(prev => [...prev, newEntry]);
      setCompletedThisWeek(prev => [...prev, newEntry]);
    } catch (e) {
      console.error('Error saving accessory:', e);
    }
  };

  const isCompletedToday = (type: CompletedAccessory['type']) => {
    return completedToday.some(c => c.type === type);
  };

  if (!plan || (plan.absWorkouts.length === 0 && plan.cardioWorkouts.length === 0)) {
    return null;
  }

  // Count weekly progress
  const absCompletedThisWeek = completedThisWeek.filter(c => c.type.startsWith('abs')).length;
  const cardioCompletedThisWeek = completedThisWeek.filter(c => c.type.startsWith('cardio')).length;
  const targetAbsPerWeek = 4; // 3-4 times
  const targetCardioPerWeek = isCardioDisabled ? 0 : 3; // 1 aerobic + 2 HIIT

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header} onClick={() => setExpanded(!expanded)}>
          <div style={styles.headerLeft}>
            <div style={{
              ...styles.iconContainer,
              backgroundColor: `${colors.abs}20`,
            }}>
              <Target size={20} color={colors.abs} />
            </div>
            <div>
              <h3 style={styles.headerTitle}>Abs & Cardio</h3>
              <p style={styles.headerSubtitle}>
                {absCompletedThisWeek}/{targetAbsPerWeek} abs · {cardioCompletedThisWeek}/{targetCardioPerWeek} cardio esta semana
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Week progress dots */}
            <div style={styles.weekProgress}>
              {[...Array(Math.max(targetAbsPerWeek, targetCardioPerWeek))].map((_, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.weekDot,
                    backgroundColor: i < absCompletedThisWeek + cardioCompletedThisWeek
                      ? colors.success
                      : colors.cardElevated,
                  }}
                />
              ))}
            </div>
            {expanded ? <ChevronUp size={20} color={colors.textSecondary} /> : <ChevronDown size={20} color={colors.textSecondary} />}
          </div>
        </div>

        {/* Expandable Content */}
        {expanded && (
          <div style={styles.content}>
            {/* Phase Override Note */}
            {phaseOverride?.notes && (
              <div style={styles.noCardioNote}>
                <p style={styles.noCardioText}>{phaseOverride.notes}</p>
              </div>
            )}

            {/* ABS Section */}
            {plan.absWorkouts.length > 0 && (
              <div style={styles.section}>
                <p style={styles.sectionTitle}>Abdominales ({plan.absWorkouts[0].frequency})</p>

                {plan.absWorkouts.map(workout => (
                  <AbsWorkoutCard
                    key={workout.id}
                    workout={workout}
                    isCompleted={isCompletedToday(
                      workout.id.includes('upper') ? 'abs-upper' :
                      workout.id.includes('lower') ? 'abs-lower' : 'abs-circuit'
                    )}
                    onComplete={() => markComplete(
                      workout.id.includes('upper') ? 'abs-upper' :
                      workout.id.includes('lower') ? 'abs-lower' : 'abs-circuit'
                    )}
                  />
                ))}
              </div>
            )}

            {/* CARDIO Section */}
            {plan.cardioWorkouts.length > 0 && !isCardioDisabled && (
              <div style={styles.section}>
                <p style={styles.sectionTitle}>Cardio</p>

                {plan.cardioWorkouts.map(workout => (
                  <CardioWorkoutCard
                    key={workout.id}
                    workout={workout}
                    isCompleted={isCompletedToday(
                      workout.type === 'aerobic' ? 'cardio-aerobic' : 'cardio-hiit'
                    )}
                    onComplete={() => markComplete(
                      workout.type === 'aerobic' ? 'cardio-aerobic' : 'cardio-hiit'
                    )}
                  />
                ))}
              </div>
            )}

            {/* Calves Section (Elysium) */}
            {plan.calves && (
              <div style={styles.section}>
                <p style={styles.sectionTitle}>Pantorrillas ({plan.calves.frequency})</p>
                <div style={styles.workoutCard}>
                  {plan.calves.exercises.map((ex, i) => (
                    <div key={i} style={i === plan.calves!.exercises.length - 1 ? styles.exerciseLast : styles.exercise}>
                      <div style={styles.exerciseBullet} />
                      <div style={styles.exerciseContent}>
                        <p style={styles.exerciseName}>{ex.name}</p>
                        <p style={styles.exerciseDetail}>{ex.sets} series × {ex.reps} reps</p>
                      </div>
                    </div>
                  ))}
                  {!isCompletedToday('calves') ? (
                    <button
                      style={{
                        ...styles.completeButton,
                        backgroundColor: colors.accent,
                        color: '#000',
                      }}
                      onClick={() => markComplete('calves')}
                    >
                      <Check size={16} />
                      Completar Pantorrillas
                    </button>
                  ) : (
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                      <span style={styles.completedBadge}>
                        <Check size={12} /> Completado hoy
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tips */}
            <div style={styles.tipBox}>
              <p style={styles.tipText}>
                💡 Puedes hacer abs antes o después de las pesas. El cardio puede ser en días separados o post-entrenamiento.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-component for Abs Workout
function AbsWorkoutCard({
  workout,
  isCompleted,
  onComplete
}: {
  workout: AbsWorkout;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [showExercises, setShowExercises] = useState(false);

  return (
    <div style={styles.workoutCard}>
      <div style={styles.workoutHeader}>
        <div>
          <h4 style={styles.workoutName}>{workout.name}</h4>
          <span style={styles.workoutMeta}>
            {workout.exercises.length} ejercicios · {workout.exercises[0]?.sets} series
          </span>
        </div>
        {isCompleted && (
          <span style={styles.completedBadge}>
            <Check size={12} /> Hecho
          </span>
        )}
      </div>

      <button
        style={{
          background: 'none',
          border: 'none',
          color: colors.accent,
          fontSize: '12px',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
        onClick={() => setShowExercises(!showExercises)}
      >
        {showExercises ? 'Ocultar' : 'Ver'} ejercicios
        {showExercises ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {showExercises && (
        <div style={styles.exerciseList}>
          {workout.exercises.map((ex, i) => (
            <div key={ex.id} style={i === workout.exercises.length - 1 ? styles.exerciseLast : styles.exercise}>
              <div style={styles.exerciseBullet} />
              <div style={styles.exerciseContent}>
                <p style={styles.exerciseName}>{ex.name}</p>
                <p style={styles.exerciseDetail}>
                  {ex.sets}×{ex.repsMin}-{ex.repsMax} · {ex.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isCompleted && (
        <button
          style={{
            ...styles.completeButton,
            backgroundColor: colors.abs,
            color: '#fff',
          }}
          onClick={onComplete}
        >
          <Check size={16} />
          Completar {workout.name}
        </button>
      )}
    </div>
  );
}

// Sub-component for Cardio Workout
function CardioWorkoutCard({
  workout,
  isCompleted,
  onComplete
}: {
  workout: CardioWorkout;
  isCompleted: boolean;
  onComplete: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={styles.workoutCard}>
      <div style={styles.workoutHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Flame size={18} color={workout.type === 'hiit' ? colors.danger : colors.warning} />
          <div>
            <h4 style={styles.workoutName}>{workout.name}</h4>
            <span style={styles.workoutMeta}>
              {workout.duration} min · {workout.frequency}x/semana · {workout.intensity}
            </span>
          </div>
        </div>
        {isCompleted && (
          <span style={styles.completedBadge}>
            <Check size={12} /> Hecho
          </span>
        )}
      </div>

      {workout.exercises && workout.exercises.length > 0 && (
        <>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: colors.accent,
              fontSize: '12px',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Ocultar' : 'Ver'} opciones
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showDetails && (
            <div style={styles.exerciseList}>
              {workout.exercises.map((ex, i) => (
                <div key={i} style={i === workout.exercises!.length - 1 ? styles.exerciseLast : styles.exercise}>
                  <div style={{ ...styles.exerciseBullet, backgroundColor: colors.cardio }} />
                  <p style={styles.exerciseName}>{ex}</p>
                </div>
              ))}
              {workout.notes && workout.notes.map((note, i) => (
                <p key={i} style={{ ...styles.exerciseDetail, marginTop: '4px', fontStyle: 'italic' }}>
                  • {note}
                </p>
              ))}
            </div>
          )}
        </>
      )}

      {!isCompleted && (
        <button
          style={{
            ...styles.completeButton,
            backgroundColor: workout.type === 'hiit' ? colors.danger : colors.warning,
            color: '#fff',
          }}
          onClick={onComplete}
        >
          <Clock size={16} />
          Iniciar {workout.duration} min
        </button>
      )}
    </div>
  );
}
