import React from 'react';
import './CardContainer.css';
import Cards from '../Cards/Cards';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const CardContainer = ({error, categories, data}) => {


// const buildCards = () =>{
//     return data.map(result => {
//       return result.map((cardInfo, index)=> {
//         return (
//           <div key={index}>
//             <Cards 
//             {...cardInfo}
//             key={cardInfo.id}
//               />
//           </div>
//       )
//     })
//   })
// }


  // const firstAnswerResults = data[0].slice(0,7);
  // const secondAnswerResults = data[1].slice(0,7);
  // const thirdAnswerResults = data[2].slice(0,7);
 
  // const firstCards = firstAnswerResults.map((result, index) => {
  //   return (
  //       <div key={index}>
  //         <Cards 
  //         {...result}
  //         key={result.id}
  //         />
  //       </div>
  //   )
  // });

  // const secondCards = secondAnswerResults.map((result, index) => {
  //   return (
  //       <div key={index}>
  //         <Cards 
  //         {...result}
  //         key={result.id}
  //         />
  //       </div>
  //     );
  // });

  // const thirdCards = thirdAnswerResults.map((result, index) => {
  //   return (
  //       <div key={index}>
  //         <Cards 
  //         {...result}
  //         key={result.id}
  //         />
  //       </div>
  //     );
  // });


  const buildCardDeck = (data) => {
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

    
  return (
    <>
    {error && <p>{error}</p>}
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
  error: store.hasErrored,
  // responses: store.responses,
  // results: store.results,
})

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  data:PropTypes.array.isRequired,
  // category: PropTypes.string.isRequired  
};