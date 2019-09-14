export const handleErrors = error => ({
  type: "HANDLE_ERROR",
  error
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const getResultsOne = results => ({
  type: 'GET_RESULTS_1',
  results
})

export const getResultsTwo = results => ({
  type: 'GET_RESULTS_2',
  results
})

export const getResultsThree = results => ({
  type: 'GET_RESULTS_3',
  results
})

export const setResponses = response => ({
  type: 'SET_RESPONSES',
  response
})