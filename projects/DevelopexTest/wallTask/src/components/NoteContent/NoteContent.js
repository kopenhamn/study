import React from 'react';

import Comment from 'components/Comment';
import CommentFooter from 'components/CommentFooter';

import events from 'mocks/events.json'

import './styles.scss'

export function NoteContent() {
    return (
        <div className='note-content'>
            {
                events.events.map(event => <div
                    key={event.id}
                    className='note-container'
                >
                    <i className="far fa-comment-alt"></i>
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
                </div>)
            }
        </div>
    )
}