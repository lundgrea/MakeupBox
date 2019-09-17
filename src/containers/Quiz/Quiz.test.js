import React from 'react';
import { shallow } from 'enzyme';
import { Quiz, mapDispatchToProps } from './Quiz';
import { setResponses } from "../../actions";

describe('Quiz', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Quiz />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should update state with a the quiz responses when handleChange is called', () => {
  //   const wrapper = shallow(<Quiz /> );
  //   wrapper.instance().setResponses() = jest.fn()
  //   const mockEvent = {target: 'lips'}
  //   const expected = [mockEvent];
  //   expect(wrapper.state('userAnswers')).toEqual([]);
  //   wrapper.instance().handleChange(mockEvent);
  //   expect(wrapper.state('userAnswsers')).toEqual(expected)
  // })
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with setResponses action', () => {
    const mockResponse = ['lips']
    const mockDispatch = jest.fn();
    const actionToDispatch = setResponses(mockResponse)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setResponses(mockResponse)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

