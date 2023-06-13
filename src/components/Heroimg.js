import "./HeroimgStyle.css";
import React from 'react'
import IntroImg from"../Assets/intro_bg.jpg"
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="Introimg"/>
        </div>
        <div className="content">
            <p>HI,I'M Jayesh Mundhra</p>
            <h1>FullStack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn_light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg
