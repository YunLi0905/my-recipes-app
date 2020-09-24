import React from "react"
import Recipe from "./recipe"

import { BrowserRouter as Link } from "react-router-dom"

const Recipes = ({ recipes, searchTerm }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((r) => (
          <div>
            <Link to={`/recipes/${r.id}`}>{r.name}</Link>
            <div className="column">{Recipe(r)}</div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Recipes
