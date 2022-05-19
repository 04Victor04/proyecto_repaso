import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../css/ajustes.css";
import { Link } from 'react-router-dom';
function Ajustes() {
  return (
    <div>
      <h2>
        Ajustes
      </h2>
      <p class="salto">p</p>
      <div class="centrado">
        <Link to="/Perfil">
          <Button variant="outline-dark" size="lg" >
            Perfil
          </Button>
        </Link>
        <br />
        <p class="salto">p</p>
        <Link to="QuienesSomos">
          <Button variant="outline-dark" size="lg">
            Quienes Somos
          </Button>
        </Link>
        <br />
        <p class="salto">p</p>
        <Link to="FAQ">
          <Button variant="outline-dark" size="lg">
            Preguntas y Respuestas
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Ajustes;
