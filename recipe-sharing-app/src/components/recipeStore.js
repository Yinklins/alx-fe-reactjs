import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Fixed variable name typo
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Option 1: Replace full object
  // updateRecipe: (updatedRecipe) =>
  //   set((state) => ({
  //     recipes: state.recipes.map((recipe) =>
  //       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
  //     ),
  //   })),

  // ✅ Option 2 (better): Merge old + updated fields
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
