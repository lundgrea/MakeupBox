import React from 'react';
import './Nav.css'
import { NavLink, Link } from 'react-router-dom';

export const Nav = () => {

const emptyFields = () => {
  console.log('in the empty')
}

return (
  <nav>
    <div classname="logo-lockup">
      <Link to='/'><h1 className="logo">TAKEUP</h1></Link>
      <h2 className="tagline">a makeup exploration tool for men</h2>
    </div>
    <NavLink to='/' onClick={emptyFields} className='nav-menu'> start over </NavLink>
   </nav>
   )
}

export default Nav

