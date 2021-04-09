import React from "react";
import Line from "./lineseperator.png"
import "./style.css";

function Divider() {
  return (
    <section className="center">
      <img className="lineDivider" src={Line} />
    </section>
  );
}

export default Divider;
