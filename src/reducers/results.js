export const resultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS':
      return [...state, action.results]
    default:
      return state
  }
}