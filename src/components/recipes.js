import React from "react"
import Recipe from "./recipe"

const Recipes = ({ recipes, searchTerm }) => {
  return (
    <ul>
      {recipes
        .filter((r) => r.name.toLowerCase().includes(searchTerm))
        .map((r) => (
          <div>{Recipe(r)}</div>
        ))}
    </ul>
  )
}

export default Recipes
