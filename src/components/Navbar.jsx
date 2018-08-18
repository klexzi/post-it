import React from "react";
import LoginForm from "./Navbar/LoginForm.jsx";
import Search from "./Navbar/Search.jsx";
import Notification from "./Navbar/Notification.jsx";

class Navbar extends React.Component {
  state = {
    loggedIn: true
  };
  render() {
    return (
      <div>
        <h2> PostIT</h2>
        {!this.state.loggedIn && <LoginForm />}
        {this.state.loggedIn && <Search />}
        {this.state.loggedIn && <Notification />}
      </div>
    );
  }
}
export default Navbar;
