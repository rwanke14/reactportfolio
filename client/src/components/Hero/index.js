import React from "react";
import "./style.css";
import { GreatThings } from 'moving-letters'
import background from "./portartbackground.png"

function Hero() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="hero text-center">
          <GreatThings text='Rachel Wanke' />
          <GreatThings text='Web Developer' />
        </div>
    </section>
  );
}

export default Hero;