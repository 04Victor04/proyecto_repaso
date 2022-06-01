import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MenuOptions from './MenuOptions';
import Boton from './Boton';
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap';
import { BOOTSTRAP_LG_SIZE } from '../data/Constants';

import '../css/navigation.css';

export default function Navigation(props) {

  const [ width, setWidth ] = useState();
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  });

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    history.push("/");
  }

  const generateMenu = () => {
    if (width < BOOTSTRAP_LG_SIZE) {
      return (
        <>

            <Offcanvas.Body>
              <Nav>
                <MenuOptions baseUrl={props.baseUrl} />
                <Boton text="Logout" onClickButton={logout} />
              </Nav>
            </Offcanvas.Body>
          
        </>
      );
    } else {
      return (
        <Nav>
          
          <Boton text="Logout" onClickButton={logout} />
        </Nav>
      );
    }
  };

  if (!props.authorized) {
    return (<></>);
  }
  else {
    let options = generateMenu();

    return (
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">
            
          </Navbar.Brand>
          {options}
        </Container>
      </Navbar>
    );
  }
}