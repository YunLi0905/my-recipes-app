import React from "react"
import Recipe from "./recipe"

const Recipes = ({ recipes, searchTerm }) => {
  return (
    <ul>
      {recipes
        .filter((r) => r.name.toLowerCase().includes(searchTerm))
        .map((r) => (
          <Recipe key={r.id} recipe={r} />
        ))}
    </ul>
  )
}

export default Recipes
