import React from 'react';

import { PostButton, ShareButton, AttachButton } from './buttons';

import './styles.scss'

export class CommentForm extends React.Component {
    state = {
        value: ''
    };

    cancelForm = () => {
        this.setState({value: ''})
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleAttach = event => {
        this.setState({value: ''})
        alert('Comment was attached: ' + this.state.value);
        event.preventDefault();
    };

    handleShare = event => {
        this.setState({value: ''})
        alert('Comment was shared: ' + this.state.value);
        event.preventDefault();
    };

    handleSubmit = event => {
        this.setState({value: ''})
        alert('Comment was sent: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea className='comment_textarea' value={this.state.value} onChange={this.handleChange} />
                </label>
                <div className='comment_buttons'>
                    <PostButton post={this.handleSubmit} />
                    <ShareButton share={this.handleShare} />
                    <AttachButton attach={this.handleAttach} />
                    <span onClick={this.cancelForm}>or cancel</span>
                </div>
            </form>
        );
    }
}