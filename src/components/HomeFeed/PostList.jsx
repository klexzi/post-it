import React, { Component } from "react";

const PostList = ({ text, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default PostList;
