import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Client } from "@petfinder/petfinder-js";
import Card from 'react-bootstrap/Card';

class AdoptaPerro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animales: [] };
  }
  async componentDidMount() {
    const client = new Client({ apiKey: "YA7fufQkwD9aLGVMX3Qv7dlZTFzdpgTMvIJe1gjeuAfkdrIsiL", secret: "qkf1q0n0ZQBm5tlnotmFoxn2MOj0PRH0fOzwDwoQ" });
    const response = await client.animal.search();
    this.setState({ animales: response.data.animals });
    this.state.animales.map((animal) => {
      console.log("Tipo " + animal.type + ", Nombre " + animal.name + ", Edad " + animal.age);
      if (animal.photos !== undefined) {
        animal.photos.map((item) => {console.log("Fotos: " + item.stringify())});
      } else {
        console.log("No hay fotos");
      }
    })
    {/*GET https://api.petfinder.com/v2/types/Dog*/ }
  }



  render() {
    return (
      <div>
        <h2>
          Perros
        </h2>
        {this.state.animales.map((animal) => {
          return (
            <Card>
              <Card.Body>
                <Card.Text>{animal.name}
                </Card.Text>
              </Card.Body>
              {/*<Card.Img variant="bottom" src={animal.photos[0].large} />*/}
            </Card>
          )
        })}

      </div>
    );
  }
}
export default AdoptaPerro;
