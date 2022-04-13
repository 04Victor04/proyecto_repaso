import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Button, Offcanvas, Form, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  {MenuItems}  from '../data/MenuItems';

class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Navbar bg="light" expand={false}>
    <Container fluid>
      <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {MenuItems.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    );
  }
}

export default BootstrapHeader;