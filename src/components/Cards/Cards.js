import React from 'react'
import './Cards.css'


export const Cards = (props) => {
  return (
    <article className="card">
      <h3>{props.brand}</h3>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <h6>${props.price}</h6>
      <p>{props.tags}</p>
      {/* <p>{props.color}</p> */}
      <img alt="product" src={props.img}></img>
    </article>
  )
}

export default Cards;