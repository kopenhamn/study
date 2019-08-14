import React from 'react';

import './styles.scss'

export function EditButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='atach_btn btn'
        >
            <i className="fas fa-cog"></i>
        </button>
    )
}