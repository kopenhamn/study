import React from 'react';

import Tabs from 'components/Tabs';
import ManageForm from 'components/ManageForm'
import './styles.scss'

export function ManageBlock() {
    return (
        <div className='manage-block'>
            <Tabs />
            <ManageForm />
        </div>
    )
}