import React, { Component } from 'react';
import './Quiz.css';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';
import { setResponses } from '../../actions';
import { connect } from 'react-redux';
import { quizQuestions } from '../../Data/data';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      userAnswers: [],     
      results: []
    };
  };

  generateQuiz = () => {
    return quizQuestions.map(question => {
      return (
        <QuizQuestion question={question.question} answers={question.answers} key={question.id} id={question.id} name={question.name} handleChange={this.handleChange}/>
      );
    });
  };

  handleChange = (e) => {
    this.setState({userAnswers: [...this.state.userAnswers, e.target.value]});
    this.props.setResponses(e.target.value);
  };

  render() {
    return (
      <fieldset className='quiz-container'>
        <h2 className='quiz-headline'>Help Us Tailor Your Results To Suit Your Needs</h2>
        {this.generateQuiz()}
        <Link to='/results'><button className="button-quiz-submit">submit answers</button></Link>
      </fieldset>
    );
  };
};

export const mapDispatchToProps = dispatch => ({
  setResponses: response => dispatch(setResponses(response))
});

export default connect(null, mapDispatchToProps)(Quiz);


Quiz.propTypes = {
  history:PropTypes.object.isRequired,
  location:PropTypes.object.isRequired,
  match:PropTypes.object.isRequired,
};
