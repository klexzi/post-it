import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LoginForm from "./Navbar/LoginForm.jsx";
import UserNavbar from "./Navbar/UserNavbar.jsx";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light flex-column flex-md-row">
        <Link to="/" className="navbar-brand mr-0 mr-md-2">
          PostIT
        </Link>
        {!this.props.auth.status && <LoginForm />}
        {this.props.auth.status && <UserNavbar />}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Navbar);
