import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-container">
        <div className="education-card">
          <div className="education-icon-wrapper">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
          </div>

          <div className="education-content">
            <h3>Bachelor of Technology</h3>
            <h4>Computer Science with AI & ML</h4>
            <div className="education-institution">
              <i className="fas fa-university"></i>
              <span>Chalapathi Institute Of Engineering And Technology</span>
            </div>
            <div className="education-location">
              <i className="fas fa-map-marker-alt"></i>
              <span>Andhra Pradesh, India</span>
            </div>
            <div className="education-details">
              <div className="detail-item">
                <i className="fas fa-calendar"></i>
                <span>August 2021 – July 2025</span>
              </div>
              <div className="detail-item gpa">
                <i className="fas fa-star"></i>
                <span>GPA: <strong>8.34 / 10</strong></span>
              </div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="certifications-title">
            <i className="fas fa-certificate"></i>
            Certifications
          </h3>
          
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="cert-content">
                <h4>30 Days Coding Challenge</h4>
                <p>NxtWave</p>
                <span className="cert-badge">Completed</span>
              </div>
            </div>

            <div className="certification-card">
              <div className="cert-icon">
                <i className="fab fa-react"></i>
              </div>
              <div className="cert-content">
                <h4>React.js</h4>
                <p>NxtWave</p>
                <span className="cert-badge">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
