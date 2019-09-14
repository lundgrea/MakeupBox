import React from 'react';
import './QuizQuestion.css'

export const QuizQuestion = ({answers, question, key, name, handleChange}) => {

  const buildAnswers = () => {
    let answersList = answers.map(answer => {
    return (
      <div>
        <input
          type="radio"
          name={name}
          value={answer}
          onChange={handleChange}
          key={key}
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