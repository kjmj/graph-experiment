import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/experiment">Experiment</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavBar;
