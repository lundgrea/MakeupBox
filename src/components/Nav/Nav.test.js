import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

let wrapper;

beforeEach(()=> {
  wrapper = shallow(<Nav />);
})

describe('Nav', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});