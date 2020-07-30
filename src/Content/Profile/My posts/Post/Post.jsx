import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (

                <div className={p.item}>
                    {props.message }
                    <button id="counter">LIke</button>
                    <textarea>{props.like}</textarea>
                </div>

    );
}

export default Post;