import React from 'react';

import './styles.scss'

export function ShareButton(props) {
    return (
        <button 
            onClick={props.share}
            className='form_btn'
        >
                <i className="fa fa-share"></i>
                Share
        </button>
    )
}