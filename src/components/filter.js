import React from "react"
import "../App.css"

const Filter = (props) => {
  return (
    <form className="form">
      <div>
        <p className="sansserif">filter shown with:</p>
        <input
          className="search"
          value={props.searchTerm}
          onChange={props.handleSearch}
        />
      </div>
    </form>
  )
}

export default Filter
