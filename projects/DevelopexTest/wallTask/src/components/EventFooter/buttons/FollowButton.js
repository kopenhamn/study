import React from 'react';

import './styles.scss'

export function FollowButton(props) {
    return (
        <button 
            onClick={props.follow}
            className='footer_btn'
        >
                <i className="fa fa-arrow-right"></i>
                Follow
        </button>
    )
}