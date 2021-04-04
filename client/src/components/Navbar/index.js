
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(){

return(
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
<Link className="navbar-brand" to="/">
    Rachel Wanke
</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav navbar-dark">
          <li className="nav-item scrollto">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item scrollto">
            <Link
              to="/skills"
              className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item scrollto">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item scrollto">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
</nav>
)
}

export default Navbar;