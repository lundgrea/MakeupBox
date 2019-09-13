import React, { Component } from 'react';
import './App.css';
import { fetchAllMakeup } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import { isLoading, handleErrors } from "../../actions";
import Home from '../../components/Home/Home';
import SelectorPage from '../../components/SelectorPage/SelectorPage';
import { Route, NavLink } from 'react-router-dom';

import PropTypes from 'prop-types'

import './App.css';

export class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount = async () => {
    // try {
    //   const allMakeup = await fetchAllMakeup();
    //   this.props.isLoading(false)
    //   this.setState({makeup: allMakeup, isLoading: false})

    // } catch ({message}) {
    //   this.props.handleErrors(message)
    //   this.props.isLoading(false)
    // }
  }

  render() {
    return (
      <main className="main">
        <Nav/>
      </main>
    )
  }
}









//   render() {
//     console.log(this.props)
//     return (
//       <main className="main">
//         <nav>
//           <h1>MAKEUP BOX</h1>
//           <NavLink to='/' className='nav'> Home </NavLink>
//           <NavLink to='/brands' className='nav'> Brands </NavLink>
//           <NavLink to='/makeup' className='nav'> Makeup </NavLink>
//           <NavLink to='/tags' className='nav'> Tags </NavLink>
//         </nav>
//         <section>
//           {this.props.error && <p className="error">{this.props.error}</p>}
//           {this.state.isLoading && <p className="loading">Page Is Loading</p>}
//         </section>
//         <section>
//           <Route exact path='/' component={Home} />
//           <Route path='/brands' component={SelectorPage} />
//           <Route path='/makeup' component={SelectorPage} />
//           <Route path='/tags' component={SelectorPage} />
//         </section>
//       </main>
//     )
//   }


export const mapStateToProps = store => ({
  error: store.hasErrored,
  isLoading: store.isLoading
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
