import useRecipeStore from "./recipeStore";
import { useEffect } from "react";

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="p-2 border-b">
            <h3 className="font-semibold">{recipe.title}</h3>
            <p className="text-sm text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No recommendations yet.</p>
      )}
    </div>
  );
}

export default RecommendationsList;
