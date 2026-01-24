import { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';
import { Plus, Utensils, Apple, Beef, Wheat, Droplet, X } from 'lucide-react';
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

// Estilos base
const styles: Record<string, CSSProperties> = {
  page: {
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    paddingLeft: 'env(safe-area-inset-left)',
    paddingRight: 'env(safe-area-inset-right)',
  },
  header: {
    padding: '24px',
    paddingTop: 'calc(env(safe-area-inset-top) + 16px)',
  },
  headerTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#fff',
    margin: 0,
    marginBottom: '4px',
  },
  headerSubtitle: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
    textTransform: 'capitalize' as const,
  },
  container: {
    padding: '0 24px 24px 24px',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '16px',
  },
  cardSmall: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    padding: '12px 16px',
    marginBottom: '8px',
  },
  caloriesHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  caloriesLabel: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
    marginBottom: '4px',
  },
  caloriesValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#fff',
    margin: 0,
  },
  caloriesTarget: {
    fontSize: '18px',
    fontWeight: '400',
    color: '#888',
  },
  statusBadge: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
  },
  statusBadgeWarning: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    color: '#f59e0b',
  },
  statusBadgeSuccess: {
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    color: '#22c55e',
  },
  progressBarContainer: {
    height: '12px',
    backgroundColor: '#2a2a2a',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#d4af37',
    borderRadius: '6px',
    transition: 'width 0.5s ease',
  },
  macrosTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    margin: 0,
    marginBottom: '16px',
  },
  macrosContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  macroItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  macroRingContainer: {
    position: 'relative' as const,
    width: '76px',
    height: '76px',
  },
  macroRingCenter: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },
  macroPercentage: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#fff',
    marginTop: '2px',
  },
  macroLabel: {
    fontSize: '11px',
    color: '#888',
    marginTop: '4px',
  },
  macroValues: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#fff',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#fff',
    margin: 0,
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#d4af37',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  mealItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mealLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  mealIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#2a2a2a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    margin: 0,
    marginBottom: '2px',
  },
  mealTime: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
  },
  mealCalories: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    margin: 0,
    marginBottom: '2px',
    textAlign: 'right' as const,
  },
  mealMacros: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
    textAlign: 'right' as const,
  },
  emptyState: {
    textAlign: 'center' as const,
    padding: '24px 0',
  },
  emptyIcon: {
    color: '#888',
    marginBottom: '12px',
  },
  emptyTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    margin: 0,
    marginBottom: '4px',
  },
  emptySubtitle: {
    fontSize: '14px',
    color: '#888',
    margin: 0,
  },
  // Modal styles
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 'env(safe-area-inset-bottom)',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: '24px 24px 0 0',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    padding: '24px',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#fff',
    margin: 0,
  },
  modalClose: {
    backgroundColor: '#2a2a2a',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  formLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#888',
    display: 'block',
    marginBottom: '8px',
  },
  mealTimeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '8px',
    marginBottom: '20px',
  },
  mealTimeButton: {
    padding: '10px 12px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  mealTimeButtonActive: {
    backgroundColor: '#d4af37',
    color: '#000',
  },
  mealTimeButtonInactive: {
    backgroundColor: '#2a2a2a',
    color: '#888',
  },
  mealOption: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    backgroundColor: '#2a2a2a',
    border: 'none',
    textAlign: 'left' as const,
    cursor: 'pointer',
    marginBottom: '8px',
    transition: 'transform 0.1s ease',
  },
  mealOptionContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mealOptionName: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#fff',
    margin: 0,
    marginBottom: '4px',
  },
  mealOptionMacros: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
  },
  mealOptionCalories: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#d4af37',
  },
};

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
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const size = 76;
    const center = size / 2;

    return (
      <div style={styles.macroItem}>
        <div style={styles.macroRingContainer}>
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            style={{ transform: 'rotate(-90deg)' }}
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="#2a2a2a"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke={color}
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div style={styles.macroRingCenter}>
            <Icon size={14} style={{ color }} />
            <span style={styles.macroPercentage}>
              {Math.round(percentage)}%
            </span>
          </div>
        </div>
        <p style={styles.macroLabel}>{label}</p>
        <p style={styles.macroValues}>
          {current}/{target}g
        </p>
      </div>
    );
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Nutricion</h1>
        <p style={styles.headerSubtitle}>
          {format(new Date(), "EEEE, d 'de' MMMM", { locale: es })}
        </p>
      </div>

      {/* Content */}
      <div style={styles.container}>
        {/* Calories summary */}
        <div style={styles.card}>
          <div style={styles.caloriesHeader}>
            <div>
              <p style={styles.caloriesLabel}>Calorias hoy</p>
              <p style={styles.caloriesValue}>
                {consumed.calories}
                <span style={styles.caloriesTarget}>
                  /{targets.calories}
                </span>
              </p>
            </div>
            <div style={{
              ...styles.statusBadge,
              ...(consumed.calories < targets.calories
                ? styles.statusBadgeWarning
                : styles.statusBadgeSuccess)
            }}>
              {consumed.calories < targets.calories
                ? `Faltan ${targets.calories - consumed.calories}`
                : 'Objetivo cumplido!'}
            </div>
          </div>

          {/* Calorie progress bar */}
          <div style={styles.progressBarContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: `${Math.min((consumed.calories / targets.calories) * 100, 100)}%`
              }}
            />
          </div>
        </div>

        {/* Macro rings */}
        <div style={styles.card}>
          <h3 style={styles.macrosTitle}>Macronutrientes</h3>
          <div style={styles.macrosContainer}>
            <MacroRing
              current={consumed.protein}
              target={targets.protein}
              label="Proteina"
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
        </div>

        {/* Meals today */}
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Comidas de hoy</h3>
          <button style={styles.addButton} onClick={() => setShowAddMeal(true)}>
            <Plus size={16} />
            Agregar
          </button>
        </div>

        {todayLog && todayLog.meals.length > 0 ? (
          <div>
            {todayLog.meals.map((mealEntry, index) => {
              const meal = sampleMeals.find(m => m.id === mealEntry.mealId);
              if (!meal) return null;

              return (
                <div key={index} style={styles.cardSmall}>
                  <div style={styles.mealItem}>
                    <div style={styles.mealLeft}>
                      <div style={styles.mealIcon}>
                        <Utensils size={18} style={{ color: '#888' }} />
                      </div>
                      <div>
                        <p style={styles.mealName}>{meal.name}</p>
                        <p style={styles.mealTime}>
                          {mealTimeLabels[mealEntry.mealTime]} - {format(new Date(mealEntry.consumedAt), 'HH:mm')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p style={styles.mealCalories}>{meal.calories} kcal</p>
                      <p style={styles.mealMacros}>
                        P:{meal.protein}g C:{meal.carbs}g G:{meal.fat}g
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={styles.card}>
            <div style={styles.emptyState}>
              <Apple size={48} style={styles.emptyIcon} />
              <p style={styles.emptyTitle}>Sin comidas registradas</p>
              <p style={styles.emptySubtitle}>
                Agrega tu primera comida del dia
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add meal modal */}
      {showAddMeal && (
        <div style={styles.modalOverlay} onClick={() => setShowAddMeal(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Agregar comida</h2>
              <button style={styles.modalClose} onClick={() => setShowAddMeal(false)}>
                <X size={18} style={{ color: '#fff' }} />
              </button>
            </div>

            {/* Meal time selector */}
            <div style={{ marginBottom: '20px' }}>
              <label style={styles.formLabel}>
                Cuando comiste?
              </label>
              <div style={styles.mealTimeGrid}>
                {(Object.keys(mealTimeLabels) as MealTime[]).map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedMealTime(time)}
                    style={{
                      ...styles.mealTimeButton,
                      ...(selectedMealTime === time
                        ? styles.mealTimeButtonActive
                        : styles.mealTimeButtonInactive)
                    }}
                  >
                    {mealTimeLabels[time]}
                  </button>
                ))}
              </div>
            </div>

            {/* Meal options */}
            <div>
              <label style={styles.formLabel}>
                Selecciona una comida
              </label>
              {sampleMeals.map((meal) => (
                <button
                  key={meal.id}
                  onClick={() => addMealToLog(meal)}
                  style={styles.mealOption}
                >
                  <div style={styles.mealOptionContent}>
                    <div>
                      <p style={styles.mealOptionName}>{meal.name}</p>
                      <p style={styles.mealOptionMacros}>
                        P:{meal.protein}g - C:{meal.carbs}g - G:{meal.fat}g
                      </p>
                    </div>
                    <span style={styles.mealOptionCalories}>{meal.calories} kcal</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
