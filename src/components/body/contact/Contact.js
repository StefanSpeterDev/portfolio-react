import Separator from "components/common/separator/Separator";
import Socials from "components/common/socials/Socials";
import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            If you are interested by my profile and want to get in touch, here
            are my socials :
          </p>
          <Socials />
        </div>
        <div className="download">
          <a download href={"./StefanResume.pdf"}>
            <i className="bi bi-box-arrow-down"></i>Download my resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
