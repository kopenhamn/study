import React from 'react';

import './styles.scss'

export function ShareButton(props) {
    return (
        <button 
            onClick={props.share}
            className='form_btn'
        >
                <i class="fa fa-share"></i>
                Share
        </button>
    )
}