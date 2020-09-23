import React from "react"

const Recipe = (recipe) => {
  return (
    <div>
      <p style={{ color: "black" }}>{recipe.name}</p>
      <p style={{ color: "grey" }}>{recipe.ingredients}</p>
      <p style={{ color: "grey" }}>{recipe.method}</p>
    </div>
  )
}

export default Recipe
