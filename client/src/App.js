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



function App() {
  return (
  
      <div>
        <Hero />
        <Navigation />
        <Wrapper>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </Wrapper>
        <Footer />
      </div>

  );
}

export default App;
