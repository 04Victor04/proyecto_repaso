import React, { useRef } from 'react';
import Boton from './Boton';
import { Container,Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { Users } from "../data/Users";
import logo from '../assets/imagenes/Captura1.PNG';

export default function Login(){
  
  const history = useHistory();
  const nameInput = useRef();
  const pwdInput = useRef();

  const logUser = () => {

    const user = Users.find(item => item.name === nameInput.current.value && item.password === pwdInput.current.value);

    if (user !== undefined) {
      localStorage.setItem('loggedIn', true);
      history.push("/home");
    }
  }

  return (
    <>
     <h1>Inicio de sesión</h1>
     <img src={logo}></img>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario: </Form.Label>
            <Form.Control ref={nameInput} type="text" placeholder="Usuario" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña: </Form.Label>
            <Form.Control ref={pwdInput} type="password" placeholder="Contraseña" />
            </Form.Group>
          
          <Boton text="Login" onClickButton={logUser} />
        </Form>
      </Container>
    </>
  );
}