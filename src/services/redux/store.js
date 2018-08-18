import { createStore, combineReducers } from "redux";
import postReducer from "./reducers/post-reducer.js";
import userReducer from "./reducers/user-reducer.js";
import authReducer from "./reducers/auth-reducer.js";

export default () => {
  const reduce = combineReducers({
    post: postReducer,
    user: userReducer,
    auth: authReducer
  });
  const store = createStore(reduce);
  return store;
};
