import React from "react";
import { connect } from "react-redux";

import PostForm from "./PostForm";
import { startEditPost, startSetPosts, startDeletePost } from "../actions/posts";

export class EditPostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderError = () => {
    if (this.state.error) {
      return (
        <div className="error-msg">
          <p>{this.state.error}</p>
        </div>
      );
    }
  };
  onSubmit = async post => {
    try {
      await this.props.startEditPost(post, this.props.post.id);
      await this.props.startSetPosts();
      this.props.history.push("/");
    } catch (e) {
      this.setState({ error: e.message });
    }
  };
  deletePost = async () => {
    try {
      await this.props.startDeletePost(this.props.post.id);
      this.props.history.push("/");
    } catch (e) {
      this.setState({ error: e.message });
    }
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-4">Edit Post</h3>
        <button
          className="btn-delete btn btn-dark btn-sm float-right"
          onClick={this.deletePost}
        >
          <i className="far fa-trash-alt mr-2" />
          Delete Post
        </button>
        {this.renderError()}
        <PostForm post={this.props.post} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id == props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  startEditPost: (post, id) => dispatch(startEditPost(post, id)),
  startDeletePost: id => dispatch(startDeletePost(id)),
  startSetPosts: () => dispatch(startSetPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage);
