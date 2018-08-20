import React, { Component } from "react";
import Search from "./Search.jsx";
import Notification from "./Notification.jsx";

class UserNavbar extends Component {
  render() {
    return (
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <Search />
        </li>
        <li className="nav-item">
          <Notification />
        </li>
      </ul>
    );
  }
}

export default UserNavbar;
