import React from 'react';

import './styles.scss'

export function CommentButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='comment_btn btn'
        >
            <i className="fa fa-comment"></i>
            Comment
        </button>
    )
}