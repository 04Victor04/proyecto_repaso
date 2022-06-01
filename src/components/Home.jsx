import React, { useState, useEffect } from 'react';
import Select from '../homejs/Select';
import Cardperro from '../homejs/Cardperro';
import getDog from '../helpers/getDog';
import Error from '../homejs/Error';
import '../css/Spinner.css';
import '../css/home.css';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Navigation from "./Navigation";

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

function Home() {
  const { path, url } = useRouteMatch();
  const loggedIn =localStorage.getItem("loggedIn")
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar un perro")
        setLoading(false);
      })
  }
  
  return (
    
    <div className="home-center">
     
        <Navigation authorized={loggedIn} baseUrl={url} />
      
      <h2>Imagenes</h2>
      <Select updateDog={updateDog}/>
      
      { error && <Error error={error} /> }

      <Cardperro dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

  
  export default Home;