import React from 'react';

import Tab from 'components/Tab';
import ManageForm from 'components/ManageForm'
import NoteBlock from 'components/NoteBlock';

import {
    updateWallContent,
    getWallContent,
    setWallContent
} from 'services';
import mock from 'mocks/events.json';
import { panes } from './manageTabs.config';

import './styles.scss'

export class ManageBlock extends React.Component {
    state={
        selectedTabId: 1,
        wallContent: mock,
        types: ['notes', 'simples', 'alerts', 'annotations']
    }

    isActive = id => this.state.selectedTabId === id;

    setActiveTab = selectedTabId => this.setState({
        selectedTabId,
        types: this.setTypes(selectedTabId)
    });

    updateContent = (wallContent) => {
        this.setState({wallContent})
        const newWallContent = JSON.stringify(wallContent);
        setWallContent(newWallContent);
    }

    setTypes = (selectedTabId) => {
        switch (selectedTabId) {
            case 1: return ['notes', 'simples', 'alerts', 'annotations'];
            case 2: return ['notes'];
            case 3: return ['simples', 'annotations'];
            case 4: return ['alerts'];
            default: return ['notes', 'simples', 'alerts', 'annotations'];
        }
    }

    componentDidMount() {
        updateWallContent();
        const wallContent = JSON.parse(getWallContent());
        this.setState({wallContent})
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
                    <ManageForm callback={this.updateContent}/>
                </div>
                <NoteBlock content={this.state.wallContent} types={this.state.types} />
            </div>
        )
    }
}