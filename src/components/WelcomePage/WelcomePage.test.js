import React from 'react';
import { shallow } from 'enzyme';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<WelcomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});