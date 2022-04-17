import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import "../css/ajustes.css";
function Ajustes() {
    return (
        <div>
          <h2>
           Ajustes
          </h2>
          <Button variant="outline-dark" size="lg" href="/Perfil">
             Perfil
           </Button>
           <br/>
           <Button variant="outline-dark" size="lg" href="/QuienesSomos">
             Quienes Somos
           </Button>
           <br/>
           <Button variant="outline-dark" size="lg" href="/FAQ">
             Preguntas y Respuestas
           </Button>
      </div>
    );
  }
  
  export default Ajustes;
  