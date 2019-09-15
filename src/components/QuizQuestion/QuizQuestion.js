import React from 'react';
import './QuizQuestion.css'

export const QuizQuestion = ({answers, question, id, name, handleChange}) => {
  const buildAnswers = () => {
    let answersList = answers.map((answer, index) => {
    return (
      <div className="quiz-question-answers" key={id + `${index}`}>
        <input
          type="radio"
          name={name}
          value={answer}
          key={id}
          id={id + `${index}`}
          onChange={handleChange}
        ></input>
        <label htmlFor={id + `${index}`}>{answer}</label>
      </div>
    )
    })
    return answersList
  }

  return (
    <article className="quiz-question-full">
      <h3 className="quiz-question">{question}</h3>
      {buildAnswers()}
    </article>
  )

}

export default QuizQuestion;