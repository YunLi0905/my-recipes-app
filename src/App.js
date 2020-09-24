import React, { useState, useEffect } from "react"

import recipeService from "./services/recipeService"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom"

import Recipes from "./components/recipes"
import Home from "./pages/homepage"
import RecipeForm from "./components/recipeForm"
import Recipe from "./components/recipe"

const App = () => {
  const [recipes, setRecipes] = useState([])

  const [newName, setNewName] = useState("")
  const [newIngredients, setNewIngredients] = useState([])
  const [newMethod, setNewMethod] = useState([])

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

  const padding = {
    padding: 5,
  }

  const match = useRouteMatch("/recipes/:id")
  const recipe = match
    ? recipes.find((r) => r.id === Number(match.params.id))
    : null

  return (
    <Router>
      <div className="topnav">
        <Link style={padding} className="navbarFont" to="/">
          Home
        </Link>

        <Link style={padding} className="navbarFont" to="/recipes">
          Recipes
        </Link>

        <Link style={padding} className="navbarFont" to="/create">
          add recipe
        </Link>
      </div>
      <Switch>
        <Route path="/recipes/:id">
          <Recipe recipe={recipe} />
        </Route>
        <Route path="/create">
          <RecipeForm />
        </Route>
        <Route path="/recipes">
          <Recipes recipes={recipes} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
