export const responseReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_RESPONSES':
      return [...state, action.response]
    case 'SAVE_DEFAULTS':
      return action.responses
    case 'CLEAR_RESPONSES':
      return state = []
    default:
      return state
  };
};