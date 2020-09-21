import React, { useState, useEffect } from "react"
import Recipes from "./components/recipes"
import Filter from "./components/filter"

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

    if (recipes.filter((recipe) => recipe.name === newName).length > 0) {
      const recipe = recipes.find((r) => r.name === newName)
      const resultConfirmed = window.confirm(
        newName +
          " is already added to recipes, do you want to replace the old one?"
      )

      if (resultConfirmed) {
        const recipeObject = {
          name: newName,
          ingredients: newIngredients,
          method: newMethod,
        }

        recipeService.updateRecipe(recipe.id, recipeObject)

        setRecipes(
          recipes.map((r) => {
            if (r.name !== recipe.name) {
              return r
            }
            return { ...r, ingredients: newIngredients, method: newMethod }
          })
        )
      }
      setNewName("")
      setNewIngredients([])
      setNewMethod([])
    } else {
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
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Reseptit</h2>
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
      <Recipes recipes={recipes} searchTerm={searchTerm} />
    </div>
  )
}

export default App
