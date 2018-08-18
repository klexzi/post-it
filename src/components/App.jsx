import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./Home.jsx";
import ProfilePage from "./ProfilePage.jsx";

class App extends Component {
  loggedIn() {
    return true;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:user" component={ProfilePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
