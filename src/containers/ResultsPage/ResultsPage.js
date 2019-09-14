import React, { Component } from 'react';
import './ResultsPage.css';
import { cleanedSearch, cleanedSearchResults } from '../../dataCleaner'
import { connect } from 'react-redux';
import { getResults, setResponses, isLoading, handleErrors } from "../../actions";
import { fetchMakeup } from '../../apiCalls/apiCalls';
import { CardContainer } from '../../components/CardContainer/CardContainer'


export class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount () {
    const searches = cleanedSearch(this.props.responses)
    try {
      this.props.isLoading(true)
      this.setState({isLoading: true})
      const firstResult = await fetchMakeup(searches[0])
      const cleanedFirstData = await cleanedSearchResults(firstResult)
      this.props.getResults(cleanedFirstData)
      const secondResult = await fetchMakeup(searches[1])
      const cleanedSecondData = await cleanedSearchResults(secondResult)
      this.props.getResults(cleanedSecondData)
      const thirdResult = await fetchMakeup(searches[2])
      const cleanedThirdData = await cleanedSearchResults(thirdResult)
      this.props.getResults(cleanedThirdData)
      this.props.isLoading(false);
      this.setState({isLoading: false})
    } catch ({message}) {
      this.props.handleErrors(message)
      this.props.isLoading(false)
      this.setState({isLoading: false})
    }
  }

  render() {
    return (
      <section className="results-page">
        <h3 className="results-page-headline">Your Results</h3>
        {this.state.isLoading && <p className="loading">Gathering Your Selects</p>}
        {!this.state.isLoading && <CardContainer category={this.props.responses} data={this.props.results}/>}
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
  getResults: (results) => dispatch(getResults(results)),
  setResponses: response => dispatch(setResponses(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)