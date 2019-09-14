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
      isLoading: false
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
      <section>
        {/* {this.props.error && <p className="error">{this.props.error}</p>} */}
        {this.state.isLoading && <p className="loading">Page Is Loading</p>}
        <h3>results</h3>
        {!this.state.isLoading && <CardContainer results={this.props.results} />}
  
    </section>
    )
  }
}

export const mapStateToProps = store => ({
  responses: store.responses,
  results: store.results,
  // results1: store.results1,
  // results2: store.results2,
  // results3: store.results3,
  isLoading: store.isLoading
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error)),
  getResults: (results) => dispatch(getResults(results)),
  // getResultsOne: (results, num) => dispatch(getResultsOne(results, num)),
  // getResultsTwo: (results, num) => dispatch(getResultsTwo(results, num)),
  // getResultsThree: (results, num) => dispatch(getResultsThree(results, num)),
  setResponses: response => dispatch(setResponses(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)