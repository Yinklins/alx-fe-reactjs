import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import SearchBar from "./SearchBar";

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recipe List</h2>
      <SearchBar />
      <ul>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="p-2 border-b">
              {/* ✅ Use Link for navigation */}
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-blue-500 hover:underline"
              >
                {recipe.title}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No recipes found.</p>
        )}
      </ul>
    </div>
  );
}

export default RecipeList;
