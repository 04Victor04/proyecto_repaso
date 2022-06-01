import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "../css/ajustes.css";
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { MenuAjustes } from '../data/MenuAjustes';
function Ajustes() {
  return (
    <div>
      <h2>
        Ajustes
      </h2>
      
      <div class="centrado">
        <nav>
        {MenuAjustes.map((item) => {
          return (<li> <Button variant="outline-info" size="lg" key={uuid()}> <Link to={item.path}>{item.text}</Link></Button><p class="salto">p</p></li>);
        })}
        </nav>
        
      </div>
    </div>
  );
}

export default Ajustes;
