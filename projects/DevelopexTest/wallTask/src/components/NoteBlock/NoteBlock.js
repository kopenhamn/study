import React from 'react';
import PropTypes from 'prop-types';

import NoteContent from 'components/NoteContent';
import NoteFooter from 'components/NoteFooter';

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
                <NoteContent />
                <NoteFooter />
            </div>
        );
    }
}