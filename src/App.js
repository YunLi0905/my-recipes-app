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

  useEffect(() => {
    console.log("initialRecipes")
    recipeService.getAll().then((initialRecipes) => {
      setRecipes(initialRecipes)
    })
  }, [])

  console.log("recipes: ", recipes)

  const match = useRouteMatch("/recipes/:id")
  const recipe = match
    ? recipes.find((r) => r.id === Number(match.params.id))
    : null

  return (
    <Router>
      <div className="topnav">
        <ul>
          <Link className="navbarFont" to="/">
            Home
          </Link>

          <Link className="navbarFont" to="/create">
            Lisää resepti
          </Link>
        </ul>
      </div>
      <Switch>
        <Route path="/recipes/:id">
          <Recipe recipe={recipe} />
        </Route>
        <Route path="/create">
          <RecipeForm />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
