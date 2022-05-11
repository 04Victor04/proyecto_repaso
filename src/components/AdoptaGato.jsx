import React from 'react';
import BootstrapHeader from './BootstrapHeader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdoptaGato extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Perros: [],
    };
  }
  async componentDidMount() {
    fetch('https://www.zaragoza.es/sede/servicio/proteccion-animal/;jsessionid=bTayp2DEwHoTt7nqQVozbqP49Z2P-So5YxRvjKATOIM79DmCQEDa!1906617833?title=&especie=Felina&tamagno=&sexo=')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          Perros: data.perros,
        })
      );
  }
render(){
    return (
      <div>
          <h2>
           gatos
          </h2>
          {/*{data.map(dog => {
            return (
                <p>{dog.nombre}</p>
                <p>{dog.foto}</p>
            );
          })}*/}
      </div>
    );
  }
}
  export default AdoptaGato;
  