import React from 'react';
import './Cards.css';
import PropTypes from 'prop-types';

export const Cards = ({img, brand, name, description, price, tags}) => {

  return (
    <article className='card'>
      <img className='card-img' alt='product' src={img}></img>
      <h3 className='card-brand'>{brand}</h3>
      <h4 className='card-name'>{name}</h4>
      <p className='card-description'>{description}</p>
      <h6 className='card-price'>${price}</h6>
      <p className='card-tags'>{tags}</p>
    </article>
  )
};

export default Cards;

Cards.propTypes = {
  brand:PropTypes.string,
  color:PropTypes.array,
  description:PropTypes.string,
  id:PropTypes.number,
  img:PropTypes.string,
  name:PropTypes.string,
  price:PropTypes.string,
  tags:PropTypes.array,
  type:PropTypes.string,
};