const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

let initialState = {

    postsData:
        [
            {message: 'YO', like: 12},
            {message: 'hey', like: 20},
            {message: 'hey', like: 20},
        ],
    newPostText: 'kamasutra',

};

const postsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        postsData: [...state.postsData]
    };

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                like: 0
            }
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case ADD_NEW_POST_TEXT:
            let stateCopyNewText = {...state};
            stateCopyNewText.newPostText = action.textPost;
            return stateCopyNewText;
        default:
            return state;
    }


}

export const addPostActionCreator = () => ({type: 'ADD-POST'})

export const addNewPostTextActionCreator = (textPost) => ({type: 'ADD-NEW-POST-TEXT', textPost: textPost})

export default postsReducer;