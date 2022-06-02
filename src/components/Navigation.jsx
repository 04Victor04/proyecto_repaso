import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Boton from './Boton';
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap';

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
    
      return (
        <Nav>
          
          <Boton text="Logout" onClickButton={logout} />
        </Nav>
      );
    
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