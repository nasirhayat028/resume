import React from 'react'
import './Section.css'

function Experience() {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="experience-item">
          <h3 className="experience-title">DevOps Internship (Ongoing)</h3>
          <ul className="experience-bullets">
            <li>Working on advanced Docker tasks including multi-stage builds, tagging/pushing, and private registries</li>
            <li>Building multi-container applications with Docker Swarm and resource limits</li>
            <li>Debugging real deployments and resolving production issues</li>
            <li>Practicing enterprise DevOps workflows and best practices</li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
    </section>
  )
}

export default Experience

