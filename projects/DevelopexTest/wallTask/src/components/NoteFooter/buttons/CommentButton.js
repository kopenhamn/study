import React from 'react';

import './styles.scss'

export function CommentButton(props) {
    return (
        <button 
            onClick={props.comment}
            className='footer_btn'
        >
            <i className="fa fa-comment"></i>
            Comment
        </button>
    )
}