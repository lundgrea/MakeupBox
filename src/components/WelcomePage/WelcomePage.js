import React from 'react';
import {Link} from 'react-router-dom'
import './WelcomePage.css'

export const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <h2 className="welcome-header">Welcome to TAKEUP</h2>
      <h3 className="welcome-subhead">A guided makeup exploration experience built just for men interested in taking up makeup.</h3>
      <h4 className="welcome-experience">No experience necessary.</h4>
      <p className="welcome-CTA">To start, help us get to know you. Complete the short quiz so we can get you on your way.</p>
      <Link to='/quiz'><button className='button-start-quiz'>START QUIZ</button></Link>
    </section>
  )
}

export default WelcomePage;