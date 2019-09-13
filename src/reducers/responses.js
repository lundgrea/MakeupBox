export const responseReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_RESPONSES':
      console.log(action.response)
      return [...state, action.response]
    default:
      return state
  }
}