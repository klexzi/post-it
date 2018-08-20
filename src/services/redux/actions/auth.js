export const login = data => {
  return {
    type: "LOG_IN",
    data: { ...data }
  };
};
export const logout = () => {
  return {
    type: "LOG_OUT",
    data: {
      token: null,
      status: false,
      details: null
    }
  };
};
