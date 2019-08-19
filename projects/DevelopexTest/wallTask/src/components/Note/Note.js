import React from 'react';

import CommentBlock from 'components/CommentBlock';

import * as icons from 'assets/icons.js';

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
                    event.comments.map(comment => <CommentBlock
                        key={comment.id}
                        comment={comment}
                    />)
                }
            </div>
        </div>
    )
}