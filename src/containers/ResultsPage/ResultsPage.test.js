import React from 'react';
import { shallow } from 'enzyme';
import { ResultsPage, mapStateToProps, mapDispatchToProps } from './ResultsPage';
import {handleErrors, isLoading, getResults} from '../../actions'


describe('ResultsPage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ResultsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return the quiz responses list ', () => {
    const mockState = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    }; 
    const expected = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    };
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return the results from the fetch in an array', () => {
    const mockState = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    }; 
    const expected = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    }; 
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return the loading status of the applicaiton', () => {
    const mockState = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    }; 
    const expected = {
      isLoading: false,
      results: [[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ],
      responses: ['lips', 'bold', 'cruelty-free', 'none']
    }; 
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
})

describe('mapDispatchToProps', () => {
  it('should call dispatch with an isLoading action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = isLoading(false);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.isLoading(false);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

  it('should call dispatch with a handleError action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = handleErrors('error message');
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleErrors('error message');
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call dispatch with getResults action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getResults([[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getResults([[{makeup1: '1'}, {makeup2: '2'}], [{makeup3: '3'}, {makeup4: '4'}], [{makeup5: '5'},{makeup6: '6'}] ]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})