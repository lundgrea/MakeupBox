import React from 'react';
import {Link} from 'react-router-dom'
import './WelcomePage.css'

export const WelcomePage = () => {
  return (
    <section>
      <h2>Welcome to makeupBOX</h2>
      <h3>no experience required</h3>
      <p>First, help us get to know you.</p>
      <Link to='/quiz' className='button-start-quiz'>START QUIZ</Link>
    </section>
  )
}

export default WelcomePage;