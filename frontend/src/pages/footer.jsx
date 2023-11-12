// Footer.jsx
import React from 'react';
//import './Footer.css'; // You can style your footer in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <div className="footer-section">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive updates and offers straight to your inbox.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email" /> <br/>
            <button>Subscribe</button>
          </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>
          Dhulikhel, Nepal
          <br />
            Email: neerrn2552@gmail.com
            <br />
            Phone: +977 9761665790
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Signup/Login</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy;  Copyright KU-Bazar 2023. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
