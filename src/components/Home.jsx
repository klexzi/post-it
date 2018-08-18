import React from "react";

import HomeRegister from "./HomeRegister.jsx";
import HomeFeed from "./HomeFeed.jsx";

class Home extends React.Component {
  state = {
    loggedIn: true
  };
  render() {
    return (
      <div>
        {!this.state.loggedIn && <HomeRegister />}
        {this.state.loggedIn && <HomeFeed />}
      </div>
    );
  }
}

export default Home;
