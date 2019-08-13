import React from 'react';

import './styles.scss'

export function PostButton(props) {
    return (
        <button 
            onClick={props.post}
            className='postButton form_btn'
        >
            Post comment
        </button>
    )
}