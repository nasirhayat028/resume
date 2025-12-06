import React from 'react'
import Header from './components/Header'
import ProfessionalSummary from './components/ProfessionalSummary'
import CareerGoal from './components/CareerGoal'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import AdditionalInfo from './components/AdditionalInfo'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="resume-container">
        <Header />
        <ProfessionalSummary />
        <CareerGoal />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Education />
        <AdditionalInfo />
      </div>
    </div>
  )
}

export default App

