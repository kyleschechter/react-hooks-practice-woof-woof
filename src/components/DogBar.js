import React from "react"
import DogNameItem from "./DogNameItem"

const DogBar = ({ dogs, setSelectedPup }) => {

  const listOfDogNames = dogs.map(dog => {

    const selectThisPup = () => {
      setSelectedPup(dog.id)
    }


    return (
      <DogNameItem 
      key={dog.id}
      name={dog.name}
      onSelect={selectThisPup}
      />
    )
  })
  return (
    <div id="dog-bar">
      {listOfDogNames}
    </div>
  )
}

export default DogBar