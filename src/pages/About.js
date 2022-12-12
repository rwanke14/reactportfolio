import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ProfileImg from "../components/ProfileImg";
import "./css/about.css";
import Divider from "../components/sectonDivider";

function About() {
  return (
    <section id="about" className="about">
      <Container className="aboutCon">
        <h1>About Me</h1>
        <Row>
          <Col size="lg-4">
            <ProfileImg
              backgroundImage="../components/ProfileImg/RachelWankePort2.png"
              alt="headshot"
            />
          </Col>

          <Col size="lg-8">
            <p className="aboutMeText">
              Rachel is an experienced softward engineer who has worked for CircleCI for the past year. 
              She worked with their web optimization team to maintain and update the outer marketing site for CircleCI. 
              She spent time building landing pages, updating content, fixing bugs, maximizing search engine optimization, and regression testing.
              Rachel assisted in the production of the updated careers and contact us pages on the site. 
              While working on the website she got experience building with Jekyll, Ruby, and React/Next.js.
            </p>
            <p className="aboutMeText">
              Rachel volunteers as the Webmaster for the National Society Children of the American Revolution.
              She is responsible for updating, building, and maintaining their national website and database.
              Currently she is working on a complete redesign of their website to bring it up to modern design standards and imporve SEO.
              The organziation uses an iMIS based database that compiles the website, and Rachel is currently working to move that platform into a cloud format.
              The beginning stages of the newly designed website will be launching in late December.
            </p>
            <p className="aboutMeText">
              She is currently looking for work as a full stack web
              developer. Rachel is also open to freelance work and can be
              contacted through the contact form below.
              To learn more about my professional background please see my
              linkedIn profile or take a look at my resume in the contact
              information below.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
