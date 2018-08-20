import React from "react";
import Navbar from "./Navbar.jsx";
import LeftSidebar from "./ProfilePage/LeftSidebar.jsx";
import RightSidebar from "./ProfilePage/RightSidebar.jsx";
import Feed from "./ProfilePage/Feed.jsx";

class ProfilePage extends React.Component {
  render() {
    console.log(this.props);
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

export default ProfilePage;
