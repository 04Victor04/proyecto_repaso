import React, { useState, useEffect } from 'react';
import Select from '../homejs/Select';
import Cardperro from '../homejs/Cardperro';
import getDog from '../helpers/getDog';
import Error from '../homejs/Error';
import '../css/Spinner.css';
import '../css/home.css';
import BootstrapHeader from './BootstrapHeader';

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

function Home() {
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
    <div>
      <BootstrapHeader/>
    
    <div className="home-center">
      
      <h2>Imagenes</h2>
      <Select updateDog={updateDog}/>
      
      { error && <Error error={error} /> }

      <Cardperro dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
    </div>
  );
}

  
  export default Home;