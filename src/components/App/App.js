import React, { Component } from 'react';
import './App.css'
import { fetchAllMakeup } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux'
import { isLoading, handleErrors } from "../../actions";

import PropTypes from 'prop-types'
import { Route, NavLink } from 'react-router-dom'

import './App.css';

export class App extends Component {
  constructor () {
    super()
    this.state = {
      makeup: []
    }
  }

  
  
  componentDidMount = async () => {
    try {
      const allMakeup = await fetchAllMakeup();
      this.props.isLoading(false)
      this.setState({makeup: allMakeup})
    } catch ({message}) {
      this.props.handleErrors(message)
      this.props.isLoading(false)
    }
  }

  render() {
    console.log(this.props)
    return (
      <main className="main">
        <h1>MAKEUP BOX</h1>
        {this.props.error && <p className="error">{this.props.error}</p>}
        {!!this.props.isLoading && <p className="loading">Page Is Loading</p>}
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
