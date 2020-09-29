import React from "react"
import Recipe from "./recipe"

import { BrowserRouter as Link } from "react-router-dom"

const Recipes = ({ recipes, searchTerm }) => {
  if (searchTerm) {
    return (
      <div>
        <h2>Recipes</h2>
        <ul>
          {recipes
            .filter((r) => r.name.toLowerCase().includes(searchTerm))
            .map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
        </ul>
      </div>
    )
  } else {
    return ""
  }
}

export default Recipes
