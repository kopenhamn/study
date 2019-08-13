import React from 'react';

import './styles.scss'

export function TrayButton(props) {
    return (
        <button 
            onClick={props.tray}
            className='footer_btn tray'
        >
            <i className="fa fa-trash-alt"></i>
        </button>
    )
}