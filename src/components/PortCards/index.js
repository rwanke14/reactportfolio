import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./style.css";
import Billboard from "./images/BBEnter.png"
import Burger from "./images/burgerapp.png"
import Tarot from "./images/tarotcardsite.png"
import Weather from "./images/weatherdashboard.png"
import Password from "./images/passwordgenerator.png"
import Profile from "./images/profilegenerator.png"
import mindflo from "./images/mindflo.png"
import Directory from "./images/employeedirectory.png"
import Budget from "./images/budgettracker.png"

function PortCards() {
  return (
    <div>
      <Row>
      <Col size="lg-4">
          <div className="portStyle">
            <img src={mindflo} />
            <div className="info">
              <h1>Mindflo</h1>
              <p>Selfcare web application allowing a user to track their selfcare journey.</p>
              <p>React application built with Nodejs and Mongo for the backend server and database.</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://mindflo.herokuapp.com/#/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/mindflo"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src={Billboard} />
            <div className="info">
              <h1>Bechdel Billboard</h1>
              <p>
                Movie database and blog for users to discuss and look up movies
                that pass the bechdel test.
              </p>
              <p>Application is full CRUD and uses Nodejs, HTML, CSS, and MySQL.</p>
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
            <img src={Tarot} />
            <div className="info">
              <h1>Tarot Card Website</h1>
              <p>Basic tarot card website for new and experienced users.</p>
              <p>Uses HTML, CSS, JavaScript, and jQuery.</p>
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

      </Row>
      {/* <br />
      <br /> */}
      <Row>
      <Col size="lg-4">
          <div className="portStyle">
            <img src={Directory} />
            <div className="info">
              <h1>Employee Directory</h1>
              <p>
                Application using a randomized employee API to create and employee directory.
              </p>
              <p>React application using an external API.</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://rwanke14.github.io/employeedirectory/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/employeedirectory"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>
        <Col size="lg-4">
          <div className="portStyle">
            <img src={Burger} />
            <div className="info">
              <h1>Burger Database Application</h1>
              <p>
                Application that allows you to add, devour, and remove burgers
                using mySQL as the database.
              </p>
              <p>Uses Nodejs, HTML, CSS, and is full CRUD.</p>
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
        <Col size="lg-4">
          <div className="portStyle">
            <img src={Budget} />
            <div className="info">
              <h1>Budget Tracker Application</h1>
              <p>
                Application allows you to track your expenses online and offline.
              </p>
              <p>Uses Nodejs, HTML, CSS, MongoDB and IndexDB</p>
              <a
                className="btn btn-primary"
                id="liveButton"
                href="https://budgettracker-19.herokuapp.com/"
                role="button"
              >
                View Live
              </a>
              <a
                className="btn btn-primary"
                id="codeButton"
                href="https://github.com/rwanke14/budgettracker"
                role="button"
              >
                View Code
              </a>
            </div>
          </div>
        </Col>

      </Row>
      {/* <br />
      <br /> */}
      <Row>
        <Col size="lg-4">
          <div className="portStyle">
            <img src={Weather} />
            <div className="info">
              <h1>Weather Dashboard</h1>
              <p>Basic weather dashboard using OpenWeatherMap API</p>
              <p>Uses javascript, weather API, HTML and CSS.</p>
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
            <img src={Password} />
            <div className="info">
              <h1>Password Generator</h1>
              <p>Basic password generator using alerts.</p>
              <p>Uses Javascript, CSS, and HTML.</p>
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
            <img src={Profile} />
            <div className="info">
              <h1>Team Profile Generator</h1>
              <p>
                Basic team profile generation using node with inquirer and jest.
              </p>
              <p>Backend application using Nodejs.</p>
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
