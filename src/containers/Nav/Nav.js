import React from 'react';
import './Nav.css'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearResults, clearResponses } from '../../actions';
import PropTypes from 'prop-types';


export const Nav = (props) => {

const emptyFields = () => {
  props.clearResults();
  props.clearResponses();
};

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
   );
};

export const mapDispatchToProps = dispatch => ({
  clearResults: () => dispatch(clearResults()),
  clearResponses: () => dispatch(clearResponses())
});


export default connect(null, mapDispatchToProps)(Nav);


Nav.propTypes = {
  clearResponses:PropTypes.func.isRequired,
  clearResults:PropTypes.func.isRequired,
};
