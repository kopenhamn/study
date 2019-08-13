import React from 'react';

import './styles.scss'

export function Tab(props) {
    return (
        <li 
            className={ props.isActive ? 'active tabs__item': 'tabs__item' }
            onClick={ props.onActiveTab }
        >
            <i className={props.icon}></i>
            {props.name}
        </li>
    )
}