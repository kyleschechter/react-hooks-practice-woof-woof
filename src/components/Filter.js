import React from "react"

const Filter = ({ filterDogs, handleFilter }) => {

  return (
    <div id="filter-div">
      <button onClick={handleFilter} id="good-dog-filter">Filter good dogs: {filterDogs ? "ON" : "OFF"}</button>
    </div>
    )
  }

export default Filter