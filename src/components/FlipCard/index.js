import React from "react";
import Col from "../Col";
import Container from "../Container";
import "./style.css"
import Row from "../Row";

function FlipCard() {
  return (
    <div>
      
        <Row className="row">
          <Col size="lg-4">
          <div className="skills">
            <div className="skill-front">
              <h2>Front End Skills</h2>
              <h6>(Flip Over)</h6>
            </div>
            <div className="skill-back">
              <h2>
                Front End Skills</h2>

                <p>React</p>
                <p>Next.js</p>
                <p>JavaScript</p>
                <p>Jekyll</p>
                <p>Ruby</p>
                <p>HTML</p>
                <p>CSS/SCSS</p>
                <p>jQuery</p>

              </div>
            </div>
            </Col>
            <Col size="lg-4">
            <div className="skills">
              <div className="skill-front">
                <h2>Back End Skills</h2>
                <h6>(Flip Over)</h6>

              </div>
              <div className="skill-back">
                <h2>Back End Skills</h2>
                <br/>
                <p>mySQL</p>
                <p>Sequelize</p>
                <p>MongoDB</p>
                <p>Mongoose</p>
                <p>Node.js</p>
                <p>Express</p>
              </div>
            </div>

            </Col>
            <Col size="lg-4">
            <div className="skills">
              <div className="skill-front">
                <h2>Content Management Systems</h2>
                <h6>(Flip Over)</h6>

              </div>
              <div className="skill-back">
                <h2>Content Management</h2>
                <br/>
                <p>Contentful</p>
                <p>WordPress</p>
                <p>iMIS Database</p>
              </div>
            </div>

            </Col>
        </Row>
      
      </div>
  );
}

export default FlipCard;