import React, {createRef} from 'react';


class News extends React.Component {
    constructor(props) {
        super(props);
    }
    newsRef = React.createRef();
    changeTextNews = () => {
        let news = this.newsRef.current.value;
        this.props.addNewsText(news)
    }
    addTextNews = () => {
        this.props.pushNewsText();
    }
    render() {
        return (
            <div>
                <textarea value={this.props.newsState.newsText} ref={this.newsRef}
                          onChange={this.changeTextNews}>{this.props.newsState.newsText}</textarea>
                <button onClick={this.addTextNews}>Add News</button>
                {this.props.newsState.news.map(n => <div>{n.text}</div>)}
            </div>
        );
    }
}

export default News;