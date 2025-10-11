import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientsList = formData.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i);
      if (ingredientsList.length < 2) {
        newErrors.ingredients =
          "Please list at least two ingredients (comma-separated).";
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    } else if (formData.steps.length < 10) {
      newErrors.steps = "Steps should be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      ...formData,
      ingredients: formData.ingredients.split(",").map((i) => i.trim()),
    };

    console.log("✅ Recipe submitted:", newRecipe);
    setSuccess(true);
    setFormData({ title: "", ingredients: "", steps: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      {/* ✅ Responsive container with md: adjustments */}
      <div className="w-full max-w-2xl md:max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          🍰 Add a New Recipe
        </h2>

        {success && (
          <div className="mb-4 text-green-700 bg-green-100 p-3 rounded-lg text-center">
            ✅ Recipe added successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 md:text-lg">
              Recipe Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter recipe title"
              className={`w-full border rounded-lg px-4 py-2 md:py-3 outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 md:text-lg">
              Ingredients (comma-separated)
            </label>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              placeholder="e.g., Rice, Salt, Oil"
              rows="3"
              className={`w-full border rounded-lg px-4 py-2 md:py-3 resize-none outline-none focus:ring-2 ${
                errors.ingredients
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 md:text-lg">
              Preparation Steps
            </label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              placeholder="Describe the preparation steps..."
              rows="5"
              className={`w-full border rounded-lg px-4 py-2 md:py-3 resize-none outline-none focus:ring-2 ${
                errors.steps
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            ></textarea>
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 md:py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
