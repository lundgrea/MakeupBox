import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapDispatchToProps } from './Nav';
import { clearResults, clearResponses } from '../../actions'

let wrapper;

beforeEach(()=> {
  wrapper = shallow(<Nav />);
})

describe('Nav', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with a clearResults action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearResults();
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.clearResults()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('should call dispatch with a clearResponses action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearResponses();
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.clearResponses()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

  });

});
