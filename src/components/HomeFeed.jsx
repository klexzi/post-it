import React from "react";
import Navbar from "./Navbar.jsx";
import LeftSidebar from "./HomeFeed/LeftSidebar.jsx";
import Feed from "./HomeFeed/Feed.jsx";
import RightSidebar from "./HomeFeed/RightSidebar.jsx";

class HomeFeed extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar />
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    );
  }
}

export default HomeFeed;
