import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <section id="hero" className="d-flex flex-column align-items-center justify-content-center">
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <h1 class="ml3 align-items-center justify-content-center">Rachel Wanke</h1>
            <h1 class="ml4 align-items-center justify-content-center">Web Developer</h1>
            <a href="#about" class="btn-get-started scrollto"><i class="bi bi-chevron-double-down"></i></a>
        </div>
    </section>
  );
}

export default Hero;