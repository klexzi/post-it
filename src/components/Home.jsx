import React from "react";
import { connect } from "react-redux";

import HomeRegister from "./HomeRegister.jsx";
import HomeFeed from "./HomeFeed.jsx";

class Home extends React.Component {
  render() {
    console.log(this.props.auth);
    return (
      <div>
        {!this.props.auth.status && <HomeRegister />}
        {this.props.auth.status && <HomeFeed />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(Home);
