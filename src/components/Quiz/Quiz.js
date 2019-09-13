import React, { Component } from 'react';
import './Quiz.css';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

export class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      questionOneAnswer: '',
      questionTwoAnswer: '',
      questionThreeAnswer: '',
      questionFourAnswer: '',
      quizQuestions: [
        {
          question: 'What is your primary interest?', 
          answers: ['lips', 'eyes','face/body', 'nails'],
          id: 1
        },
        {
          question: 'What style speaks most to you?', 
          answers: ['bronzed','bold', 'natural', 'smoky'],
          id: 2
        },
        { 
          question: 'What are your causes?',
          answers: ['cruelty free', 'organic', 'non-gmo', 'vegan'],
          id: 3
        }, 
        {
          question: 'What is your previous experience using makeup',
          answers: ['none', 'some', 'a bit', 'absolute master'],
          id: 4
        }
      ]    
    }
  }

  generateQuiz = () => {
    return this.state.quizQuestions.map(question => {
      return (
        <form>
          <QuizQuestion question={question.question} answers={question.answers} key={question.id} />
        </form>
      )
    })    
  }


  
  render() {
    return (
      <fieldset>
        {this.generateQuiz()}
      </fieldset>
    )
}


}

export default Quiz;