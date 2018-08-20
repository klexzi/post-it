import React, { Component } from "react";
import RegisterForm from "./HomeRegister/RegisterForm.jsx";

import Navbar from "./Navbar.jsx";

class HomeRegister extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="register-area col-12 register-area">
                <div className="col-6">
                  <RegisterForm />
                </div>
                <div className="col-6" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeRegister;
