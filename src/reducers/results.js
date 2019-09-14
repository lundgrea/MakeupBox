// export const resultsReducer = (state=[], action, num) => {
//   switch(action.type) {
//     case 'GET_RESULTS_1':
//       if (num === 1) {
//       return action.results
//       } else {
//         return state
//       }
//     case 'GET_RESULTS_2':
//       if (num === 2) {
//       return action.results
//       } else {
//         return state
//       }
//     case 'GET_RESULTS_3':
//       if(num === 3) {
//       return action.results
//       } else {
//         return state
//       }
//     default:
//       return state
//   }
// }

export const resultsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_RESULTS':
        return [...state, action.results]
    default:
      return state
  }
}