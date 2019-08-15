import React from 'react';

import Comment from 'components/Comment';
import CommentFooter from 'components/CommentFooter';

import * as icons from 'assets/icons.js';
import './styles.scss';

export function Note(props) {
    const {
        type,
        event
    } = props;

    return (
        <div className={type + ' note-container'}>
            <i className={icons[type]}></i>
            <div>
                <h2 className='title'>{event.title}</h2>
                <p className='message'>{event.text}</p>
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