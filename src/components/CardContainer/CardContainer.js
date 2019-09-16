import React from 'react';
import './CardContainer.css';
import Cards from '../Cards/Cards';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const CardContainer = ({error, category, data}) => {


  const firstAnswerResults = data[0].slice(0,7);
  const secondAnswerResults = data[1].slice(0,7);
  const thirdAnswerResults = data[2].slice(0,7);
 
  const firstCards = firstAnswerResults.map((result, index) => {
    return (
        <div key={index}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
    )
  });

  const secondCards = secondAnswerResults.map((result, index) => {
    return (
        <div key={index}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      );
  });

  const thirdCards = thirdAnswerResults.map((result, index) => {
    return (
        <div key={index}>
          <Cards 
          {...result}
          key={result.id}
          />
        </div>
      );
  });
    
  return (
    <>
    {error && <p>PLEASE COMPLETE QUIZ</p>}
    <article className='card-container'>
      <section key='0' className='results-category-box'>
        <h2 className='results-category-headline'>{category[0]}</h2>
        {firstCards}
      </section>
      <section key='1' className='results-category-box'>
        <h2 className='results-category-headline'>{category[1]}</h2>
        {secondCards}
      </section>
      <section key='2' className='results-category-box'>
        <h2 className='results-category-headline'>{category[2]}</h2>
        {thirdCards}
      </section>
    </article>
    </>
  );
};

export const mapStateToProps = store => ({
  error: store.hasErrored
})

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  data:PropTypes.array.isRequired,
  // category: PropTypes.string.isRequired  
};