import "./AboutContentStyle.css";

import React from 'react';
import {Link} from "react-router-dom";
import React1 from "../Assets/about.webp"
import React2 from "../Assets/about1.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I?</h1>
        <p>
          Im a react front-end developer.I create
          responsive secure websites for my clients.
        </p>
        <Link to ="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
         <div className="img-container">
            <div className="img-stack top">
              <img src={React1} alt="about" className="img"/>
            </div>
            <div className="img-stack top">
              <img src={React2} alt="about" className="img"/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default AboutContent
