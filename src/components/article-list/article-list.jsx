import React from 'react';
import Article from '../article/article';
import './article-list.css'

export default class ArticleList extends React.Component {

    static propTypes = {
        articles: React.PropTypes.array
    }

    renderArticles() {
        return this.props.articles.map((article) => <Article {...this.props} key={article.id} article={article} />);
    }

    render() {
        return (
            <div className='article-list'>
                {this.renderArticles()}
            </div>
        );
    }
}