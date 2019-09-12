export const errorsReducer = (state = "", action) => {
  switch (action.type) {
    case "HANDLE_ERROR":
      return action.error;
    default:
      return state;
  }
}