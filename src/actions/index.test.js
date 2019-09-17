import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of HANDLE_ERROR', () => {
    const mockError = 'whoa, error man'
    const expectedAction = {
      type: 'HANDLE_ERROR',
      error: 'whoa, error man'
    };
    const results = actions.handleErrors(mockError);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const mockLoading = false;
    const expectedAction = {
      type: 'IS_LOADING',
      bool: false
    };
    const results = actions.isLoading(mockLoading);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of GET_RESULTS', () => {
    const mockResults = [[{'brand': 'maybelline'}, {'brand': 'mac'}], [{'brand': 'wet n wild' }, {'brand': 'almay' }], [{'brand': 'natural' }, {'brand': 'neutrogena'}]]
    const expectedAction = {
      type: 'GET_RESULTS',
      results: [[{'brand': 'maybelline'}, {'brand': 'mac'}], [{'brand': 'wet n wild' }, {'brand': 'almay' }], [{'brand': 'natural' }, {'brand': 'neutrogena'}]]
    };
    const results = actions.getResults(mockResults);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_RESULTS', () => {
    const expectedAction = {
      type: 'CLEAR_RESULTS'
    };
    const results = actions.clearResults();
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of SET_RESPONSES', () => {
    const mockResponse = ['lips', 'bold', 'vegan', 'sometimes']
    const expectedAction = {
      type: 'SET_RESPONSES',
      response: ['lips', 'bold', 'vegan', 'sometimes']
    };
    const results = actions.setResponses(mockResponse);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_RESPONSES', () => {
    const expectedAction = {
      type: 'CLEAR_RESPONSES'
    };
    const results = actions.clearResponses();
    expect(results).toEqual(expectedAction);
  });
});
