import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  function handleDelete(deletedPlant) {
    const updatedPlants = plants.filter(plant => plant.id !== deletedPlant.id);
    setPlants(updatedPlants);
  }
  function handlePriceChange(updatedPlant) {
    const newPlants = plants.map(plant => {
      if (plant.name === updatedPlant.name) {
        plant = {...updatedPlant, "id": plant.id};
        return plant;
      } else {
        return plant;
      }
    });
    setPlants([...newPlants]);
  }
  const plantCards = plants.map((plant) => {
    return (
      <PlantCard plant={plant} key={plant.id} onDelete={handleDelete} onPriceChange={handlePriceChange} />
    )
  })
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
