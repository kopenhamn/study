import React from 'react';

import './styles.scss'

export function ShareButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='share_btn btn'
        >
                <i className="fa fa-share"></i>
                Share
        </button>
    )
}