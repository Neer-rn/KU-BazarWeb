// Footer.jsx
import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <div className="footer-section">
      <div className='sub'>
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get exclusive updates and offers straight to your inbox.</p>
          <div className="subscribe-form">
            <input className='input_email' type="email" placeholder="Your email" /> <br/>
            <button>Subscribe</button>
            </div>
          </div>
        <div className="footer-section">
        <div className='sub'>
          <h3>Contact Information</h3>
          <p>
          Dhulikhel, Nepal
          <br />
            neerrn2552@gmail.com
            <br />
              +977 9761665790
          </p>
          </div>
        </div>
        
        <div className="footer-section">
        <div className='sub'>
          <h3>Account</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">Signup/Login</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
          </div>
        </div>

        <div className="footer-section">
        <div className='sub'>
          <h3>Download App</h3>
          <div className="download-app">
            <img src="google-play-store.png" alt="Google Play Store" />
            <div className="qr-code">
              <img src="qr-code.png" alt="QR Code" />
            </div>
          </div>
          <div className="social-media">
            <img src="twitter-logo.png" alt="Twitter" />
            <img src="facebook-logo.png" alt="Facebook" />
          </div>
          </div>
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
