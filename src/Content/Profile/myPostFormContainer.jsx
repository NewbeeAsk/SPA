import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import React from "react";


const MyPosts = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPost"} component={"textarea"}/>
            <button>Add new Post</button>
        </form>
    )

}

const MyPostRedux = reduxForm({form: "post"})(MyPosts)

const MyPostReduxContainer = (props) =>{
    const onSubmit = (values) =>{
       props.onAddPost(values.newPost)
    }
    return(
        <MyPostRedux onSubmit={onSubmit}/>
    )

}

export default MyPostReduxContainer;