import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import Photo from "./RachelWankePort2.png";
import { FaFileAlt } from "react-icons/fa";

library.add(fab);
// import { fabGitHub, faLinkedIn, faPinterest, faInstagram } from "@fortawesome/react-fontawesome";

function ProfileImg() {
  return (
    <div className="image">
      <img className="Rachel" src={Photo} />

      <a href="https://github.com/rwanke14" className="github">
        <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
      </a>
      <a
        href="https://www.linkedin.com/in/rachel-wanke-038757b/"
        className="linkedIn"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
      </a>
      <a href="https://www.pinterest.com/rkhlaw/_saved/" className="pinterest">
        <FontAwesomeIcon icon={["fab", "pinterest"]} size="1x" />
      </a>
      <a href="https://www.instagram.com/rkhlaw26/" className="instagram">
        <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
      </a>
      <a href="https://www.facebook.com/rachel.horne.393" className="facebook">
        <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
      </a>
      <a
              href="https://docs.google.com/document/d/1tUZ-N2t_EZ34sKDhy56j1RG01nbNAeUGqk1MnumeHRg/edit?usp=sharing"
              className="resume"
            >
              <FaFileAlt  />
            </a>
    </div>
    //     <a href="https://www.linkedin.com/in/rachel-wanke-038757b/" className="" /a>
    //     <a href="https://www.pinterest.com/rkhlaw/_saved/"><i class="fab fa-pinterest"></i></a>
    //     <a href="https://www.instagram.com/rkhlaw26/"><i class="fab fa-instagram"></i></a>
    //     <a href="https://www.facebook.com/rachel.horne.393"><i class="fab fa-facebook"></i></a>
  );
}

export default ProfileImg;
