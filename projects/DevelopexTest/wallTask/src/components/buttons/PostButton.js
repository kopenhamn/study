import React from 'react';

import './styles.scss'

export function PostButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='post_btn btn'
        >
            Post comment
        </button>
    )
}