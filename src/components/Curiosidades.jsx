import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Curiosidades() {
  const [fact, setFact] = useState("");
  const handleClick = () => {
    fetchFact()
    }
  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }
  useEffect(() => {
    fetchFact()
  }, []);
  return (
    <div>
    <div  className="App">
      <h3>Facts de gatos</h3>
      <hr />
      <h6>{fact}</h6>
      <hr />
      <button onClick= {() => handleClick()}>Fact nuevo</button>
         
    </div>
  
    
    </div>
  );
}

export default Curiosidades;
