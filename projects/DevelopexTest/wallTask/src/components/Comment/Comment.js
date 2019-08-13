import React from 'react';

import './styles.scss';

export function Comment(props) {
    const {
        firstName,
        lastName,
        avatar
    } = props.content;

    console.log(avatar);

    return (
        <div>
            <img
                src={avatar}
                alt='user avatar'
                className='user-avatar'
            ></img>
            <div>
                {props.note 
                ? (<h2>Note by {firstName} {lastName}</h2>)
                : <p>{firstName} {lastName}</p>}
            </div>
        </div>
    )
}