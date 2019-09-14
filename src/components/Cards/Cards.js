import React from 'react'
import './Cards.css'


export const Cards = (props) => {
  return (
    <article className="card">
      <img className="card-img" alt="product" src={props.img}></img>
      <h3 className="card-brand">{props.brand}</h3>
      <h4 className="card-name">{props.name}</h4>
      <p className="card-description">{props.description}</p>
      <h6 className="card-price">${props.price}</h6>
      <p className="card-tags">{props.tags}</p>
      {/* <p>{props.color}</p> */}
    </article>
  )
}

export default Cards;