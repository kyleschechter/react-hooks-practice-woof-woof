import React from "react"

const DogNameItem = ({ name, onSelect }) => {


  return (
    <span onClick={onSelect}>{name}</span>
  )
}

export default DogNameItem