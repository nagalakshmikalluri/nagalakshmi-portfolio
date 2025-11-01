import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="experience-info">
              <h3>Web Developer Intern</h3>
              <h4>PINNACLE</h4>
              <p className="duration">
                <i className="fas fa-calendar-alt"></i>
                May 2024 – July 2024
              </p>
            </div>
          </div>

          <div className="experience-description">
            <ul className="experience-list">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Developed a responsive website tailored to client needs, enhancing user experience and addressing real-world constraints.</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Collaborated with a cross-functional team to design and implement features using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>React.js</strong>.</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Designed intuitive user interfaces with <strong>Bootstrap</strong> and managed client data efficiently using <strong>Google Sheets</strong>.</span>
              </li>
            </ul>

            <div className="tech-stack">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Bootstrap</span>
              <span className="tech-tag">Google Sheets</span>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
