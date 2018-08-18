import { createStore } from "redux";

const login = (state = { status: false }, action) => {
  switch (action.type) {
    case "Login":
      return { status: true };
    case "Logout":
      return { status: false };
    default:
      return state;
  }
};
const store = createStore(login);

store.dispatch({
  type: "Login"
});

console.log(store.getState());
