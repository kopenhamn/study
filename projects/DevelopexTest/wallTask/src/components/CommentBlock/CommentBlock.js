import React from 'react';

import Comment from 'components/Comment';
import CommentFooter from 'components/CommentFooter';

import './styles.scss';

export function CommentBlock(props) {
    const { comment } = props;

    return (
        <div
            className='comment-block'
        >
            <Comment content={comment} />
            <CommentFooter date={comment.date} />
        </div>
    )
}