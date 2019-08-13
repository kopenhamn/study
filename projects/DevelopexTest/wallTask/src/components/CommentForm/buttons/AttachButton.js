import React from 'react';

import './styles.scss'

export function AttachButton(props) {
    return (
        <button 
            onClick={props.attach}
            className='form_btn'
        >
            <i class="fa fa-paperclip"></i>
            Attach
        </button>
    )
}