import "./FooterStyles.css";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <a href="https://goo.gl/maps/UmBX8Dm3fm3kep2w6">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </a>
                    <div>
                        <p>37/7 Adarsh colony</p>
                        <p>Panipat</p>
                    </div>
                </div>
                <div className="phone">
                <a href="tel:8307746282" class="button button-positive">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                8307746282</h4>
                </a>
                </div>
                <div className="email">
                <a href="http://localhost:3000/contact">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                jayeshmundhra830@gmail.com</h4>
                </a>
                </div>
            </div>

            <div className="right">
                <h4>Copyright</h4>
                <p>Copyright @ 2023 Jayesh Mundhra.All Rights Reserved</p>
                <div className="social">
                <a href="https://www.facebook.com/jayesh.mundhra.75/">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                </a>
                <a href="https://twitter.com/jayesh_mundhra?t=oCV8enBp5pKIaEL6FyHRhw&s=09">
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </a>
                <a href="https://linkedin.com/in/jayesh/mund hra579a341ba">
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
