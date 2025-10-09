import { useState, useEffect } from "react";
import RecipeList from "./RecipeList";

 const Home = () => {
    const [recipes, setRecipes] = useState(null);
    const [ isPending, setIsPending] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
             fetch('/data/data.json')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setRecipes(data);
            setIsPending(false);
        });

        },1000)
       
    },[]);

    return(
        <div className="Home p-6 bg-blue-50 rounded">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Delicious Recipes 🍳</h1>
            { isPending && <div> Loading... </div> }
            { recipes && <RecipeList recipes={recipes} /> }
        </div>
    )
 }

 export default Home;