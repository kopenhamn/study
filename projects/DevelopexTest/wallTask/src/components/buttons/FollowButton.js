import React from 'react';

import './styles.scss'

export function FollowButton(props) {
    return (
        <button 
            onClick={props.handleClick}
            className='follow_btn btn'
        >
                <i className="fa fa-arrow-right"></i>
                Follow
        </button>
    )
}