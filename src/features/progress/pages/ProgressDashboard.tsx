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
        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <Scale size={18} className="text-[var(--color-primary)]" />
              <span className="text-xs text-[var(--color-text-secondary)]">Peso actual</span>
            </div>
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {latestWeight || user?.bodyweight || '--'} <span className="text-sm font-normal">kg</span>
            </p>
            {weightChange !== 0 && (
              <p className={`text-xs mt-1 ${weightChange > 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                {weightChange > 0 ? '+' : ''}{weightChange.toFixed(1)} kg
              </p>
            )}
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} className="text-[var(--color-primary)]" />
              <span className="text-xs text-[var(--color-text-secondary)]">Volumen semanal</span>
            </div>
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {(totalVolume / 1000).toFixed(1)} <span className="text-sm font-normal">t</span>
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
              {workoutsThisWeek} entrenamientos
            </p>
          </Card>
        </div>

        {/* Weight chart */}
        {chartData.length > 1 && (
          <Card className="mb-4">
            <h3 className="font-semibold text-[var(--color-text)] mb-3">Peso corporal</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="date"
                    stroke="var(--color-text-secondary)"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--color-text-secondary)"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    domain={['dataMin - 1', 'dataMax + 1']}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px'
                    }}
                    labelStyle={{ color: 'var(--color-text-secondary)' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-primary)', strokeWidth: 0, r: 3 }}
                    activeDot={{ r: 5, fill: 'var(--color-primary)' }}
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

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => setShowMetrics(true)}>
            <Ruler size={18} className="mr-2" />
            Medidas
          </Button>
          <Button variant="secondary" onClick={() => {}}>
            <Camera size={18} className="mr-2" />
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
