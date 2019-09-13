import React, { Component } from 'react';
import './Quiz.css';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { getResults, setResponses } from "../../actions";
import { connect } from 'react-redux';

export class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      userAnswers: [],      
      quizQuestions: [
        {
          question: 'What is your primary interest?', 
          answers: ['lips', 'eyes','face/body', 'nails'],
          id: 1,
          name: 'interest'
        },
        {
          question: 'What style speaks most to you?', 
          answers: ['bronzed','bold', 'natural', 'smoky'],
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
        <form>
          <QuizQuestion question={question.question} answers={question.answers} key={question.id} name={question.name} handleChange={this.handleChange}/>
        </form>
      )
    })    
  }

  fetchMakeup = async e => {
    e.preventDefault();
    try {

    } catch {

    }
  }

  handleChange = (e) => {
    this.setState({userAnswers: [...this.state.userAnswers, e.target.value]})
    this.props.setResponses(e.target.value)
  }

  
  render() {
    return (
      <fieldset>
        {this.generateQuiz()}
        <button className="button-submit-quiz" onClick={this.fetchMakeup}>submit answers</button>
      </fieldset>
    )
  }
}


export const mapDispatchToProps = dispatch => ({
  getResults: results => dispatch(getResults(results)),
  setResponses: response => dispatch(setResponses(response))
});

export default connect(null, mapDispatchToProps)(Quiz);