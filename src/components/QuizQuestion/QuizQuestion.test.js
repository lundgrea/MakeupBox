import React from 'react';
import { shallow } from 'enzyme';
import QuizQuestion from './QuizQuestion';

describe('QuizQuestion', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<QuizQuestion 
     question='What is your primary interest?'
     answers={['lips', 'eyes']}
     key={1}
     name='interests'
     handleChange={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  });
});