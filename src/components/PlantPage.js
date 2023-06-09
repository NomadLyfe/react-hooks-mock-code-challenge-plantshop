import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data));
  }, [])

  if (!plants) return (<p>Loading...</p>);

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setPlants={setPlants} />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
