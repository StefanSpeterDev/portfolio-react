import React from "react";
import "./about.css";
import Lottie from "react-lottie-player";
import web from "../../../lotties/web.json";
import Socials from "../../common/socials/Socials";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there &#128075;, I am<br/>
          <span className="info-name"> Stefan Speter</span>.<br /> Let me
          show you my love for IT.
        </div>
        <div className="about-photo">
          <Lottie loop animationData={web} play className="lottie-web" />
        </div>
      </div>
      <div className="about-bottom">Contacts</div>
      <Socials />
    </div>
  );
}

export default About;
