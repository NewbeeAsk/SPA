
let ADD_NEWS = 'ADD-NEWS';
let TEXT_NEWS = 'TEXT-NEWS';

let initialState= {
    news: [
        {text: 'something', date: '12.12.12'},
        {text: 'something', date: '12.12.12'},
        {text: 'something', date: '12.12.12'},
        {text: 'something', date: '12.12.12'},
    ],
    newsText: 'news',
};

const newsReducer = (state = initialState, action) => {
    let stateCopy = {...state, news: [...state.news]}
    switch (action.type) {
        case ADD_NEWS:
            let newPost = {
                text: state.newsText,
                date: '123123123'
            }
            stateCopy.news.push(newPost);
            stateCopy.newsText = '';
            return stateCopy;
        case TEXT_NEWS:
            stateCopy.newsText = action.newsText;
            return stateCopy;
        default:
            return state;
    }
}

export let newsChangeAC = (newsText) => ({type: 'TEXT-NEWS', newsText: newsText});
export let newsPostAC = () => ({type: 'ADD-NEWS'});

export default newsReducer;