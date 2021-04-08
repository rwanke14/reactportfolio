import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Scroll from "react-scroll";

class Navigation extends React.Component {
  // constructor (props){
  //   super(props);
  // }

  render() {
    return (
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand className="brand" href="#home">
          Rachel Wanke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="nav-item" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-item" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-item" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-item" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
