import React from 'react';
import './CardContainer.css';
import Cards from '../Cards/Cards';
import PropTypes from 'prop-types';


export const CardContainer = ({category, data}) => {

  const firstAnswerResults = data[0].slice(0,7);
  const secondAnswerResults = data[1].slice(0,7);
  const thirdAnswerResults = data[2].slice(0,7);
 
  const firstCards = firstAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
    )
  });

  const secondCards = secondAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      );
  });

  const thirdCards = thirdAnswerResults.map(result => {
    return (
        <div key={result.id}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      );
  });
    
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
  );
};

export default CardContainer;

CardContainer.propTypes = {
  data:PropTypes.array.isRequired,
  category: PropTypes.array.isRequired  
};