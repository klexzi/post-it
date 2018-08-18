import React, { Component } from "react";
import RegisterForm from "./HomeRegister/RegisterForm.jsx";

import Navbar from "./Navbar.jsx";

class HomeRegister extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RegisterForm />
      </div>
    );
  }
}

export default HomeRegister;
