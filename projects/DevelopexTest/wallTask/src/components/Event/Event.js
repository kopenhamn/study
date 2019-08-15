import React from 'react';

import Comment from 'components/Comment';
import CommentFooter from 'components/CommentFooter';

import * as icons from 'assets/icons.js';
import './styles.scss';

export function Event(props) {
    const {
        type,
        event
    } = props;

    return (
        <div
            className={type + ' note-container'}
        >
            <i className={icons[type]}></i>
            <div>
                <Comment content={event} note={true} />
                <CommentFooter date={event.date} />
                {
                    event.comments.map(comment => <div key={comment.id}>
                        <Comment content={comment} />
                        <CommentFooter date={comment.date} />
                    </div>)
                }
            </div>
        </div>
    )
}