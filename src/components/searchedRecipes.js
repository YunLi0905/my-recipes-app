import React from "react"

const searchedRecipe = ({ recipes, searchTerm }) => {
  if (searchTerm) {
    // return Recipes.filter((r) => r.toLowerCase().includes(searchTerm)).map(
    //   (recipe) => {
    //     return (
    //       <div>
    //         <p style={{ color: "black" }}>{recipe.name}</p>
    //         <p style={{ color: "grey" }}>Ingredients: {recipe.ingredients}</p>
    //         <p style={{ color: "grey" }}>Method: {recipe.method}</p>
    //       </div>
    //     )
    //   }
    // )
    return (
      <ul>
        {recipes
          .filter((r) => r.name.toLowerCase().includes(searchTerm))
          .map((recipe) => (
            <div>
              <p style={{ color: "black" }}>{recipe.name}</p>
              <p style={{ color: "grey" }}>Ingredients: {recipe.ingredients}</p>
              <p style={{ color: "grey" }}>Method: {recipe.method}</p>
            </div>
          ))}
      </ul>
    )
  } else {
    return ""
  }
}

export default searchedRecipe
