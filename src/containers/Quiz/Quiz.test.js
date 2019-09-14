import React from 'react';
import { shallow } from 'enzyme';
import { Quiz } from './Quiz';

describe('Quiz', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper).toMatchSnapshot();
  });
});