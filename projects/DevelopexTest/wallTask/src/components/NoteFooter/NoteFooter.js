import React from 'react';

import { CommentButton, FollowButton, TrayButton } from './buttons';

import './styles.scss'

export class NoteFooter extends React.Component {

    render() {
        return (
            <div className='note-footer'>
                <CommentButton comment={this.handleComment} />
                <FollowButton follow={this.handleFollow} />
                <TrayButton tray={this.handleTray} />
            </div>
        )
    }
}