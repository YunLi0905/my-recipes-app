import React from "react"

const Recipe = (recipe) => {
  return (
    <p>
      {recipe.name}
      {recipe.ingredients}
      {recipe.method}
    </p>
  )
}

export default Recipe
