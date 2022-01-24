import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="bi bi-x-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i className="bi bi-brush option-icon"></i>
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i className="bi bi-laptop option-icon"></i>
            Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <i className="bi bi-building option-icon"></i>
            Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i className="bi bi-telephone option-icon"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
