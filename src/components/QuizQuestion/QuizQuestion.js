import React from 'react';
import './QuizQuestion.css'

export const QuizQuestion = ({answers, question, id, name, handleChange}) => {
  const buildAnswers = () => {
    let answersList = answers.map((answer, index) => {
    return (
      <div key={id + `${index}`}>
        <input
          type="radio"
          name={name}
          value={answer}
          key={id}
          onChange={handleChange}
        ></input>
        <label htmlFor={answer}>{answer}</label>
      </div>
    )
    })
    return answersList
  }

  return (
    <article>
      <h2>{question}</h2>
      {buildAnswers()}
    </article>
  )

}

export default QuizQuestion;