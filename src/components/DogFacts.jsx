import React from 'react';
import { useEffect, useState } from "react";
function DogFacts() {
  const [fact, setFact] = useState("");
  const handleClick = () => {
    fetchFact()
    }
  const fetchFact = () => {
    fetch("cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }
  useEffect(() => {
    fetchFact()
  }, []);
  return (
    <div>
      <h2>Facts de Perros</h2>
      <hr />
      <h6>{fact}</h6>
      <hr />
      <button onClick= {() => handleClick()}>Fact nuevo</button>
    </div>
  );
}

export default DogFacts;
