import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import recipeData from "../data.json";    // ✅ Directly use local data

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from local JSON
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="Home grid p-6 bg-blue-50 rounded min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Delicious Recipes 🍳
      </h1>

      {recipes.length === 0 ? (
        <div className="text-center text-gray-600">Loading recipes...</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}  // ✅ Click to open RecipeDetail page
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                    {recipe.summary}
                  </p>
                    
                </div>
                
              </div>
            </Link>
          ))}
          
        </div>
      )}
      <Link
                        to="/add-recipe"
                        className="inline-block mb-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                        ➕ Add New Recipe
        </Link>
    </div>
  );
};

export default Home;
