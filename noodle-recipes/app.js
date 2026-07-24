/* ==========================================================================
   NoodleVerse - Application Logic & Interactive State Management
   ========================================================================== */

// --- RECIPE DATABASE ---
const RECIPES_DATA = [
  {
    id: "ramen-tonkotsu",
    title: "Gourmet Tonkotsu Ramen",
    subtitle: "Rich, creamy pork bone broth with tender noodles and seasoned soft-boiled egg.",
    image: "images/hero_ramen.png",
    cuisine: "Japanese",
    dietary: "Meat",
    spiceLevel: 1, // 0: Mild, 1: Medium, 2: Hot, 3: Fiery
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    difficulty: "Medium",
    rating: 4.9,
    reviewsCount: 1420,
    servings: 2,
    calories: 680,
    nutrition: { protein: "34g", carbs: "68g", fat: "28g", sodium: "1450mg", fiber: "4g" },
    chefTip: "For perfect Ajitsuke Tamago (marinated soft-boiled egg), boil room-temperature eggs for exactly 6 minutes and 30 seconds, then plunge into ice water immediately before peeling.",
    ingredients: [
      { name: "Fresh Ramen Noodles", amount: 300, unit: "g", impAmount: 10.5, impUnit: "oz" },
      { name: "Rich Chicken / Pork Stock", amount: 800, unit: "ml", impAmount: 3.4, impUnit: "cups" },
      { name: "Chashu Pork Belly Slices", amount: 150, unit: "g", impAmount: 5.3, impUnit: "oz" },
      { name: "Ramen Eggs (Ajitsuke Tamago)", amount: 2, unit: "pcs", impAmount: 2, impUnit: "pcs" },
      { name: "Soy Sauce (Shoyu) Tare", amount: 3, unit: "tbsp", impAmount: 3, impUnit: "tbsp" },
      { name: "Garlic Sesame Oil", amount: 1, unit: "tbsp", impAmount: 1, impUnit: "tbsp" },
      { name: "Scallions (finely chopped)", amount: 3, unit: "stalks", impAmount: 3, impUnit: "stalks" },
      { name: "Nori Seaweed Sheets", amount: 2, unit: "sheets", impAmount: 2, impUnit: "sheets" },
      { name: "Menma (Bamboo Shoots)", amount: 50, unit: "g", impAmount: 1.8, impUnit: "oz" }
    ],
    instructions: [
      { step: 1, text: "Bring stock to a gentle boil in a deep saucepan. Whisk in the shoyu tare and garlic sesame oil until emulsified and glossy.", timer: null },
      { step: 2, text: "In a separate large pot, bring 3 liters of water to a rolling boil. Drop fresh ramen noodles in and cook for 4 minutes until firm (Al Dente).", timer: 240, timerLabel: "Boil Ramen Noodles" },
      { step: 3, text: "Drain noodles thoroughly using a mesh strainer. Shake off all excess water so it doesn't dilute the broth.", timer: null },
      { step: 4, text: "Ladle hot aromatic broth into warm deep ramen bowls. Neatly fold noodles into the center of broth.", timer: null },
      { step: 5, text: "Arrange chashu pork slices, halved soft-boiled eggs, menma bamboo shoots, nori sheet, and chopped scallions on top. Serve sizzling hot!", timer: null }
    ]
  },
  {
    id: "pad-thai-shrimp",
    title: "Authentic Thai Pad Thai",
    subtitle: "Sweet, tangy wok-fried rice noodles with succulent prawns, peanuts, and fresh lime.",
    image: "images/pad_thai.png",
    cuisine: "Thai",
    dietary: "Meat",
    spiceLevel: 2,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    difficulty: "Easy",
    rating: 4.8,
    reviewsCount: 980,
    servings: 2,
    calories: 540,
    nutrition: { protein: "28g", carbs: "72g", fat: "16g", sodium: "1120mg", fiber: "5g" },
    chefTip: "Soak dry rice noodles in warm water for 20 minutes before wok frying rather than boiling. This keeps them wonderfully chewy without getting mushy in the hot pan.",
    ingredients: [
      { name: "Flat Rice Noodles", amount: 200, unit: "g", impAmount: 7, impUnit: "oz" },
      { name: "Large Tiger Prawns (peeled)", amount: 200, unit: "g", impAmount: 7, impUnit: "oz" },
      { name: "Tamarind Paste Concentrate", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Fish Sauce (or Soy Sauce)", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Palm Sugar (or Brown Sugar)", amount: 1.5, unit: "tbsp", impAmount: 1.5, impUnit: "tbsp" },
      { name: "Crushed Roasted Peanuts", amount: 4, unit: "tbsp", impAmount: 4, impUnit: "tbsp" },
      { name: "Fresh Bean Sprouts", amount: 100, unit: "g", impAmount: 3.5, impUnit: "oz" },
      { name: "Eggs (scrambled into wok)", amount: 2, unit: "pcs", impAmount: 2, impUnit: "pcs" },
      { name: "Lime Wedge & Garlic Chives", amount: 1, unit: "set", impAmount: 1, impUnit: "set" }
    ],
    instructions: [
      { step: 1, text: "Soak rice noodles in warm water for 20 minutes until pliable. Mix tamarind paste, fish sauce, and palm sugar in a bowl for sauce.", timer: 1200, timerLabel: "Soak Rice Noodles" },
      { step: 2, text: "Heat 2 tbsp oil in a smoking hot wok over high heat. Sear prawns for 2 minutes until pink, then remove and set aside.", timer: 120, timerLabel: "Sear Prawns" },
      { step: 3, text: "Push garlic chives to side, crack eggs directly into wok and scramble quickly for 45 seconds.", timer: null },
      { step: 4, text: "Add soaked noodles and tamarind sauce. Toss vigorously for 3 minutes until noodles absorb sauce.", timer: 180, timerLabel: "Wok Fry Noodles" },
      { step: 5, text: "Fold in bean sprouts, crushed roasted peanuts, cooked prawns, and serve immediately with fresh lime juice squeezed over top.", timer: null }
    ]
  },
  {
    id: "dan-dan-noodles",
    title: "Sichuan Spicy Dan Dan Noodles",
    subtitle: "Numbingly spicy red chili oil noodles with savory minced pork and toasted sesame paste.",
    image: "images/dan_dan.png",
    cuisine: "Chinese",
    dietary: "Meat",
    spiceLevel: 3,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: "Medium",
    rating: 4.9,
    reviewsCount: 860,
    servings: 2,
    calories: 610,
    nutrition: { protein: "24g", carbs: "65g", fat: "29g", sodium: "1280mg", fiber: "4g" },
    chefTip: "Sichuan peppercorn oil produces the signature 'Mala' tingling sensation. Toast peppercorns lightly before grinding for maximum fragrance.",
    ingredients: [
      { name: "Chinese Wheat Noodles", amount: 250, unit: "g", impAmount: 8.8, impUnit: "oz" },
      { name: "Ground Pork / Chicken", amount: 180, unit: "g", impAmount: 6.3, impUnit: "oz" },
      { name: "Sichuan Chili Oil", amount: 3, unit: "tbsp", impAmount: 3, impUnit: "tbsp" },
      { name: "Chinese Sesame Paste (Tahini)", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Ground Sichuan Peppercorns", amount: 1, unit: "tsp", impAmount: 1, impUnit: "tsp" },
      { name: "Sui Mi Ya Cai (Preserved Mustard Greens)", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Garlic (minced)", amount: 3, unit: "cloves", impAmount: 3, impUnit: "cloves" },
      { name: "Chopped Peanuts & Scallions", amount: 3, unit: "tbsp", impAmount: 3, impUnit: "tbsp" }
    ],
    instructions: [
      { step: 1, text: "In serving bowls, whisk chili oil, sesame paste, crushed Sichuan peppercorns, minced garlic, soy sauce, and 3 tbsp hot water into a smooth paste.", timer: null },
      { step: 2, text: "Heat oil in skillet over medium-high. Brown ground pork with Ya Cai mustard greens for 5 minutes until crispy and fragrant.", timer: 300, timerLabel: "Crisp Minced Pork" },
      { step: 3, text: "Boil wheat noodles in salted water for 4 minutes until chewy. Drain well.", timer: 240, timerLabel: "Boil Wheat Noodles" },
      { step: 4, text: "Place cooked noodles directly over spicy sesame base bowl.", timer: null },
      { step: 5, text: "Top with crispy pork, toasted peanuts, and scallions. Toss thoroughly before eating so noodles absorb sauce!", timer: null }
    ]
  },
  {
    id: "hakka-chow-mein",
    title: "Crispy Veg Hakka Chow Mein",
    subtitle: "High-heat wok fried vegetable noodles coated in glossy dark soy glaze.",
    image: "images/chow_mein.png",
    cuisine: "Chinese",
    dietary: "Vegetarian",
    spiceLevel: 1,
    prepTime: 12,
    cookTime: 8,
    totalTime: 20,
    difficulty: "Easy",
    rating: 4.7,
    reviewsCount: 1100,
    servings: 3,
    calories: 420,
    nutrition: { protein: "14g", carbs: "70g", fat: "11g", sodium: "890mg", fiber: "6g" },
    chefTip: "High wok heat (Wok Hei) is essential for that smoky street-food flavor. Keep ingredients moving continuously so they char without soaking in oil.",
    ingredients: [
      { name: "Chow Mein Wheat Noodles", amount: 300, unit: "g", impAmount: 10.5, impUnit: "oz" },
      { name: "Julienned Bell Peppers & Carrots", amount: 150, unit: "g", impAmount: 5.3, impUnit: "oz" },
      { name: "Shredded Cabbage", amount: 100, unit: "g", impAmount: 3.5, impUnit: "oz" },
      { name: "Dark Soy Sauce", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Sesame Oil", amount: 1, unit: "tbsp", impAmount: 1, impUnit: "tbsp" },
      { name: "Green Chilies (sliced)", amount: 2, unit: "pcs", impAmount: 2, impUnit: "pcs" },
      { name: "Spring Onion Green Tops", amount: 4, unit: "stalks", impAmount: 4, impUnit: "stalks" }
    ],
    instructions: [
      { step: 1, text: "Parboil chow mein noodles for 3 minutes, then drain and rinse under ice-cold running water. Toss with 1 tsp oil to prevent sticking.", timer: 180, timerLabel: "Parboil Noodles" },
      { step: 2, text: "Heat a wok until piping hot. Add 2 tbsp vegetable oil and stir-fry garlic and sliced chilies for 30 seconds.", timer: null },
      { step: 3, text: "Toss in cabbage, bell peppers, and carrots. Stir fry at max heat for 2 minutes keeping veggies crisp.", timer: 120, timerLabel: "Wok Fry Veggies" },
      { step: 4, text: "Add cold noodles, dark soy sauce, vinegar, and sesame oil. Toss at high speed for 2 minutes until glossy and smoky.", timer: 120, timerLabel: "Glossy Toss" },
      { step: 5, text: "Garnish with fresh spring onion greens and serve piping hot.", timer: null }
    ]
  },
  {
    id: "vietnamese-pho",
    title: "Aromatic Beef Pho Soup",
    subtitle: "Fragrant star anise & cinnamon broth poured over silk rice noodles and tender beef slices.",
    image: "images/hero_ramen.png", // Reuse high res soup banner with fallback
    cuisine: "Vietnamese",
    dietary: "Meat",
    spiceLevel: 0,
    prepTime: 20,
    cookTime: 45,
    totalTime: 65,
    difficulty: "Medium",
    rating: 4.9,
    reviewsCount: 750,
    servings: 4,
    calories: 490,
    nutrition: { protein: "36g", carbs: "58g", fat: "12g", sodium: "1350mg", fiber: "3g" },
    chefTip: "Toast star anise, cinnamon stick, and cloves in a dry skillet before simmering broth to release deep essential oils.",
    ingredients: [
      { name: "Pho Flat Rice Stick Noodles", amount: 400, unit: "g", impAmount: 14, impUnit: "oz" },
      { name: "Beef Sirloin (paper-thin slices)", amount: 300, unit: "g", impAmount: 10.5, impUnit: "oz" },
      { name: "Rich Beef Bone Broth", amount: 1500, unit: "ml", impAmount: 6.3, impUnit: "cups" },
      { name: "Star Anise & Cinnamon Stick", amount: 2, unit: "pcs", impAmount: 2, impUnit: "pcs" },
      { name: "Charred Ginger & Onion", amount: 1, unit: "set", impAmount: 1, impUnit: "set" },
      { name: "Thai Basil & Cilantro Leaves", amount: 1, unit: "cup", impAmount: 1, impUnit: "cup" },
      { name: "Fresh Bean Sprouts & Jalapeño", amount: 150, unit: "g", impAmount: 5.3, impUnit: "oz" },
      { name: "Hoisin & Sriracha Sauce", amount: 3, unit: "tbsp", impAmount: 3, impUnit: "tbsp" }
    ],
    instructions: [
      { step: 1, text: "Char ginger and sliced onion over direct flame for 5 minutes. Toast star anise, cinnamon, and cloves in a dry pan.", timer: 300, timerLabel: "Toast Spices" },
      { step: 2, text: "Add beef broth, charred aromatics, and toasted spices to a stockpot. Simmer gently for 40 minutes to infuse flavor.", timer: 2400, timerLabel: "Simmer Pho Broth" },
      { step: 3, text: "Soak pho rice stick noodles in hot water for 6 minutes until soft. Strain into bowls.", timer: 360, timerLabel: "Soft Rice Noodles" },
      { step: 4, text: "Arrange raw paper-thin sirloin slices directly on top of warm noodles.", timer: null },
      { step: 5, text: "Ladle boiling hot broth directly over raw beef to cook it instantly. Garnish with basil, bean sprouts, and jalapeños.", timer: null }
    ]
  },
  {
    id: "garlic-butter-udon",
    title: "Creamy Garlic Butter Udon",
    subtitle: "Chewy thick udon noodles tossed in rich garlic shoyu butter topped with poached egg.",
    image: "images/dan_dan.png",
    cuisine: "Japanese",
    dietary: "Vegetarian",
    spiceLevel: 0,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.8,
    reviewsCount: 920,
    servings: 1,
    calories: 480,
    nutrition: { protein: "16g", carbs: "62g", fat: "19g", sodium: "780mg", fiber: "2g" },
    chefTip: "Use unsalted Japanese butter and combine with a splash of starchy udon cooking water to create an glossy emulsion sauce.",
    ingredients: [
      { name: "Frozen Sanuki Udon Noodles", amount: 200, unit: "g", impAmount: 7, impUnit: "oz" },
      { name: "Unsalted Butter", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Minced Garlic", amount: 4, unit: "cloves", impAmount: 4, impUnit: "cloves" },
      { name: "Light Soy Sauce", amount: 1, unit: "tbsp", impAmount: 1, impUnit: "tbsp" },
      { name: "Poached / Raw Egg Yolk", amount: 1, unit: "pc", impAmount: 1, impUnit: "pc" },
      { name: "Furikake / Toasted Sesame", amount: 1, unit: "tbsp", impAmount: 1, impUnit: "tbsp" }
    ],
    instructions: [
      { step: 1, text: "Boil thick udon noodles for 2 minutes until chewy. Reserve 1/4 cup cooking water before draining.", timer: 120, timerLabel: "Boil Udon" },
      { step: 2, text: "Melt butter in a skillet over low heat. Sauté minced garlic for 1 minute until fragrant but not browned.", timer: 60, timerLabel: "Sauté Garlic" },
      { step: 3, text: "Add drained udon, soy sauce, and 2 tbsp reserved noodle water. Toss continuously for 1 minute until glossy.", timer: 60, timerLabel: "Emulsify Sauce" },
      { step: 4, text: "Transfer to a bowl, nestle egg yolk in center, and sprinkle with Furikake seasoning.", timer: null }
    ]
  },
  {
    id: "spicy-carbonara-ramen",
    title: "Cheesy Spicy Carbonara Ramen",
    subtitle: "Korean spicy hot chicken ramen combined with rich cream, parmesan cheese & crispy bacon.",
    image: "images/pad_thai.png",
    cuisine: "Korean",
    dietary: "Meat",
    spiceLevel: 3,
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 2100,
    servings: 1,
    calories: 620,
    nutrition: { protein: "22g", carbs: "74g", fat: "26g", sodium: "1250mg", fiber: "3g" },
    chefTip: "Pouring heavy cream or milk into the spicy sauce packet softens the sharp heat while giving it a luxurious Italian carbonara texture.",
    ingredients: [
      { name: "Samyang Carbo Ramen Pack", amount: 1, unit: "pack", impAmount: 1, impUnit: "pack" },
      { name: "Heavy Cream / Whole Milk", amount: 100, unit: "ml", impAmount: 0.4, impUnit: "cup" },
      { name: "Shredded Mozzarella Cheese", amount: 50, unit: "g", impAmount: 1.8, impUnit: "oz" },
      { name: "Grated Parmesan Cheese", amount: 2, unit: "tbsp", impAmount: 2, impUnit: "tbsp" },
      { name: "Crispy Bacon Bites", amount: 2, unit: "strips", impAmount: 2, impUnit: "strips" },
      { name: "Parsed Parsley / Scallions", amount: 1, unit: "tbsp", impAmount: 1, impUnit: "tbsp" }
    ],
    instructions: [
      { step: 1, text: "Boil instant ramen noodles in water for 4 minutes. Drain, keeping 8 tbsp of cooking water.", timer: 240, timerLabel: "Boil Ramen" },
      { step: 2, text: "In skillet over medium heat, combine spicy red sauce packet, cheese powder packet, heavy cream, and reserved water.", timer: null },
      { step: 3, text: "Add noodles to spicy cream sauce. Stir in mozzarella until melted and stringy for 1 minute.", timer: 60, timerLabel: "Melt Cheese" },
      { step: 4, text: "Plate up and top with parmesan cheese, bacon bits, and fresh parsley.", timer: null }
    ]
  }
];

// --- APP STATE ---
const state = {
  theme: localStorage.getItem("noodle_theme") || "dark",
  favorites: JSON.parse(localStorage.getItem("noodle_favs") || "[]"),
  shoppingList: JSON.parse(localStorage.getItem("noodle_cart") || "[]"),
  
  // Active Filters
  searchQuery: "",
  filterCuisine: "all",
  filterDietary: "all",
  filterSpice: "all",
  filterTime: "all",
  sortBy: "popular",
  
  // Current Modal Recipe Context
  activeRecipe: null,
  currentServings: 2,
  unitSystem: "metric", // 'metric' or 'imperial'
  
  // Focus Mode Context
  focusRecipe: null,
  focusStepIndex: 0,
  focusTimerInterval: null,
  focusTimerRemainingSec: 0,
  
  // Kitchen Stopwatch Widget Context
  widgetTimerInterval: null,
  widgetTimerSec: 240,
  widgetTimerRunning: false,
  widgetTimerLabel: "Fresh Ramen Noodles (4m)"
};

// --- DOM ELEMENTS ---
const elements = {
  themeBtn: document.getElementById("theme-toggle-btn"),
  favCountBadge: document.getElementById("fav-count"),
  cartCountBadge: document.getElementById("cart-count"),
  drawerItemCount: document.getElementById("drawer-item-count"),
  
  // Hero
  heroSearchInput: document.getElementById("hero-search-input"),
  heroSearchBtn: document.getElementById("hero-search-btn"),
  
  // Explore Filters
  filterCuisine: document.getElementById("filter-cuisine"),
  filterDietary: document.getElementById("filter-dietary"),
  filterSpice: document.getElementById("filter-spice"),
  filterTime: document.getElementById("filter-time"),
  sortBy: document.getElementById("sort-by"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  resultsCount: document.getElementById("results-count"),
  
  // Recipes Grid & Empty State
  recipesGrid: document.getElementById("recipes-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),
  
  // Detailed Recipe Modal
  recipeModal: document.getElementById("recipe-modal"),
  closeRecipeModalBtn: document.getElementById("close-recipe-modal"),
  modalRecipeImg: document.getElementById("modal-recipe-img"),
  modalCuisineBadge: document.getElementById("modal-cuisine-badge"),
  modalDietBadge: document.getElementById("modal-diet-badge"),
  modalSpiceBadge: document.getElementById("modal-spice-badge"),
  modalRecipeTitle: document.getElementById("modal-recipe-title"),
  modalRecipeDesc: document.getElementById("modal-recipe-desc"),
  modalTotalTime: document.getElementById("modal-total-time"),
  modalCalories: document.getElementById("modal-calories"),
  modalDifficulty: document.getElementById("modal-difficulty"),
  modalRating: document.getElementById("modal-rating"),
  
  servingsMinus: document.getElementById("servings-minus"),
  servingsPlus: document.getElementById("servings-plus"),
  servingsCount: document.getElementById("servings-count"),
  unitMetricBtn: document.getElementById("unit-metric-btn"),
  unitImperialBtn: document.getElementById("unit-imperial-btn"),
  
  modalIngredientsList: document.getElementById("modal-ingredients-list"),
  modalNutritionGrid: document.getElementById("modal-nutrition-grid"),
  modalInstructionsList: document.getElementById("modal-instructions-list"),
  modalChefTip: document.getElementById("modal-chef-tip"),
  addAllCartBtn: document.getElementById("add-all-cart-btn"),
  startFocusModeBtn: document.getElementById("start-focus-mode-btn"),
  modalFavToggleBtn: document.getElementById("modal-fav-toggle-btn"),
  modalStartCookingFooter: document.getElementById("modal-start-cooking-footer"),
  
  // Focus Mode Modal
  focusModal: document.getElementById("focus-modal"),
  closeFocusModalBtn: document.getElementById("close-focus-modal"),
  focusRecipeName: document.getElementById("focus-recipe-name"),
  focusStepNum: document.getElementById("focus-step-num"),
  focusTotalSteps: document.getElementById("focus-total-steps"),
  focusProgressFill: document.getElementById("focus-progress-fill"),
  focusStepBadge: document.getElementById("focus-step-badge"),
  focusStepTitle: document.getElementById("focus-step-title"),
  focusStepDesc: document.getElementById("focus-step-desc"),
  focusStepTimerBox: document.getElementById("focus-step-timer-box"),
  focusTimerClock: document.getElementById("focus-timer-clock"),
  focusTimerLabel: document.getElementById("focus-timer-label"),
  focusTimerStartBtn: document.getElementById("focus-timer-start-btn"),
  focusTimerResetBtn: document.getElementById("focus-timer-reset-btn"),
  focusPrevBtn: document.getElementById("focus-prev-btn"),
  focusNextBtn: document.getElementById("focus-next-btn"),
  focusStepDots: document.getElementById("focus-step-dots"),
  
  // Stopwatch Timer Modal
  timerModal: document.getElementById("timer-modal"),
  openTimerWidgetBtn: document.getElementById("open-timer-widget-btn"),
  closeTimerModalBtn: document.getElementById("close-timer-modal"),
  widgetTimerDisplay: document.getElementById("widget-timer-display"),
  widgetTimerTag: document.getElementById("widget-timer-tag"),
  widgetTimerToggleBtn: document.getElementById("widget-timer-toggle-btn"),
  widgetTimerResetBtn: document.getElementById("widget-timer-reset-btn"),
  presetBtns: document.querySelectorAll(".preset-btn"),
  customMinInput: document.getElementById("custom-min-input"),
  customSecInput: document.getElementById("custom-sec-input"),
  setCustomTimerBtn: document.getElementById("set-custom-timer-btn"),
  
  // Shopping List Drawer
  shoppingDrawerOverlay: document.getElementById("shopping-drawer-overlay"),
  openShoppingListBtn: document.getElementById("open-shopping-list-btn"),
  closeShoppingDrawerBtn: document.getElementById("close-shopping-drawer"),
  manualItemInput: document.getElementById("manual-item-input"),
  addManualItemBtn: document.getElementById("add-manual-item-btn"),
  shoppingItemsList: document.getElementById("shopping-items-list"),
  emptyDrawerState: document.getElementById("empty-drawer"),
  clearCompletedCartBtn: document.getElementById("clear-completed-cart-btn"),
  clearAllCartBtn: document.getElementById("clear-all-cart-btn"),
  
  toastContainer: document.getElementById("toast-container")
};

// --- INITIALIZATION ---
function init() {
  applyTheme(state.theme);
  updateBadges();
  renderRecipes();
  setupEventListeners();
}

// --- THEME MANAGEMENT ---
function applyTheme(themeName) {
  state.theme = themeName;
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("noodle_theme", themeName);
  
  const icon = elements.themeBtn.querySelector("i");
  if (themeName === "light") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

function toggleTheme() {
  const newTheme = state.theme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme} mode`, "info");
}

// --- BADGES UPDATE ---
function updateBadges() {
  elements.favCountBadge.textContent = state.favorites.length;
  elements.cartCountBadge.textContent = state.shoppingList.length;
  elements.drawerItemCount.textContent = state.shoppingList.length;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-circle-info"}"></i>
    <span>${message}</span>
  `;
  elements.toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// --- AUDIO CHIME SYNTHESIZER ---
function playTimerChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const playNote = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
      gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + start);
      osc.stop(ctx.currentTime + start + duration);
    };
    
    // Play pleasant 3-tone chime (C5 -> E5 -> G5)
    playNote(523.25, 0, 0.4);
    playNote(659.25, 0.25, 0.4);
    playNote(783.99, 0.5, 0.8);
  } catch (e) {
    console.log("Audio play error:", e);
  }
}

// --- RECIPES FILTERING & RENDERING ---
function filterRecipes() {
  return RECIPES_DATA.filter(recipe => {
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = recipe.title.toLowerCase().includes(q);
      const matchDesc = recipe.subtitle.toLowerCase().includes(q);
      const matchCuisine = recipe.cuisine.toLowerCase().includes(q);
      const matchIngr = recipe.ingredients.some(ing => ing.name.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchCuisine && !matchIngr) return false;
    }
    
    // Cuisine
    if (state.filterCuisine !== "all" && recipe.cuisine !== state.filterCuisine) {
      return false;
    }
    
    // Dietary
    if (state.filterDietary !== "all" && recipe.dietary !== state.filterDietary) {
      return false;
    }
    
    // Spice Level
    if (state.filterSpice !== "all" && recipe.spiceLevel !== parseInt(state.filterSpice)) {
      return false;
    }
    
    // Time
    if (state.filterTime !== "all" && recipe.totalTime > parseInt(state.filterTime)) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    if (state.sortBy === "popular") return b.reviewsCount - a.reviewsCount;
    if (state.sortBy === "rating") return b.rating - a.rating;
    if (state.sortBy === "time-asc") return a.totalTime - b.totalTime;
    if (state.sortBy === "name-asc") return a.title.localeCompare(b.title);
    return 0;
  });
}

function renderRecipes() {
  const filtered = filterRecipes();
  elements.resultsCount.textContent = `Showing ${filtered.length} recipe${filtered.length !== 1 ? 's' : ''}`;
  
  if (filtered.length === 0) {
    elements.recipesGrid.innerHTML = "";
    elements.emptyState.classList.remove("hidden");
    return;
  }
  
  elements.emptyState.classList.add("hidden");
  
  elements.recipesGrid.innerHTML = filtered.map(recipe => {
    const isFav = state.favorites.includes(recipe.id);
    const spiceIcon = "🌶️".repeat(recipe.spiceLevel) || "Mild";
    
    return `
      <div class="recipe-card" data-id="${recipe.id}">
        <div class="recipe-card-img-wrap">
          <img src="${recipe.image}" alt="${recipe.title}">
          <button class="recipe-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${recipe.id}" title="Save Recipe">
            <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
          </button>
          <div class="recipe-badges">
            <span class="badge badge-cuisine">${recipe.cuisine}</span>
            <span class="badge badge-diet">${recipe.dietary}</span>
            <span class="badge badge-spice">${spiceIcon}</span>
          </div>
        </div>
        <div class="recipe-card-body">
          <div class="recipe-meta-row">
            <span><i class="fa-solid fa-clock"></i> ${recipe.totalTime} mins</span>
            <span><i class="fa-solid fa-star text-warning"></i> ${recipe.rating} (${recipe.reviewsCount})</span>
          </div>
          <h3 class="recipe-card-title">${recipe.title}</h3>
          <p class="recipe-card-desc">${recipe.subtitle}</p>
          
          <div class="recipe-card-footer">
            <button class="btn btn-secondary view-recipe-btn" data-id="${recipe.id}">
              <i class="fa-solid fa-book-open"></i> Recipe
            </button>
            <button class="btn btn-primary start-cook-btn" data-id="${recipe.id}">
              <i class="fa-solid fa-fire"></i> Cook
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// --- DETAILED RECIPE MODAL VIEW ---
function openRecipeModal(recipeId) {
  const recipe = RECIPES_DATA.find(r => r.id === recipeId);
  if (!recipe) return;
  
  state.activeRecipe = recipe;
  state.currentServings = recipe.servings;
  state.unitSystem = "metric";
  
  elements.modalRecipeImg.src = recipe.image;
  elements.modalRecipeTitle.textContent = recipe.title;
  elements.modalRecipeDesc.textContent = recipe.subtitle;
  elements.modalCuisineBadge.textContent = recipe.cuisine;
  elements.modalDietBadge.textContent = recipe.dietary;
  elements.modalSpiceBadge.textContent = "🌶️ ".repeat(recipe.spiceLevel) || "Mild";
  
  elements.modalTotalTime.textContent = `${recipe.totalTime} mins`;
  elements.modalCalories.textContent = `${recipe.calories} kcal`;
  elements.modalDifficulty.textContent = recipe.difficulty;
  elements.modalRating.textContent = `${recipe.rating} (${recipe.reviewsCount})`;
  elements.modalChefTip.textContent = recipe.chefTip;
  
  elements.servingsCount.textContent = state.currentServings;
  elements.unitMetricBtn.classList.add("active");
  elements.unitImperialBtn.classList.remove("active");
  
  updateFavModalBtn();
  renderModalIngredients();
  renderModalNutrition();
  renderModalInstructions();
  
  elements.recipeModal.classList.remove("hidden");
}

function updateFavModalBtn() {
  if (!state.activeRecipe) return;
  const isFav = state.favorites.includes(state.activeRecipe.id);
  elements.modalFavToggleBtn.innerHTML = `
    <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart" style="${isFav ? 'color: var(--accent-primary);' : ''}"></i>
    ${isFav ? 'Saved in Favorites' : 'Save to Favorites'}
  `;
}

function renderModalIngredients() {
  if (!state.activeRecipe) return;
  const recipe = state.activeRecipe;
  const scale = state.currentServings / recipe.servings;
  
  elements.modalIngredientsList.innerHTML = recipe.ingredients.map((ing, idx) => {
    let qty = state.unitSystem === "metric" ? ing.amount : ing.impAmount;
    let unit = state.unitSystem === "metric" ? ing.unit : ing.impUnit;
    
    // Recalculate based on servings multiplier
    let scaledQty = (qty * scale).toFixed(1).replace(/\.0$/, '');
    
    return `
      <li class="ingredient-item">
        <input type="checkbox" id="ing-chk-${idx}">
        <label for="ing-chk-${idx}">
          <strong>${scaledQty} ${unit}</strong> ${ing.name}
        </label>
        <button class="delete-item-btn add-single-cart-btn" data-ing-name="${ing.name}" data-ing-qty="${scaledQty} ${unit}" title="Add to shopping list">
          <i class="fa-solid fa-plus"></i>
        </button>
      </li>
    `;
  }).join("");
}

function renderModalNutrition() {
  if (!state.activeRecipe) return;
  const nut = state.activeRecipe.nutrition;
  elements.modalNutritionGrid.innerHTML = `
    <div class="nutr-item"><span>Protein</span><strong>${nut.protein}</strong></div>
    <div class="nutr-item"><span>Carbs</span><strong>${nut.carbs}</strong></div>
    <div class="nutr-item"><span>Fats</span><strong>${nut.fat}</strong></div>
    <div class="nutr-item"><span>Fiber</span><strong>${nut.fiber}</strong></div>
    <div class="nutr-item"><span>Sodium</span><strong>${nut.sodium}</strong></div>
    <div class="nutr-item"><span>Cal</span><strong>${state.activeRecipe.calories}</strong></div>
  `;
}

function renderModalInstructions() {
  if (!state.activeRecipe) return;
  
  elements.modalInstructionsList.innerHTML = state.activeRecipe.instructions.map(ins => {
    const timerBtn = ins.timer ? `
      <button class="step-timer-trigger" data-sec="${ins.timer}" data-label="${ins.timerLabel}">
        <i class="fa-solid fa-stopwatch"></i> Timer (${Math.floor(ins.timer / 60)}m)
      </button>
    ` : '';
    
    return `
      <li class="instruction-step">
        ${ins.text} ${timerBtn}
      </li>
    `;
  }).join("");
}

// --- FOCUS COOKING MODE ---
function startFocusMode(recipe) {
  if (!recipe) return;
  state.focusRecipe = recipe;
  state.focusStepIndex = 0;
  
  elements.focusRecipeName.textContent = recipe.title;
  elements.focusTotalSteps.textContent = recipe.instructions.length;
  
  renderFocusStep();
  elements.recipeModal.classList.add("hidden");
  elements.focusModal.classList.remove("hidden");
}

function renderFocusStep() {
  if (!state.focusRecipe) return;
  const steps = state.focusRecipe.instructions;
  const step = steps[state.focusStepIndex];
  
  elements.focusStepNum.textContent = state.focusStepIndex + 1;
  elements.focusProgressFill.style.width = `${((state.focusStepIndex + 1) / steps.length) * 100}%`;
  elements.focusStepBadge.textContent = `STEP ${state.focusStepIndex + 1}`;
  elements.focusStepTitle.textContent = step.timerLabel || `Step ${state.focusStepIndex + 1}`;
  elements.focusStepDesc.textContent = step.text;
  
  // Render step dots
  elements.focusStepDots.innerHTML = steps.map((_, idx) => `
    <div class="step-dot ${idx === state.focusStepIndex ? 'active' : ''}" data-step-idx="${idx}"></div>
  `).join("");
  
  // Timer setup for step if exists
  clearInterval(state.focusTimerInterval);
  if (step.timer) {
    state.focusTimerRemainingSec = step.timer;
    elements.focusTimerLabel.textContent = step.timerLabel || "Step Countdown";
    updateFocusTimerClock();
    elements.focusStepTimerBox.classList.remove("hidden");
  } else {
    elements.focusStepTimerBox.classList.add("hidden");
  }
}

function updateFocusTimerClock() {
  const mins = Math.floor(state.focusTimerRemainingSec / 60).toString().padStart(2, '0');
  const secs = (state.focusTimerRemainingSec % 60).toString().padStart(2, '0');
  elements.focusTimerClock.textContent = `${mins}:${secs}`;
}

function startFocusTimer() {
  clearInterval(state.focusTimerInterval);
  state.focusTimerInterval = setInterval(() => {
    if (state.focusTimerRemainingSec > 0) {
      state.focusTimerRemainingSec--;
      updateFocusTimerClock();
    } else {
      clearInterval(state.focusTimerInterval);
      playTimerChime();
      showToast("⏰ Cooking Step Timer Completed!", "success");
    }
  }, 1000);
  showToast("Step timer started!", "info");
}

// --- KITCHEN STOPWATCH WIDGET ---
function updateWidgetTimerDisplay() {
  const mins = Math.floor(state.widgetTimerSec / 60).toString().padStart(2, '0');
  const secs = (state.widgetTimerSec % 60).toString().padStart(2, '0');
  elements.widgetTimerDisplay.textContent = `${mins}:${secs}`;
}

function toggleWidgetTimer() {
  if (state.widgetTimerRunning) {
    clearInterval(state.widgetTimerInterval);
    state.widgetTimerRunning = false;
    elements.widgetTimerToggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
    showToast("Timer paused", "info");
  } else {
    state.widgetTimerRunning = true;
    elements.widgetTimerToggleBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause`;
    state.widgetTimerInterval = setInterval(() => {
      if (state.widgetTimerSec > 0) {
        state.widgetTimerSec--;
        updateWidgetTimerDisplay();
      } else {
        clearInterval(state.widgetTimerInterval);
        state.widgetTimerRunning = false;
        elements.widgetTimerToggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
        playTimerChime();
        showToast("⏰ Kitchen Timer Finished!", "success");
      }
    }, 1000);
    showToast("Kitchen timer running", "info");
  }
}

function resetWidgetTimer() {
  clearInterval(state.widgetTimerInterval);
  state.widgetTimerRunning = false;
  elements.widgetTimerToggleBtn.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
  updateWidgetTimerDisplay();
}

// --- SHOPPING LIST DRAWER ---
function renderShoppingList() {
  updateBadges();
  
  if (state.shoppingList.length === 0) {
    elements.shoppingItemsList.innerHTML = "";
    elements.emptyDrawerState.classList.remove("hidden");
    return;
  }
  
  elements.emptyDrawerState.classList.add("hidden");
  elements.shoppingItemsList.innerHTML = state.shoppingList.map((item, idx) => `
    <li class="cart-item ${item.completed ? 'checked' : ''}">
      <div class="cart-item-check" data-cart-idx="${idx}">
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <span>${item.text}</span>
      </div>
      <button class="delete-item-btn" data-delete-idx="${idx}"><i class="fa-solid fa-trash-can"></i></button>
    </li>
  `).join("");
}

function addToShoppingList(itemText) {
  if (!itemText) return;
  state.shoppingList.push({ text: itemText, completed: false });
  localStorage.setItem("noodle_cart", JSON.stringify(state.shoppingList));
  renderShoppingList();
  showToast(`Added "${itemText}" to Shopping List`);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Theme Toggle
  elements.themeBtn.addEventListener("click", toggleTheme);
  
  // Search & Filter Events
  elements.heroSearchInput.addEventListener("keyup", (e) => {
    state.searchQuery = e.target.value;
    renderRecipes();
  });
  
  elements.heroSearchBtn.addEventListener("click", () => {
    state.searchQuery = elements.heroSearchInput.value;
    renderRecipes();
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  });
  
  elements.filterCuisine.addEventListener("change", (e) => {
    state.filterCuisine = e.target.value;
    renderRecipes();
  });
  
  elements.filterDietary.addEventListener("change", (e) => {
    state.filterDietary = e.target.value;
    renderRecipes();
  });
  
  elements.filterSpice.addEventListener("change", (e) => {
    state.filterSpice = e.target.value;
    renderRecipes();
  });
  
  elements.filterTime.addEventListener("change", (e) => {
    state.filterTime = e.target.value;
    renderRecipes();
  });
  
  elements.sortBy.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderRecipes();
  });
  
  const resetFiltersAction = () => {
    state.searchQuery = "";
    state.filterCuisine = "all";
    state.filterDietary = "all";
    state.filterSpice = "all";
    state.filterTime = "all";
    state.sortBy = "popular";
    
    elements.heroSearchInput.value = "";
    elements.filterCuisine.value = "all";
    elements.filterDietary.value = "all";
    elements.filterSpice.value = "all";
    elements.filterTime.value = "all";
    elements.sortBy.value = "popular";
    renderRecipes();
    showToast("All filters reset", "info");
  };
  
  elements.resetFiltersBtn.addEventListener("click", resetFiltersAction);
  elements.emptyResetBtn.addEventListener("click", resetFiltersAction);
  
  // Quick Tag Pill Buttons
  document.querySelectorAll(".quick-tag-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-filter-type");
      const val = btn.getAttribute("data-filter-val");
      
      resetFiltersAction();
      if (type === "cuisine") {
        state.filterCuisine = val;
        elements.filterCuisine.value = val;
      } else if (type === "dietary") {
        state.filterDietary = val;
        elements.filterDietary.value = val;
      } else if (type === "time") {
        state.filterTime = val;
        elements.filterTime.value = val;
      }
      renderRecipes();
      document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Favorites Nav Link Click
  document.getElementById("nav-favorites-link").addEventListener("click", (e) => {
    e.preventDefault();
    if (state.favorites.length === 0) {
      showToast("No favorite recipes saved yet!", "info");
      return;
    }
    state.searchQuery = "";
    elements.recipesGrid.scrollIntoView({ behavior: "smooth" });
    showToast(`Displaying your ${state.favorites.length} saved recipes`, "info");
  });
  
  // Recipe Cards Grid Delegated Clicks
  elements.recipesGrid.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".recipe-fav-btn");
    if (favBtn) {
      const id = favBtn.getAttribute("data-fav-id");
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(fId => fId !== id);
        showToast("Removed from Favorites", "info");
      } else {
        state.favorites.push(id);
        showToast("Saved to Favorites!");
      }
      localStorage.setItem("noodle_favs", JSON.stringify(state.favorites));
      updateBadges();
      renderRecipes();
      return;
    }
    
    const viewBtn = e.target.closest(".view-recipe-btn");
    if (viewBtn) {
      openRecipeModal(viewBtn.getAttribute("data-id"));
      return;
    }
    
    const cookBtn = e.target.closest(".start-cook-btn");
    if (cookBtn) {
      const recipe = RECIPES_DATA.find(r => r.id === cookBtn.getAttribute("data-id"));
      startFocusMode(recipe);
      return;
    }
  });
  
  // Detailed Recipe Modal Events
  elements.closeRecipeModalBtn.addEventListener("click", () => {
    elements.recipeModal.classList.add("hidden");
  });
  
  elements.servingsMinus.addEventListener("click", () => {
    if (state.currentServings > 1) {
      state.currentServings--;
      elements.servingsCount.textContent = state.currentServings;
      renderModalIngredients();
    }
  });
  
  elements.servingsPlus.addEventListener("click", () => {
    if (state.currentServings < 12) {
      state.currentServings++;
      elements.servingsCount.textContent = state.currentServings;
      renderModalIngredients();
    }
  });
  
  elements.unitMetricBtn.addEventListener("click", () => {
    state.unitSystem = "metric";
    elements.unitMetricBtn.classList.add("active");
    elements.unitImperialBtn.classList.remove("active");
    renderModalIngredients();
  });
  
  elements.unitImperialBtn.addEventListener("click", () => {
    state.unitSystem = "imperial";
    elements.unitImperialBtn.classList.add("active");
    elements.unitMetricBtn.classList.remove("active");
    renderModalIngredients();
  });
  
  elements.modalFavToggleBtn.addEventListener("click", () => {
    if (!state.activeRecipe) return;
    const id = state.activeRecipe.id;
    if (state.favorites.includes(id)) {
      state.favorites = state.favorites.filter(fId => fId !== id);
      showToast("Removed from Favorites", "info");
    } else {
      state.favorites.push(id);
      showToast("Saved to Favorites!");
    }
    localStorage.setItem("noodle_favs", JSON.stringify(state.favorites));
    updateBadges();
    updateFavModalBtn();
    renderRecipes();
  });
  
  elements.addAllCartBtn.addEventListener("click", () => {
    if (!state.activeRecipe) return;
    const scale = state.currentServings / state.activeRecipe.servings;
    state.activeRecipe.ingredients.forEach(ing => {
      let qty = state.unitSystem === "metric" ? ing.amount : ing.impAmount;
      let unit = state.unitSystem === "metric" ? ing.unit : ing.impUnit;
      let scaledQty = (qty * scale).toFixed(1).replace(/\.0$/, '');
      addToShoppingList(`${scaledQty} ${unit} ${ing.name}`);
    });
    showToast(`Added all ingredients to Shopping List!`);
  });
  
  elements.modalIngredientsList.addEventListener("click", (e) => {
    const singleAddBtn = e.target.closest(".add-single-cart-btn");
    if (singleAddBtn) {
      const qty = singleAddBtn.getAttribute("data-ing-qty");
      const name = singleAddBtn.getAttribute("data-ing-name");
      addToShoppingList(`${qty} ${name}`);
    }
  });

  // Step timer triggers inside modal instructions
  elements.modalInstructionsList.addEventListener("click", (e) => {
    const timerTrigger = e.target.closest(".step-timer-trigger");
    if (timerTrigger) {
      const sec = parseInt(timerTrigger.getAttribute("data-sec"));
      const label = timerTrigger.getAttribute("data-label");
      
      state.widgetTimerSec = sec;
      state.widgetTimerLabel = label;
      elements.widgetTimerTag.textContent = `Preset: ${label}`;
      updateWidgetTimerDisplay();
      elements.timerModal.classList.remove("hidden");
      toggleWidgetTimer();
    }
  });

  elements.startFocusModeBtn.addEventListener("click", () => startFocusMode(state.activeRecipe));
  elements.modalStartCookingFooter.addEventListener("click", () => startFocusMode(state.activeRecipe));
  
  // Focus Mode Modal Controls
  elements.closeFocusModalBtn.addEventListener("click", () => {
    clearInterval(state.focusTimerInterval);
    elements.focusModal.classList.add("hidden");
  });
  
  elements.focusPrevBtn.addEventListener("click", () => {
    if (state.focusStepIndex > 0) {
      state.focusStepIndex--;
      renderFocusStep();
    }
  });
  
  elements.focusNextBtn.addEventListener("click", () => {
    if (state.focusRecipe && state.focusStepIndex < state.focusRecipe.instructions.length - 1) {
      state.focusStepIndex++;
      renderFocusStep();
    } else {
      showToast("🎉 Dish completed! Bon Appétit!", "success");
      elements.focusModal.classList.add("hidden");
    }
  });
  
  elements.focusStepDots.addEventListener("click", (e) => {
    const dot = e.target.closest(".step-dot");
    if (dot) {
      state.focusStepIndex = parseInt(dot.getAttribute("data-step-idx"));
      renderFocusStep();
    }
  });
  
  elements.focusTimerStartBtn.addEventListener("click", startFocusTimer);
  elements.focusTimerResetBtn.addEventListener("click", () => {
    clearInterval(state.focusTimerInterval);
    const step = state.focusRecipe.instructions[state.focusStepIndex];
    if (step && step.timer) {
      state.focusTimerRemainingSec = step.timer;
      updateFocusTimerClock();
    }
  });

  // Stopwatch Kitchen Timer Modal Events
  elements.openTimerWidgetBtn.addEventListener("click", () => {
    updateWidgetTimerDisplay();
    elements.timerModal.classList.remove("hidden");
  });
  elements.closeTimerModalBtn.addEventListener("click", () => {
    elements.timerModal.classList.add("hidden");
  });
  elements.widgetTimerToggleBtn.addEventListener("click", toggleWidgetTimer);
  elements.widgetTimerResetBtn.addEventListener("click", resetWidgetTimer);
  
  elements.presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      elements.presetBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const sec = parseInt(btn.getAttribute("data-time"));
      const label = btn.getAttribute("data-label");
      state.widgetTimerSec = sec;
      state.widgetTimerLabel = label;
      elements.widgetTimerTag.textContent = `Preset: ${label}`;
      resetWidgetTimer();
    });
  });
  
  elements.setCustomTimerBtn.addEventListener("click", () => {
    const min = parseInt(elements.customMinInput.value) || 0;
    const sec = parseInt(elements.customSecInput.value) || 0;
    const totalSec = (min * 60) + sec;
    
    if (totalSec > 0) {
      state.widgetTimerSec = totalSec;
      state.widgetTimerLabel = `Custom Timer (${min}m ${sec}s)`;
      elements.widgetTimerTag.textContent = state.widgetTimerLabel;
      resetWidgetTimer();
      showToast("Custom timer set!");
    }
  });

  // Shopping Drawer Events
  elements.openShoppingListBtn.addEventListener("click", () => {
    renderShoppingList();
    elements.shoppingDrawerOverlay.classList.remove("hidden");
  });
  elements.closeShoppingDrawerBtn.addEventListener("click", () => {
    elements.shoppingDrawerOverlay.classList.add("hidden");
  });
  
  elements.addManualItemBtn.addEventListener("click", () => {
    const val = elements.manualItemInput.value.trim();
    if (val) {
      addToShoppingList(val);
      elements.manualItemInput.value = "";
    }
  });
  
  elements.manualItemInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const val = elements.manualItemInput.value.trim();
      if (val) {
        addToShoppingList(val);
        elements.manualItemInput.value = "";
      }
    }
  });
  
  elements.shoppingItemsList.addEventListener("click", (e) => {
    const checkWrap = e.target.closest(".cart-item-check");
    if (checkWrap) {
      const idx = parseInt(checkWrap.getAttribute("data-cart-idx"));
      state.shoppingList[idx].completed = !state.shoppingList[idx].completed;
      localStorage.setItem("noodle_cart", JSON.stringify(state.shoppingList));
      renderShoppingList();
      return;
    }
    
    const delBtn = e.target.closest(".delete-item-btn");
    if (delBtn) {
      const idx = parseInt(delBtn.getAttribute("data-delete-idx"));
      state.shoppingList.splice(idx, 1);
      localStorage.setItem("noodle_cart", JSON.stringify(state.shoppingList));
      renderShoppingList();
    }
  });
  
  elements.clearCompletedCartBtn.addEventListener("click", () => {
    state.shoppingList = state.shoppingList.filter(item => !item.completed);
    localStorage.setItem("noodle_cart", JSON.stringify(state.shoppingList));
    renderShoppingList();
    showToast("Cleared checked items", "info");
  });
  
  elements.clearAllCartBtn.addEventListener("click", () => {
    state.shoppingList = [];
    localStorage.setItem("noodle_cart", JSON.stringify(state.shoppingList));
    renderShoppingList();
    showToast("Shopping list cleared", "info");
  });

  // Footer Category Links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cuisine = link.getAttribute("data-cuisine");
      resetFiltersAction();
      state.filterCuisine = cuisine;
      elements.filterCuisine.value = cuisine;
      renderRecipes();
      document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Run app on DOM load
document.addEventListener("DOMContentLoaded", init);
