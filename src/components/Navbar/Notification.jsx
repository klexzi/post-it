import React from "react";
import { connect } from "react-redux";
import { logout } from "../../services/redux/actions/auth";

class Notification extends React.Component {
  handleLogout = () => {
    this.props.dispatch(logout());
    console.log(this.props.auth);
  };
  render() {
    return (
      <div>
        Notification area <button onClick={this.handleLogout}> logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Notification);
