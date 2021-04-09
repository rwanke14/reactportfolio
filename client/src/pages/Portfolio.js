import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./css/portfolio.css"
import PortCards from "../components/PortCards";
import Wrapper from "../components/Wrapper";

function Portfolio() {
  return (
    
      <section id="portfolio" className="portfolio">
        <Wrapper className="wrapper">
        <Container>
          <h1>Portfolio</h1>
          <PortCards />
        </Container>
        </Wrapper>
      </section>
    
  );
}

export default Portfolio;
