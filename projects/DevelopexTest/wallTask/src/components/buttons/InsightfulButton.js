import React from 'react';

import './styles.scss'

export function InsightfulButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='follow_btn btn'
        >
                <i className="far fa-lightbulb"></i>
                Insightfull
        </button>
    )
}