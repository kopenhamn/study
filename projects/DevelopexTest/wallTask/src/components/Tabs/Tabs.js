import React from 'react';

import { Tab } from './Tab/Tab';
import { panes } from './tabs.conf';

import './styles.scss'

export class Tabs extends React.Component {
    state = {
        selectedTabId: 1
    }

    isActive = id => this.state.selectedTabId === id;

    setActiveTab = selectedTabId => this.setState({ selectedTabId });

    render() {
        const tabs = panes.map(tab => <Tab 
            key={tab.id} 
            icon={tab.icon} 
            name={tab.name} 
            isActive={this.isActive(tab.id)}
            onActiveTab={() => this.setActiveTab(tab.id)}
        />);
        console.log(this.state);

        return (
            <ul className="manage-block__tabs">
                { tabs }
            </ul>
        )
    }
}