import React from "react"
import "../App.css"

const RecipeForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.addRecipe} className="form">
      <div>
        <p className="sansserif">name: </p>
        <input
          className="field"
          value={props.newName}
          onChange={props.handleNameChange}
        />
      </div>
      <div>
        <p className="sansserif">ingredients: </p>
        <input
          className="field"
          value={props.newIngredients}
          onChange={props.handleIngredientsChange}
        />
      </div>
      <div>
        <p className="sansserif">method: </p>
        <input
          className="field"
          value={props.newMethod}
          onChange={props.handleMethodChange}
        />
      </div>
      <div>
        <p>
          <button type="submit">add</button>
        </p>
      </div>
    </form>
  )
}

export default RecipeForm
