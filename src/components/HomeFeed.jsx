import React from "react";
import Navbar from "./Navbar.jsx";
import LeftSidebar from "./HomeFeed/LeftSidebar.jsx";
import Feed from "./HomeFeed/Feed.jsx";
import RightSidebar from "./HomeFeed/RightSidebar.jsx";

class HomeFeed extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <LeftSidebar />
            </div>
            <div className="col-8">
              {" "}
              <Feed />
            </div>
            <div className="col-2">
              <RightSidebar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeFeed;
