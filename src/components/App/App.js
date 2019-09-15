import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import WelcomePage from '../WelcomePage/WelcomePage'
import Quiz from '../../containers/Quiz/Quiz'
import ResultsPage from '../../containers/ResultsPage/ResultsPage'

// import PropTypes from 'prop-types'


export class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true
    }
  }

  render() {
    return (
      <main className="main">
        <Nav />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/results' component={ResultsPage} />
      </main>
    )
  }
}

export default App
