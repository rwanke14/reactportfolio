import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Navigation from "./components/Navbar";
import Row from "./components/Row";
import Container from "./components/Container";
import Divider from "./components/sectonDivider";
import Col from "./components/Col";

function App() {
  return (
    <div className="main">
      
      <Hero />
      <Navigation />
      <Container>
      <Row>
        <Col size="lg-12">
          <Container>
            <Row>
              <About />
              <Divider className="divider"/>
            </Row>
          </Container>
        </Col>

        <Col size="lg-12">
          <Container>
            <Row>
              <Skills />
              <Divider className="divider"/>
            </Row>
          </Container>
        </Col>

        <Col size="lg-12">
          <Container>
            <Row>
              <Portfolio />
              <Divider className="divider"/>
            </Row>
          </Container>
        </Col>

        <Col size="lg-12">
          <Container>
            <Row>
              <Contact />
              
            </Row>
          </Container>
        </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
