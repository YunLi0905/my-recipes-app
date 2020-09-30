import React, { useState } from "react"
import recipeService from "../services/recipeService"
import "../App.css"

const RecipeForm = ({ recipes, setRecipes }) => {
  const [newName, setNewName] = useState("")
  const [newIngredients, setNewIngredients] = useState([])
  const [newMethod, setNewMethod] = useState([])
  //  const [recipes, setRecipes] = useState([])

  const handleNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleIngredientsChange = (event) => {
    event.preventDefault()
    setNewIngredients(event.target.value)
  }

  const handleMethodChange = (event) => {
    event.preventDefault()
    setNewMethod(event.target.value)
  }

  const addRecipe = (event) => {
    event.preventDefault()

    const recipeObject = {
      name: newName,
      ingredients: newIngredients,
      method: newMethod,
    }
    console.log("new recipe: ", recipeObject)

    recipeService
      .createRecipe(recipeObject)
      .then((returnedRecipe) => {
        console.log("RECIPES =", recipes)
        console.log("NEW RECIPE =", returnedRecipe)
        setRecipes(recipes.concat(returnedRecipe))
        setNewName("")
        setNewIngredients([])
        setNewMethod([])
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <form onSubmit={addRecipe} className="form">
        <div>
          <p className="sansserif">name: </p>
          <input
            className="field"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <p className="sansserif">ingredients: </p>
          <input
            className="field"
            value={newIngredients}
            onChange={handleIngredientsChange}
          />
        </div>
        <div>
          <p className="sansserif">method: </p>
          <input
            className="field"
            value={newMethod}
            onChange={handleMethodChange}
          />
        </div>
        <div>
          <p>
            <button type="submit">add</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RecipeForm
