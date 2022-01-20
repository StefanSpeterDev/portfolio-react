import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Stefan Speter</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        {/* We show that part only on mobile */}
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-three-dots-vertical menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
