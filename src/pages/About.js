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
              Rachel is an asipring web developer who has worked in the
              Washington, DC area for the past six years as an adminstrative
              profession. As an admin professional she has built a solid
              foundation for problem solivng, which she applies to learning code
              and visual design. There is never a problem that is too big to
              solve! As Eleanor Roosevelt once said, "Nothing has ever been
              achieved by the person who says, 'It can't be done.'"
            </p>

            <p className="aboutMeText">
              Rachel received her certifcation in Full Stack Web Development
              from the George Washingon University in April 2021 to pursue her
              career in web development. After having her son in 2018, she
              realized she wasn't doing what she loved and decided to follow her
              passion and love of problem solving and learn the language of
              coding! She is currently looking for work as a full stack web
              developer. Rachel is also open to freelance work and can be
              contacted through the contact form below.
            </p>
            <p className="aboutMeText">
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
