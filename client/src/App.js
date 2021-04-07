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

function App() {
  return (
    <div>
      <Hero />
      <Navigation />
      
        <Container>
          <Row>
            <About />
          </Row>
        </Container>

        <Container>
          <Row>
            <Skills />
          </Row>
        </Container>

        <Container>
          <Row>
            <Portfolio />
          </Row>
        </Container>
        <Container>
          <Row>
            <Contact />
          </Row>
        </Container>
      
      <Footer />
    </div>
  );
}

export default App;
