import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

function DeleteRecipeButton({ id, redirect = true }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!id) {
      console.error("❌ No recipe id provided to DeleteRecipeButton");
      return;
    }
    deleteRecipe(id);
    if (redirect) {
      navigate("/"); // go back home by default
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
