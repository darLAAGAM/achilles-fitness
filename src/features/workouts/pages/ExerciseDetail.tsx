import { useState, useEffect } from 'react';
import { ChevronLeft, Info, Clock, ChevronDown, ChevronUp, AlertTriangle, Minus, Plus, Check, Trash2, Play, Pause, RotateCcw } from 'lucide-react';
import { useWorkoutStore } from '../../../stores/workoutStore';
import type { Exercise, ExerciseTemplate } from '../../../types';

interface ExerciseDetailProps {
  exercise: Exercise;
  template: ExerciseTemplate;
  onBack: () => void;
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
  } as React.CSSProperties,
  header: {
    position: 'sticky' as const,
    top: 0,
    backgroundColor: '#0a0a0a',
    borderBottom: '1px solid #2a2a2a',
    zIndex: 40,
    paddingTop: 'env(safe-area-inset-top)',
  } as React.CSSProperties,
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '56px',
    padding: '0 16px',
    maxWidth: '500px',
    margin: '0 auto',
  } as React.CSSProperties,
  backButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    marginLeft: '-8px',
    background: 'none',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  headerTitleContainer: {
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } as React.CSSProperties,
  headerSubtitle: {
    fontSize: '11px',
    color: '#888',
    margin: 0,
  } as React.CSSProperties,
  container: {
    padding: '16px 16px calc(env(safe-area-inset-bottom) + 100px) 16px',
    maxWidth: '500px',
    margin: '0 auto',
  } as React.CSSProperties,
  videoContainer: {
    marginBottom: '16px',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  } as React.CSSProperties,
  videoFrame: {
    width: '100%',
    aspectRatio: '16/9',
    border: 'none',
  } as React.CSSProperties,
  tagsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  tag: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 500,
  } as React.CSSProperties,
  tagHeavy: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    color: '#f87171',
    border: '1px solid rgba(239, 68, 68, 0.3)',
  } as React.CSSProperties,
  tagMedium: {
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    color: '#facc15',
    border: '1px solid rgba(234, 179, 8, 0.3)',
  } as React.CSSProperties,
  tagLight: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#4ade80',
    border: '1px solid rgba(34, 197, 94, 0.3)',
  } as React.CSSProperties,
  tagOptional: {
    backgroundColor: 'rgba(107, 114, 128, 0.2)',
    color: '#9ca3af',
    border: '1px solid rgba(107, 114, 128, 0.3)',
  } as React.CSSProperties,
  tagNeutral: {
    backgroundColor: '#2a2a2a',
    color: '#888',
  } as React.CSSProperties,
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '16px',
  } as React.CSSProperties,
  cardGold: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
  } as React.CSSProperties,
  cardWarning: {
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    border: '1px solid rgba(234, 179, 8, 0.3)',
  } as React.CSSProperties,
  cardSuccess: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
  } as React.CSSProperties,
  cardRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as React.CSSProperties,
  labelSmall: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  } as React.CSSProperties,
  valueGold: {
    fontWeight: 700,
    color: '#d4af37',
    margin: 0,
  } as React.CSSProperties,
  infoRow: {
    display: 'flex',
    gap: '8px',
  } as React.CSSProperties,
  infoIcon: {
    color: '#eab308',
    flexShrink: 0,
    marginTop: '2px',
  } as React.CSSProperties,
  techniqueButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
  } as React.CSSProperties,
  techniqueContent: {
    padding: '0 16px 16px 16px',
    borderTop: '1px solid #2a2a2a',
  } as React.CSSProperties,
  techniqueSection: {
    paddingTop: '12px',
  } as React.CSSProperties,
  techniqueLabel: {
    fontSize: '11px',
    fontWeight: 500,
    color: '#888',
    textTransform: 'uppercase' as const,
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  } as React.CSSProperties,
  techniqueList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  } as React.CSSProperties,
  techniqueItem: {
    fontSize: '14px',
    color: '#fff',
    display: 'flex',
    gap: '8px',
    marginBottom: '4px',
  } as React.CSSProperties,
  bulletGold: {
    color: '#d4af37',
  } as React.CSSProperties,
  bulletRed: {
    color: '#ef4444',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#888',
    marginBottom: '12px',
  } as React.CSSProperties,
  setRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: '#2a2a2a',
    marginBottom: '8px',
  } as React.CSSProperties,
  setRowPR: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
  } as React.CSSProperties,
  setNumber: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
    flexShrink: 0,
  } as React.CSSProperties,
  setNumberCompleted: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#4ade80',
  } as React.CSSProperties,
  setNumberWarmup: {
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    color: '#facc15',
  } as React.CSSProperties,
  setNumberPending: {
    backgroundColor: '#3a3a3a',
    color: '#fff',
  } as React.CSSProperties,
  setContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  } as React.CSSProperties,
  setText: {
    color: '#fff',
    fontWeight: 600,
    margin: 0,
  } as React.CSSProperties,
  setTextSecondary: {
    color: '#888',
  } as React.CSSProperties,
  prBadge: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#d4af37',
  } as React.CSSProperties,
  deleteButton: {
    padding: '8px',
    background: 'none',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  } as React.CSSProperties,
  adjustButton: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  numberInput: {
    width: '56px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
    border: 'none',
    textAlign: 'center' as const,
    color: '#fff',
    fontWeight: 600,
    fontSize: '14px',
  } as React.CSSProperties,
  inputLabel: {
    fontSize: '12px',
    color: '#888',
    width: '24px',
  } as React.CSSProperties,
  checkButton: {
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    backgroundColor: '#d4af37',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    cursor: 'pointer',
  } as React.CSSProperties,
  ghostButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#888',
    fontSize: '14px',
    cursor: 'pointer',
  } as React.CSSProperties,
  completeCard: {
    textAlign: 'center' as const,
  } as React.CSSProperties,
  completeTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#4ade80',
    margin: 0,
  } as React.CSSProperties,
  completeSubtitle: {
    fontSize: '14px',
    color: '#888',
    marginTop: '4px',
  } as React.CSSProperties,
  // Timer styles
  timerContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '16px',
    padding: '24px',
  } as React.CSSProperties,
  timerCircle: {
    position: 'relative' as const,
    width: '160px',
    height: '160px',
  } as React.CSSProperties,
  timerSvg: {
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)',
  } as React.CSSProperties,
  timerCenter: {
    position: 'absolute' as const,
    inset: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  timerTime: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#fff',
  } as React.CSSProperties,
  timerLabel: {
    fontSize: '12px',
    color: '#888',
    marginTop: '4px',
  } as React.CSSProperties,
  timerAdjust: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  } as React.CSSProperties,
  timerAdjustButton: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  timerControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  } as React.CSSProperties,
  timerResetButton: {
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    cursor: 'pointer',
  } as React.CSSProperties,
  timerPlayButton: {
    width: '64px',
    height: '64px',
    borderRadius: '32px',
    backgroundColor: '#d4af37',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    cursor: 'pointer',
  } as React.CSSProperties,
};

// Inline SetInput component
function SetInputInline({
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
}: {
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
}) {
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
      <div style={{
        ...styles.setRow,
        ...(isPersonalRecord ? styles.setRowPR : {})
      }}>
        <div style={{
          ...styles.setNumber,
          ...(isWarmup ? styles.setNumberWarmup : styles.setNumberCompleted)
        }}>
          {isWarmup ? 'W' : setNumber}
        </div>
        <div style={styles.setContent}>
          <span style={styles.setText}>{completedWeight} kg</span>
          <span style={styles.setTextSecondary}>×</span>
          <span style={styles.setText}>{completedReps} reps</span>
        </div>
        {isPersonalRecord && <span style={styles.prBadge}>PR!</span>}
        {onDelete && (
          <button onClick={onDelete} style={styles.deleteButton}>
            <Trash2 size={16} />
          </button>
        )}
      </div>
    );
  }

  return (
    <div style={styles.setRow}>
      <div style={{
        ...styles.setNumber,
        ...(isWarmup ? styles.setNumberWarmup : styles.setNumberPending)
      }}>
        {isWarmup ? 'W' : setNumber}
      </div>
      <div style={styles.inputRow}>
        <button onClick={() => adjustWeight(-2.5)} style={styles.adjustButton}>
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          style={styles.numberInput}
        />
        <button onClick={() => adjustWeight(2.5)} style={styles.adjustButton}>
          <Plus size={16} />
        </button>
        <span style={styles.inputLabel}>kg</span>
      </div>
      <div style={styles.inputRow}>
        <button onClick={() => adjustReps(-1)} style={styles.adjustButton}>
          <Minus size={16} />
        </button>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          style={{ ...styles.numberInput, width: '48px' }}
        />
        <button onClick={() => adjustReps(1)} style={styles.adjustButton}>
          <Plus size={16} />
        </button>
      </div>
      <button
        onClick={() => onComplete(weight, reps)}
        style={{
          ...styles.checkButton,
          opacity: weight === 0 || reps === 0 ? 0.4 : 1,
        }}
        disabled={weight === 0 || reps === 0}
      >
        <Check size={18} />
      </button>
    </div>
  );
}

// Inline RestTimer component
function RestTimerInline({
  defaultSeconds = 90,
  onComplete
}: {
  defaultSeconds?: number;
  onComplete?: () => void;
}) {
  const {
    restTimerActive,
    restTimeRemaining,
    startRestTimer,
    stopRestTimer,
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
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
      onComplete?.();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [restTimerActive, restTimeRemaining, tickRestTimer, stopRestTimer, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    startRestTimer(restTimeRemaining || defaultSeconds);
  };

  const handlePause = () => {
    stopRestTimer();
  };

  const handleReset = () => {
    stopRestTimer();
    startRestTimer(defaultSeconds);
  };

  const adjustTime = (delta: number) => {
    const newTime = Math.max(0, (restTimeRemaining || defaultSeconds) + delta);
    startRestTimer(newTime);
    stopRestTimer();
    startRestTimer(newTime);
  };

  const progress = restTimerActive
    ? ((defaultSeconds - restTimeRemaining) / defaultSeconds) * 100
    : 0;

  return (
    <div style={styles.timerContainer}>
      <div style={styles.timerCircle}>
        <svg style={styles.timerSvg}>
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#2a2a2a"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#d4af37"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={440}
            strokeDashoffset={440 - (440 * progress) / 100}
          />
        </svg>
        <div style={styles.timerCenter}>
          <span style={styles.timerTime}>
            {formatTime(restTimeRemaining || defaultSeconds)}
          </span>
          <span style={styles.timerLabel}>
            {restTimerActive ? 'Descansando' : 'Descanso'}
          </span>
        </div>
      </div>
      <div style={styles.timerAdjust}>
        <button onClick={() => adjustTime(-15)} style={styles.timerAdjustButton}>
          <Minus size={18} />
        </button>
        <span style={{ fontSize: '14px', color: '#888' }}>15s</span>
        <button onClick={() => adjustTime(15)} style={styles.timerAdjustButton}>
          <Plus size={18} />
        </button>
      </div>
      <div style={styles.timerControls}>
        <button onClick={handleReset} style={styles.timerResetButton}>
          <RotateCcw size={20} />
        </button>
        <button
          onClick={restTimerActive ? handlePause : handleStart}
          style={styles.timerPlayButton}
        >
          {restTimerActive ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
        </button>
      </div>
    </div>
  );
}

// Extract YouTube video ID
function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
  return match ? match[1] : null;
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

  const getIntensityStyle = (intensity: string) => {
    switch (intensity) {
      case 'heavy': return styles.tagHeavy;
      case 'medium': return styles.tagMedium;
      case 'light': return styles.tagLight;
      default: return styles.tagOptional;
    }
  };

  const videoId = exercise.youtubeUrl ? getYouTubeId(exercise.youtubeUrl) : null;

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <button onClick={onBack} style={styles.backButton}>
            <ChevronLeft size={24} />
          </button>
          <div style={styles.headerTitleContainer}>
            <h1 style={styles.headerTitle}>{exercise.name}</h1>
            <p style={styles.headerSubtitle}>
              {workingSets.length}/{template.targetSets} series
            </p>
          </div>
          <div style={{ width: '40px' }} />
        </div>
      </header>

      <div style={styles.container}>
        {/* Video tutorial */}
        {videoId && (
          <div style={styles.videoContainer}>
            <iframe
              style={styles.videoFrame}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Tutorial: ${exercise.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Exercise info tags */}
        <div style={styles.tagsRow}>
          <span style={{ ...styles.tag, ...getIntensityStyle(template.intensity) }}>
            {template.intensity.charAt(0).toUpperCase() + template.intensity.slice(1)}
          </span>
          <span style={{ ...styles.tag, ...styles.tagNeutral }}>
            {template.targetSets}x{template.targetRepsMin}-{template.targetRepsMax}
          </span>
          <span style={{ ...styles.tag, ...styles.tagNeutral }}>
            <Clock size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            {template.restSeconds}s
          </span>
        </div>

        {/* Personal record */}
        {personalRecord && (
          <div style={{ ...styles.card, ...styles.cardGold }}>
            <div style={styles.cardRow}>
              <span style={styles.labelSmall}>Récord personal</span>
              <span style={styles.valueGold}>
                {personalRecord.weight}kg × {personalRecord.reps}
              </span>
            </div>
          </div>
        )}

        {/* Notes from template */}
        {template.notes && (
          <div style={{ ...styles.card, ...styles.cardWarning }}>
            <div style={styles.infoRow}>
              <Info size={18} style={styles.infoIcon} />
              <p style={{ fontSize: '14px', color: '#fff', margin: 0 }}>{template.notes}</p>
            </div>
          </div>
        )}

        {/* Technique notes */}
        <div style={{ ...styles.card, padding: 0 }}>
          <button
            onClick={() => setShowTechnique(!showTechnique)}
            style={styles.techniqueButton}
          >
            <span style={{ fontWeight: 500 }}>Notas de técnica</span>
            {showTechnique ? <ChevronUp size={20} color="#888" /> : <ChevronDown size={20} color="#888" />}
          </button>
          {showTechnique && (
            <div style={styles.techniqueContent}>
              {exercise.techniqueNotes && exercise.techniqueNotes.length > 0 && (
                <div style={styles.techniqueSection}>
                  <h4 style={styles.techniqueLabel}>Ejecución correcta</h4>
                  <ul style={styles.techniqueList}>
                    {exercise.techniqueNotes.map((note, i) => (
                      <li key={i} style={styles.techniqueItem}>
                        <span style={styles.bulletGold}>•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {exercise.commonMistakes && exercise.commonMistakes.length > 0 && (
                <div style={{ ...styles.techniqueSection, marginTop: '12px' }}>
                  <h4 style={styles.techniqueLabel}>
                    <AlertTriangle size={12} style={{ color: '#ef4444' }} />
                    Errores comunes
                  </h4>
                  <ul style={styles.techniqueList}>
                    {exercise.commonMistakes.map((mistake, i) => (
                      <li key={i} style={styles.techniqueItem}>
                        <span style={styles.bulletRed}>✕</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rest Timer */}
        {showTimer && (
          <div style={styles.card}>
            <RestTimerInline
              defaultSeconds={template.restSeconds}
              onComplete={() => setShowTimer(false)}
            />
          </div>
        )}

        {/* Warmup sets */}
        {warmupSets.length > 0 && (
          <div style={{ marginBottom: '16px' }}>
            <h3 style={styles.sectionTitle}>Calentamiento</h3>
            {warmupSets.map((set) => (
              <SetInputInline
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
        )}

        {/* Working sets */}
        <div>
          <h3 style={styles.sectionTitle}>
            Series de trabajo ({workingSets.length}/{template.targetSets})
          </h3>

          {/* Completed sets */}
          {workingSets.map((set, index) => (
            <SetInputInline
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

          {/* Input for next set */}
          {!isComplete && !showTimer && (
            <SetInputInline
              setNumber={workingSets.length + 1}
              defaultWeight={lastWeight}
              defaultReps={template.targetRepsMin}
              onComplete={(weight, reps) => handleAddSet(weight, reps, false)}
            />
          )}

          {/* Add warmup set */}
          {!showTimer && (
            <button
              style={styles.ghostButton}
              onClick={() => handleAddSet(lastWeight * 0.5, 10, true)}
            >
              + Agregar serie de calentamiento
            </button>
          )}
        </div>

        {/* Complete message */}
        {isComplete && (
          <div style={{ ...styles.card, ...styles.cardSuccess, marginTop: '16px' }}>
            <div style={styles.completeCard}>
              <p style={styles.completeTitle}>¡Ejercicio completado!</p>
              <p style={styles.completeSubtitle}>
                Puedes agregar más series o continuar con el siguiente ejercicio.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
