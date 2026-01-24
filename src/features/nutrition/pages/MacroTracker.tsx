import { useState, useEffect } from 'react';
import { Plus, Utensils, Apple, Beef, Wheat, Droplet } from 'lucide-react';
import { Header, PageContainer } from '../../../components/layout';
import { Card, Button, Modal } from '../../../components/ui';
import { useUserStore } from '../../../stores/userStore';
import { db } from '../../../services/db/database';
import type { DailyNutritionLog, Meal, MealTime } from '../../../types';
import { format, startOfDay, endOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { v4 as uuid } from 'uuid';

// Sample meals based on AJAC guide
const sampleMeals: Meal[] = [
  {
    id: 'meal-1',
    name: 'Desayuno proteico',
    foods: [],
    calories: 450,
    protein: 35,
    carbs: 30,
    fat: 20
  },
  {
    id: 'meal-2',
    name: 'Almuerzo - Pollo y arroz',
    foods: [],
    calories: 650,
    protein: 50,
    carbs: 60,
    fat: 20
  },
  {
    id: 'meal-3',
    name: 'Cena - Carne y verduras',
    foods: [],
    calories: 550,
    protein: 45,
    carbs: 25,
    fat: 28
  },
  {
    id: 'meal-4',
    name: 'Snack - Batido proteico',
    foods: [],
    calories: 250,
    protein: 30,
    carbs: 15,
    fat: 5
  },
  {
    id: 'meal-5',
    name: 'Pre-entreno',
    foods: [],
    calories: 300,
    protein: 25,
    carbs: 40,
    fat: 5
  },
  {
    id: 'meal-6',
    name: 'Post-entreno',
    foods: [],
    calories: 400,
    protein: 40,
    carbs: 50,
    fat: 5
  }
];

export function MacroTracker() {
  const { user } = useUserStore();
  const [todayLog, setTodayLog] = useState<DailyNutritionLog | null>(null);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [selectedMealTime, setSelectedMealTime] = useState<MealTime>('breakfast');

  const targets = {
    calories: user?.dailyCalories || 2600,
    protein: user?.proteinTarget || 160,
    carbs: user?.carbTarget || 280,
    fat: user?.fatTarget || 70
  };

  useEffect(() => {
    loadTodayLog();
    seedMeals();
  }, []);

  const seedMeals = async () => {
    const existingMeals = await db.meals.count();
    if (existingMeals === 0) {
      await db.meals.bulkAdd(sampleMeals);
    }
  };

  const loadTodayLog = async () => {
    const today = new Date();
    const logs = await db.dailyNutritionLogs
      .where('date')
      .between(startOfDay(today), endOfDay(today))
      .toArray();

    if (logs.length > 0) {
      setTodayLog(logs[0]);
    }
  };

  const addMealToLog = async (meal: Meal) => {
    const today = new Date();

    let log = todayLog;
    if (!log) {
      log = {
        id: uuid(),
        date: today,
        meals: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
        caloriesVsTarget: 0,
        proteinVsTarget: 0
      };
    }

    const newMealEntry = {
      mealId: meal.id,
      mealTime: selectedMealTime,
      consumedAt: new Date(),
      portionMultiplier: 1
    };

    const updatedLog: DailyNutritionLog = {
      ...log,
      meals: [...log.meals, newMealEntry],
      totalCalories: log.totalCalories + meal.calories,
      totalProtein: log.totalProtein + meal.protein,
      totalCarbs: log.totalCarbs + meal.carbs,
      totalFat: log.totalFat + meal.fat,
      caloriesVsTarget: (log.totalCalories + meal.calories) - targets.calories,
      proteinVsTarget: (log.totalProtein + meal.protein) - targets.protein
    };

    await db.dailyNutritionLogs.put(updatedLog);
    setTodayLog(updatedLog);
    setShowAddMeal(false);
  };

  const consumed = {
    calories: todayLog?.totalCalories || 0,
    protein: todayLog?.totalProtein || 0,
    carbs: todayLog?.totalCarbs || 0,
    fat: todayLog?.totalFat || 0
  };

  const mealTimeLabels: Record<MealTime, string> = {
    breakfast: 'Desayuno',
    lunch: 'Almuerzo',
    dinner: 'Cena',
    snack: 'Snack',
    pre_workout: 'Pre-entreno',
    post_workout: 'Post-entreno'
  };

  const MacroRing = ({ current, target, label, color, icon: Icon }: {
    current: number;
    target: number;
    label: string;
    color: string;
    icon: typeof Beef;
  }) => {
    const percentage = Math.min((current / target) * 100, 100);
    const circumference = 2 * Math.PI * 35;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke="var(--color-border)"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="35"
              stroke={color}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Icon size={16} style={{ color }} />
            <span className="text-xs font-bold text-[var(--color-text)] mt-0.5">
              {Math.round(percentage)}%
            </span>
          </div>
        </div>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">{label}</p>
        <p className="text-xs font-medium text-[var(--color-text)]">
          {current}/{target}g
        </p>
      </div>
    );
  };

  return (
    <>
      <Header
        title="Nutrición"
        subtitle={format(new Date(), "EEEE, d 'de' MMMM", { locale: es })}
      />
      <PageContainer>
        {/* Calories summary */}
        <Card className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-[var(--color-text-secondary)]">Calorías hoy</p>
              <p className="text-3xl font-bold text-[var(--color-text)]">
                {consumed.calories}
                <span className="text-lg font-normal text-[var(--color-text-secondary)]">
                  /{targets.calories}
                </span>
              </p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              consumed.calories < targets.calories
                ? 'bg-[var(--color-warning)]/20 text-[var(--color-warning)]'
                : 'bg-[var(--color-success)]/20 text-[var(--color-success)]'
            }`}>
              {consumed.calories < targets.calories
                ? `Faltan ${targets.calories - consumed.calories}`
                : '¡Objetivo cumplido!'}
            </div>
          </div>

          {/* Calorie progress bar */}
          <div className="h-3 bg-[var(--color-surface-elevated)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500"
              style={{ width: `${Math.min((consumed.calories / targets.calories) * 100, 100)}%` }}
            />
          </div>
        </Card>

        {/* Macro rings */}
        <Card className="mb-4">
          <h3 className="font-semibold text-[var(--color-text)] mb-4">Macronutrientes</h3>
          <div className="flex justify-around">
            <MacroRing
              current={consumed.protein}
              target={targets.protein}
              label="Proteína"
              color="#ef4444"
              icon={Beef}
            />
            <MacroRing
              current={consumed.carbs}
              target={targets.carbs}
              label="Carbos"
              color="#f59e0b"
              icon={Wheat}
            />
            <MacroRing
              current={consumed.fat}
              target={targets.fat}
              label="Grasas"
              color="#3b82f6"
              icon={Droplet}
            />
          </div>
        </Card>

        {/* Meals today */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-[var(--color-text)]">Comidas de hoy</h3>
          <Button size="sm" onClick={() => setShowAddMeal(true)}>
            <Plus size={16} className="mr-1" />
            Agregar
          </Button>
        </div>

        {todayLog && todayLog.meals.length > 0 ? (
          <div className="space-y-2">
            {todayLog.meals.map((mealEntry, index) => {
              const meal = sampleMeals.find(m => m.id === mealEntry.mealId);
              if (!meal) return null;

              return (
                <Card key={index} padding="sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-elevated)] flex items-center justify-center">
                        <Utensils size={18} className="text-[var(--color-text-secondary)]" />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-text)] text-sm">{meal.name}</p>
                        <p className="text-xs text-[var(--color-text-secondary)]">
                          {mealTimeLabels[mealEntry.mealTime]} • {format(new Date(mealEntry.consumedAt), 'HH:mm')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[var(--color-text)] text-sm">{meal.calories} kcal</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        P:{meal.protein}g C:{meal.carbs}g G:{meal.fat}g
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card>
            <div className="text-center py-6">
              <Apple size={48} className="mx-auto text-[var(--color-text-secondary)] mb-3" />
              <p className="text-[var(--color-text)] font-medium">Sin comidas registradas</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Agrega tu primera comida del día
              </p>
            </div>
          </Card>
        )}

        {/* Add meal modal */}
        <Modal
          isOpen={showAddMeal}
          onClose={() => setShowAddMeal(false)}
          title="Agregar comida"
        >
          {/* Meal time selector */}
          <div className="mb-4">
            <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 block">
              ¿Cuándo comiste?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(mealTimeLabels) as MealTime[]).map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedMealTime(time)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedMealTime === time
                      ? 'bg-[var(--color-primary)] text-black'
                      : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]'
                  }`}
                >
                  {mealTimeLabels[time]}
                </button>
              ))}
            </div>
          </div>

          {/* Meal options */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--color-text-secondary)] mb-2 block">
              Selecciona una comida
            </label>
            {sampleMeals.map((meal) => (
              <button
                key={meal.id}
                onClick={() => addMealToLog(meal)}
                className="w-full p-3 rounded-xl bg-[var(--color-surface-elevated)] text-left active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[var(--color-text)]">{meal.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      P:{meal.protein}g • C:{meal.carbs}g • G:{meal.fat}g
                    </p>
                  </div>
                  <span className="font-semibold text-[var(--color-primary)]">{meal.calories} kcal</span>
                </div>
              </button>
            ))}
          </div>
        </Modal>
      </PageContainer>
    </>
  );
}
