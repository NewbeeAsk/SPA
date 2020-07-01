import React from 'react';
import p from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>

            <div>
            <Post message='Hi, how are you?' like='15'/>
            <Post message="It's my first post" like='20'/>
            </div>
        </div>
    );
}

export default Myposts;