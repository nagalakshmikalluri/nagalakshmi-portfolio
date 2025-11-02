import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="wave">👋</span>
            <span>Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            Nagalakshmi Kalluri
          </h1>
          <h2 className="hero-subtitle">
            Aspiring Software Test Engineer
          </h2>
          <p className="hero-description">
            Passionate about building high-quality software with expertise in 
            <span className="highlight"> Automation Testing</span>, 
            <span className="highlight"> Full Stack Development</span>, and 
            <span className="highlight"> AI Integration</span>. 
            Ready to contribute to innovative testing solutions.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              <i className="fas fa-code"></i>
              View Projects
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/nagalakshmikalluri" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nagalakshmi-kalluri/" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-linkedin"></i>
</a>

            <a href="mailto:nagalakshmikalluri27@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+919346762067" className="social-link">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="profile-container">
              <img 
                src="/neelima-profilepic.jpg" 
                alt="Nagalakshmi Kalluri" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
