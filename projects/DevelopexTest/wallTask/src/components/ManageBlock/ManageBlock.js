import React from 'react';

import Tabs from 'components/Tabs';
import CommentForm from 'components/CommentForm'
import './styles.scss'

export function ManageBlock() {
    return (
        <div className='manage-block'>
            <Tabs />
            <CommentForm />
        </div>
    )
}