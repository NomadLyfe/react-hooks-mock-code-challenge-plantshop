import React, { useState } from "react";

function PlantCard({ plant, onDelete, onPriceChange }) {
  const [isInStock, setIsInStock] = useState(true);
  const [price,  setPrice] = useState(plant.price);
  function handleClick() {
    setIsInStock(!isInStock);
  }
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onDelete(plant));
  }
  function handlePriceChange(e) {
    setPrice(Number(e.target.value));
  }
  function updatePrice(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"price": price})
    })
    .then(r => r.json())
    .then(data => onPriceChange(data));
    setPrice(null);
  }
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <form onSubmit={updatePrice}>
          <input type="text" name="changePrice" onChange={handlePriceChange} placeholder={`${price}`}></input>
          <button>Change Price</button>
      </form>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
