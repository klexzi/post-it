import React from "react";
import validator from "validator";
import { connect } from "react-redux";
import { addUser } from "../../services/redux/actions/user";
import { login, logout } from "../../services/redux/actions/auth";
import { loginUser } from "../../services/user.services";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };
  error;
  handleEmailInput = e => {
    const email = e.target.value;
    const emailCheck = validator.isEmail(email);
    if (!emailCheck) {
      this.error = "Please fill in your valid email address";
    } else {
      this.setState({ email });
    }
  };
  handlePasswordInput = e => {
    const password = e.target.value;
    this.setState({ password });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = loginUser(this.state);
    if (data.status) {
      this.props.dispatch(login(data));
    }
    console.log(this.state);
  };
  render() {
    return (
      <ul className="navbar-nav flex-row ml-auto">
        <li className="nav-item">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleEmailInput}
              type="email"
              placeholder="email"
              required
            />
            <input
              onChange={this.handlePasswordInput}
              type="password"
              placeholder="password"
              required
            />
            <button type="submit">Login </button>
          </form>
        </li>
      </ul>
    );
  }
}

export default connect()(LoginForm);
