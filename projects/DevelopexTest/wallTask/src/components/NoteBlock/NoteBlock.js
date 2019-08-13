import React from 'react';
import PropTypes from 'prop-types';

import EventFooter from 'components/EventFooter';

import './styles.scss';

export class NoteBlock extends React.Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    state = {
        value: ''
    };

    render() {
        return (
            <div className='note-block'>
                <div>
                    EventContent
                </div>
                <EventFooter />
            </div>
        );
    }
}