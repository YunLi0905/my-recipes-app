import React from "react"
import Recipes from "./recipes"

const searchedRecipe = (searchTerm) => {
  return Recipes.filter((r) => r.toLowerCase().includes(searchTerm)).map(
    (recipe) => {
      return (
        <div>
          <p style={{ color: "black" }}>{recipe.name}</p>
          <p style={{ color: "grey" }}>Ingredients: {recipe.ingredients}</p>
          <p style={{ color: "grey" }}>Method: {recipe.method}</p>
        </div>
      )
    }
  )
}
