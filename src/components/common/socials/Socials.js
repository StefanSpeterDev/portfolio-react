import React from "react";
import { SocialData } from "../../data/social";
import "./socials.css";

function Socials() {
  const data = SocialData;
  return <div className="social-contact"> 
 {
      data.map((item) => {
          return (
          <a href={item.link} key={item.platform}>
            <div className="social-icon-div">
              <img src={ item.icon } className="social-icon" alt={item.platform }/>
            </div>
          </a>
          )
      })}
    </div>;
}

export default Socials;
