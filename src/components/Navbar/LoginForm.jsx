import React from "react";
import validator from "validator";

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
    console.log(this.state);
  };
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default LoginForm;
