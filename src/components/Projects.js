import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
  title: 'Expense Tracker',
  icon: 'fas fa-wallet',
  description: 'A smart budgeting tool to track expenses, manage monthly budgets, and visualize spending patterns.',
  features: [
    'Add, edit, and delete expenses with categories and dates',
    'Budget tracking with remaining balance updates',
    'Visual reports using Pie and Bar charts',
    'Data persistence using localStorage',
    'Light and Dark theme support'
  ],
  tech: ['React.js', 'Chart.js', 'LocalStorage', 'GitHub Pages'],
  gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
  githubLink: 'https://github.com/nagalakshmikalluri/ExpensiveTracker'
},
{
  title: 'Job Portal Application',
  icon: 'fas fa-briefcase',
  description: 'A full-stack Job Portal application built with Spring Boot, React.js, and MySQL, enabling faster job discovery with advanced search and filter features.',
  features: [
    'Advanced search and filter for jobs',
    'Role-based access with Employer/Job Seeker using JWT authentication',
    'Optimized REST endpoints reducing API response times by 35%',
    'Secure login and registration with JWT tokens',
    'Responsive UI built with React.js for seamless user experience'
  ],
  tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'REST APIs'],
  gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
  githubLink: 'https://github.com/nagalakshmikalluri/JobPortalApplication'
}
,

    {
      title: 'Job Community App',
      icon: 'fas fa-users',
      description: 'A full stack job community platform connecting students, freshers, and professionals for interview preparation and guidance.',
      features: [
        'Built with React.js and Node.js with MongoDB backend',
        'OTP-based authentication for secure registration',
        'Real-time messaging using Socket.IO',
        'Deployed backend on Railway with GitHub integration'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Railway'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      githubLink: 'https://github.com/nagalakshmikalluri/JobComminityApp'
    },
    {
      title: 'Generative AI Chatbot',
      icon: 'fas fa-robot',
      description: 'An intelligent chatbot and voicebot leveraging cutting-edge AI technologies for natural language understanding and generation.',
      features: [
        'Developed using Hugging Face and LLMs',
        'Python backend for API integration',
        'Fine-tuned pre-trained models for user interactions',
        'Voice recognition and response generation'
      ],
      tech: ['Python', 'Hugging Face', 'LLMs', 'No-Code AI'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      githubLink: 'https://github.com/nagalakshmikalluri/Ai-chatbot'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ '--gradient': project.gradient }}>
            <div className="project-header">
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3>{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-chevron-right"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-footer">
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
