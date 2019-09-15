import React, { Component } from 'react';
import './Quiz.css';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { setResponses } from "../../actions";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      userAnswers: [],     
      results: [], 
      quizQuestions: [
        {
          question: '1. What is your primary area of interest?', 
          answers: ['lips', 'eyes','face/body', 'nails'],
          id: 1,
          name: 'interest'
        },
        {
          question: '2. What style describes you best?', 
          answers: ['bronzed', 'bold', 'natural', 'smokey'],
          id: 2,
          name: 'style'
        },
        { 
          question: '3. What causes do you care about?',
          answers: ['cruelty free', 'organic', 'non-gmo', 'vegan'],
          id: 3,
          name: 'causes'
        }, 
        {
          question: '4. What previous experience do you have using makeup?',
          answers: ['none', 'some', 'a bit', 'absolute master'],
          id: 4,
          name: 'experience'
        }
      ]    
    }
  }

  generateQuiz = () => {
    return this.state.quizQuestions.map(question => {
      return (
        <QuizQuestion question={question.question} answers={question.answers} key={question.id} id={question.id} name={question.name} handleChange={this.handleChange}/>
      )
    })    
  }

  handleChange = (e) => {
    this.setState({userAnswers: [...this.state.userAnswers, e.target.value]})
    this.props.setResponses(e.target.value)
  }

  render() {
    return (
      <fieldset className="quiz-container">
        <h2 className="quiz-headline">Help Us Tailor Your Results To Suit Your Needs</h2>
        {this.generateQuiz()}
        <Link to='/results'><button className="button-quiz-submit">submit answers</button></Link>
      </fieldset>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setResponses: response => dispatch(setResponses(response))
});

export default connect(null, mapDispatchToProps)(Quiz);