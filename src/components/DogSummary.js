import React, { useEffect, useState } from "react"

const DogSummary = ({ selectedPup, url }) => {
  const [isGoodDog, setIsGoodDog] = useState("")
  const [name, setName] = useState(selectedPup.name)

  useEffect(() => {
  fetch(`${url}/${selectedPup.id}`)
  .then(r => r.json())
  .then(data => setIsGoodDog(data.isGoodDog))
  })


  const handleGoodDogButton = () => {
    
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !isGoodDog
      })
    }
    
    fetch(`${url}/${selectedPup.id}`, configObj)
    .then(r => r.json())
    .then(data => setIsGoodDog(data.isGoodDog))
  }

  const handleBellyRub = () => {
    isGoodDog ? setName(`${selectedPup.name} says "Thanks for the belly rub!"`) : setName(`${selectedPup.name} just bit your hand off!`)
    setTimeout(() => setName(selectedPup.name), 3000)
  }
  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img onClick={handleBellyRub} src={selectedPup.image} alt={selectedPup.name} />
          <h2>{name}</h2>
          <button onClick={handleGoodDogButton}>{isGoodDog ? "Good Dog!" : "Bad Dog :("}</button> 
        </div>
    </div>
  )
}

export default DogSummary