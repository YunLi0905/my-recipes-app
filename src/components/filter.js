import React from "react"
import "../App.css"

const Filter = (props) => {
  return (
    <form>
      <div>
        <input
          className="search"
          placeholder="Search recipe"
          value={props.searchTerm}
          onChange={props.handleSearch}
        />
      </div>
    </form>
  )
}

export default Filter
