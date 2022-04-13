import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Route
} from "react-router-dom";
import uuid from "react-uuid";
import  {MenuItems}  from '../data/MenuItems';
import '../css/BootstrapHeader.css'

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand >Adopta tu Mascota</Navbar.Brand>
      <img id="img" src="https://www.zarla.com/images/zarla-nanny-can-1x1-2400x2400-20211020-3cx7cpbpy36bmc9gwj6h.png?crop=1:1,smart&width=250&dpr=2" width="70px" align="left"></img>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <ul>
          {MenuItems.map((item,index)=>{
            return( <li key={uuid()}><br></br><Link to={item.path}>{item.text}</Link><br></br></li>);
          })}
        </ul>
        {MenuItems.map(function creaRoute(item,index){
            return( <Route path={item.path} key={uuid()} exact={item.defaultRoute}> {item.componentSite}</Route>);
          })}
          </Nav>
          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    );
  }
}

export default BootstrapHeader;