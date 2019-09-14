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

export const setResponses = response => ({
  type: 'SET_RESPONSES',
  response
})