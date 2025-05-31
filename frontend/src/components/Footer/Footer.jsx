import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> adipisicing elit. Saepe delectus consequatur assumenda similique unde laudantium temporibus non numquam exercitationem repellendus aspernatur, consequuntur, ab facilis officia atque! Omnis officia magnam harum!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+3-255-451-9857</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @tomato.com - All right reserved.</p>
    </div>
  )
}

export default Footer
