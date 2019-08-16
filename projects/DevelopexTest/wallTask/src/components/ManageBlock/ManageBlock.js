import React from 'react';

import Tabs from 'components/Tabs';
import ManageForm from 'components/ManageForm'
import NoteBlock from 'components/NoteBlock';

import './styles.scss'

export class ManageBlock extends React.Component {
    state={

    }

    types = ['notes', 'simples', 'alerts', 'anonnotations'];

    handleClick() {
        
    }

    render() {
        return (
            <div className='container'>
                <div className='manage-block'>
                    <Tabs handleClick={this.handleClick} />
                    <ManageForm />
                </div>
                <NoteBlock types={this.types} />
            </div>
        )
    }
}