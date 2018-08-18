import React from "react";
import validator from "validator";

class RegisterForm extends React.Component {
  state = {
    details: {
      firstName: null,
      lastName: null,
      email: null,
      first_password: null,
      second_password: null
    },
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      first_password: null,
      second_password: null,
      error: false
    }
  };

  details = {
    firstName: null,
    lastName: null,
    email: null,
    first_password: null,
    second_password: null
  };

  error = {
    firstName: null,
    lastName: null,
    email: null,
    first_password: null,
    second_password: null,
    error: false
  };

  handleFirstname = e => {
    const value = validator.escape(e.target.value);
    this.details.firstName = value;
  };
  handleLastname = e => {
    const value = validator.escape(e.target.value);
    this.details.lastName = value;
  };
  handleEmail = e => {
    this.details.email = e.target.value;
    const emailValid = validator.isEmail(e.target.value);
    if (!emailValid) {
      this.error.email = "Provide a valid email address";
      this.error.error = true;
    } else {
      this.error.email = null;
      this.error.error = false;
    }
    console.log(this.error.error);
  };
  handleFirstPassword = e => {
    const value = e.target.value;
    //Minimum eight characters, at least one letter and one number:
    const passwordExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.details.first_password = value;
    if (!value.match(passwordExp)) {
      this.error.first_password = "Weak Password";
      this.error.error = true;
    } else {
      this.error.first_password = null;
      this.error.error = false;
    }
    if (this.details.second_password) {
      if (!(value === this.details.Second_password)) {
        this.error.second_password = "Password does not match";
        this.error.error = true;
      } else {
        this.error.second_password = null;
        this.error.error = false;
      }
    }

    console.log(this.error.error);
  };
  handleSecondPassword = e => {
    const value = e.target.value;
    this.details.second_password = value;
    if (!(value === this.details.first_password)) {
      this.error.second_password = "Password does not match";
      this.error.error = true;
    } else {
      this.error.second_password = null;
      this.error.error = false;
    }
    console.log(this.error.error);
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      !this.error.firstName &&
      !this.error.lastName &&
      !this.error.email &&
      !this.error.first_password &&
      !this.error.second_password
    ) {
      this.error.error = false;
    } else {
      this.error.error = true;
    }
    if (!this.error.error) {
      this.setState({ details: this.details, errors: this.error });
      console.log(this.details);
    } else {
      console.log(this.error);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleFirstname}
            onFocus={() => true}
            minLength="1"
            maxLength="35"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={this.handleLastname}
            minLength="1"
            maxLength="35"
            type="text"
            placeholder="Lastname Name"
          />
          <input
            onChange={this.handleEmail}
            minLength="5"
            maxLength="60"
            type="text"
            placeholder="example@email.com"
          />
          <input
            minLength="8"
            maxLength="60"
            onChange={this.handleFirstPassword}
            type="password"
          />
          <input
            minLength="8"
            maxLength="60"
            onChange={this.handleSecondPassword}
            type="password"
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
