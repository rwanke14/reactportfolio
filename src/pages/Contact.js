import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab} from "@fortawesome/free-brands-svg-icons";
import { FaFileAlt } from "react-icons/fa";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./css/contact.css";
import ContactForm from "../components/ContactForm";


library.add(fab);

function Contact() {
  return (

      <section id="contact" className="contact">
        <Container>
          <h1>Contact</h1>
        </Container>
        <Row>
          <Col size="lg-6">
            <h5 className="contactDesc">Want to know more?</h5>
            <p className="contactInfo">
              If you are interested in learning more about me or have a work
              request please contact me by phone or email.{" "} 
            </p>
            <a
              className="resume"
              href="https://docs.google.com/document/d/1tUZ-N2t_EZ34sKDhy56j1RG01nbNAeUGqk1MnumeHRg/edit?usp=sharing"
            >
              Resume
            </a>
            <br />
            <p className="contactInfo">Phone: 919-306-4168</p>
            <p className="contactInfo">Email: rkhorne09@gmail.com</p>
            <br />
            <h5 className="contactInfo">Connect with me on social media!</h5>
            <a href="https://github.com/rwanke14" className="github">
              <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
            </a>
            <a
              href="https://www.linkedin.com/in/rachel-wanke-038757b/"
              className="linkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
            </a>
            <a
              href="https://www.pinterest.com/rkhlaw/_saved/"
              className="pinterest"
            >
              <FontAwesomeIcon icon={["fab", "pinterest"]} size="1x" />
            </a>
            <a href="https://www.instagram.com/rkhlaw26/" className="instagram">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
            </a>
            <a
              href="https://www.facebook.com/rachel.horne.393"
              className="facebook"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
            </a>
            <a
              href="https://docs.google.com/document/d/1tUZ-N2t_EZ34sKDhy56j1RG01nbNAeUGqk1MnumeHRg/edit?usp=sharing"
              className="resume"
            >
              <FaFileAlt  />
            </a>
          </Col>
          <Col size="lg-6">
            <ContactForm />
          </Col>
        </Row>
      </section>
    
  );
}

export default Contact;
