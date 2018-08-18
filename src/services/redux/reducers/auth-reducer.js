export default (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, status: action.status };
    case "LOG_OUT":
      return { ...state, status: action.status };
    default:
      return state;
  }
};
