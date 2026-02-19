// ============================================
// MEAL PLANS & RECIPES FOR ACHILLES FITNESS
// Complete meal planning system
// ============================================

import { getFoodById, calculateMacros, type Food } from './foods';

export interface MealIngredient {
  foodId: string;
  grams: number;
}

export interface Recipe {
  id: string;
  name: string;
  description?: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'pre_workout' | 'post_workout';
  ingredients: MealIngredient[];
  instructions?: string[];
  prepTimeMinutes?: number;
  tags: string[];
  // Calculated totals
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DayMealPlan {
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  dayName: string;
  meals: {
    breakfast: Recipe;
    lunch: Recipe;
    dinner: Recipe;
    snacks: Recipe[];
  };
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface WeeklyMealPlan {
  id: string;
  name: string;
  targetCalories: number;
  targetProtein: number;
  targetCarbs: number;
  targetFat: number;
  days: DayMealPlan[];
}

// Helper to calculate recipe totals
function calculateRecipeTotals(ingredients: MealIngredient[]): { calories: number; protein: number; carbs: number; fat: number } {
  return ingredients.reduce((totals, ing) => {
    const food = getFoodById(ing.foodId);
    if (!food) return totals;
    const macros = calculateMacros(food, ing.grams);
    return {
      calories: totals.calories + macros.calories,
      protein: totals.protein + macros.protein,
      carbs: totals.carbs + macros.carbs,
      fat: totals.fat + macros.fat,
    };
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

// ============================================
// BREAKFAST RECIPES
// ============================================

export const breakfastRecipes: Recipe[] = [
  {
    id: 'b1-oatmeal-protein',
    name: 'Avena proteica con frutos rojos',
    description: 'Desayuno clásico de culturista, alto en proteína y carbohidratos complejos',
    mealType: 'breakfast',
    ingredients: [
      { foodId: 'oats', grams: 60 },
      { foodId: 'whey-protein', grams: 30 },
      { foodId: 'banana', grams: 100 },
      { foodId: 'blueberries', grams: 50 },
      { foodId: 'almonds', grams: 15 },
    ],
    instructions: [
      'Cocina la avena con agua o leche',
      'Deja enfriar un poco y añade el whey',
      'Añade el plátano en rodajas y los arándanos',
      'Decora con las almendras picadas',
    ],
    prepTimeMinutes: 10,
    tags: ['alto-proteina', 'bulking', 'pre-entreno'],
    ...calculateRecipeTotals([
      { foodId: 'oats', grams: 60 },
      { foodId: 'whey-protein', grams: 30 },
      { foodId: 'banana', grams: 100 },
      { foodId: 'blueberries', grams: 50 },
      { foodId: 'almonds', grams: 15 },
    ]),
  },
  {
    id: 'b2-eggs-toast',
    name: 'Huevos revueltos con tostadas',
    description: 'Desayuno rápido y equilibrado',
    mealType: 'breakfast',
    ingredients: [
      { foodId: 'eggs-whole', grams: 180 }, // 3 huevos
      { foodId: 'bread-whole', grams: 80 }, // 2 rebanadas
      { foodId: 'avocado', grams: 50 },
      { foodId: 'tomato', grams: 100 },
    ],
    instructions: [
      'Bate los huevos y cocínalos a fuego medio',
      'Tuesta el pan integral',
      'Unta el aguacate en las tostadas',
      'Sirve con tomate en rodajas',
    ],
    prepTimeMinutes: 10,
    tags: ['rapido', 'equilibrado'],
    ...calculateRecipeTotals([
      { foodId: 'eggs-whole', grams: 180 },
      { foodId: 'bread-whole', grams: 80 },
      { foodId: 'avocado', grams: 50 },
      { foodId: 'tomato', grams: 100 },
    ]),
  },
  {
    id: 'b3-greek-yogurt-bowl',
    name: 'Bowl de yogur griego',
    description: 'Alto en proteína, perfecto para cutting',
    mealType: 'breakfast',
    ingredients: [
      { foodId: 'greek-yogurt', grams: 250 },
      { foodId: 'oats', grams: 30 },
      { foodId: 'strawberries', grams: 100 },
      { foodId: 'almonds', grams: 15 },
    ],
    instructions: [
      'Pon el yogur en un bowl',
      'Añade la avena cruda',
      'Decora con fresas y almendras',
    ],
    prepTimeMinutes: 5,
    tags: ['cutting', 'alto-proteina', 'rapido'],
    ...calculateRecipeTotals([
      { foodId: 'greek-yogurt', grams: 250 },
      { foodId: 'oats', grams: 30 },
      { foodId: 'strawberries', grams: 100 },
      { foodId: 'almonds', grams: 15 },
    ]),
  },
  {
    id: 'b4-tortilla-espanola',
    name: 'Tortilla de claras con verduras',
    description: 'Bajo en grasa, alto en proteína',
    mealType: 'breakfast',
    ingredients: [
      { foodId: 'egg-whites', grams: 200 }, // ~6 claras
      { foodId: 'eggs-whole', grams: 60 }, // 1 huevo entero
      { foodId: 'spinach', grams: 50 },
      { foodId: 'mushrooms', grams: 50 },
      { foodId: 'bread-whole', grams: 40 },
    ],
    instructions: [
      'Saltea las espinacas y champiñones',
      'Bate las claras con el huevo entero',
      'Añade las verduras y cocina a fuego medio',
      'Sirve con una tostada integral',
    ],
    prepTimeMinutes: 15,
    tags: ['cutting', 'alto-proteina', 'bajo-grasa'],
    ...calculateRecipeTotals([
      { foodId: 'egg-whites', grams: 200 },
      { foodId: 'eggs-whole', grams: 60 },
      { foodId: 'spinach', grams: 50 },
      { foodId: 'mushrooms', grams: 50 },
      { foodId: 'bread-whole', grams: 40 },
    ]),
  },
];

// ============================================
// LUNCH RECIPES
// ============================================

export const lunchRecipes: Recipe[] = [
  {
    id: 'l1-chicken-rice',
    name: 'Pollo con arroz y verduras',
    description: 'El clásico del fitness, nunca falla',
    mealType: 'lunch',
    ingredients: [
      { foodId: 'chicken-breast', grams: 200 },
      { foodId: 'rice-white', grams: 200 },
      { foodId: 'broccoli', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Cocina el arroz según las instrucciones',
      'Sazona y cocina la pechuga a la plancha',
      'Cuece el brócoli al vapor 5-7 min',
      'Aliña con un chorrito de aceite de oliva',
    ],
    prepTimeMinutes: 25,
    tags: ['clasico', 'meal-prep', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'chicken-breast', grams: 200 },
      { foodId: 'rice-white', grams: 200 },
      { foodId: 'broccoli', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
  {
    id: 'l2-salmon-quinoa',
    name: 'Salmón con quinoa y espárragos',
    description: 'Rico en omega-3 y proteína de alta calidad',
    mealType: 'lunch',
    ingredients: [
      { foodId: 'salmon', grams: 180 },
      { foodId: 'quinoa-cooked', grams: 150 },
      { foodId: 'asparagus', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Cocina la quinoa según las instrucciones',
      'Hornea o cocina el salmón a la plancha (8-10 min)',
      'Saltea los espárragos con un poco de aceite',
      'Sirve todo junto',
    ],
    prepTimeMinutes: 25,
    tags: ['omega-3', 'premium', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'salmon', grams: 180 },
      { foodId: 'quinoa-cooked', grams: 150 },
      { foodId: 'asparagus', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
  {
    id: 'l3-beef-potato',
    name: 'Ternera con patatas y judías',
    description: 'Comida contundente para días de pierna',
    mealType: 'lunch',
    ingredients: [
      { foodId: 'beef-steak', grams: 180 },
      { foodId: 'potato', grams: 250 },
      { foodId: 'green-beans', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Cuece las patatas hasta que estén tiernas',
      'Cocina el filete a tu gusto',
      'Saltea las judías verdes con ajo',
      'Sirve todo junto',
    ],
    prepTimeMinutes: 30,
    tags: ['bulking', 'dia-pierna', 'alto-calorico'],
    ...calculateRecipeTotals([
      { foodId: 'beef-steak', grams: 180 },
      { foodId: 'potato', grams: 250 },
      { foodId: 'green-beans', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
  {
    id: 'l4-turkey-salad',
    name: 'Ensalada de pavo con garbanzos',
    description: 'Ligera pero saciante, ideal para cutting',
    mealType: 'lunch',
    ingredients: [
      { foodId: 'turkey-breast', grams: 150 },
      { foodId: 'chickpeas-cooked', grams: 150 },
      { foodId: 'lettuce', grams: 100 },
      { foodId: 'tomato', grams: 150 },
      { foodId: 'cucumber', grams: 100 },
      { foodId: 'olive-oil', grams: 15 },
    ],
    instructions: [
      'Cocina la pechuga de pavo a la plancha',
      'Monta la ensalada con la lechuga, tomate y pepino',
      'Añade los garbanzos y el pavo en tiras',
      'Aliña con aceite de oliva y vinagre',
    ],
    prepTimeMinutes: 15,
    tags: ['cutting', 'ensalada', 'alto-fibra'],
    ...calculateRecipeTotals([
      { foodId: 'turkey-breast', grams: 150 },
      { foodId: 'chickpeas-cooked', grams: 150 },
      { foodId: 'lettuce', grams: 100 },
      { foodId: 'tomato', grams: 150 },
      { foodId: 'cucumber', grams: 100 },
      { foodId: 'olive-oil', grams: 15 },
    ]),
  },
  {
    id: 'l5-tuna-pasta',
    name: 'Pasta con atún y verduras',
    description: 'Rápido, económico y nutritivo',
    mealType: 'lunch',
    ingredients: [
      { foodId: 'pasta-cooked', grams: 200 },
      { foodId: 'tuna-canned', grams: 160 }, // 2 latas
      { foodId: 'tomato', grams: 150 },
      { foodId: 'bell-pepper', grams: 100 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Cocina la pasta al dente',
      'Saltea el pimiento con tomate troceado',
      'Añade el atún escurrido',
      'Mezcla con la pasta y aliña con aceite',
    ],
    prepTimeMinutes: 20,
    tags: ['rapido', 'economico', 'meal-prep'],
    ...calculateRecipeTotals([
      { foodId: 'pasta-cooked', grams: 200 },
      { foodId: 'tuna-canned', grams: 160 },
      { foodId: 'tomato', grams: 150 },
      { foodId: 'bell-pepper', grams: 100 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
];

// ============================================
// DINNER RECIPES
// ============================================

export const dinnerRecipes: Recipe[] = [
  {
    id: 'd1-cod-vegetables',
    name: 'Bacalao al horno con verduras',
    description: 'Cena ligera y alta en proteína',
    mealType: 'dinner',
    ingredients: [
      { foodId: 'cod', grams: 200 },
      { foodId: 'zucchini', grams: 150 },
      { foodId: 'bell-pepper', grams: 150 },
      { foodId: 'onion', grams: 50 },
      { foodId: 'olive-oil', grams: 15 },
    ],
    instructions: [
      'Precalienta el horno a 200°C',
      'Coloca las verduras troceadas en una bandeja',
      'Añade el bacalao encima con aceite y especias',
      'Hornea 20-25 minutos',
    ],
    prepTimeMinutes: 30,
    tags: ['bajo-calorico', 'alto-proteina', 'cena-ligera'],
    ...calculateRecipeTotals([
      { foodId: 'cod', grams: 200 },
      { foodId: 'zucchini', grams: 150 },
      { foodId: 'bell-pepper', grams: 150 },
      { foodId: 'onion', grams: 50 },
      { foodId: 'olive-oil', grams: 15 },
    ]),
  },
  {
    id: 'd2-chicken-stir-fry',
    name: 'Salteado de pollo con verduras',
    description: 'Cena rápida estilo asiático',
    mealType: 'dinner',
    ingredients: [
      { foodId: 'chicken-breast', grams: 180 },
      { foodId: 'broccoli', grams: 100 },
      { foodId: 'bell-pepper', grams: 100 },
      { foodId: 'mushrooms', grams: 80 },
      { foodId: 'rice-white', grams: 100 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Corta el pollo en tiras y saltéalo',
      'Añade las verduras troceadas',
      'Cocina a fuego alto 5-7 minutos',
      'Sirve con el arroz cocido',
    ],
    prepTimeMinutes: 20,
    tags: ['rapido', 'equilibrado', 'wok'],
    ...calculateRecipeTotals([
      { foodId: 'chicken-breast', grams: 180 },
      { foodId: 'broccoli', grams: 100 },
      { foodId: 'bell-pepper', grams: 100 },
      { foodId: 'mushrooms', grams: 80 },
      { foodId: 'rice-white', grams: 100 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
  {
    id: 'd3-eggs-veggies',
    name: 'Revuelto de huevos con verduras',
    description: 'Cena muy ligera, ideal para días de descanso',
    mealType: 'dinner',
    ingredients: [
      { foodId: 'eggs-whole', grams: 120 }, // 2 huevos
      { foodId: 'egg-whites', grams: 100 }, // 3 claras
      { foodId: 'spinach', grams: 100 },
      { foodId: 'tomato', grams: 100 },
      { foodId: 'cheese-mozzarella', grams: 30 },
    ],
    instructions: [
      'Saltea las espinacas y el tomate',
      'Bate los huevos con las claras',
      'Añade a la sartén y revuelve',
      'Añade la mozzarella al final',
    ],
    prepTimeMinutes: 10,
    tags: ['cutting', 'bajo-carbohidrato', 'rapido'],
    ...calculateRecipeTotals([
      { foodId: 'eggs-whole', grams: 120 },
      { foodId: 'egg-whites', grams: 100 },
      { foodId: 'spinach', grams: 100 },
      { foodId: 'tomato', grams: 100 },
      { foodId: 'cheese-mozzarella', grams: 30 },
    ]),
  },
  {
    id: 'd4-pork-sweet-potato',
    name: 'Lomo de cerdo con boniato',
    description: 'Cena contundente para bulking',
    mealType: 'dinner',
    ingredients: [
      { foodId: 'pork-loin', grams: 200 },
      { foodId: 'sweet-potato', grams: 250 },
      { foodId: 'broccoli', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ],
    instructions: [
      'Hornea el boniato 40-45 min a 200°C',
      'Cocina el lomo a la plancha',
      'Cuece el brócoli al vapor',
      'Sirve todo junto',
    ],
    prepTimeMinutes: 50,
    tags: ['bulking', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'pork-loin', grams: 200 },
      { foodId: 'sweet-potato', grams: 250 },
      { foodId: 'broccoli', grams: 150 },
      { foodId: 'olive-oil', grams: 10 },
    ]),
  },
  {
    id: 'd5-shrimp-quinoa',
    name: 'Gambas con quinoa y espinacas',
    description: 'Cena elegante y nutritiva',
    mealType: 'dinner',
    ingredients: [
      { foodId: 'shrimp', grams: 200 },
      { foodId: 'quinoa-cooked', grams: 150 },
      { foodId: 'spinach', grams: 100 },
      { foodId: 'tomato', grams: 100 },
      { foodId: 'olive-oil', grams: 15 },
    ],
    instructions: [
      'Saltea las gambas con ajo 3-4 min',
      'Añade las espinacas hasta que se reduzcan',
      'Sirve sobre la quinoa con tomate fresco',
      'Aliña con aceite de oliva',
    ],
    prepTimeMinutes: 20,
    tags: ['alto-proteina', 'bajo-grasa', 'gourmet'],
    ...calculateRecipeTotals([
      { foodId: 'shrimp', grams: 200 },
      { foodId: 'quinoa-cooked', grams: 150 },
      { foodId: 'spinach', grams: 100 },
      { foodId: 'tomato', grams: 100 },
      { foodId: 'olive-oil', grams: 15 },
    ]),
  },
];

// ============================================
// SNACK RECIPES
// ============================================

export const snackRecipes: Recipe[] = [
  {
    id: 's1-protein-shake',
    name: 'Batido de proteínas',
    description: 'Snack rápido alto en proteína',
    mealType: 'snack',
    ingredients: [
      { foodId: 'whey-protein', grams: 30 },
      { foodId: 'banana', grams: 100 },
      { foodId: 'milk-semi', grams: 250 },
    ],
    instructions: [
      'Añade todos los ingredientes a la batidora',
      'Bate hasta que esté suave',
    ],
    prepTimeMinutes: 3,
    tags: ['rapido', 'post-entreno', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'whey-protein', grams: 30 },
      { foodId: 'banana', grams: 100 },
      { foodId: 'milk-semi', grams: 250 },
    ]),
  },
  {
    id: 's2-yogurt-nuts',
    name: 'Yogur griego con nueces',
    description: 'Snack saciante y nutritivo',
    mealType: 'snack',
    ingredients: [
      { foodId: 'greek-yogurt', grams: 170 },
      { foodId: 'walnuts', grams: 20 },
      { foodId: 'blueberries', grams: 50 },
    ],
    instructions: [
      'Pon el yogur en un bowl',
      'Añade las nueces y los arándanos',
    ],
    prepTimeMinutes: 2,
    tags: ['rapido', 'saciante', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'greek-yogurt', grams: 170 },
      { foodId: 'walnuts', grams: 20 },
      { foodId: 'blueberries', grams: 50 },
    ]),
  },
  {
    id: 's3-rice-cakes-pb',
    name: 'Tortitas de arroz con crema de cacahuete',
    description: 'Snack pre-entreno con carbos y grasas',
    mealType: 'snack',
    ingredients: [
      { foodId: 'rice-cakes', grams: 30 }, // 3 tortitas
      { foodId: 'peanut-butter', grams: 30 },
      { foodId: 'banana', grams: 60 },
    ],
    instructions: [
      'Unta la crema de cacahuete en las tortitas',
      'Añade rodajas de plátano encima',
    ],
    prepTimeMinutes: 2,
    tags: ['pre-entreno', 'energia', 'rapido'],
    ...calculateRecipeTotals([
      { foodId: 'rice-cakes', grams: 30 },
      { foodId: 'peanut-butter', grams: 30 },
      { foodId: 'banana', grams: 60 },
    ]),
  },
  {
    id: 's4-cottage-fruit',
    name: 'Queso cottage con fruta',
    description: 'Snack alto en proteína de digestión lenta',
    mealType: 'snack',
    ingredients: [
      { foodId: 'cottage-cheese', grams: 150 },
      { foodId: 'strawberries', grams: 100 },
      { foodId: 'almonds', grams: 15 },
    ],
    instructions: [
      'Pon el cottage en un bowl',
      'Añade las fresas y las almendras',
    ],
    prepTimeMinutes: 2,
    tags: ['antes-dormir', 'caseina', 'alto-proteina'],
    ...calculateRecipeTotals([
      { foodId: 'cottage-cheese', grams: 150 },
      { foodId: 'strawberries', grams: 100 },
      { foodId: 'almonds', grams: 15 },
    ]),
  },
  {
    id: 's5-tuna-crackers',
    name: 'Atún con tostadas',
    description: 'Snack proteico rápido',
    mealType: 'snack',
    ingredients: [
      { foodId: 'tuna-canned', grams: 80 },
      { foodId: 'rice-cakes', grams: 20 },
      { foodId: 'tomato', grams: 50 },
    ],
    instructions: [
      'Escurre el atún',
      'Pon el atún sobre las tortitas',
      'Añade tomate en rodajas',
    ],
    prepTimeMinutes: 3,
    tags: ['alto-proteina', 'rapido', 'bajo-grasa'],
    ...calculateRecipeTotals([
      { foodId: 'tuna-canned', grams: 80 },
      { foodId: 'rice-cakes', grams: 20 },
      { foodId: 'tomato', grams: 50 },
    ]),
  },
  {
    id: 's6-ham-cheese',
    name: 'Jamón serrano con queso fresco',
    description: 'Snack keto-friendly',
    mealType: 'snack',
    ingredients: [
      { foodId: 'ham-serrano', grams: 50 },
      { foodId: 'cheese-fresh', grams: 100 },
      { foodId: 'cucumber', grams: 50 },
    ],
    instructions: [
      'Sirve el jamón con el queso fresco',
      'Acompaña con pepino en rodajas',
    ],
    prepTimeMinutes: 2,
    tags: ['bajo-carbohidrato', 'keto', 'rapido'],
    ...calculateRecipeTotals([
      { foodId: 'ham-serrano', grams: 50 },
      { foodId: 'cheese-fresh', grams: 100 },
      { foodId: 'cucumber', grams: 50 },
    ]),
  },
];

// ============================================
// MEAL PLAN GENERATOR
// ============================================

export function generateWeeklyMealPlan(
  targetCalories: number,
  targetProtein: number,
  targetCarbs: number,
  targetFat: number,
  phase: 'bulk' | 'cut' | 'maintain' | 'weight_loss' = 'maintain'
): WeeklyMealPlan {
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // Select recipes based on phase, with fallback to all recipes if filter returns empty
  let breakfastPool = phase === 'cut'
    ? breakfastRecipes.filter(r => r.calories < 500)
    : breakfastRecipes;
  if (breakfastPool.length === 0) breakfastPool = breakfastRecipes;

  let lunchPool = phase === 'cut'
    ? lunchRecipes.filter(r => r.calories < 600)
    : lunchRecipes;
  if (lunchPool.length === 0) lunchPool = lunchRecipes;

  let dinnerPool = phase === 'cut'
    ? dinnerRecipes.filter(r => r.calories < 500)
    : dinnerRecipes;
  if (dinnerPool.length === 0) dinnerPool = dinnerRecipes;

  // Ensure we have at least one recipe in each pool
  if (breakfastPool.length === 0 || lunchPool.length === 0 || dinnerPool.length === 0 || snackRecipes.length === 0) {
    throw new Error('No recipes available');
  }

  const days: DayMealPlan[] = dayNames.map((dayName, index) => {
    // Rotate through recipes to provide variety
    const breakfast = breakfastPool[index % breakfastPool.length];
    const lunch = lunchPool[index % lunchPool.length];
    const dinner = dinnerPool[index % dinnerPool.length];

    // Calculate how many snacks needed
    const mainMealsCals = (breakfast?.calories || 0) + (lunch?.calories || 0) + (dinner?.calories || 0);
    const mainMealsProtein = breakfast.protein + lunch.protein + dinner.protein;

    const remainingCals = targetCalories - mainMealsCals;
    const remainingProtein = targetProtein - mainMealsProtein;

    // Select snacks to fill the gap
    const snacks: Recipe[] = [];
    let snacksCals = 0;
    let snacksProtein = 0;

    // Prioritize protein-rich snacks if protein is low
    const sortedSnacks = [...snackRecipes].sort((a, b) => {
      if (remainingProtein > 30) {
        return b.protein - a.protein; // Prioritize protein
      }
      return a.calories - b.calories; // Otherwise, lower calorie snacks
    });

    for (const snack of sortedSnacks) {
      if (snacksCals + snack.calories <= remainingCals + 100) {
        snacks.push(snack);
        snacksCals += snack.calories;
        snacksProtein += snack.protein;
        if (snacks.length >= 2) break;
      }
    }

    const totals = {
      calories: mainMealsCals + snacksCals,
      protein: Math.round(mainMealsProtein + snacksProtein),
      carbs: Math.round(breakfast.carbs + lunch.carbs + dinner.carbs + snacks.reduce((sum, s) => sum + s.carbs, 0)),
      fat: Math.round(breakfast.fat + lunch.fat + dinner.fat + snacks.reduce((sum, s) => sum + s.fat, 0)),
    };

    return {
      dayOfWeek: index,
      dayName,
      meals: { breakfast, lunch, dinner, snacks },
      totals,
    };
  });

  return {
    id: `plan-${Date.now()}`,
    name: phase === 'bulk' ? 'Plan de Volumen' : phase === 'cut' ? 'Plan de Definición' : 'Plan de Mantenimiento',
    targetCalories,
    targetProtein,
    targetCarbs,
    targetFat,
    days,
  };
}

// ============================================
// SHOPPING LIST GENERATOR
// ============================================

export interface ShoppingItem {
  food: Food;
  totalGrams: number;
  displayAmount: string;
  category: string;
}

export function generateShoppingList(mealPlan: WeeklyMealPlan): ShoppingItem[] {
  // Aggregate all ingredients
  const ingredientMap = new Map<string, number>();

  for (const day of mealPlan.days) {
    const allMeals = [
      day.meals.breakfast,
      day.meals.lunch,
      day.meals.dinner,
      ...day.meals.snacks,
    ];

    for (const meal of allMeals) {
      for (const ing of meal.ingredients) {
        const current = ingredientMap.get(ing.foodId) || 0;
        ingredientMap.set(ing.foodId, current + ing.grams);
      }
    }
  }

  // Convert to shopping items
  const items: ShoppingItem[] = [];

  for (const [foodId, totalGrams] of ingredientMap) {
    const food = getFoodById(foodId);
    if (!food) continue;

    // Calculate display amount
    const servings = Math.ceil(totalGrams / food.commonServingGrams);
    let displayAmount: string;

    if (totalGrams >= 1000) {
      displayAmount = `${(totalGrams / 1000).toFixed(1)} kg`;
    } else {
      displayAmount = `${Math.round(totalGrams)} g (~${servings} ${food.commonServingName})`;
    }

    items.push({
      food,
      totalGrams,
      displayAmount,
      category: food.category,
    });
  }

  // Sort by category
  return items.sort((a, b) => a.category.localeCompare(b.category));
}

// Get all recipes
export const allRecipes = [
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...snackRecipes,
];

export function getRecipeById(id: string): Recipe | undefined {
  return allRecipes.find(r => r.id === id);
}
