import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import MyPostReduxContainer from "../myPostFormContainer";


class MyPosts extends React.Component {
        constructor(props) {
            super(props);
        }

    render() {
        return (
            <div className={s.myPostsWrapper}>
                <h3>My posts</h3>
                <MyPostReduxContainer onAddPost={this.props.addPost}/>
                <div className={s.posts}>
                    {this.props.myPosts.map(post => (<Post message={post.message} like={post.like}/>))}
                </div>
            </div>
        );
    }
}
export default MyPosts;