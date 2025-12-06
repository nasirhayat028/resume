import React from 'react'
import './Section.css'

function Projects() {
  const projects = [
    {
      title: 'Multi-Service Docker Application',
      bullets: [
        'Built and containerized a Node.js + Redis application with proper service architecture',
        'Configured Docker Compose with volumes, secrets, and environment variables for production readiness',
        'Implemented healthchecks and networking between containers for reliable service communication',
        'Deployed using Docker Swarm stack with scaling capabilities for high availability',
        'Pushed production-ready images to Docker Hub for distribution and version control'
      ]
    },
    {
      title: 'Kubernetes Learning Cluster',
      bullets: [
        'Set up Minikube/Kind local cluster for hands-on Kubernetes practice',
        'Practiced kubectl commands, Deployments, Services, ConfigMaps, and Secrets management',
        'Implemented rolling updates and health probes for zero-downtime deployments',
        'Deployed containerized Node.js demo application with proper resource management'
      ]
    },
    {
      title: 'Fullstack Todo App (Docker + Node.js + MongoDB)',
      bullets: [
        'Built Node.js API with Mongoose, containerized backend and database services',
        'Implemented complete CRUD operations with proper error handling and validation',
        'Debugged frontend issues and fixed API integration for seamless user experience',
        'Containerized entire stack using Docker Compose with optimized networking and volumes'
      ]
    },
    {
      title: 'AWS Portfolio Deployment',
      bullets: [
        'Deployed portfolio site on AWS EC2 with proper security configurations',
        'Fixed inbound rules and exposure issues to ensure secure public access',
        'Configured NGINX hosting inside container for production-grade web serving'
      ]
    }
  ]

  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-bullets">
              {project.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="divider" />
    </section>
  )
}

export default Projects

