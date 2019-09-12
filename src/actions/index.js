export const handleErrors = error => ({
  type: "HANDLE_ERROR",
  error
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})
