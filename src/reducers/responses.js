export const responseReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_RESPONSES':
      return [...state, action.response]
    case 'CLEAR_RESPONSES':
      return state = []
    default:
      return state
  }
}