import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp, Check, Play, Pause, ExternalLink, Clock, ChevronLeft, Info } from 'lucide-react';
import { mobilityRoutines, type MobilityRoutine } from '../../data/mobility-routines';
import { format, startOfWeek, addDays } from 'date-fns';

// ============================================
// COLORS & STYLES
// ============================================
const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  success: '#22c55e',
  mobility: '#06b6d4', // cyan/teal
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
    backgroundColor: `${colors.mobility}20`,
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
  routineCard: {
    backgroundColor: colors.cardElevated,
    borderRadius: '12px',
    padding: '14px',
    marginBottom: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid transparent',
    transition: 'border-color 0.2s',
  } as React.CSSProperties,
  routineCardActive: {
    border: `2px solid ${colors.mobility}`,
  } as React.CSSProperties,
  routineCardCompleted: {
    border: `2px solid ${colors.success}50`,
  } as React.CSSProperties,
  routineLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,
  routineIcon: {
    fontSize: '24px',
    flexShrink: 0,
  } as React.CSSProperties,
  routineInfo: {
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,
  routineName: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,
  routineMeta: {
    fontSize: '11px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '2px',
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
    flexShrink: 0,
  } as React.CSSProperties,
  // Routine detail view
  routineDetail: {
    padding: '0 16px 16px',
  } as React.CSSProperties,
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    background: 'none',
    border: 'none',
    color: colors.mobility,
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0',
    marginBottom: '12px',
  } as React.CSSProperties,
  routineHeader: {
    marginBottom: '12px',
  } as React.CSSProperties,
  routineTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  routineDescription: {
    fontSize: '13px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '4px',
    lineHeight: 1.4,
  } as React.CSSProperties,
  whenToDo: {
    fontSize: '12px',
    color: colors.mobility,
    margin: 0,
    marginTop: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  } as React.CSSProperties,
  exerciseCard: {
    backgroundColor: colors.cardElevated,
    borderRadius: '10px',
    marginBottom: '6px',
    overflow: 'hidden',
  } as React.CSSProperties,
  exerciseRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 12px',
    gap: '10px',
  } as React.CSSProperties,
  checkbox: {
    width: '22px',
    height: '22px',
    borderRadius: '6px',
    border: `2px solid ${colors.textSecondary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all 0.2s',
  } as React.CSSProperties,
  checkboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  } as React.CSSProperties,
  exerciseInfo: {
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,
  exerciseName: {
    fontSize: '13px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  } as React.CSSProperties,
  exerciseMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '2px',
  } as React.CSSProperties,
  exerciseDuration: {
    fontSize: '11px',
    color: colors.textSecondary,
  } as React.CSSProperties,
  perSideBadge: {
    fontSize: '10px',
    fontWeight: '600',
    color: colors.mobility,
    backgroundColor: `${colors.mobility}15`,
    padding: '1px 6px',
    borderRadius: '4px',
  } as React.CSSProperties,
  exerciseActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0,
  } as React.CSSProperties,
  actionButton: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  } as React.CSSProperties,
  descriptionPanel: {
    padding: '0 12px 12px',
    borderTop: `1px solid ${colors.card}`,
  } as React.CSSProperties,
  descriptionText: {
    fontSize: '12px',
    color: colors.textSecondary,
    lineHeight: 1.6,
    margin: 0,
    marginTop: '10px',
  } as React.CSSProperties,
  // Timer
  timerContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '16px',
    backgroundColor: colors.cardElevated,
    borderRadius: '12px',
    marginBottom: '12px',
  } as React.CSSProperties,
  timerDisplay: {
    fontSize: '48px',
    fontWeight: '700',
    color: colors.mobility,
    fontFamily: 'monospace',
    margin: 0,
  } as React.CSSProperties,
  timerLabel: {
    fontSize: '13px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '4px',
  } as React.CSSProperties,
  timerButtons: {
    display: 'flex',
    gap: '12px',
    marginTop: '12px',
  } as React.CSSProperties,
  timerButton: {
    padding: '10px 24px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  } as React.CSSProperties,
  progressBar: {
    width: '100%',
    height: '4px',
    backgroundColor: `${colors.mobility}20`,
    borderRadius: '2px',
    marginTop: '12px',
    overflow: 'hidden',
  } as React.CSSProperties,
  progressFill: {
    height: '100%',
    backgroundColor: colors.mobility,
    borderRadius: '2px',
    transition: 'width 0.3s ease',
  } as React.CSSProperties,
  completeAllButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: colors.success,
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '12px',
  } as React.CSSProperties,
  tipBox: {
    backgroundColor: `${colors.mobility}10`,
    borderRadius: '8px',
    padding: '10px 12px',
    marginTop: '12px',
  } as React.CSSProperties,
  tipText: {
    fontSize: '12px',
    color: colors.mobility,
    margin: 0,
    lineHeight: 1.4,
  } as React.CSSProperties,
};

// ============================================
// HELPERS
// ============================================
function getStorageKey(date: string) {
  return `mobility-completed-${date}`;
}

function getCompletedRoutines(date: string): string[] {
  try {
    const stored = localStorage.getItem(getStorageKey(date));
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCompletedRoutine(date: string, routineId: string) {
  const current = getCompletedRoutines(date);
  if (!current.includes(routineId)) {
    const updated = [...current, routineId];
    localStorage.setItem(getStorageKey(date), JSON.stringify(updated));
    return updated;
  }
  return current;
}

function formatDuration(seconds: number): string {
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return secs > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${mins} min`;
  }
  return `${seconds}s`;
}

// ============================================
// TIMER COMPONENT
// ============================================
function ExerciseTimer({ 
  duration, 
  exerciseName,
  isPerSide,
  onComplete 
}: { 
  duration: number; 
  exerciseName: string;
  isPerSide?: boolean;
  onComplete: () => void;
}) {
  const totalDuration = isPerSide ? duration * 2 : duration;
  const [timeLeft, setTimeLeft] = useState(totalDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSide, setCurrentSide] = useState<'right' | 'left'>('right');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            cleanup();
            setIsRunning(false);
            onComplete();
            return 0;
          }
          // Switch side indicator at halfway for perSide exercises
          if (isPerSide && prev === duration + 1) {
            setCurrentSide('left');
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      cleanup();
    }
    return cleanup;
  }, [isRunning, timeLeft, duration, isPerSide, onComplete, cleanup]);

  const progress = ((totalDuration - timeLeft) / totalDuration) * 100;
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div style={styles.timerContainer}>
      <p style={{ ...styles.timerLabel, marginBottom: '4px', marginTop: 0 }}>{exerciseName}</p>
      {isPerSide && (
        <p style={{ fontSize: '12px', color: colors.mobility, fontWeight: '600', margin: '0 0 8px' }}>
          {currentSide === 'right' ? '→ Lado derecho' : '← Lado izquierdo'}
        </p>
      )}
      <p style={styles.timerDisplay}>
        {mins}:{secs.toString().padStart(2, '0')}
      </p>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>
      <div style={styles.timerButtons}>
        <button
          style={{
            ...styles.timerButton,
            backgroundColor: isRunning ? `${colors.textSecondary}30` : colors.mobility,
            color: isRunning ? colors.text : '#000',
          }}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause size={16} /> : <Play size={16} />}
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
        {timeLeft === 0 && (
          <button
            style={{
              ...styles.timerButton,
              backgroundColor: colors.success,
              color: '#fff',
            }}
            onClick={onComplete}
          >
            <Check size={16} /> Hecho
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// INLINE EXERCISE TIMER (for expanded panel)
// ============================================
function InlineExerciseTimer({ duration, isPerSide, exerciseName: _exerciseName }: { duration: number; isPerSide?: boolean; exerciseName: string }) {
  const totalDuration = isPerSide ? duration * 2 : duration;
  const [timeLeft, setTimeLeft] = useState(totalDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSide, setCurrentSide] = useState<'right' | 'left'>('right');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          if (isPerSide && prev === duration + 1) {
            setCurrentSide('left');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning, timeLeft, duration, isPerSide]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const progress = ((totalDuration - timeLeft) / totalDuration) * 100;

  return (
    <div style={{ marginTop: '12px', padding: '12px', backgroundColor: `${colors.mobility}10`, borderRadius: '12px' }}>
      {isPerSide && isRunning && (
        <p style={{ fontSize: '12px', color: colors.mobility, fontWeight: '600', margin: '0 0 6px', textAlign: 'center' }}>
          {currentSide === 'right' ? '→ Lado derecho' : '← Lado izquierdo'}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => {
            if (timeLeft === 0) { setTimeLeft(totalDuration); setCurrentSide('right'); }
            setIsRunning(!isRunning);
          }}
          style={{
            width: '40px', height: '40px', borderRadius: '50%', border: 'none',
            backgroundColor: isRunning ? `${colors.textSecondary}30` : colors.mobility,
            color: isRunning ? colors.text : '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
          }}
        >
          {isRunning ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', color: colors.text, fontWeight: '600' }}>
              {mins}:{secs.toString().padStart(2, '0')}
            </span>
            <span style={{ fontSize: '11px', color: colors.textSecondary }}>
              {isPerSide ? `${duration}s/lado` : `${duration}s`}
            </span>
          </div>
          <div style={{ height: '4px', backgroundColor: `${colors.textSecondary}30`, borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', backgroundColor: colors.mobility, borderRadius: '2px', width: `${progress}%`, transition: 'width 1s linear' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================
export function MobilityTracker() {
  const [expanded, setExpanded] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState<MobilityRoutine | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [completedToday, setCompletedToday] = useState<string[]>([]);

  const today = format(new Date(), 'yyyy-MM-dd');
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

  // Load completed routines
  useEffect(() => {
    setCompletedToday(getCompletedRoutines(today));
  }, [today]);

  // Count weekly completions
  const weeklyCompletions = useMemo(() => {
    let count = 0;
    for (let i = 0; i < 7; i++) {
      const date = format(addDays(weekStart, i), 'yyyy-MM-dd');
      count += getCompletedRoutines(date).length;
    }
    return count;
  }, [weekStart, completedToday]); // eslint-disable-line react-hooks/exhaustive-deps

  const targetPerWeek = 3;

  const handleSelectRoutine = (routine: MobilityRoutine) => {
    setSelectedRoutine(routine);
    setCompletedExercises(new Set());
    setExpandedExercise(null);
    setActiveTimer(null);
  };

  const handleBack = () => {
    setSelectedRoutine(null);
    setCompletedExercises(new Set());
    setActiveTimer(null);
  };

  const toggleExerciseComplete = (index: number) => {
    setCompletedExercises(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleCompleteRoutine = () => {
    if (!selectedRoutine) return;
    const updated = saveCompletedRoutine(today, selectedRoutine.id);
    setCompletedToday(updated);
    setSelectedRoutine(null);
    setCompletedExercises(new Set());
    setActiveTimer(null);
  };

  const allExercisesComplete = selectedRoutine
    ? completedExercises.size === selectedRoutine.exercises.length
    : false;

  // Auto-complete routine when all exercises done
  useEffect(() => {
    if (allExercisesComplete && selectedRoutine && !completedToday.includes(selectedRoutine.id)) {
      // Don't auto-complete, let user confirm
    }
  }, [allExercisesComplete, selectedRoutine, completedToday]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header} onClick={() => { if (!selectedRoutine) setExpanded(!expanded); }}>
          <div style={styles.headerLeft}>
            <div style={styles.iconContainer}>
              <span style={{ fontSize: '20px' }}>🧘</span>
            </div>
            <div>
              <h3 style={styles.headerTitle}>Movilidad & Estiramientos</h3>
              <p style={styles.headerSubtitle}>
                {weeklyCompletions}/{targetPerWeek} rutinas esta semana
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={styles.weekProgress}>
              {[...Array(targetPerWeek)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.weekDot,
                    backgroundColor: i < weeklyCompletions
                      ? colors.success
                      : colors.cardElevated,
                  }}
                />
              ))}
            </div>
            {!selectedRoutine && (
              expanded
                ? <ChevronUp size={20} color={colors.textSecondary} />
                : <ChevronDown size={20} color={colors.textSecondary} />
            )}
          </div>
        </div>

        {/* Routine List */}
        {expanded && !selectedRoutine && (
          <div style={styles.content}>
            {mobilityRoutines.map(routine => {
              const isDoneToday = completedToday.includes(routine.id);
              return (
                <div
                  key={routine.id}
                  style={{
                    ...styles.routineCard,
                    ...(isDoneToday ? styles.routineCardCompleted : {}),
                  }}
                  onClick={() => handleSelectRoutine(routine)}
                >
                  <div style={styles.routineLeft}>
                    <span style={styles.routineIcon}>{routine.icon}</span>
                    <div style={styles.routineInfo}>
                      <p style={styles.routineName}>{routine.name}</p>
                      <p style={styles.routineMeta}>
                        {routine.duration} min · {routine.exercises.length} ejercicios
                      </p>
                    </div>
                  </div>
                  {isDoneToday ? (
                    <span style={styles.completedBadge}>
                      <Check size={12} /> Hecho
                    </span>
                  ) : (
                    <ChevronDown size={18} color={colors.textSecondary} style={{ transform: 'rotate(-90deg)' }} />
                  )}
                </div>
              );
            })}

            <div style={styles.tipBox}>
              <p style={styles.tipText}>
                💡 Mínimo 3 sesiones/semana de movilidad. Morning Routine diaria + 1 recovery post-entreno es ideal.
              </p>
            </div>
          </div>
        )}

        {/* Selected Routine Detail */}
        {expanded && selectedRoutine && (
          <div style={styles.routineDetail}>
            <button style={styles.backButton} onClick={handleBack}>
              <ChevronLeft size={16} />
              Volver a rutinas
            </button>

            <div style={styles.routineHeader}>
              <p style={styles.routineTitle}>
                {selectedRoutine.icon} {selectedRoutine.name}
              </p>
              <p style={styles.routineDescription}>
                {selectedRoutine.description}
              </p>
              <p style={styles.whenToDo}>
                <Clock size={12} /> {selectedRoutine.whenToDo}
              </p>
            </div>

            {/* Progress */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', color: colors.textSecondary }}>
                  {completedExercises.size}/{selectedRoutine.exercises.length} ejercicios
                </span>
                <span style={{ fontSize: '12px', color: colors.mobility, fontWeight: '600' }}>
                  {Math.round((completedExercises.size / selectedRoutine.exercises.length) * 100)}%
                </span>
              </div>
              <div style={styles.progressBar}>
                <div style={{
                  ...styles.progressFill,
                  width: `${(completedExercises.size / selectedRoutine.exercises.length) * 100}%`,
                }} />
              </div>
            </div>

            {/* Active Timer */}
            {activeTimer !== null && selectedRoutine.exercises[activeTimer] && (
              <ExerciseTimer
                key={activeTimer}
                duration={selectedRoutine.exercises[activeTimer].duration}
                exerciseName={selectedRoutine.exercises[activeTimer].name}
                isPerSide={selectedRoutine.exercises[activeTimer].isPerSide}
                onComplete={() => {
                  toggleExerciseComplete(activeTimer);
                  setActiveTimer(null);
                }}
              />
            )}

            {/* Exercise List */}
            {selectedRoutine.exercises.map((exercise, index) => {
              const isComplete = completedExercises.has(index);
              const isExpanded = expandedExercise === index;

              return (
                <div key={index} style={styles.exerciseCard}>
                  <div style={styles.exerciseRow}>
                    {/* Checkbox */}
                    <div
                      style={{
                        ...styles.checkbox,
                        ...(isComplete ? styles.checkboxChecked : {}),
                      }}
                      onClick={() => toggleExerciseComplete(index)}
                    >
                      {isComplete && <Check size={14} color="#fff" />}
                    </div>

                    {/* Info */}
                    <div style={styles.exerciseInfo}>
                      <p style={{
                        ...styles.exerciseName,
                        textDecoration: isComplete ? 'line-through' : 'none',
                        opacity: isComplete ? 0.6 : 1,
                      }}>
                        {exercise.name}
                      </p>
                      <div style={styles.exerciseMeta}>
                        <span style={styles.exerciseDuration}>
                          {exercise.reps ? `${exercise.reps} reps` : ''}{exercise.reps && exercise.duration ? ' · ' : ''}{formatDuration(exercise.duration)}
                          {exercise.isPerSide ? ' /lado' : ''}
                        </span>
                        {exercise.isPerSide && (
                          <span style={styles.perSideBadge}>Por lado</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={styles.exerciseActions}>
                      {/* Info toggle */}
                      <button
                        style={{
                          ...styles.actionButton,
                          backgroundColor: isExpanded ? `${colors.mobility}20` : `${colors.textSecondary}15`,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedExercise(isExpanded ? null : index);
                        }}
                      >
                        <Info size={14} color={isExpanded ? colors.mobility : colors.textSecondary} />
                      </button>

                      {/* Timer / Play */}
                      {exercise.duration > 0 && !isComplete && (
                        <button
                          style={{
                            ...styles.actionButton,
                            backgroundColor: activeTimer === index ? `${colors.mobility}30` : `${colors.mobility}15`,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTimer(activeTimer === index ? null : index);
                          }}
                        >
                          {activeTimer === index
                            ? <Pause size={14} color={colors.mobility} />
                            : <Play size={14} color={colors.mobility} />
                          }
                        </button>
                      )}

                      {/* YouTube */}
                      <a
                        href={exercise.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          ...styles.actionButton,
                          backgroundColor: '#ff000015',
                          textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={14} color="#ef4444" />
                      </a>
                    </div>
                  </div>

                  {/* Expanded Panel: Description + Video + Timer */}
                  {isExpanded && (
                    <div style={styles.descriptionPanel}>
                      <p style={styles.descriptionText}>
                        {exercise.description}
                      </p>
                      {/* Embedded YouTube Video */}
                      {exercise.youtubeUrl && (() => {
                        const match = exercise.youtubeUrl.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                        const videoId = match ? match[1] : null;
                        return videoId ? (
                          <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginTop: '10px', borderRadius: '12px', overflow: 'hidden' }}>
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={exercise.name}
                            />
                          </div>
                        ) : null;
                      })()}
                      {/* Inline Timer */}
                      {exercise.duration > 0 && (
                        <InlineExerciseTimer
                          duration={exercise.duration}
                          isPerSide={exercise.isPerSide}
                          exerciseName={exercise.name}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Complete Routine Button */}
            {allExercisesComplete && !completedToday.includes(selectedRoutine.id) && (
              <button
                style={styles.completeAllButton}
                onClick={handleCompleteRoutine}
              >
                <Check size={18} />
                Completar {selectedRoutine.name}
              </button>
            )}

            {completedToday.includes(selectedRoutine.id) && (
              <div style={{ textAlign: 'center', marginTop: '12px' }}>
                <span style={styles.completedBadge}>
                  <Check size={14} /> Rutina completada hoy
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
