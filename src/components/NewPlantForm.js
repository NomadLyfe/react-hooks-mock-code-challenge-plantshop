import React,{ useState } from "react";

function NewPlantForm({ setPlants, plants }) {
  const [formData, setFormData] = useState({name: "", image: "", price: 0});
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(d => setPlants([...plants, d]));
    setFormData({name: "", image: "", price: 0});
  }
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
