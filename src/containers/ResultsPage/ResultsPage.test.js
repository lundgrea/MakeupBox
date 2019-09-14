import React from 'react';
import { shallow } from 'enzyme';
import { ResultsPage } from './ResultsPage';

describe('ResultsPage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ResultsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});