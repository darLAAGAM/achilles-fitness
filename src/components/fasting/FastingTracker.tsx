import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Timer, Play, StopCircle, CheckCircle2, Coffee, Utensils } from 'lucide-react';
import { useFastingStore } from '../../stores/fastingStore';
import type { FastingType } from '../../types';

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
};

const styles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: colors.card,
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '16px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconContainer: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  },
  subtitle: {
    fontSize: '13px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '2px',
  },
  statusBadge: {
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
  },
  timerContainer: {
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  timerValue: {
    fontSize: '48px',
    fontWeight: '700',
    color: colors.text,
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '-2px',
  },
  timerLabel: {
    fontSize: '14px',
    color: colors.textSecondary,
    marginTop: '4px',
  },
  progressContainer: {
    marginBottom: '20px',
  },
  progressBar: {
    height: '8px',
    backgroundColor: colors.cardElevated,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1s ease',
  },
  progressLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '8px',
    fontSize: '12px',
    color: colors.textSecondary,
  },
  button: {
    width: '100%',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 20px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  buttonPrimary: {
    backgroundColor: colors.accent,
    color: '#000',
  },
  buttonSecondary: {
    backgroundColor: colors.cardElevated,
    color: colors.text,
  },
  buttonDanger: {
    backgroundColor: `${colors.danger}20`,
    color: colors.danger,
  },
  buttonRow: {
    display: 'flex',
    gap: '12px',
  },
  fastingTypeSelector: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  fastingTypeButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  statsRow: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: `1px solid ${colors.cardElevated}`,
  },
  statCard: {
    flex: 1,
    textAlign: 'center' as const,
    padding: '12px',
    backgroundColor: colors.cardElevated,
    borderRadius: '12px',
  },
  statValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
  },
  statLabel: {
    fontSize: '11px',
    color: colors.textSecondary,
    marginTop: '4px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
};

const FASTING_LABELS: Record<FastingType, string> = {
  '12/12': '12:12',
  '16/8': '16:8',
  '18/6': '18:6',
  '20/4': '20:4',
  'warrior': 'Warrior',
};

const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const formatHours = (ms: number): string => {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${minutes}m`;
};

export function FastingTracker() {
  const {
    currentSession,
    preferredFastingType,
    startFast,
    endFast,
    setPreferredFastingType,
    getElapsedTime,
    getRemainingTime,
    getProgress,
    getWeekStats,
  } = useFastingStore();

  const [, setTick] = useState(0);

  // Update timer every second when fasting
  useEffect(() => {
    if (!currentSession) return;

    const interval = setInterval(() => {
      setTick(t => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSession]);

  const elapsed = getElapsedTime();
  const remaining = getRemainingTime();
  const progress = getProgress();
  const weekStats = getWeekStats();

  const isCompleted = currentSession && remaining === 0;

  const handleStartFast = () => {
    startFast(preferredFastingType);
  };

  const handleCompleteFast = () => {
    endFast(true);
  };

  const handleBreakFast = () => {
    endFast(false);
  };

  // Not fasting - show start UI
  if (!currentSession) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={{
              ...styles.iconContainer,
              backgroundColor: `${colors.accent}20`,
            }}>
              <Coffee size={22} color={colors.accent} />
            </div>
            <div>
              <h3 style={styles.title}>Ayuno Intermitente</h3>
              <p style={styles.subtitle}>Selecciona tu protocolo de ayuno</p>
            </div>
          </div>
          <div style={{
            ...styles.statusBadge,
            backgroundColor: `${colors.success}20`,
            color: colors.success,
          }}>
            <Utensils size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            Comiendo
          </div>
        </div>

        {/* Fasting type selector */}
        <div style={styles.fastingTypeSelector}>
          {(['16/8', '18/6', '20/4'] as FastingType[]).map(type => (
            <button
              key={type}
              onClick={() => setPreferredFastingType(type)}
              style={{
                ...styles.fastingTypeButton,
                backgroundColor: preferredFastingType === type ? colors.accent : colors.cardElevated,
                color: preferredFastingType === type ? '#000' : colors.text,
              }}
            >
              {FASTING_LABELS[type]}
            </button>
          ))}
        </div>

        <button
          style={{ ...styles.button, ...styles.buttonPrimary }}
          onClick={handleStartFast}
        >
          <Play size={20} />
          Comenzar Ayuno
        </button>

        {/* Week stats */}
        {(weekStats.completed > 0 || weekStats.broken > 0) && (
          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <p style={{ ...styles.statValue, color: colors.success }}>{weekStats.completed}</p>
              <p style={styles.statLabel}>Completados</p>
            </div>
            <div style={styles.statCard}>
              <p style={{ ...styles.statValue, color: weekStats.avgDuration > 0 ? colors.accent : colors.textSecondary }}>
                {weekStats.avgDuration > 0 ? formatHours(weekStats.avgDuration) : '-'}
              </p>
              <p style={styles.statLabel}>Promedio</p>
            </div>
            <div style={styles.statCard}>
              <p style={{ ...styles.statValue, color: weekStats.broken > 0 ? colors.danger : colors.textSecondary }}>
                {weekStats.broken}
              </p>
              <p style={styles.statLabel}>Rotos</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Currently fasting
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={{
            ...styles.iconContainer,
            backgroundColor: isCompleted ? `${colors.success}20` : `${colors.warning}20`,
          }}>
            <Timer size={22} color={isCompleted ? colors.success : colors.warning} />
          </div>
          <div>
            <h3 style={styles.title}>
              {isCompleted ? '¡Ayuno Completado!' : 'Ayunando'}
            </h3>
            <p style={styles.subtitle}>
              Protocolo {FASTING_LABELS[currentSession.fastingType]}
            </p>
          </div>
        </div>
        <div style={{
          ...styles.statusBadge,
          backgroundColor: isCompleted ? `${colors.success}20` : `${colors.warning}20`,
          color: isCompleted ? colors.success : colors.warning,
        }}>
          {isCompleted ? (
            <>
              <CheckCircle2 size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
              Listo
            </>
          ) : (
            <>
              <Timer size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
              Activo
            </>
          )}
        </div>
      </div>

      {/* Timer display */}
      <div style={styles.timerContainer}>
        <div style={{
          ...styles.timerValue,
          color: isCompleted ? colors.success : colors.text,
        }}>
          {isCompleted ? formatTime(elapsed) : formatTime(remaining)}
        </div>
        <div style={styles.timerLabel}>
          {isCompleted ? 'Tiempo total de ayuno' : 'Tiempo restante'}
        </div>
      </div>

      {/* Progress bar */}
      <div style={styles.progressContainer}>
        <div style={styles.progressBar}>
          <div style={{
            ...styles.progressFill,
            width: `${Math.min(100, progress)}%`,
            backgroundColor: isCompleted ? colors.success : colors.accent,
          }} />
        </div>
        <div style={styles.progressLabels}>
          <span>Transcurrido: {formatHours(elapsed)}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={styles.buttonRow}>
        {isCompleted ? (
          <button
            style={{ ...styles.button, ...styles.buttonPrimary, flex: 1 }}
            onClick={handleCompleteFast}
          >
            <CheckCircle2 size={20} />
            Registrar Ayuno
          </button>
        ) : (
          <>
            <button
              style={{ ...styles.button, ...styles.buttonDanger, flex: 1 }}
              onClick={handleBreakFast}
            >
              <StopCircle size={20} />
              Romper Ayuno
            </button>
            {progress >= 100 && (
              <button
                style={{ ...styles.button, ...styles.buttonPrimary, flex: 1 }}
                onClick={handleCompleteFast}
              >
                <CheckCircle2 size={20} />
                Completar
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
