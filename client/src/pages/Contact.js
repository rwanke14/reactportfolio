import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./css/contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div>
      <section className="contact">
        <Container>
          <h1>Contact</h1>
        </Container>
        <Row>
          <Col size="6">
            <h5 className="contactDesc">Want to know more?</h5>
            <p className="contactInfo">
              If you are interested in learning more about me or have a work
              request please contact me by phone or email.{" "}
            </p>
            <a
              className="contactInfo"
              href="https://docs.google.com/document/d/1tUZ-N2t_EZ34sKDhy56j1RG01nbNAeUGqk1MnumeHRg/edit?usp=sharing"
            >
              Resume
            </a>
            <p className="contactInfo">Phone: 919-306-4168</p>
            <p className="contactInfo">Email: rkhorne09@gmail.com</p>
            <br />
            <h5 className="contactInfo">Connect with me on social media!</h5>
          </Col>
          <Col size="6">
            <ContactForm />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Contact;
