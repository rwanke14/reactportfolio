import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

function PortCards() {
  return (
    <div>
      <Row>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/lineseperator.png" />
            <div className="info">
              <h1>Bechdel Billboard</h1>
              <p>
                Movie database and blog for users to discuss and look up movies
                that pass the bechdel test.
              </p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://bechdelbillboard.herokuapp.com/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/BechdelBillboard"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/portfolio/tarotcardsite.png" />
            <div className="info">
              <h1>Tarot Card Website</h1>
              <p>Basic tarot card website for new and experienced users.</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://rwanke14.github.io/AceOfPentacles/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/AceOfPentacles"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/portfolio/burgerapp.png" />
            <div className="info">
              <h1>Burger Database Application</h1>
              <p>
                Application that allows you to add, devour, and remove burgers
                using mySQL as the database.
              </p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://delicious-burgers.herokuapp.com/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/burgerlogger"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/portfolio/weatherdashboard.png" />
            <div className="info">
              <h1>Weather Dashboard</h1>
              <p>Basic weather dashboard using OpenWeatherMap API</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://rwanke14.github.io/WeatherAPI/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/WeatherAPI"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/portfolio/passwordgenerator.png" />
            <div className="info">
              <h1>Password Generator</h1>
              <p>Basic password generator using alerts.</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://rwanke14.github.io/randomizedpassword/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/randomizedpassword"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src="./assets/images/portfolio/profilegenerator.png" />
            <div className="info">
              <h1>Team Profile Generator</h1>
              <p>
                Basic team profile generation using node with inquirer and jest.
              </p>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/teamprofilegenerator"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PortCards;
