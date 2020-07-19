import React from "react";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../redux/postsReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
return{
    myPosts: state.profilePage
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (textPost) => {
            dispatch(addNewPostTextActionCreator(textPost));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;