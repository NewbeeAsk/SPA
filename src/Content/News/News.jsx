import React, {createRef} from 'react';
import p from './News.module.css'


const News = (props) => {
    debugger;
    let newsRef = React.createRef();
    let changeTextNews = () => {
        let news = newsRef.current.value;
        props.addNewsText(news)
    }
    let addTextNews = () => {
        props.pushNewsText();
    }
    return (
        <div>
           <textarea value={props.newsState.newsText} ref={newsRef} onChange={changeTextNews}>{props.newsState.newsText}</textarea>
            <button onClick={addTextNews}>Add News</button>
            {props.newsState.news.map(n => <div>{n.text}</div>)}
        </div>
    );
}

export default News;