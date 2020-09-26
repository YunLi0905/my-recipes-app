import React, { useState, useEffect } from "react"
import Filer from "../components/filter"
import Recipes from "../components/recipes"

const SearchPage = () => {
  const [input, setInput] = useState("")
  const [recipeListDefault, setRecipeListDefault] = useState()
  const [recipeList, setRecipeList] = useState()

  useEffect(() => {
    console.log("initialRecipes")
    recipeService.getAll().then((initialRecipes) => {
      setRecipeList(initialRecipes)
    })
  }, [])

  const updateInput = async (input) => {
    const filtered = recipeListDefault.filter((recipe) => {
      return recipe.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setRecipeList(filtered)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h1>Recipes</h1>
      <Filer searchTerm={input} handleSearch={updateInput} />
      <Recipes recipes={recipeList} />
    </>
  )
}

export default SearchPage
