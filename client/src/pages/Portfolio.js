import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./css/portfolio.css"
import PortCards from "../components/PortCards";
import Wrapper from "../components/Wrapper";

function Portfolio() {
  return (
    <div>
      <section className="portfolio">
        <Wrapper>
        <Container>
          <h1>Portfolio</h1>
          <PortCards />
        </Container>
        </Wrapper>
      </section>
    </div>
  );
}

export default Portfolio;
