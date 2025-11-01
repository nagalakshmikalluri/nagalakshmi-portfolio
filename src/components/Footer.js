import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-brand">Nagalakshmi Kalluri</h3>
          <p className="footer-tagline">
            Aspiring Software Test Engineer | Full Stack Developer
          </p>
          <div className="footer-social">
            <a href="https://github.com/nagalakshmikalluri" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nagalakshmikalluri" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:nagalakshmikalluri27@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919346762067">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <ul className="footer-links">
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <div className="footer-contact">
            <p>
              <i className="fas fa-envelope"></i>
              nagalakshmikalluri27@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +91-9346762067
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Andhra Pradesh, India
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Nagalakshmi Kalluri. Built with <i className="fas fa-heart"></i> using React.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
