import React from 'react'
import './Section.css'

function TechnicalSkills() {
  const coreDevOpsSkills = [
    'Linux (daily driver)',
    'Docker & Containerization',
    'Docker Compose',
    'Docker Swarm',
    'Kubernetes (Minikube/Kind)',
    'Git, GitHub',
    'CI/CD fundamentals',
    'Bash scripting',
    'Node.js deployment',
    'Nginx configuration',
    'AWS EC2, S3 (beginner)',
    'Redis, MongoDB (with Docker)'
  ]

  const strengths = [
    'Systems thinking',
    'Automation mindset',
    'Problem-solving',
    'Fast learning (spaced repetition, active recall)',
    'Clear communication',
    'Ownership mentality',
    'Startup execution speed'
  ]

  const toolsTechnologies = [
    'VS Code',
    'GitHub Actions (beginner)',
    'Linux CLI',
    'Containers',
    'YAML',
    'JSON',
    'Express.js',
    'MongoDB',
    'Load-balancing basics',
    'Networking basics'
  ]

  return (
    <section className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="section-content">
        <div className="skills-subsection">
          <h3 className="subsection-title">Core DevOps Skills</h3>
          <div className="skills-list">
            {coreDevOpsSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-subsection">
          <h3 className="subsection-title">Strengths</h3>
          <div className="skills-list">
            {strengths.map((strength, index) => (
              <span key={index} className="skill-tag">{strength}</span>
            ))}
          </div>
        </div>

        <div className="skills-subsection">
          <h3 className="subsection-title">Tools & Technologies</h3>
          <div className="skills-list">
            {toolsTechnologies.map((tool, index) => (
              <span key={index} className="skill-tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
      <hr className="divider" />
    </section>
  )
}

export default TechnicalSkills

