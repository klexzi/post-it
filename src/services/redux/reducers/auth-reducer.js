export default (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, ...action.data };
    case "LOG_OUT":
      return { ...state, ...action.data };
    default:
      return state;
  }
};
