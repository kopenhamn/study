import React from 'react';

import Tab from 'components/Tab';
import ManageForm from 'components/ManageForm'
import NoteBlock from 'components/NoteBlock';
import { panes } from './manageTabs.config';

import './styles.scss'

export class ManageBlock extends React.Component {
    state={
        selectedTabId: 1,
        types: ['notes', 'simples', 'alerts', 'annotations']
    }

    isActive = id => this.state.selectedTabId === id;

    setActiveTab = selectedTabId => this.setState({ selectedTabId, types: this.setTypes(selectedTabId) });

    setTypes = (selectedTabId) => {
        switch (selectedTabId) {
            case 1: return ['notes', 'simples', 'alerts', 'annotations'];
            case 2: return ['notes'];
            case 3: return ['simples', 'annotations'];
            case 4: return ['alerts'];
            default: return ['notes', 'simples', 'alerts', 'annotations'];
        }
    }

    render() {
        const manageTabs = panes.map(tab => <Tab 
            key={tab.id} 
            icon={tab.icon} 
            name={tab.name} 
            isActive={this.isActive(tab.id)}
            onActiveTab={() => this.setActiveTab(tab.id)}
        />);
        return (
            <div className='container'>
                <div className='manage-block'>
                    <ul className='manage-block__tabs'>
                        {manageTabs}
                    </ul>
                    <ManageForm />
                </div>
                <NoteBlock types={this.state.types} />
            </div>
        )
    }
}