import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";




function App() {
  

  return (
    <>
      <h1>This is all about Adding new recipes </h1>
      <RecipeList />
      <AddRecipeForm />

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
           
    </>
  )
}

export default App
