import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">

        {/* ✅ New Experience Card */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="experience-info">
              <h3>Full-Stack Developer Trainee</h3>
              <h4>NxtWave</h4>
              <p className="duration">
                <i className="fas fa-calendar-alt"></i>
                Jan 2025 – Aug 2025
              </p>
            </div>
          </div>

          <div className="experience-description">
            <ul className="experience-list">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Built multiple MERN stack projects implementing authentication, routing, and secure REST APIs.</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Gained strong hands-on skills in React.js, Node.js, Express.js, MongoDB, Git, and Agile workflows.</span>
              </li>
            </ul>

            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Git</span>
            </div>
          </div>
        </div>

        {/* ✅ Existing Experience Card */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-icon">
              <i className="fas fa-building"></i>
            </div>
            <div className="experience-info">
              <h3>Web Developer Intern</h3>
              <h4>Pinnacle Labs</h4>
              <p className="duration">
                <i className="fas fa-calendar-alt"></i>
                Dec 2024 – Jan 2025
              </p>
            </div>
          </div>

          <div className="experience-description">
            <ul className="experience-list">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Developed responsive frontend pages using React.js, improving UI usability and navigation.</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Worked on Node.js + Express.js API integrations to handle data and user requests smoothly.</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Used MongoDB and GitHub for data management and clean team collaboration.</span>
              </li>
            </ul>

            <div className="tech-stack">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">GitHub</span>
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

