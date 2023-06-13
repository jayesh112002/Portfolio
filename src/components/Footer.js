import "./FooterStyles.css";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>37/7 Adarsh colony</p>
                        <p>Panipat</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                8307746282</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                jayeshmundhra830@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>Copyright</h4>
                <p>Copyright @ 2023 Jayesh Mundhra.All Rights Reserved</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
