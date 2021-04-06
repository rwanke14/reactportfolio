import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import Photo from "./canvaprofile.png"
import { faGitHub, faLinkedIn, faPinterest, faInstagram, faFacebook } from "@fortawesome/react-fontawesome";

function ProfileImg() {
    return (
    <img className="Rachel" src={Photo} />
//     <a href="https://github.com/rwanke14"  className="github social" /a>
//     <a href="https://www.youtube.com/c/jamesqquick"
//     className="youtube social">
//     <FontAwesomeIcon icon={faYoutube} size="2x" />
//   </a>
//     <a href="https://www.linkedin.com/in/rachel-wanke-038757b/" className="" /a>
//     <a href="https://www.pinterest.com/rkhlaw/_saved/"><i class="fab fa-pinterest"></i></a>
//     <a href="https://www.instagram.com/rkhlaw26/"><i class="fab fa-instagram"></i></a>
//     <a href="https://www.facebook.com/rachel.horne.393"><i class="fab fa-facebook"></i></a>
    )
}

export default ProfileImg;