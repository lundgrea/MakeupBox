import React from 'react';
import './QuizQuestion.css'

export const QuizQuestion = ({answers, question, key}) => {
  const buildAnswers = () => {
    let answersList = answers.map(answer => {
    return (
      <form>
      <input
        type="radio"
        name="genre"
        value={answer}
      />
      <label>{answer}</label>
      </form>
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