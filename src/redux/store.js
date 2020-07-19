import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";

let store = {

    _state: {
        myDialogs: {
            messageData: [
                {message: 'Hi'},
                {message: 'How are you'},
                {message: 'qwerty'}
            ],
            dialogsData:
                [
                    {
                        id: 1,
                        name: 'Nikita',
                        image: 'https://static.ngs.ru/news/99/preview/d612b9e100f0a84692566d54e66aa5aa051eecb3_824.jpg'
                    },
                    {
                        id: 2,
                        name: 'Igor',
                        image: 'https://www.meme-arsenal.com/memes/082cf32e5a8846ae89628b2780595cf1.jpg'
                    },
                    {
                        id: 3,
                        name: 'Artur',
                        image: 'https://i.ytimg.com/vi/th1DNMJFXQ8/maxresdefault.jpg'
                    }
                ],
            userData: [
                    {
                        id: 0,
                        name: 'Roman',
                        image: 'https://rubic.us/wp-content/uploads/2019/10/nashi-v-SSHA.jpg'
                    }
            ],
            newMessage: '',
        },

        myPosts: {
            postsData:
                [
                    {message: 'YO', like: 12},
                    {message: 'hey', like: 20},
                    {message: 'hey', like: 20},
                ],
            newPostText: 'kamasutra',
        },
    },
    callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },


    dispatch(action) {
        this._state.myPosts=postsReducer(this._state.myPosts, action);
        this._state.myDialogs=messagesReducer(this._state.myDialogs, action);
        this.callSubscriber(this._state);
    }
}





export default store;
window.store = store;