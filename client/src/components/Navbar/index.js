import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class Navigation extends React.Component {

  constructor (props){
    super(props);
  }

render() {
  
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="brand" href="#home">Rachel Wanke</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link  className="nav-item" href="#link">About</Nav.Link>
          <Nav.Link className="nav-item" href="#link">Skills</Nav.Link>
          <Nav.Link className="nav-item" href="#link">Portfolio</Nav.Link>
          <Nav.Link className="nav-item" href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
}

export default Navigation;
