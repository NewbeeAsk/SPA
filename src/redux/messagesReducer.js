const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState={
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
};

const messagesReducer = (state=initialState, action) => {

    switch (action.type) {
        case CHANGE_MESSAGE:
            let stateCopy = {...state}
            stateCopy.newMessage = action.textMessage;
        return stateCopy;
        case SEND_MESSAGE:
            let stateCopyMessage = {...state};
            let newMessage = {
                message: state.newMessage
            }
            stateCopyMessage.messageData.push(newMessage);
            stateCopyMessage.newMessage = '';
            return stateCopyMessage;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})

export const changeMessageActionCreator = (textMessage) => ({type: 'CHANGE-MESSAGE', textMessage: textMessage})

export default messagesReducer;