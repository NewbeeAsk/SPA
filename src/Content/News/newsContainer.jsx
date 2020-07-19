import React from 'react';
import {newsChangeAC, newsPostAC} from "../../redux/newsReducer";
import {connect} from "react-redux";
import News from "./News";


let addStateToProps = (state) => {

return {newsState: state.newsPage};

}
let addDispatchToProps = (dispatch) => {
return {
    addNewsText: (newsText) => {
        dispatch(newsChangeAC(newsText));
    },
    pushNewsText: () => {
        dispatch(newsPostAC());
    }
}
}

const NewsContainer = connect(addStateToProps, addDispatchToProps)(News);
export default NewsContainer;