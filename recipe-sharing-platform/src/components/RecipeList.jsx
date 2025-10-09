import React from 'react'

const RecipeList = ({recipes, title}) => {
  return (
    <div className="recipe-list">
      <h1>{title}</h1>
      {recipes.map((recipe)=>(
        <div className="recipe-preview" key={recipe.id}>
            <h2 className='text-blue-400 text-2xl font-bold hover:text-blue-900 pointer cursor-pointer p-5'>{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <p class="w-full h-48 object-cover">{recipe.image}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList;
