import React, { useState, useEffect } from "react"
import Recipes from "../components/recipes"
import recipeService from "../services/recipeService"
import Filter from "../components/filter"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [recipes, setRecipes] = useState([])

  const handleSearch = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
    console.log("search term: ", searchTerm)
  }

  useEffect(() => {
    console.log("initialRecipes")
    recipeService.getAll().then((initialRecipes) => {
      setRecipes(initialRecipes)
    })
  }, [])

  return (
    <div>
      <h2 className="head-image">
        <div className="head-text">
          <h1 className="appHeaderText">Omat Reseptit</h1>
          <Filter
            className="search"
            searchTerm={searchTerm}
            handleSearch={handleSearch}
          />
          <br />
          <p>HAE RESEPTIT KOTIKEITTIÖÖN</p>
        </div>
        <br />
      </h2>
    </div>
  )
}

export default Home
