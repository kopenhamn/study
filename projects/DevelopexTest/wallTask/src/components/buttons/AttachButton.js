import React from 'react';

import './styles.scss'

export function AttachButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='atach_btn btn'
        >
            <i className="fa fa-paperclip"></i>
            Attach
        </button>
    )
}