import React from 'react';
import Boton from './Boton';
import { useHistory } from 'react-router-dom';

function Perfil() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("loggedUser");
    history.push("/");
  }
    return (
      <div>
        <br/>
          <h4>
           Perfil
          </h4>

          <Boton text="Logout" onClickButton={logout} />


          
      </div>
    );
  }
  
  export default Perfil;