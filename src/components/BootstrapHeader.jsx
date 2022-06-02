import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from "react-uuid";
import logo from '../assets/imagenes/Captura1.PNG';
import { MenuItems } from '../data/MenuItems';
import Boton from './Boton';
import '../css/BootstrapHeader.css'

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <Navbar bg="light" expand={false}>
        <Container fluid>

          <Navbar.Brand ><img id="img" src={logo} width="70px" ></img>Adopta tu Mascota</Navbar.Brand>

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
                  {MenuItems.map((item, index) => {
                    if (!item.defaultRoute) {
                      return (<li key={uuid()}><br></br><Link to={item.path}>{item.text}</Link><br></br></li>);
                    }
                    })}
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default BootstrapHeader;