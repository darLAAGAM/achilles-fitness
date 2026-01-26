import { useState, useEffect, useCallback } from 'react';
import { TrendingUp, Trophy, Scale, Camera, Ruler } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { db } from '../../../services/db/database';
import { useUserStore } from '../../../stores/userStore';
import type { ProgressEntry, WorkoutSet } from '../../../types';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { BodyMetrics } from './BodyMetrics';
import { PhotoGallery } from './PhotoGallery';

export function ProgressDashboard() {
  const { user } = useUserStore();
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([]);
  const [personalRecords, setPersonalRecords] = useState<{ exercise: string; weight: number; reps: number; date: Date }[]>([]);
  const [totalVolume, setTotalVolume] = useState(0);
  const [workoutsThisWeek, setWorkoutsThisWeek] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const loadProgressData = useCallback(async () => {
    // Load progress entries
    const entries = await db.progressEntries
      .orderBy('date')
      .reverse()
      .limit(30)
      .toArray();
    setProgressEntries(entries.reverse());

    // Load PRs from this month
    const thirtyDaysAgo = subDays(new Date(), 30);
    const recentSets = await db.workoutSets
      .where('completedAt')
      .above(thirtyDaysAgo)
      .filter(s => s.isPersonalRecord)
      .toArray();

    // Group by exercise and get max
    const prMap = new Map<string, WorkoutSet>();
    recentSets.forEach(set => {
      const existing = prMap.get(set.exerciseId);
      if (!existing || set.weight > existing.weight) {
        prMap.set(set.exerciseId, set);
      }
    });

    const exercises = await db.exercises.toArray();
    const prs = Array.from(prMap.values()).map(set => ({
      exercise: exercises.find(e => e.id === set.exerciseId)?.name || set.exerciseId,
      weight: set.weight,
      reps: set.reps,
      date: set.completedAt
    }));
    setPersonalRecords(prs.slice(0, 5));

    // Calculate total volume this week
    const weekStart = startOfDay(subDays(new Date(), 7));
    const weekSets = await db.workoutSets
      .where('completedAt')
      .above(weekStart)
      .toArray();
    const volume = weekSets.reduce((acc, set) => acc + set.volume, 0);
    setTotalVolume(volume);

    // Count workouts this week
    const weekSessions = await db.workoutSessions
      .where('date')
      .between(weekStart, endOfDay(new Date()))
      .filter(s => s.status === 'completed')
      .count();
    setWorkoutsThisWeek(weekSessions);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: load async data on mount */
  useEffect(() => {
    loadProgressData();
  }, [loadProgressData]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const chartData = progressEntries.map(entry => ({
    date: format(new Date(entry.date), 'dd/MM'),
    weight: entry.bodyweight
  })).filter(d => d.weight);

  const latestWeight = progressEntries.find(e => e.bodyweight)?.bodyweight;
  const previousWeight = progressEntries.slice(1).find(e => e.bodyweight)?.bodyweight;
  const weightChange = latestWeight && previousWeight ? latestWeight - previousWeight : 0;

  if (showMetrics) {
    return <BodyMetrics onBack={() => setShowMetrics(false)} />;
  }

  if (showPhotos) {
    return <PhotoGallery onBack={() => setShowPhotos(false)} />;
  }

  // Estilos reutilizables
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      paddingTop: 'env(safe-area-inset-top)',
      paddingBottom: 'calc(env(safe-area-inset-bottom) + 80px)',
    } as React.CSSProperties,
    header: {
      padding: '24px',
      paddingTop: '16px',
    } as React.CSSProperties,
    headerTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#fff',
      margin: 0,
      marginBottom: '4px',
    } as React.CSSProperties,
    headerSubtitle: {
      fontSize: '14px',
      color: '#888',
      margin: 0,
    } as React.CSSProperties,
    container: {
      padding: '0 24px 24px 24px',
    } as React.CSSProperties,
    grid2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
      marginBottom: '16px',
    } as React.CSSProperties,
    card: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '16px',
    } as React.CSSProperties,
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      marginBottom: '6px',
    } as React.CSSProperties,
    cardLabel: {
      fontSize: '11px',
      color: '#888',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    } as React.CSSProperties,
    cardValue: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#fff',
      margin: 0,
    } as React.CSSProperties,
    cardUnit: {
      fontSize: '12px',
      fontWeight: '400',
    } as React.CSSProperties,
    cardSubtext: {
      fontSize: '11px',
      color: '#888',
      marginTop: '4px',
    } as React.CSSProperties,
    positiveChange: {
      fontSize: '11px',
      color: '#22c55e',
      marginTop: '4px',
    } as React.CSSProperties,
    negativeChange: {
      fontSize: '11px',
      color: '#ef4444',
      marginTop: '4px',
    } as React.CSSProperties,
    iconPrimary: {
      color: '#d4af37',
      flexShrink: 0,
    } as React.CSSProperties,
    chartCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '16px',
    } as React.CSSProperties,
    chartTitle: {
      fontWeight: '600',
      color: '#fff',
      fontSize: '14px',
      marginBottom: '8px',
      margin: 0,
    } as React.CSSProperties,
    chartContainer: {
      height: '144px',
      marginLeft: '-8px',
    } as React.CSSProperties,
    recordsCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '16px',
    } as React.CSSProperties,
    recordsHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px',
    } as React.CSSProperties,
    recordsTitle: {
      fontWeight: '600',
      color: '#fff',
      margin: 0,
    } as React.CSSProperties,
    recordItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #2a2a2a',
    } as React.CSSProperties,
    recordItemLast: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: 'none',
    } as React.CSSProperties,
    recordName: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#fff',
      margin: 0,
    } as React.CSSProperties,
    recordDate: {
      fontSize: '12px',
      color: '#888',
      margin: 0,
    } as React.CSSProperties,
    recordWeight: {
      fontWeight: '700',
      color: '#d4af37',
      margin: 0,
    } as React.CSSProperties,
    buttonSecondary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2a2a2a',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 16px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      minHeight: '48px',
    } as React.CSSProperties,
    buttonPrimary: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d4af37',
      color: '#0a0a0a',
      border: 'none',
      borderRadius: '12px',
      padding: '14px 24px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px',
    } as React.CSSProperties,
    emptyCard: {
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      padding: '16px',
      marginTop: '16px',
    } as React.CSSProperties,
    emptyContent: {
      textAlign: 'center',
      padding: '24px 0',
    } as React.CSSProperties,
    emptyIcon: {
      color: '#888',
      marginBottom: '12px',
    } as React.CSSProperties,
    emptyTitle: {
      color: '#fff',
      fontWeight: '500',
      margin: 0,
    } as React.CSSProperties,
    emptySubtitle: {
      fontSize: '14px',
      color: '#888',
      marginTop: '4px',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Progreso</h1>
        <p style={styles.headerSubtitle}>Tu transformacion Achilles</p>
      </header>

      <div style={styles.container}>
        {/* Stats cards */}
        <div style={styles.grid2}>
          {/* Peso actual */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <Scale size={16} style={styles.iconPrimary} />
              <span style={styles.cardLabel}>Peso actual</span>
            </div>
            <p style={styles.cardValue}>
              {latestWeight || user?.bodyweight || '--'} <span style={styles.cardUnit}>kg</span>
            </p>
            {weightChange !== 0 && (
              <p style={weightChange > 0 ? styles.positiveChange : styles.negativeChange}>
                {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} kg
              </p>
            )}
          </div>

          {/* Volumen semanal */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <TrendingUp size={16} style={styles.iconPrimary} />
              <span style={styles.cardLabel}>Volumen semanal</span>
            </div>
            <p style={styles.cardValue}>
              {(totalVolume / 1000).toFixed(1)} <span style={styles.cardUnit}>t</span>
            </p>
            <p style={styles.cardSubtext}>
              {workoutsThisWeek} entrenamientos
            </p>
          </div>
        </div>

        {/* Weight chart */}
        {chartData.length > 1 && (
          <div style={styles.chartCard}>
            <h3 style={styles.chartTitle}>Peso corporal</h3>
            <div style={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                  <XAxis
                    dataKey="date"
                    stroke="#888"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    stroke="#888"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                    domain={['dataMin - 1', 'dataMax + 1']}
                    width={30}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#2a2a2a',
                      border: '1px solid #3a3a3a',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#fff',
                    }}
                    labelStyle={{ color: '#888' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#d4af37"
                    strokeWidth={2}
                    dot={{ fill: '#d4af37', strokeWidth: 0, r: 2.5 }}
                    activeDot={{ r: 4, fill: '#d4af37' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Personal Records */}
        {personalRecords.length > 0 && (
          <div style={styles.recordsCard}>
            <div style={styles.recordsHeader}>
              <Trophy size={18} style={styles.iconPrimary} />
              <h3 style={styles.recordsTitle}>Records recientes</h3>
            </div>
            <div>
              {personalRecords.map((pr, index) => (
                <div
                  key={index}
                  style={index === personalRecords.length - 1 ? styles.recordItemLast : styles.recordItem}
                >
                  <div>
                    <p style={styles.recordName}>{pr.exercise}</p>
                    <p style={styles.recordDate}>
                      {format(new Date(pr.date), "d 'de' MMM", { locale: es })}
                    </p>
                  </div>
                  <p style={styles.recordWeight}>
                    {pr.weight}kg x {pr.reps}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick actions */}
        <div style={styles.grid2}>
          <button style={styles.buttonSecondary} onClick={() => setShowMetrics(true)}>
            <Ruler size={16} style={{ marginRight: '6px', flexShrink: 0 }} />
            Medidas
          </button>
          <button style={styles.buttonSecondary} onClick={() => setShowPhotos(true)}>
            <Camera size={16} style={{ marginRight: '6px', flexShrink: 0 }} />
            Fotos
          </button>
        </div>

        {/* Empty state */}
        {progressEntries.length === 0 && (
          <div style={styles.emptyCard}>
            <div style={styles.emptyContent as React.CSSProperties}>
              <Scale size={48} style={{ ...styles.emptyIcon, display: 'block', margin: '0 auto 12px auto' }} />
              <p style={styles.emptyTitle}>Sin datos de progreso</p>
              <p style={styles.emptySubtitle}>
                Registra tu peso y medidas para ver tu evolucion
              </p>
              <button style={styles.buttonPrimary} onClick={() => setShowMetrics(true)}>
                Registrar progreso
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
