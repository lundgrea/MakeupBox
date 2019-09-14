import React, { Component } from 'react';
import './ResultsPage.css';
import { cleanedSearch } from '../../dataCleaner'
import { connect } from 'react-redux';
import { getResults, setResponses, isLoading, handleErrors } from "../../actions";
import { fetchMakeup } from '../../apiCalls/apiCalls';
import { CardContainer } from '../../components/CardContainer/CardContainer'

export class ResultsPage extends Component {
 
  async componentDidMount () {
    const searches = cleanedSearch(this.props.responses)
    try {
      this.props.isLoading(true)
      const firstResult = await fetchMakeup(searches[0])
      const secondResult = await fetchMakeup(searches[1])
      const thirdResult = await fetchMakeup(searches[2])
      this.props.getResults([firstResult, secondResult, thirdResult])
      this.props.isLoading(false);
    } catch ({message}) {
      this.props.handleErrors(message)
      this.props.isLoading(false)
    }
  }

  render() {
    console.log('this.props.results', this.props.results)
    return (
      <section>
        {this.props.error && <p className="error">{this.props.error}</p>}
        {this.props.isLoading && <p className="loading">Page Is Loading</p>}
        <h3>results</h3>
        {!this.isLoading && <CardContainer results={this.props.results}/>}
    </section>
    )
  }
}

export const mapStateToProps = store => ({
  responses: store.responses,
  results: store.results,
  isLoading: store.isLoading
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error)),
  getResults: results => dispatch(getResults(results)),
  setResponses: response => dispatch(setResponses(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)