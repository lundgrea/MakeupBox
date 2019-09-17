import React from 'react';
import './CardContainer.css';
import Cards from '../Cards/Cards';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleErrors } from '../../actions'


export const CardContainer = ({error, categories, data}) => {

  const buildCardDeck = (data) => {
    if (!data) {
      return error
    } else {
      return data.map((cardInfo, index)=> {
        return (
          <div key={index}>
            <Cards 
            {...cardInfo}
            key={cardInfo.id}
              />
          </div>
        )
      })
    }
  }
    
  return (
    <>
    <article className='card-container'>
      <section key='0' className='results-category-box'>
        <h2 className='results-category-headline'>{categories[0]}</h2>
        {buildCardDeck(data[0])}
      </section>
      <section key='1' className='results-category-box'>
        <h2 className='results-category-headline'>{categories[1]}</h2>
        {buildCardDeck(data[1])}
      </section>
      <section key='2' className='results-category-box'>
        <h2 className='results-category-headline'>{categories[2]}</h2>
        {buildCardDeck(data[2])}
      </section>
    </article>
    </>
  );
};

export const mapStateToProps = store => ({
  error: store.hasErrored
})

export const mapDispatchToProps = dispatch => ({
  handleErrors: error => dispatch(handleErrors(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

CardContainer.propTypes = {
  data:PropTypes.array,
  categories: PropTypes.array 
};