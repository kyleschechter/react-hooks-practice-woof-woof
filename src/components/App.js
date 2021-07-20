import React, { useState, useEffect } from "react";

import Filter from "./Filter";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function App() {
  const url = "http://localhost:3001/pups"  
  const [dogs, setDogs] = useState([])
  const [selectedPup, setSelectedPup] = useState("")
  const [filterDogs, setFilterDogs] = useState(false)

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [filterDogs])

  const findSelectedPup = dogs.find(dog => dog.id === selectedPup)

  const filteredGoodDogs = dogs.filter(dog => !!dog.isGoodDog)

  const handleFilter = () => {
    setFilterDogs(!filterDogs)
    setSelectedPup("")
  }

    return (
      <div className="App">
        <Filter filterDogs={filterDogs} handleFilter={handleFilter}/>
        <DogBar dogs={filterDogs ? filteredGoodDogs : dogs} setSelectedPup={setSelectedPup}/>
        {selectedPup ? <DogSummary selectedPup={findSelectedPup} url={url}/> : null}
      </div>
    );
}

export default App;
