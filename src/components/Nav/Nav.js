import React from 'react';
import './Nav.css'
import { NavLink, Link } from 'react-router-dom';

export const Nav = () => {

const emptyFields = () => {
  console.log('in the empty')
}

return (
  <nav>
    <div className='logo-lockup'>
      <header>
        <img className='logo-image' alt='logo' src='https://image.flaticon.com/icons/png/512/2081/2081669.png'/>
        <Link to='/'><h1 className='logo'>TAKEUP</h1></Link>
      </header>
      <h2 className='tagline'>a makeup exploration tool for men</h2>
    </div>
    <NavLink to='/' onClick={emptyFields} className='nav-menu'> start over </NavLink>
   </nav>
   )
}

export default Nav

