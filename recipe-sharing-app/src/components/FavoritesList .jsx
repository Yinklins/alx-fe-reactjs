import useRecipeStore from "./recipeStore";

function FavoritesList() {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // Debugging output
  console.log("Favorites IDs:", favorites);
  console.log("All Recipes:", recipes);

  // Map IDs to recipe objects (if favorites is IDs)
  const favoriteRecipes = favorites
    .map((id) => {
      const recipe = recipes.find((r) => r.id === Number(id));
      if (!recipe) {
        console.warn("Favorite recipe not found for ID:", id);
      }
      return recipe;
    })
    .filter(Boolean); // remove undefineds

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="p-2 border-b">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">
              {recipe.description || "No description available"}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesList;
