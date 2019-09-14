import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
return (
  <nav>
    <h1>makeupBOX</h1>
    <NavLink to='/' className='nav'> Start Over </NavLink>
   </nav>
   )
}

export default Nav

