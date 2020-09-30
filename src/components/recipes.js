import React from "react"

import { BrowserRouter as Link } from "react-router-dom"

const Recipes = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <div>
              <p style={{ color: "black" }}>{recipe.name}</p>
              <p style={{ color: "grey" }}>Ingredients: {recipe.ingredients}</p>
              <p style={{ color: "grey" }}>Method: {recipe.method}</p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Recipes
