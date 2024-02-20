import React from "react";
import './footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-content-container">
          <div className="footer-content">
            <h3>Island Bites</h3>
            <p>Explore endless recipes effortlessly with Island Bites.
              Create, discover, and enjoy delicious meals at your fingertips. 
              <br />Happy cooking with Island Bites!</p>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="list">
              <a href="#!">Home</a>
              <a href="#!">Recipes</a>
              <a href="#!">Favorites</a>
              <a href="#!">Upload</a>
              <a href="#!">Profile</a>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <a href="https://www.facebook.com" role="button"><FaFacebookF /></a>
              <a href="https://twitter.com" role="button"><FaTwitter /></a>
              <a href="https://lk.linkedin.com" role="button"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com" role="button"><FaInstagram/></a>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2024 Island Bites (CS-7) | All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
