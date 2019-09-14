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
          question: 'What is your primary interest?', 
          answers: ['lips', 'eyes','face/body', 'nails'],
          id: 1,
          name: 'interest'
        },
        {
          question: 'What style speaks most to you?', 
          answers: ['bronzed','bold', 'natural', 'smokey'],
          id: 2,
          name: 'style'
        },
        { 
          question: 'What are your causes?',
          answers: ['cruelty free', 'organic', 'non-gmo', 'vegan'],
          id: 3,
          name: 'causes'
        }, 
        {
          question: 'What is your previous experience using makeup',
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
      <fieldset>
        {this.generateQuiz()}
        <Link to='/results'><button>submit answers</button></Link>
      </fieldset>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setResponses: response => dispatch(setResponses(response))
});

export default connect(null, mapDispatchToProps)(Quiz);