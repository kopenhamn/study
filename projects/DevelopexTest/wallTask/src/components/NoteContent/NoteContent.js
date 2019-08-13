import React from 'react';

import Comment from 'components/Comment';
import events from 'mocks/events.json'

import './styles.scss'

export function NoteContent() {
    return (
        <div className='note-content'>
            {events.events.map(event => <div
                    key={event.id}
                    className='note-container'
                >
                    <i className="far fa-comment-alt"></i>
                    <div>
                        <Comment content={event} note={true} />
                        {event.comments.map(comment => <Comment key={comment.id} content={comment} />)}
                    </div>
                </div>)
            }
        </div>
    )
}