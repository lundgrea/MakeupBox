import React from 'react';
import './CardContainer.css';
// import { connect } from 'react-redux';
import Cards from '../Cards/Cards'

export const CardContainer = ({data}) => {
  console.log('props coming in', data)


  const firstAnswerResults = data[0]
  // const secondAnswerResults = props.results[1]
  // const thirdAnswerResults = props.results[2]
 

  const firstCards = firstAnswerResults.map(result => {
    return (
        <div>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      )
  })
    
    return (
      <>
      <h2>selects</h2>
      {firstCards}
      </>
    )
}

export default CardContainer