import { useState, useEffect } from 'react';
import { TrendingUp, Trophy, Scale, Camera, Ruler } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Card, Button } from '../../../components/ui';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { db } from '../../../services/db/database';
import { useUserStore } from '../../../stores/userStore';
import type { ProgressEntry, WorkoutSet } from '../../../types';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { BodyMetrics } from './BodyMetrics';

export function ProgressDashboard() {
  const { user } = useUserStore();
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>([]);
  const [personalRecords, setPersonalRecords] = useState<{ exercise: string; weight: number; reps: number; date: Date }[]>([]);
  const [totalVolume, setTotalVolume] = useState(0);
  const [workoutsThisWeek, setWorkoutsThisWeek] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    loadProgressData();
  }, []);

  const loadProgressData = async () => {
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
  };

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

  return (
    <>
      <Header title="Progreso" subtitle="Tu transformación Achilles" />
      <PageContainer>
        {/* Stats cards - optimized for iPhone 17 Pro (402px width) */}
        <div className="grid grid-cols-2 gap-3 grid-responsive-2 mb-4">
          <Card className="card-responsive">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Scale size={16} className="text-[var(--color-primary)] shrink-0" />
              <span className="text-[11px] text-[var(--color-text-secondary)] truncate">Peso actual</span>
            </div>
            <p className="text-xl font-bold text-[var(--color-text)]">
              {latestWeight || user?.bodyweight || '--'} <span className="text-xs font-normal">kg</span>
            </p>
            {weightChange !== 0 && (
              <p className={`text-[11px] mt-0.5 ${weightChange > 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} kg
              </p>
            )}
          </Card>

          <Card className="card-responsive">
            <div className="flex items-center gap-1.5 mb-1.5">
              <TrendingUp size={16} className="text-[var(--color-primary)] shrink-0" />
              <span className="text-[11px] text-[var(--color-text-secondary)] truncate">Volumen semanal</span>
            </div>
            <p className="text-xl font-bold text-[var(--color-text)]">
              {(totalVolume / 1000).toFixed(1)} <span className="text-xs font-normal">t</span>
            </p>
            <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
              {workoutsThisWeek} entrenamientos
            </p>
          </Card>
        </div>

        {/* Weight chart - responsive for iPhone 17 Pro */}
        {chartData.length > 1 && (
          <Card className="mb-4 card-responsive">
            <h3 className="font-semibold text-[var(--color-text)] text-sm mb-2">Peso corporal</h3>
            <div className="h-36 chart-responsive -ml-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                  <XAxis
                    dataKey="date"
                    stroke="var(--color-text-secondary)"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                    interval="preserveStartEnd"
                  />
                  <YAxis
                    stroke="var(--color-text-secondary)"
                    fontSize={9}
                    tickLine={false}
                    axisLine={false}
                    domain={['dataMin - 1', 'dataMax + 1']}
                    width={30}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    labelStyle={{ color: 'var(--color-text-secondary)' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-primary)', strokeWidth: 0, r: 2.5 }}
                    activeDot={{ r: 4, fill: 'var(--color-primary)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        )}

        {/* Personal Records */}
        {personalRecords.length > 0 && (
          <Card className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={18} className="text-[var(--color-primary)]" />
              <h3 className="font-semibold text-[var(--color-text)]">Récords recientes</h3>
            </div>
            <div className="space-y-2">
              {personalRecords.map((pr, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{pr.exercise}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {format(new Date(pr.date), "d 'de' MMM", { locale: es })}
                    </p>
                  </div>
                  <p className="font-bold text-[var(--color-primary)]">
                    {pr.weight}kg × {pr.reps}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Quick actions - touch-friendly for iPhone 17 Pro */}
        <div className="grid grid-cols-2 gap-3 grid-responsive-2">
          <Button variant="secondary" className="touch-target text-sm" onClick={() => setShowMetrics(true)}>
            <Ruler size={16} className="mr-1.5 shrink-0" />
            Medidas
          </Button>
          <Button variant="secondary" className="touch-target text-sm" onClick={() => {}}>
            <Camera size={16} className="mr-1.5 shrink-0" />
            Fotos
          </Button>
        </div>

        {/* Empty state */}
        {progressEntries.length === 0 && (
          <Card className="mt-4">
            <div className="text-center py-6">
              <Scale size={48} className="mx-auto text-[var(--color-text-secondary)] mb-3" />
              <p className="text-[var(--color-text)] font-medium">Sin datos de progreso</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Registra tu peso y medidas para ver tu evolución
              </p>
              <Button className="mt-4" onClick={() => setShowMetrics(true)}>
                Registrar progreso
              </Button>
            </div>
          </Card>
        )}
      </PageContainer>
    </>
  );
}
