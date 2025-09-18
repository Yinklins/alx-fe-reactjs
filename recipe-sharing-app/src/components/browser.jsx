import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";
import EditRecipeForm from "./EditRecipeForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / All Recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Recipe Details Page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Edit Recipe Page */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
