import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Thank You</h3>
          <p>
            Thank you for being part of our special day!
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Have questions? Feel free to reach out!
          </p>
          <a href="mailto:shulia@gmail.com" className="footer-link">
            shane.julia@example.com
          </a>
        </div>
        
        <div className="footer-section">
          <h3>Wedding Date</h3>
          <p>August 16, 2026</p>
          <p>The Big Stick, Washington DC</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Andre Gouws made this</p>
        <div className="footer-nav">
          <a href="#top" className="footer-nav-link">Home</a>
          <a href="#our-story" className="footer-nav-link">Our Story</a>
          <a href="#wedding-details" className="footer-nav-link">Details</a>
          <a href="#photo-gallery" className="footer-nav-link">Gallery</a>
          <a href="#rsvp" className="footer-nav-link">RSVP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
