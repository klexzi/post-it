export const loginUser = data => {
  // check user and authenticate user and get token or error message
  const token = "jwt_string";
  const details = {
    id: 5,
    name: "John Doe",
    email: "john@doe.com"
  };
  if (token) {
    return { status: true, token, details };
  } else {
    return {
      status: false,
      token: null,
      details: null,
      message: "invalid email or password"
    };
  }
};
