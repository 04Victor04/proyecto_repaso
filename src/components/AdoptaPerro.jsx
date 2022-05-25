import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Client } from "@petfinder/petfinder-js";
import Card from 'react-bootstrap/Card';
import logo from '../assets/imagenes/Captura1.PNG';
class AdoptaPerro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      animales: [], 
      fotos: [] };
  }
  async componentDidMount() {
    const client = new Client({ apiKey: "YA7fufQkwD9aLGVMX3Qv7dlZTFzdpgTMvIJe1gjeuAfkdrIsiL", secret: "qkf1q0n0ZQBm5tlnotmFoxn2MOj0PRH0fOzwDwoQ" });
    const response = await client.animal.search(
      {type:"Dog"}
    );
    this.setState({ animales: response.data.animals });
    let nuevasFotos = [];
    this.state.animales.map((animal) => {
      //console.log("Tipo " + animal.type + ", Nombre " + animal.name + ", Edad " + animal.age);
      if (animal.photos !== undefined) {
        //animal.photos.map((item) => {if (item !== undefined) console.log("Fotos: " + JSON.stringify(item))});
        console.log("foto - " + JSON.stringify(animal.photos[0]));
        nuevasFotos.push(animal.photos[0]);
      } else {
        console.log("No hay fotos");
        nuevasFotos.push(logo);
      }
      
    }
    )
    this.setState({fotos: nuevasFotos});
    {/*GET https://api.petfinder.com/v2/types/Dog*/}
  }



  render() {
    return (
      <div>
        <h2>
          Perros
        </h2>
        {this.state.animales.map((animal,index) => {
          console.log("Indice: " + index + "foto: " + this.state.fotos[index]);
          return (
            <Card>
              <Card.Img variant="bottom" src={this.state.fotos[index]} />
              <Card.Body>
                <Card.Text>{animal.name}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}

      </div>
    );
  }
}
export default AdoptaPerro;
