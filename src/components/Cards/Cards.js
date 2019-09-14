import React from 'react'
import './Cards.css'


export const Cards = (props) => {
  return (
    <article>
      <p>{props.brand}</p>
      <img>{props.img}</img>
    </article>
  )
}

export default Cards;