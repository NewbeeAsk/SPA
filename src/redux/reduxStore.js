
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";
import {reducer as formReducer} from "redux-form";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: postsReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer,
    newsPage: newsReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
