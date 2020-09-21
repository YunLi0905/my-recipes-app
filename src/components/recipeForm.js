import React from "react"

const RecipeForm = (props) => {
  console.log(props)
  return (
    <form onSubmit={props.addRecipe}>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        ingredients:{" "}
        <input
          value={props.newIngredients}
          onChange={props.handleIngredientsChange}
        />
      </div>
      <div>
        method:{" "}
        <input value={props.newMethod} onChange={props.handleMethodChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default RecipeForm
