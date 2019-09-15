import React from 'react';
import { shallow } from 'enzyme';
import { Quiz, mapDispatchToProps } from './Quiz';
import { setResponses } from "../../actions";
import { fetchMakeup } from "../../apiCalls/apiCalls";


describe('Quiz', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with setResponses action', () => {
    const mockResponse = ['lips']
    const mockDispatch = jest.fn();
    const actionToDispatch = setResponses(mockResponse)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setResponses(mockResponse)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
