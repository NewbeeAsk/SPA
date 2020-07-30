import {usersAPI} from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_ID = 'SET_USER_ID';
const UN_SET_USER_ID = 'UN_SET_USER_ID';

let initialState = {

        userId: null,
        login: null,
        emailL: null,

    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case SET_USER_ID:
            return {...state, userId: action.userId, isAuth: true}
        case UN_SET_USER_ID:
            return {...state, userId: null, isAuth: false}
        default:
            return state;
    }
}
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setUserId = (userId) => ({type: SET_USER_ID, userId})
export const unSetUserId = () => ({type: UN_SET_USER_ID})

export const setMyProfile = () => {
    return(dispatch) => {
        usersAPI.getMyProfile()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}
export const setLogIn = (email, password, rememberMe) => {
    return(dispatch) => {
         usersAPI.postLogin(email, password, rememberMe)
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(setUserId(response.data.userId))
                }
            })
    }
}
export const unSetLogIn = () => {
    return(dispatch) => {
        usersAPI.deleteLogin()
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(unSetUserId())
                }
            })
    }
}

export default authReducer;

