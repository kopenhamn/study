import React from 'react';

import Comment from 'components/Comment';
import CommentFooter from 'components/CommentFooter';
import CommentBlock from 'components/CommentBlock';

import * as icons from 'assets/icons.js';

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
                    event.comments.map(comment => <CommentBlock
                        key={comment.id}
                        comment={comment}
                    />)
                }
            </div>
        </div>
    )
}