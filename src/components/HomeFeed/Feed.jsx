import React from "react";
import PostForm from "../PostForm.jsx";
import { connect } from "react-redux";
import PostList from "./PostList.jsx";

class Feed extends React.Component {
  state = {
    renderPost: false
  };
  renderPostForm = () => {
    this.setState({ renderPost: true });
  };
  closePostForm = () => {
    this.setState({ renderPost: false });
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <button onClick={this.renderPostForm}> Post </button>
        {this.state.renderPost && (
          <PostForm renderPostForm={this.state.renderPost} />
        )}
        {this.props.posts.map(post => {
          return <PostList key={post.id} {...post} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post
  };
};
export default connect(mapStateToProps)(Feed);
