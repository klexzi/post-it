import React, { Component } from "react";
import { Provider } from "react-redux";
import { addPost } from "../services/redux/actions/post.js";
import { login, logout } from "../services/redux/actions/auth.js";

import AppRouter from "./AppRouter.jsx";
import configureStore from "../services/redux/store.js";

class App extends Component {
  store = configureStore();
  render() {
    this.store.dispatch(
      addPost({
        userId: "user_1",
        text: "this is the text of the second post",
        image: "https://picsum.photos/200/300?image=1080",
        likes: 0,
        dateCreated: 0
      })
    );
    this.store.dispatch(login({ status: true }));
    console.log(this.store.getState());
    return (
      <main className="container-fluid m-0 p-0">
        <Provider store={this.store}>
          <AppRouter />
        </Provider>
      </main>
    );
  }
}
export default App;
