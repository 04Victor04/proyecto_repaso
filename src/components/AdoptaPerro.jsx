import React from 'react';
import BootstrapHeader from './BootstrapHeader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdoptaPerro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Perros: [],
    };
  }
  async componentDidMount() {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart&amount=3')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          Perros: data.jokes,
        })
      );
  }
render(){
    return (
      <div>
          <h2>
           perro
          </h2>
          
      </div>
    );
  }
}
  export default AdoptaPerro;
  