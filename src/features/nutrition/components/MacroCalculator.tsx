import { useState, useMemo } from 'react';
import { Search, Plus, Minus, Calculator, X, Check } from 'lucide-react';
import { foods, searchFoods, calculateMacros, foodCategories, type Food, type FoodCategory } from '../../../data/foods';

interface MacroCalculatorProps {
  onClose: () => void;
  onAddFood?: (food: Food, grams: number, macros: { calories: number; protein: number; carbs: number; fat: number }) => void;
}

const colors = {
  background: '#0a0a0a',
  card: '#1a1a1a',
  cardElevated: '#252525',
  text: '#ffffff',
  textSecondary: '#888888',
  accent: '#d4af37',
  protein: '#ef4444',
  carbs: '#f59e0b',
  fat: '#3b82f6',
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    paddingTop: 'calc(env(safe-area-inset-top) + 16px)',
    borderBottom: `1px solid ${colors.cardElevated}`,
  },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: colors.text,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: colors.textSecondary,
    padding: '8px',
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: '16px 20px',
    paddingBottom: 'calc(env(safe-area-inset-bottom) + 100px)',
  },
  searchContainer: {
    position: 'relative' as const,
    marginBottom: '16px',
  },
  searchIcon: {
    position: 'absolute' as const,
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.textSecondary,
  },
  searchInput: {
    width: '100%',
    backgroundColor: colors.card,
    border: 'none',
    borderRadius: '12px',
    padding: '14px 14px 14px 44px',
    fontSize: '15px',
    color: colors.text,
    outline: 'none',
  },
  categoriesScroll: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto' as const,
    paddingBottom: '12px',
    marginBottom: '16px',
  },
  categoryChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '8px 12px',
    borderRadius: '20px',
    border: 'none',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
  },
  foodItem: {
    backgroundColor: colors.card,
    borderRadius: '12px',
    padding: '14px',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  foodItemSelected: {
    backgroundColor: colors.card,
    borderRadius: '12px',
    padding: '14px',
    marginBottom: '8px',
    border: `2px solid ${colors.accent}`,
  },
  foodName: {
    fontSize: '15px',
    fontWeight: '500',
    color: colors.text,
    margin: 0,
    marginBottom: '4px',
  },
  foodMacros: {
    fontSize: '12px',
    color: colors.textSecondary,
  },
  selectedFoodCard: {
    backgroundColor: colors.card,
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '16px',
  },
  selectedFoodHeader: {
    marginBottom: '16px',
  },
  selectedFoodName: {
    fontSize: '18px',
    fontWeight: '600',
    color: colors.text,
    margin: 0,
    marginBottom: '4px',
  },
  selectedFoodServing: {
    fontSize: '13px',
    color: colors.textSecondary,
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  quantityButton: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: colors.cardElevated,
    color: colors.text,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '20px',
  },
  quantityDisplay: {
    textAlign: 'center' as const,
  },
  quantityValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
  },
  quantityUnit: {
    fontSize: '14px',
    color: colors.textSecondary,
  },
  macrosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
  },
  macroBox: {
    backgroundColor: colors.cardElevated,
    borderRadius: '12px',
    padding: '12px',
    textAlign: 'center' as const,
  },
  macroValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: colors.text,
    margin: 0,
  },
  macroLabel: {
    fontSize: '11px',
    color: colors.textSecondary,
    marginTop: '4px',
  },
  addButton: {
    position: 'fixed' as const,
    bottom: 'calc(env(safe-area-inset-bottom) + 20px)',
    left: '20px',
    right: '20px',
    backgroundColor: colors.accent,
    color: '#000',
    border: 'none',
    borderRadius: '14px',
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  quickServings: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  quickServingButton: {
    padding: '8px 14px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    backgroundColor: colors.cardElevated,
    color: colors.textSecondary,
  },
  quickServingButtonActive: {
    backgroundColor: colors.accent,
    color: '#000',
  },
};

export function MacroCalculator({ onClose, onAddFood }: MacroCalculatorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | 'all'>('all');
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [grams, setGrams] = useState(100);

  const filteredFoods = useMemo(() => {
    let result = foods;

    if (searchQuery) {
      result = searchFoods(searchQuery);
    }

    if (selectedCategory !== 'all') {
      result = result.filter(f => f.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const calculatedMacros = useMemo(() => {
    if (!selectedFood) return null;
    return calculateMacros(selectedFood, grams);
  }, [selectedFood, grams]);

  const handleSelectFood = (food: Food) => {
    setSelectedFood(food);
    setGrams(food.commonServingGrams);
  };

  const handleQuantityChange = (delta: number) => {
    setGrams(prev => Math.max(10, prev + delta));
  };

  const handleAddFood = () => {
    if (selectedFood && calculatedMacros && onAddFood) {
      onAddFood(selectedFood, grams, calculatedMacros);
    }
    onClose();
  };

  const categories = Object.entries(foodCategories) as [FoodCategory, typeof foodCategories[FoodCategory]][];

  return (
    <div style={styles.overlay}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>
          <Calculator size={20} color={colors.accent} />
          Calculadora de Macros
        </h2>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div style={styles.content}>
        {!selectedFood ? (
          <>
            {/* Search */}
            <div style={styles.searchContainer}>
              <Search size={18} style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar alimento..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
              />
            </div>

            {/* Categories */}
            <div style={styles.categoriesScroll}>
              <button
                style={{
                  ...styles.categoryChip,
                  backgroundColor: selectedCategory === 'all' ? colors.accent : colors.card,
                  color: selectedCategory === 'all' ? '#000' : colors.text,
                }}
                onClick={() => setSelectedCategory('all')}
              >
                Todos
              </button>
              {categories.map(([key, info]) => (
                <button
                  key={key}
                  style={{
                    ...styles.categoryChip,
                    backgroundColor: selectedCategory === key ? colors.accent : colors.card,
                    color: selectedCategory === key ? '#000' : colors.text,
                  }}
                  onClick={() => setSelectedCategory(key)}
                >
                  {info.icon} {info.name}
                </button>
              ))}
            </div>

            {/* Food List */}
            {filteredFoods.map(food => (
              <div
                key={food.id}
                style={styles.foodItem}
                onClick={() => handleSelectFood(food)}
              >
                <p style={styles.foodName}>
                  {foodCategories[food.category].icon} {food.name}
                </p>
                <p style={styles.foodMacros}>
                  Por 100g: {food.caloriesPer100g} kcal · P:{food.proteinPer100g}g · C:{food.carbsPer100g}g · G:{food.fatPer100g}g
                </p>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Selected Food */}
            <button
              style={{
                background: 'none',
                border: 'none',
                color: colors.accent,
                fontSize: '14px',
                marginBottom: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
              onClick={() => setSelectedFood(null)}
            >
              ← Cambiar alimento
            </button>

            <div style={styles.selectedFoodCard}>
              <div style={styles.selectedFoodHeader}>
                <h3 style={styles.selectedFoodName}>
                  {foodCategories[selectedFood.category].icon} {selectedFood.name}
                </h3>
                <p style={styles.selectedFoodServing}>
                  {selectedFood.commonServingName} = {selectedFood.commonServingGrams}g
                </p>
              </div>

              {/* Quick serving buttons */}
              <div style={styles.quickServings}>
                {[50, 100, selectedFood.commonServingGrams, 200].filter((v, i, a) => a.indexOf(v) === i).map(g => (
                  <button
                    key={g}
                    style={{
                      ...styles.quickServingButton,
                      ...(grams === g ? styles.quickServingButtonActive : {}),
                    }}
                    onClick={() => setGrams(g)}
                  >
                    {g}g
                  </button>
                ))}
              </div>

              {/* Quantity Control */}
              <div style={styles.quantityControl}>
                <button
                  style={styles.quantityButton}
                  onClick={() => handleQuantityChange(-10)}
                >
                  <Minus size={20} />
                </button>
                <div style={styles.quantityDisplay}>
                  <p style={styles.quantityValue}>{grams}</p>
                  <span style={styles.quantityUnit}>gramos</span>
                </div>
                <button
                  style={styles.quantityButton}
                  onClick={() => handleQuantityChange(10)}
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Calculated Macros */}
              {calculatedMacros && (
                <div style={styles.macrosGrid}>
                  <div style={styles.macroBox}>
                    <p style={{ ...styles.macroValue, color: colors.accent }}>
                      {calculatedMacros.calories}
                    </p>
                    <p style={styles.macroLabel}>kcal</p>
                  </div>
                  <div style={styles.macroBox}>
                    <p style={{ ...styles.macroValue, color: colors.protein }}>
                      {calculatedMacros.protein}
                    </p>
                    <p style={styles.macroLabel}>Proteína</p>
                  </div>
                  <div style={styles.macroBox}>
                    <p style={{ ...styles.macroValue, color: colors.carbs }}>
                      {calculatedMacros.carbs}
                    </p>
                    <p style={styles.macroLabel}>Carbos</p>
                  </div>
                  <div style={styles.macroBox}>
                    <p style={{ ...styles.macroValue, color: colors.fat }}>
                      {calculatedMacros.fat}
                    </p>
                    <p style={styles.macroLabel}>Grasas</p>
                  </div>
                </div>
              )}
            </div>

            {/* Per 100g reference */}
            <div style={{
              backgroundColor: colors.card,
              borderRadius: '12px',
              padding: '12px 16px',
              marginBottom: '16px',
            }}>
              <p style={{ fontSize: '12px', color: colors.textSecondary, margin: 0 }}>
                <strong>Referencia por 100g:</strong> {selectedFood.caloriesPer100g} kcal ·
                P:{selectedFood.proteinPer100g}g · C:{selectedFood.carbsPer100g}g · G:{selectedFood.fatPer100g}g
              </p>
            </div>
          </>
        )}
      </div>

      {selectedFood && onAddFood && (
        <button style={styles.addButton} onClick={handleAddFood}>
          <Check size={20} />
          Añadir a mi registro
        </button>
      )}
    </div>
  );
}
