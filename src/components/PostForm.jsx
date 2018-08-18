import React, { Component } from "react";
import validator from "validator";
import moment from "moment";
import uuid from "uuid";
import { connect } from "react-redux";
import { addPost } from "../services/redux/actions/post.js";

// import { addPost } from "../services/Post.services.js";

class PostForm extends Component {
  id = uuid();
  userid = uuid();
  date = moment().format();
  state = {
    details: {
      id: this.id,
      userid: this.userid,
      text: "",
      image: "",
      likes: 0,
      date_created: this.date
    },
    error: {
      text: null,
      image: null,
      error: false,
      message: null
    }
  };

  handleTextarea = e => {
    const text = validator.escape(e.target.value);
    if (text) {
      this.setState({
        details: {
          ...this.state.details,
          text
        }
      });
    } else {
      this.setState({
        error: {
          text: "Invalid",
          error: true
        }
      });
    }
  };

  handleImage = e => {
    const image = e.target.value;
    if (image) {
      this.setState({
        details: {
          ...this.state.details,
          image
        }
      });
    } else {
      this.setState({
        error: {
          image: "Invalid",
          error: true
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.details.image) {
      this.setState({
        details: {
          ...this.state.details,
          id: uuid(),
          userid: uuid(),
          date_created: moment().format()
        }
      });
      this.props.dispatch(addPost(this.state.details));
      console.log(this.props.posts);
    } else {
      this.setState({
        error: {
          error: true
        }
      });
      //   console.log(this.state);
    }
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleTextarea} cols="30" rows="10" />
          <input onChange={this.handleImage} type="text" />
          <button type="submit"> Post It! </button>
        </form>
        <div>
          <p>{this.state.details.text}</p>
          <p>{this.state.details.image}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post
  };
};
export default connect(mapStateToProps)(PostForm);
