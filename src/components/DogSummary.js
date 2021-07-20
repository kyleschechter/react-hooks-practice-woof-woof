import React, { useEffect, useState } from "react"

const DogSummary = ({ selectedPup, url }) => {
  const [isGoodDog, setIsGoodDog] = useState("")

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
    
  }
  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={selectedPup.image} alt={selectedPup.name} />
          <h2>{selectedPup.name}</h2>
          <button onClick={handleGoodDogButton}>{isGoodDog ? "Good Dog!" : "Bad Dog :("}</button> 
        </div>
    </div>
  )
}

export default DogSummary