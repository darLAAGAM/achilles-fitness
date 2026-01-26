import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Utensils, Clock, ChevronDown, ChevronUp, RefreshCw, Check } from 'lucide-react';
import { useUserStore } from '../../../stores/userStore';
import {
  generateWeeklyMealPlan,
  generateShoppingList,
  type Recipe,
  type ShoppingItem,
} from '../../../data/meal-plans';
import { foodCategories, getFoodById } from '../../../data/foods';

interface MealPlannerProps {
  onClose: () => void;
}

const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  success: '#22c55e',
  protein: '#ef4444',
  carbs: '#f59e0b',
  fat: '#3b82f6',
};

const styles = {
  page: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.background,
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    padding: '16px 20px',
    paddingTop: 'calc(env(safe-area-inset-top) + 16px)',
    borderBottom: `1px solid ${colors.cardElevated}`,
  },
  headerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: colors.accent,
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  },
  refreshButton: {
    background: 'none',
    border: 'none',
    color: colors.textSecondary,
    padding: '8px',
    cursor: 'pointer',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
  },
  tab: {
    flex: 1,
    padding: '10px 16px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: '16px 20px',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
  },
  daySelector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: '12px',
    padding: '12px 16px',
    marginBottom: '16px',
  },
  dayButton: {
    background: 'none',
    border: 'none',
    color: colors.accent,
    padding: '8px',
    cursor: 'pointer',
  },
  dayName: {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  },
  dayTotals: {
    fontSize: '12px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '4px',
  },
  mealCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    marginBottom: '12px',
    overflow: 'hidden',
  },
  mealHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    cursor: 'pointer',
  },
  mealHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  mealIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
  },
  mealTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
  },
  mealMacros: {
    fontSize: '12px',
    color: colors.textSecondary,
    margin: 0,
    marginTop: '2px',
  },
  mealCalories: {
    fontSize: '16px',
    fontWeight: '700',
    color: colors.accent,
  },
  mealContent: {
    padding: '0 16px 16px',
    borderTop: `1px solid ${colors.cardElevated}`,
  },
  ingredientsList: {
    marginTop: '12px',
  },
  ingredient: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: `1px solid ${colors.cardElevated}`,
    fontSize: '13px',
  },
  ingredientLast: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    fontSize: '13px',
  },
  ingredientName: {
    color: colors.text,
  },
  ingredientAmount: {
    color: colors.textSecondary,
  },
  instructions: {
    marginTop: '12px',
    padding: '12px',
    backgroundColor: colors.cardElevated,
    borderRadius: '8px',
  },
  instructionsTitle: {
    fontSize: '12px',
    fontWeight: '600',
    color: colors.accent,
    marginBottom: '8px',
  },
  instructionStep: {
    fontSize: '13px',
    color: colors.textSecondary,
    marginBottom: '6px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  stepNumber: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: colors.accent,
    color: '#000',
    fontSize: '10px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  prepTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: colors.textSecondary,
    marginTop: '8px',
  },
  // Shopping list styles
  shoppingCategory: {
    marginBottom: '20px',
  },
  shoppingCategoryTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.accent,
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  shoppingItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    backgroundColor: colors.card,
    borderRadius: '10px',
    marginBottom: '6px',
  },
  shoppingItemLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  shoppingCheckbox: {
    width: '22px',
    height: '22px',
    borderRadius: '6px',
    border: `2px solid ${colors.textSecondary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  shoppingCheckboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  shoppingItemName: {
    fontSize: '14px',
    color: colors.text,
  },
  shoppingItemAmount: {
    fontSize: '13px',
    color: colors.textSecondary,
  },
  summaryCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '16px',
  },
  summaryTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: colors.text,
    marginBottom: '12px',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
  },
  summaryItem: {
    textAlign: 'center' as const,
    padding: '8px',
    backgroundColor: colors.cardElevated,
    borderRadius: '8px',
  },
  summaryValue: {
    fontSize: '16px',
    fontWeight: '700',
    margin: 0,
  },
  summaryLabel: {
    fontSize: '10px',
    color: colors.textSecondary,
    marginTop: '2px',
  },
};

const mealTypeInfo = {
  breakfast: { name: 'Desayuno', icon: '🌅', color: '#f59e0b' },
  lunch: { name: 'Almuerzo', icon: '☀️', color: '#22c55e' },
  dinner: { name: 'Cena', icon: '🌙', color: '#3b82f6' },
  snack: { name: 'Snack', icon: '🍎', color: '#a855f7' },
};

export function MealPlanner({ onClose }: MealPlannerProps) {
  const { user } = useUserStore();
  const [activeTab, setActiveTab] = useState<'meals' | 'shopping'>('meals');
  const [currentDayIndex, setCurrentDayIndex] = useState(new Date().getDay());
  const [expandedMeals, setExpandedMeals] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('achilles-shopping-checked');
    return saved ? JSON.parse(saved) : [];
  });

  const mealPlan = useMemo(() => {
    try {
      const phase = user?.currentPhase || 'maintain';
      return generateWeeklyMealPlan(
        user?.dailyCalories || 2500,
        user?.proteinTarget || 160,
        user?.carbTarget || 280,
        user?.fatTarget || 70,
        phase
      );
    } catch {
      return null;
    }
  }, [user]);

  const shoppingList = useMemo(() => {
    if (!mealPlan) return [];
    return generateShoppingList(mealPlan);
  }, [mealPlan]);

  const currentDay = mealPlan?.days?.[currentDayIndex];

  const toggleExpanded = (mealId: string) => {
    setExpandedMeals(prev =>
      prev.includes(mealId) ? prev.filter(id => id !== mealId) : [...prev, mealId]
    );
  };

  const toggleChecked = (itemId: string) => {
    const newChecked = checkedItems.includes(itemId)
      ? checkedItems.filter(id => id !== itemId)
      : [...checkedItems, itemId];
    setCheckedItems(newChecked);
    localStorage.setItem('achilles-shopping-checked', JSON.stringify(newChecked));
  };

  const clearChecked = () => {
    setCheckedItems([]);
    localStorage.removeItem('achilles-shopping-checked');
  };

  const nextDay = () => {
    setCurrentDayIndex(prev => (prev + 1) % 7);
  };

  const prevDay = () => {
    setCurrentDayIndex(prev => (prev - 1 + 7) % 7);
  };

  const renderMealCard = (recipe: Recipe, mealType: keyof typeof mealTypeInfo) => {
    const info = mealTypeInfo[mealType];
    const isExpanded = expandedMeals.includes(recipe.id);

    return (
      <div key={recipe.id} style={styles.mealCard}>
        <div style={styles.mealHeader} onClick={() => toggleExpanded(recipe.id)}>
          <div style={styles.mealHeaderLeft}>
            <div style={{ ...styles.mealIcon, backgroundColor: `${info.color}20` }}>
              {info.icon}
            </div>
            <div>
              <p style={styles.mealTitle}>{recipe.name}</p>
              <p style={styles.mealMacros}>
                P:{recipe.protein}g · C:{recipe.carbs}g · G:{recipe.fat}g
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={styles.mealCalories}>{recipe.calories} kcal</span>
            {isExpanded ? <ChevronUp size={20} color={colors.textSecondary} /> : <ChevronDown size={20} color={colors.textSecondary} />}
          </div>
        </div>

        {isExpanded && (
          <div style={styles.mealContent}>
            {recipe.description && (
              <p style={{ fontSize: '13px', color: colors.textSecondary, margin: '12px 0' }}>
                {recipe.description}
              </p>
            )}

            <div style={styles.ingredientsList}>
              <p style={{ fontSize: '12px', fontWeight: '600', color: colors.accent, marginBottom: '8px' }}>
                Ingredientes:
              </p>
              {recipe.ingredients.map((ing, idx) => {
                const food = getFoodById(ing.foodId);
                if (!food) return null;
                return (
                  <div key={idx} style={idx === recipe.ingredients.length - 1 ? styles.ingredientLast : styles.ingredient}>
                    <span style={styles.ingredientName}>{food.name}</span>
                    <span style={styles.ingredientAmount}>{ing.grams}g</span>
                  </div>
                );
              })}
            </div>

            {recipe.instructions && recipe.instructions.length > 0 && (
              <div style={styles.instructions}>
                <p style={styles.instructionsTitle}>Preparación:</p>
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} style={styles.instructionStep}>
                    <span style={styles.stepNumber}>{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            )}

            {recipe.prepTimeMinutes && (
              <div style={styles.prepTime}>
                <Clock size={14} />
                {recipe.prepTimeMinutes} min de preparación
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Group shopping list by category
  const groupedShopping = useMemo(() => {
    const groups: Record<string, ShoppingItem[]> = {};
    for (const item of shoppingList) {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    }
    return groups;
  }, [shoppingList]);

  // Loading state
  if (!currentDay || !currentDay.meals) {
    return (
      <div style={styles.page}>
        <div style={styles.header}>
          <div style={styles.headerTop}>
            <button style={styles.backButton} onClick={onClose}>
              <ChevronLeft size={20} />
              Volver
            </button>
            <h2 style={styles.headerTitle}>Plan de Comidas</h2>
            <div style={{ width: 40 }} />
          </div>
        </div>
        <div style={{ ...styles.content, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: colors.textSecondary }}>Cargando plan de comidas...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <button style={styles.backButton} onClick={onClose}>
            <ChevronLeft size={20} />
            Volver
          </button>
          <h2 style={styles.headerTitle}>Plan de Comidas</h2>
          <button style={styles.refreshButton}>
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={{
              ...styles.tab,
              backgroundColor: activeTab === 'meals' ? colors.accent : colors.card,
              color: activeTab === 'meals' ? '#000' : colors.text,
            }}
            onClick={() => setActiveTab('meals')}
          >
            <Utensils size={16} />
            Comidas
          </button>
          <button
            style={{
              ...styles.tab,
              backgroundColor: activeTab === 'shopping' ? colors.accent : colors.card,
              color: activeTab === 'shopping' ? '#000' : colors.text,
            }}
            onClick={() => setActiveTab('shopping')}
          >
            <ShoppingCart size={16} />
            Lista compra
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {activeTab === 'meals' ? (
          <>
            {/* Day Selector */}
            <div style={styles.daySelector}>
              <button style={styles.dayButton} onClick={prevDay}>
                <ChevronLeft size={24} />
              </button>
              <div style={{ textAlign: 'center' }}>
                <p style={styles.dayName}>{currentDay.dayName}</p>
                <p style={styles.dayTotals}>
                  {currentDay.totals.calories} kcal · P:{currentDay.totals.protein}g · C:{currentDay.totals.carbs}g · G:{currentDay.totals.fat}g
                </p>
              </div>
              <button style={styles.dayButton} onClick={nextDay}>
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Day Summary */}
            <div style={styles.summaryCard}>
              <p style={styles.summaryTitle}>Resumen del día vs objetivos</p>
              <div style={styles.summaryGrid}>
                <div style={styles.summaryItem}>
                  <p style={{ ...styles.summaryValue, color: colors.accent }}>
                    {Math.round((currentDay.totals.calories / mealPlan.targetCalories) * 100)}%
                  </p>
                  <p style={styles.summaryLabel}>Calorías</p>
                </div>
                <div style={styles.summaryItem}>
                  <p style={{ ...styles.summaryValue, color: colors.protein }}>
                    {Math.round((currentDay.totals.protein / mealPlan.targetProtein) * 100)}%
                  </p>
                  <p style={styles.summaryLabel}>Proteína</p>
                </div>
                <div style={styles.summaryItem}>
                  <p style={{ ...styles.summaryValue, color: colors.carbs }}>
                    {Math.round((currentDay.totals.carbs / mealPlan.targetCarbs) * 100)}%
                  </p>
                  <p style={styles.summaryLabel}>Carbos</p>
                </div>
                <div style={styles.summaryItem}>
                  <p style={{ ...styles.summaryValue, color: colors.fat }}>
                    {Math.round((currentDay.totals.fat / mealPlan.targetFat) * 100)}%
                  </p>
                  <p style={styles.summaryLabel}>Grasas</p>
                </div>
              </div>
            </div>

            {/* Meals */}
            {renderMealCard(currentDay.meals.breakfast, 'breakfast')}
            {renderMealCard(currentDay.meals.lunch, 'lunch')}
            {renderMealCard(currentDay.meals.dinner, 'dinner')}

            {currentDay.meals.snacks.length > 0 && (
              <>
                <p style={{ fontSize: '13px', fontWeight: '600', color: colors.textSecondary, margin: '16px 0 8px' }}>
                  SNACKS ({currentDay.meals.snacks.length})
                </p>
                {currentDay.meals.snacks.map(snack => renderMealCard(snack, 'snack'))}
              </>
            )}
          </>
        ) : (
          <>
            {/* Shopping List Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}>
              <p style={{ fontSize: '14px', color: colors.textSecondary, margin: 0 }}>
                {checkedItems.length}/{shoppingList.length} items comprados
              </p>
              {checkedItems.length > 0 && (
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: colors.accent,
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                  onClick={clearChecked}
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Shopping List by Category */}
            {Object.entries(groupedShopping).map(([category, items]) => (
              <div key={category} style={styles.shoppingCategory}>
                <p style={styles.shoppingCategoryTitle}>
                  {foodCategories[category as keyof typeof foodCategories]?.icon || '📦'}
                  {foodCategories[category as keyof typeof foodCategories]?.name || category}
                </p>
                {items.map(item => {
                  const isChecked = checkedItems.includes(item.food.id);
                  return (
                    <div key={item.food.id} style={styles.shoppingItem}>
                      <div style={styles.shoppingItemLeft}>
                        <div
                          style={{
                            ...styles.shoppingCheckbox,
                            ...(isChecked ? styles.shoppingCheckboxChecked : {}),
                          }}
                          onClick={() => toggleChecked(item.food.id)}
                        >
                          {isChecked && <Check size={14} color="#fff" />}
                        </div>
                        <span style={{
                          ...styles.shoppingItemName,
                          textDecoration: isChecked ? 'line-through' : 'none',
                          opacity: isChecked ? 0.5 : 1,
                        }}>
                          {item.food.name}
                        </span>
                      </div>
                      <span style={styles.shoppingItemAmount}>
                        {item.displayAmount}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
