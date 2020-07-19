import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
    debugger;
    let postElement = props.myPosts.postsData.map(post => (<Post message={post.message} like={post.like}/>))
    let textPostRef = React.createRef();

    let onAddPost = () =>{
        props.addPost();
    }

    let onAddPostChange = () => {
        let textPost = textPostRef.current.value;
        props.onPostChange(textPost);
    }

    return (
        <div className={s.myPostsWrapper}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onAddPostChange} ref={textPostRef} value={props.myPosts.newPostText}/>
            </div>
            <button onClick={onAddPost}>Add Post</button>
            <div className={s.posts}>
                {postElement}

            </div>
        </div>
    );
}
export default MyPosts;