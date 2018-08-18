export const login = () => {
  return {
    type: "LOG_IN",
    status: true
  };
};
export const logout = () => {
  return {
    type: "LOG_OUT",
    status: false
  };
};
