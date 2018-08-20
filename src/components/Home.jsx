import React from "react";
import { connect } from "react-redux";

import HomeRegister from "./HomeRegister.jsx";
import HomeFeed from "./HomeFeed.jsx";
import Navbar from "./Navbar.jsx";

class Home extends React.Component {
  render() {
    console.log(this.props.auth);
    return (
      <React.Fragment>
        <Navbar />
        {!this.props.auth.status && <HomeRegister />}
        {this.props.auth.status && <HomeFeed />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: { ...state.auth }
  };
};
export default connect(mapStateToProps)(Home);
