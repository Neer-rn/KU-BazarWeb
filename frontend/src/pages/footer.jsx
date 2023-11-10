// Footer.jsx
import React from 'react';
//import './Footer.css'; // You can style your footer in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget sem vel leo aliquam tincidunt.
          </p>
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
          <h3>Follow Us</h3>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <br />
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;  Copyright KU-Bazar 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
