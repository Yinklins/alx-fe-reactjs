import {create} from 'zustand'

const useRecipeStore = create((set) => ({
    recipes: [],

    addRecipe: (newRercipe) => set((state) => ({ recipes: [...state.recipes, newRercipe]})),
    setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;