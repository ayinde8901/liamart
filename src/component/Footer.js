import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" id='footer'>
      <div className="footer-content">
        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/commissions">Commissions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <h4>Follow Me</h4>
          <a href="https://x.com/liammckie4?s=21" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h4>Contact Me</h4>
          <p>Phone: <a href="tel:+16198775497">+1 (619) 877-5497</a></p>
          <p>Phone: <a href="tel:+19153009612">+1 (915) 300-9612</a></p>
        </div>
      </div>

      {/* Artist Statement */}
      <div className="artist-statement">
        <p>"Art is not what you see, but what you make others see." – Edgar Degas</p>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;