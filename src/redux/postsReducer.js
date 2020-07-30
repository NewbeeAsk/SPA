import {usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';
const STATUS = 'STATUS';

let initialState = {

    postsData:
        [
            {message: 'YO', like: 12},
            {message: 'hey', like: 20},
            {message: 'hey', like: 20},
        ],
    newPostText: 'kamasutra',
    profile: null,
    status: "",

};

const postsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    };

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: action.post,
                like: 0
            }
            stateCopy.postsData.push(newPost);
            return stateCopy;
        case ADD_NEW_PROFILE:
            let stateCopyProfile = {...state};
            stateCopyProfile.profile = action.profile;
            return stateCopyProfile;
        case STATUS:
            let stateCopyStatus = {...state};
            stateCopyStatus.status = action.status;
            return stateCopyStatus;
        default:
            return state;
    }


}

export const addPostActionCreator = (post) => ({type: 'ADD-POST', post})
export const setUserProfileActionCreator = (profile) => ({type: 'ADD-NEW-PROFILE', profile})
export const setStatus = (status) => ({type: 'STATUS', status})

export const setProfileThunk = (userId) => {
   return (dispatch) => {
       usersAPI.getProfile(userId)
           .then(data => {
               dispatch(setUserProfileActionCreator(data));
           })
   }
}
export const getStatusThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getStatus(userId)
            .then(response=> {
                dispatch(setStatus(response.data));
            })
    }
}
export const setStatusThunk = (status) => {
    return (dispatch) => {
        usersAPI.putStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }   })
    }
}
export default postsReducer;