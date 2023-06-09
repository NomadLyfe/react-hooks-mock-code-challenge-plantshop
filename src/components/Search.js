import React from "react";

function Search({ setPlants }) {
  function handleSearch(e) {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => {
      const updatedPlants = plants.filter(plant => {
        if (e.target.value === "") return plant;
        return plant.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setPlants(updatedPlants);
    });
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
