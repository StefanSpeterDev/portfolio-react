import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i className="bi bi-brush option-icon"></i>
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i className="bi bi-laptop option-icon"></i>
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i className="bi bi-building option-icon"></i>
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i className="bi bi-telephone option-icon"></i>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
