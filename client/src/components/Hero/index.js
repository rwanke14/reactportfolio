import React from "react";
import "./style.css";
import { GreatThings } from 'moving-letters'

function Hero() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center">
        <div className="hero text-center">
          <GreatThings text='Rachel Wanke' />
          <GreatThings text='Web Developer' />
        </div>
    </section>
  );
}

export default Hero;