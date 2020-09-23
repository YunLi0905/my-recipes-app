import React, { useState, useEffect } from "react"

import Filter from "./components/filter"
import Recipes from "./components/recipes"

import recipeService from "./services/recipeService"
import RecipeForm from "./components/recipeForm"

const App = () => {
  const [recipes, setRecipes] = useState([])

  const [newName, setNewName] = useState("")
  const [newIngredients, setNewIngredients] = useState([])
  const [newMethod, setNewMethod] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("initialRecipes")
    recipeService.getAll().then((initialRecipes) => {
      setRecipes(initialRecipes)
    })
  }, [])
  console.log("recipes: ", recipes)

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
        setRecipes(recipes.concat(returnedRecipe)).then(
          console.log("recipes: ", recipes)
        )
        setNewName("")
        setNewIngredients([])
        setNewMethod([])
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <div className="appBorder">
      <h2 className="header">Omat Reseptit</h2>

      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h2>add a new</h2>
      <RecipeForm
        addRecipe={addRecipe}
        newName={newName}
        handleNameChange={handleNameChange}
        newIngredients={newIngredients}
        handleIngredientsChange={handleIngredientsChange}
        newMethod={newMethod}
        handleMethodChange={handleMethodChange}
      />
      <h2>Recipes</h2>
      <div>
        <p className="column">
          <Recipes recipes={recipes} searchTerm={searchTerm} />
        </p>
        <p className="column">
          <Recipes recipes={recipes} searchTerm={searchTerm} />
        </p>
        <p className="column">
          <Recipes recipes={recipes} searchTerm={searchTerm} />
        </p>
      </div>
    </div>
  )
}

export default App
