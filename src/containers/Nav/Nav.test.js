import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapDispatchToProps } from './Nav';
import { clearResults, clearResponses } from '../../actions';

let wrapper;

beforeEach(()=> {
  wrapper = shallow(<Nav />);
})

describe('Nav', () => {
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call emptyFields on the click of the Start Over button', () => {
  //   const mockEmptyFields = jest.fn();
  //   wrapper = shallow(<Nav emptyFields={mockEmptyFields}/>);
  //   wrapper.find('NavLink').simulate('click')
  //   expect(mockEmptyFields).toHaveBeenCalled()
  // })

  // it('should call clearFields and clearResponses after calling emptyFields', () => {
  //   wrapper.instance().emptyFields();
  //   expect(clearResults).toHaveBeenCalled();
  //   expect(clearResponses).toHaveBeenCalled();
  // });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with a clearResults action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearResults();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.clearResults();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a clearResponses action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = clearResponses();
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.clearResponses();
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

