import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, Link, useRouteMatch 
} from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import "../css/ajustes.css";
import uuid from 'react-uuid';
import { MenuAjustes } from '../data/MenuAjustes';
import BootstrapHeader from './BootstrapHeader';
function Ajustes() {
  const {path, url} = useRouteMatch();
  return (
    <div>
      
      <BootstrapHeader/>
      <h2>
        Ajustes
      </h2>
      
      <div class="centrado">
        <Container>
        <Row>
        {MenuAjustes.map((item, index) => {
          return ( <Col variant="outline-info" size="lg" key={uuid()} > <Link to={`${url}/${item.path}`}>{item.text}</Link></Col>);
        })}
        </Row>
        </Container>
        <Switch>
          {MenuAjustes.map((item, index) => {
            return (<Route path={`${path}/${item.path}`} >{item.componentSite}</Route>);
          })}
        </Switch>
      </div>
    </div>
  );
}

export default Ajustes;
