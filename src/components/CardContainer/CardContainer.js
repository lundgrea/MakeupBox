import React from 'react';
import './CardContainer.css';
// import { connect } from 'react-redux';
import Cards from '../Cards/Cards'

export const CardContainer = ({category, data}) => {

  const firstAnswerResults = data[0].slice(0,5)
  const secondAnswerResults = data[1].slice(0,5)
  const thirdAnswerResults = data[2].slice(0,5)
 
  const firstCards = firstAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      )
  })

  const secondCards = secondAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      )
  })

  const thirdCards = thirdAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      )
  })
    
  return (
    <article className="card-container">
      <section key='0' className="results-category-box">
        <h2 className="results-category-headline">{category[0]}</h2>
        {firstCards}
      </section>
      <section key='1' className="results-category-box">
        <h2 className="results-category-headline">{category[1]}</h2>
        {secondCards}
      </section>
      <section key='2' className="results-category-box">
        <h2 className="results-category-headline">{category[2]}</h2>
        {thirdCards}
      </section>
    </article>
  )
}

export default CardContainer