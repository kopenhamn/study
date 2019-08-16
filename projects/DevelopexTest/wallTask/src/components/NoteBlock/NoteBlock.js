import React from 'react';

import Event from 'components/Event';
import Note from 'components/Note';
import NoteFooter from 'components/NoteFooter';

import mock from 'mocks/events.json';

import './styles.scss';

export function NoteBlock(props) {
    const types = props.types;
    
    return (
        <div className='notes'>
            {
                types.map(type => type === 'notes'
                    ? <div 
                        className='note-block'
                        key={type}
                    >
                        <div className='note-content'>
                            {
                                mock[type].map(event => <Event 
                                    key={event.id} 
                                    event={event} 
                                    type={type} 
                                />)
                            }
                        </div>
                        <NoteFooter />
                    </div>
                    : mock[type].map(event => <div 
                            className='note-block'
                            key={event.id}
                        >
                            <div className='note-content'>
                                <Note event={event} type={type} />
                            </div>
                            <NoteFooter />
                        </div>
                    )
                )
            }
        </div>
    )
}