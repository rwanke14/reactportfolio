import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from "react-bootstrap"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navbar";
import Row from "./components/Row";
// import Container from "./components/Container";
import Divider from "./components/sectonDivider";
import Col from "./components/Col";
import Switch from "react-bootstrap/esm/Switch";


function App() {
  return (
    <div className="main">
      <Router>
        <Hero />
        <Navigation />
        <Switch>
          <Container>
            <Row>
              <Col size="lg-12">
                <Container>
                  <Row>
                    {/* <Route path="/about" component={About}/> */}
                    <About title="about" dark={true} />
                    <Divider className="divider" />
                  </Row>
                </Container>
              </Col>

              <Col size="lg-12">
                <Container>
                  <Row>
                    {/* <Route path="/skills" component={Skills}/> */}
                    <Skills title="skills" dark={true} />
                    <Divider className="divider" />
                  </Row>
                </Container>
              </Col>

              <Col size="lg-12">
                <Container>
                  <Row>
                    {/* <Route path="/portfolio" component={Portfolio}/> */}
                    <Portfolio title="portfolio" dark={true} />
                    <Divider className="divider" />
                  </Row>
                </Container>
              </Col>

              <Col size="lg-12">
                <Container>
                  <Row>
                    {/* <Route path="/contact" component={Contact}/> */}
                    <Contact title="contact" dark={true} />
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
