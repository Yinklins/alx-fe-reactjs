import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  // 🔍 Search functionality
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // call filter automatically after search term changes
    get().filterRecipes();
  },

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Bulk setter
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
