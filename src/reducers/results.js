export const resultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS_1':
      return action.results
    case 'GET_RESULTS_2':
      return action.results
    case 'GET_RESULTS_3':
      return action.results
    default:
      return state
  }
}