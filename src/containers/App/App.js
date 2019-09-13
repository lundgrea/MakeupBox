import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { isLoading, handleErrors } from "../../actions";
import { Route } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import WelcomePage from '../../components/WelcomePage/WelcomePage'
import Quiz from '../../components/Quiz/Quiz'
import ResultsPage from '../../components/ResultsPage/ResultsPage'

// import Home from '../../components/Home/Home';
// import SelectorPage from '../../components/SelectorPage/SelectorPage';
// import { fetchAllMakeup } from '../../apiCalls/apiCalls';
// import PropTypes from 'prop-types'


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
        <Nav />
        <section>
          {this.props.error && <p className="error">{this.props.error}</p>}
          {this.state.isLoading && <p className="loading">Page Is Loading</p>}
        </section>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/quiz' component={Quiz} />
        <Route path='/results' component={ResultsPage} />
      </main>
    )
  }
}

export const mapStateToProps = store => ({
  error: store.hasErrored,
  isLoading: store.isLoading
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
