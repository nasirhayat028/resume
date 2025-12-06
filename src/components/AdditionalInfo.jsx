import React from 'react'
import './Section.css'

function AdditionalInfo() {
  return (
    <section className="section">
      <h2 className="section-title">Additional Information</h2>
      <div className="section-content">
        <div className="additional-subsection">
          <h3 className="subsection-title">Certifications</h3>
          <p className="additional-text"><em>Available upon request</em></p>
        </div>

        <div className="additional-subsection">
          <h3 className="subsection-title">Languages</h3>
          <p className="additional-text">English (Fluent) | Urdu (Native)</p>
        </div>

        <div className="additional-subsection">
          <h3 className="subsection-title">Personal Note</h3>
          <p className="additional-text">
            Motivated to relocate to Australia in the future to pursue DevOps career opportunities.
          </p>
        </div>

        <div className="additional-subsection">
          <h3 className="subsection-title">Interests</h3>
          <p className="additional-text">Cloud computing | Distributed systems | DevOps tooling</p>
        </div>
      </div>
      <div className="footer-note">
        <p><em>Resume prepared with ATS optimization in mind. Last updated: 2024</em></p>
      </div>
    </section>
  )
}

export default AdditionalInfo

