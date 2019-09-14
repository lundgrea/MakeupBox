export const responseReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_RESPONSES':
      return [...state, action.response]
    default:
      return state
  }
}