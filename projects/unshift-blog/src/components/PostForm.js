import React from 'react';
import ErrorsList from './ErrorsList';

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.post ? props.post.id : '',
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      errors: ''
    };
  }
  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  onBodyChange = e => {
    this.setState({ body: e.target.value });
  };
  renderErrors = () => {
    const { errors } = this.state;
    if (errors) {
      return <ErrorsList errors={errors} />;
    }
  };
  onSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;
    const errors = [];
    if (title.length < 4) {
      errors.push('Title should have at least 4 characters.');
    }
    if (body.length < 24) {
      errors.push('The post body should have at least 24 characters');
    }

    if (errors.length >= 1) {
      this.setState({ errors });
    } else {
      const post = this.state;
      this.props.onSubmit(post);
    }
  };
  render() {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.onTitleChange}
              value={this.state.title}
              maxLength={60}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              className="form-control"
              onChange={this.onBodyChange}
              value={this.state.body}
              maxLength={12000}
              rows="10"
            />
          </div>
          <button className="btn btn-primary btn-block">Save Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
