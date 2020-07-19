
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";

import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer"

let reducers = combineReducers({
    profilePage: postsReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
