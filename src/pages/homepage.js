import React, { useState, useEffect } from "react"

import Filter from "../components/filter"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearch = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
    console.log("search term: ", searchTerm)
  }
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
