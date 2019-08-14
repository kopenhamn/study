import React from 'react';

import './styles.scss';

export function Comment(props) {
    const {
        firstName,
        lastName,
        message,
        avatar
    } = props.content;

    return (
        <div className='comment-container'>
            <img
                src={avatar}
                alt='user avatar'
                className='user-avatar'
            ></img>
            <div className={props.note ? 'note comment' : 'comment'}>
                <h2 className='comment-header'>{props.note && 'Note by'} {firstName} {lastName}</h2>
                <p className='comment-text'>{message}</p>
            </div>
        </div>
    )
}