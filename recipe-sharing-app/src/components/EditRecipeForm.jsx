import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ safer way to grab from Zustand
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const recipe = recipes.find((r) => r.id === Number(id));

  const [title, setTitle] = useState(recipe?.title || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [instructions, setInstructions] = useState(recipe?.instructions || "");

  if (!recipe) {
    return <p className="text-red-500">Recipe not found!</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ pass correct object to store
    updateRecipe({ id: recipe.id, title, ingredients, instructions });

    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-bold mb-2">Edit Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Recipe Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={ingredients}
        placeholder="Ingredients"
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        value={instructions}
        placeholder="Instructions"
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
}

export default EditRecipeForm;
