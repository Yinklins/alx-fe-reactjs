import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import AppRouter from './components/browser'
import RecipeList from './components/RecipeList'


function App() {
  

  return (
    <>
      <h1>This is all about Adding new recipes </h1>
      <RecipeList />
      <AddRecipeForm />
      <AppRouter />      
    </>
  )
}

export default App
