import React, { Component } from 'react';
import './ResultsPage.css';
import { cleanedSearch, cleanedSearchResults } from '../../dataCleaner/dataCleaner'
import { connect } from 'react-redux';
import { getResults, isLoading, handleErrors } from "../../actions";
import { fetchMakeup } from '../../apiCalls/apiCalls';
import { CardContainer } from '../../components/CardContainer/CardContainer'


export class ResultsPage extends Component {
 
  async componentDidMount () {
    const searches = cleanedSearch(this.props.responses)
    try {
      this.props.isLoading(true)
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
    } catch ({message}) {
      this.props.handleErrors(message)
      this.props.isLoading(false)
    }
  }

  render() {
    return (
      <section className="results-page">
        <h3 className="results-page-headline">Your Results</h3>
        {this.props.loading && <p className="loading-sentence">Gathering Your Selects</p>}
        {this.props.errors && <p className="loading-sentence">{this.props.errors}</p>}
        {this.props.loading && <div className="loading-div"><img alt='loading' className='loading-animation' src="https://image21.net/103/loading_gif_png/loading_gif_png_59.gif"></img></div>}
        {!this.props.loading && <CardContainer category={this.props.responses} data={this.props.results}/>}
    </section>
    )
  }
}

export const mapStateToProps = store => ({
  errors: store.hasErrored,
  responses: store.responses,
  results: store.results,
  loading: store.isLoading
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error)),
  getResults: results => dispatch(getResults(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)


