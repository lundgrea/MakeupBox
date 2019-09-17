import { errorsReducer } from './errors';
import { loadingReducer } from './loading';
import { responseReducer } from './responses';
import { resultsReducer } from './results';


describe('errorsReducer', () => {
  it('should throw an error if handle error is met', () => {
    let mockAction = {
      type: 'HANDLE_ERROR',
      error: 'Something is Wrong!'
    };
    expect(errorsReducer(undefined, mockAction)).toEqual('Something is Wrong!');
  });

  it('should put not change the store if HANDLE_ERROR is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      bool: 'lips'
    };
    expect(errorsReducer(undefined, mockAction)).toEqual('');
  });
});

describe('loadingReducer', () => {
  it('should update the loading state when the load is completed', () => {
    let mockAction = {
      type: 'IS_LOADING',
      bool: true
    };
    expect(loadingReducer(undefined, mockAction)).toEqual(true);
  });

  it('should put not change the store if IS_LOADING is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      bool: 'lips'
    };
    expect(loadingReducer(undefined, mockAction)).toEqual(true);
  });
});

describe('responseReducer', () => {
  it('should put not change the store if SET_RESPONSES is not met', () => {
    let mockAction = {
      type: 'IS_LOADING',
      bool: true
    };
    expect(responseReducer(undefined, mockAction)).toEqual([]);
  });

  it('should put the responses from the quiz in the store if SET_RESPONSES is met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      response: 'lips'
    };
    expect(responseReducer(undefined, mockAction)).toEqual(['lips']);
  });

  it('should add the responses from the quiz to the store if SET_RESPONSES is met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      response: 'lips'
    };
    expect(responseReducer(['lashes'], mockAction)).toEqual(['lashes', 'lips']);
  });


  it('should clear the store if CLEAR_RESPONSES is met',() => {
    let mockAction = {
      type: 'CLEAR_RESPONSES'
    };
    expect(responseReducer(undefined, mockAction)).toEqual([]);
  });
});

describe('resultsReducer', () => {
  it('should put the results from the fetch in the store if GET_RESULTS is met', () => {
    let mockAction = {
      type: 'GET_RESULTS',
      results: [{'eyeshadow1': 'wet n wild'}, {'eyeshadow2': 'almay'}]
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([[{'eyeshadow1': 'wet n wild'}, {'eyeshadow2': 'almay'}]]);
  });

  it('should add results from the fetch in the store if GET_RESULTS is met', () => {
    let mockState = [[{'eyeshadow1': 'wet n wild'}, {'eyeshadow2': 'almay'}]];
    let mockAction = {
      type: 'GET_RESULTS',
      results: [{'mascara1': 'maybelline'}, {'mascara2': 'mac'}]
    };
    expect(resultsReducer(mockState, mockAction)).toEqual([[{'eyeshadow1': 'wet n wild'}, {'eyeshadow2': 'almay'}], [{'mascara1': 'maybelline'}, {'mascara2': 'mac'}]]);
  });

  it('should not change the store if GET_RESULTS is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      bool: 'lips'
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([]);
  });

  it('should clear the store if CLEAR_RESULTS is met',() => {
    let mockAction = {
      type: 'CLEAR_RESULTS'
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([]);
  });
});
