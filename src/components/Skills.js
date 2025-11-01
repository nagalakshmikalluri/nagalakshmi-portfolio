import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: 'fas fa-globe',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL', level: 85 },
        { name: 'SQLite', level: 80 }
      ]
    },
    {
      title: 'AI/ML Tools',
      icon: 'fas fa-brain',
      skills: [
        { name: 'Hugging Face', level: 75 },
        { name: 'LLMs', level: 75 },
        { name: 'No-Code AI', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'JIRA', level: 80 },
        { name: 'Testing', level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: 'fas fa-users-cog',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Project Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="languages-section">
        <h3 className="languages-title">
          <i className="fas fa-language"></i>
          Languages
        </h3>
        <div className="languages-list">
          <div className="language-badge">
            <i className="fas fa-check-circle"></i>
            <span>English</span>
          </div>
          <div className="language-badge">
            <i className="fas fa-check-circle"></i>
            <span>Hindi</span>
          </div>
          <div className="language-badge">
            <i className="fas fa-check-circle"></i>
            <span>Telugu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
