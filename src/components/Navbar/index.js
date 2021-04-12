import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";
//import Scroll from "react-scroll";

class Navigation extends React.Component {


  constructor (props){
    super(props);
  }



   render() {
    return (
      <Navbar expand="lg" variant="dark" sticky="top" >
        <Navbar.Brand className="brand" to="/">
          Rachel Wanke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto smooth-scroll">
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              About
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Skills
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Portfolio
            </Link>
            <Link
              className="nav-link"
              // onClick={this.handleScroll}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact= 'true'
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
