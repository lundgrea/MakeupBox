import React from 'react';
import './QuizQuestion.css'

export const QuizQuestion = ({answers, question, key}) => {
  const buildAnswers = () => {
    let answersList = answers.map(answer => {
    return answer
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