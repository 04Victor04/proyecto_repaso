import React from 'react';
import BootstrapHeader from './BootstrapHeader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdoptaPerro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perros: [],
    };
  }
  async componentDidMount() {
    
    var myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json')
    var myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    var myRequest = new Request('https://cors-anywhere.herokuapp.com/https://www.zaragoza.es/sede/servicio/proteccion-animal?rf=html&especie=Canina&start=0&rows=50', myInit);


    fetch(myRequest)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => 
        this.setState({
          perros: data.result,
        })
      );
  }
render(){
    return (
      <div>
          <h2>
           Perros
          </h2>
          <p>{this.state.perros.map(dog => {
            return (
                <p>{dog.title} {dog.raza}</p>
                
            );
          })}
          </p>
      </div>
    );
  }
}
  export default AdoptaPerro;
  