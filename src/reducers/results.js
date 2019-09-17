export const resultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS':
        return [...state, action.results]
    case 'CLEAR_RESULTS':
      return state = []
    default:
      return state
  };
};