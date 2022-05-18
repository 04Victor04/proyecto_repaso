import React from 'react';
import BootstrapHeader from './BootstrapHeader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Client } from "@petfinder/petfinder-js";

class AdoptaPerro extends React.Component {
  constructor(props) {
    super(props);
    
  }
  async componentDidMount() {
    const client = new Client({apiKey: "YA7fufQkwD9aLGVMX3Qv7dlZTFzdpgTMvIJe1gjeuAfkdrIsiL", secret: "qkf1q0n0ZQBm5tlnotmFoxn2MOj0PRH0fOzwDwoQ"});
    const response = await client.animal.search();
    const animales = await response.data.animals;
    animales.map((animal)=>{
      console.log("Tipo "+ animal.type+", Nombre "+animal.name+", Edad " +animal.age+", Photos "+animal.photos);
    })

  }
render(){
    return (
      <div>
          <h2>
           Perros
          </h2>
          <p></p>
      </div>
    );
  }
}
  export default AdoptaPerro;
  