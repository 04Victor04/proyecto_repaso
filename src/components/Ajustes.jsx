import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import "../css/ajustes.css";
import MenuAjustes from '../data/MenuAjustes.js';
function Ajustes() {
    return (
        <div>
          <h2>
           Ajustes
          </h2>
          <p class="salto">p</p>
          <div class="centrado">
           <Button variant="outline-dark" size="lg" >
             Perfil<Link to="FAQ"></Link>
           </Button>
           <br/>
           <p class="salto">p</p>
           <Button variant="outline-dark" size="lg" href="/QuienesSomos">
             Quienes Somos
           </Button>
           <br/>
           <p class="salto">p</p>
           <Button variant="outline-dark" size="lg" href="/FAQ">
             Preguntas y Respuestas
           </Button>
           </div>
      </div>
    );
  }
  
  export default Ajustes;
  