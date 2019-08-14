import React from 'react';

import { 
    ShareButton,
    InsightfulButton,
    EditButton,
    TrayButton
} from 'components/buttons';

import './styles.scss'

export class CommentFooter extends React.Component {
    handleInsightful = event => {
        alert('Here will be insightful');
        event.preventDefault();
    };

    handleShare = event => {
        alert('Comment was shared');
        event.preventDefault();
    };

    render() {
        return (
            <div className='comment__footer'>
                <InsightfulButton />
                <ShareButton />
                <span className='date'>
                    {this.props.date}
                </span>
                <EditButton />
                <TrayButton />
            </div>
        )
    }
}