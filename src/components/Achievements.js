import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: 'fas fa-trophy',
      title: 'Environmental Awareness Quiz - 1st Place',
      description: 'Secured first place in an environmental awareness quiz conducted at college and received a cash prize.',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    },
    {
      icon: 'fas fa-code',
      title: 'Coding Competition Excellence',
      description: 'Achieved a high score in a college-level coding competition, demonstrating strong understanding of algorithms and programming concepts.',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Leadership',
      description: 'Led a 4-member team during a 2-month internship project, successfully delivering a web application under tight deadlines.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)'
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>
      
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-glow" style={{ background: achievement.gradient }}></div>
            
            <div className="achievement-icon" style={{ background: achievement.gradient }}>
              <i className={achievement.icon}></i>
            </div>

            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>

            <div className="achievement-decoration">
              <div className="sparkle sparkle-1">✨</div>
              <div className="sparkle sparkle-2">✨</div>
              <div className="sparkle sparkle-3">✨</div>
            </div>
          </div>
        ))}
      </div>

      <div className="highlights-section">
        <h3 className="highlights-title">
          <i className="fas fa-star"></i>
          Educational Highlights
        </h3>
        <div className="highlights-list">
          <div className="highlight-badge">
            <i className="fas fa-check-double"></i>
            <span>Strong Communication Skills</span>
          </div>
          <div className="highlight-badge">
            <i className="fas fa-check-double"></i>
            <span>Creative Problem Solver</span>
          </div>
          <div className="highlight-badge">
            <i className="fas fa-check-double"></i>
            <span>Effective Team Collaboration</span>
          </div>
          <div className="highlight-badge">
            <i className="fas fa-check-double"></i>
            <span>Project Management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
