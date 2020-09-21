import React from "react"
import Recipe from "./recipe"

const Recipes = (props) => {
  return (
    <ul>
      {props.recipes
        .filter((recipe) =>
          recipe.name.toLowerCase().includes(props.searchTerm)
        )
        .map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
    </ul>
  )
}

export default Recipes
