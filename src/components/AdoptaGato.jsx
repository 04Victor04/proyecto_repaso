import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Client } from "@petfinder/petfinder-js";
import Card from 'react-bootstrap/Card';
import gato from '../assets/imagenes/gato.jpg';
import "../css/Adoptar.css";
import BootstrapHeader from './BootstrapHeader';
class AdoptaGato extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      animales: [], 
      fotos: [] };
  }
  async componentDidMount() {
    const client = new Client({ apiKey: "YA7fufQkwD9aLGVMX3Qv7dlZTFzdpgTMvIJe1gjeuAfkdrIsiL", secret: "qkf1q0n0ZQBm5tlnotmFoxn2MOj0PRH0fOzwDwoQ" });
    const response = await client.animal.search(
      {type:"Cat"}
    );

    let nuevasFotos = [];
    response.data.animals.map((animal) => {
      //console.log("Tipo " + animal.type + ", Nombre " + animal.name + ", Edad " + animal.age);
      if (animal.photos !== undefined) {
        //animal.photos.map((item) => {if (item !== undefined) console.log("Fotos: " + JSON.stringify(item))});
        //console.log("fotos - " + JSON.stringify(animal.photos[0]));
        //console.log("foto pequeña - " + JSON.stringify(animal.photos[0]["medium"]));
        nuevasFotos.push(animal.photos[0]["medium"]);
      } else {
        console.log("No hay fotos");
        nuevasFotos.push(gato);
      }
      
    }
    );
    this.setState({ 
      animales: response.data.animals, 
      fotos: nuevasFotos
    });
    this.setState({});
    {/*GET https://api.petfinder.com/v2/types/Dog*/}
  }



  render() {
    return (
      <div>
        
      <BootstrapHeader/>
        <h2>
          Gatos
        </h2>
        {this.state.animales.map((animal,index) => {
          console.log("Indice: " + index + "foto: " + this.state.fotos[index]);
          return (
            <Card border="info">
              <Card.Body>
                <Card.Title >{animal.name}
                </Card.Title>
              </Card.Body>
              <Card.Img src={this.state.fotos[index]} /*src={gato}*/ />
            </Card>
          )
        })}

      </div>
    );
  }
}
export default AdoptaGato;