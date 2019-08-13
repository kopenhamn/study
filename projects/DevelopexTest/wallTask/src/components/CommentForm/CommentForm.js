import React from 'react';
import PropTypes from 'prop-types';

import { PostButton, ShareButton, AttachButton } from './buttons';

import defaultImage from './defaultImage.png';
import './styles.scss';

export class CommentForm extends React.Component {
    static propTypes = {
        userAvatar: PropTypes.string
    };

    static defaultProps = {
        userAvatar: defaultImage
    };

    state = {
        value: ''
    };

    cancelForm = () => {
        this.setState({ value: '' })
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleAttach = event => {
        this.setState({ value: '' })
        alert('Comment was attached: ' + this.state.value);
        event.preventDefault();
    };

    handleShare = event => {
        this.setState({ value: '' })
        alert('Comment was shared: ' + this.state.value);
        event.preventDefault();
    };

    handleSubmit = event => {
        this.setState({ value: '' })
        alert('Comment was sent: ' + this.state.value);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='textarea_container'>
                    <img
                        src={this.props.userAvatar}
                        alt='user avatar'
                        className='user-avatar'
                    ></img>
                    <label>
                        <textarea className='comment_textarea' value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
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