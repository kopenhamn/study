import React from 'react';

export function Tab(props) {
    return (
        <li 
            className={ props.isActive ? 'active item': 'item' }
            onClick={ props.onActiveTab }
        >
            <i className={props.icon}></i>
            {props.name}
        </li>
    )
}