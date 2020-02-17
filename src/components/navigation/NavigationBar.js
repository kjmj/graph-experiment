import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../navPages/Home"
import Experiment from "../navPages/Experiment"
import {Nav, Navbar} from "react-bootstrap";

function NavigationBar() {
  return (
      <HashRouter basename="/">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#experiment">Experiment</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/experiment" component={Experiment} />
        </div>
      </HashRouter>
  );
}

export default NavigationBar;
