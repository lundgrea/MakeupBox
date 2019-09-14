import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

export const Nav = () => {

const emptyFields = () => {
  console.log('in the empty')
}

return (
  <nav>
    <h1>makeupBOX</h1>
    <NavLink to='/' onClick={emptyFields} className='nav'> Start Over </NavLink>
   </nav>
   )
}

export default Nav

