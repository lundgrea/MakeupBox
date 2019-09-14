import React from 'react';
import './CardContainer.css';
import { connect } from 'react-redux';
import Cards from '../Cards/Cards'

export const CardContainer = (props) => {
  console.log('props coming in' ,props)
  // const randomItemNumber = (length) => {
  //   const num = Math.floor(Math.random() * (length-1)) + 1 
  //   return num
  // }

    // const cards = props.results1.map(result => {
    //   return (
    //     <div>
    //       <Cards 
    //       {...result}
    //       key={result.id}
    //       />
    //     </div>
    //   )
    // })
    
    return (
      <>
      <h2>selects</h2>
      {/* {cards} */}
      </>
    )
}

export const mapStateToProps = store => ({
  responses: store.responses,
  results1: store.results1,
  results2: store.results2,
  results3: store.results3
})

export default connect(mapStateToProps)(CardContainer)