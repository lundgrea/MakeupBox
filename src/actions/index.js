export const handleErrors = error => ({
  type: "HANDLE_ERROR",
  error
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const getResults = (results) => ({
  type: 'GET_RESULTS',
  results
})

// export const getResultsOne = (results, num) => ({
//   type: 'GET_RESULTS_1',
//   results,
//   num
// })

// export const getResultsTwo = (results, num) => ({
//   type: 'GET_RESULTS_2',
//   results,
//   num
// })

// export const getResultsThree = (results, num) => ({
//   type: 'GET_RESULTS_3',
//   results,
//   num
// })

export const setResponses = response => ({
  type: 'SET_RESPONSES',
  response
})