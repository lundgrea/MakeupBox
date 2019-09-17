export const handleErrors = error => ({
  type: "HANDLE_ERROR",
  error
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const getResults = results => ({
  type: 'GET_RESULTS',
  results
})

export const clearResults = results => ({
  type: 'CLEAR_RESULTS',
  results
})

export const setResponses = response => ({
  type: 'SET_RESPONSES',
  response
})

export const clearResponses = response => ({
  type: 'CLEAR_RESPONSES',
  response
})

export const saveDefaultResponses = responses => ({
  type: 'SAVE_DEFAULTS',
  responses
})
