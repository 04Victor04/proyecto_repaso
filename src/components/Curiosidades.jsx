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
      <h2>Facts de gatos</h2>
      <hr />
      <h6>{fact}</h6>
      <hr />
      <button onClick= {() => handleClick()}>Fact nuevo</button>
         
    </div>
    <br/>
    <div className="App">
      
    </div>
    </div>
  );
}

export default Curiosidades;
