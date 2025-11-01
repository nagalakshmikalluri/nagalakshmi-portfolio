import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <img 
                src="/neelima-profilepic.jpg" 
                alt="Nagalakshmi Kalluri" 
                className="about-profile-image"
              />
            </div>
            <div className="floating-badge badge-1">
              <i className="fas fa-bug"></i>
              <span>Testing</span>
            </div>
            <div className="floating-badge badge-2">
              <i className="fas fa-code"></i>
              <span>Development</span>
            </div>
            <div className="floating-badge badge-3">
              <i className="fas fa-robot"></i>
              <span>AI/ML</span>
            </div>
          </div>
        </div>

        <div className="about-text">
          <h3>Aspiring Software Test Engineer</h3>
          <p className="about-description">
            I am a passionate and driven Computer Science graduate specializing in AI & ML, 
            with a strong foundation in <span className="text-highlight">Software Testing</span>, 
            <span className="text-highlight"> Automation</span>, and <span className="text-highlight">Full Stack Development</span>.
          </p>
          
          <p className="about-description">
            My journey in technology has equipped me with hands-on experience in developing 
            robust web applications using modern technologies like <strong>React.js</strong>, 
            <strong>Node.js</strong>, and <strong>SQL</strong>, while also gaining expertise 
            in automation testing and quality assurance.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="highlight-content">
                <h4>Education</h4>
                <p>B.Tech in CSE (AI & ML)</p>
                <p className="highlight-detail">CGPA: 8.34/10</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="highlight-content">
                <h4>Experience</h4>
                <p>Web Developer Intern</p>
                <p className="highlight-detail">PINNACLE (May-July 2024)</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="highlight-content">
                <h4>Focus Areas</h4>
                <p>Automation Testing</p>
                <p className="highlight-detail">Quality Assurance & Development</p>
              </div>
            </div>
          </div>

          <div className="about-skills-quick">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">JIRA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
