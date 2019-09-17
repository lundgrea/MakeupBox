import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Nav from '../../containers/Nav/Nav';
import WelcomePage from '../WelcomePage/WelcomePage';
import Quiz from '../../containers/Quiz/Quiz';
import ResultsPage from '../../containers/ResultsPage/ResultsPage';

export const App = () => {
  return (
    <main className='main'>
      <Nav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/quiz' component={Quiz} />
      <Route path='/results' component={ResultsPage} />
    </main>
  )
};

export default App;

