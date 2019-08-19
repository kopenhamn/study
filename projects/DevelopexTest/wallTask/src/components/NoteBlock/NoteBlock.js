import React from 'react';

import Event from 'components/Event';
import Note from 'components/Note';
import NoteFooter from 'components/NoteFooter';

import './styles.scss';

export function NoteBlock(props) {
    const { content, types } = props;
    
    return (
        <div className='notes'>
            {
                types.map(type => type === 'notes'
                    ? <div 
                        className='note-block'
                        key={type}
                    >
                        <div className='note-block__content'>
                            {
                                content[type].map(event => <Event 
                                    key={event.id} 
                                    event={event} 
                                    type={type} 
                                />)
                            }
                        </div>
                        <NoteFooter />
                    </div>
                    : content[type].map(event => <div 
                            className='note-block'
                            key={event.id}
                        >
                            <div className='note-block__content'>
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