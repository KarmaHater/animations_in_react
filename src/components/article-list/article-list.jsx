import React from 'react';
import Article from '../article/article';
import './article-list.css'

export default class ArticleList extends React.Component {

    static propTypes = {
        articles: React.PropTypes.array
    }

    renderUsingStateTree() {
        const {articles} = this.props;
        return articles.map((article) => <Article key={article.id} article={article} overlayId={"ide from tree"}/>)
    }

    renderWithoutInternalComponentState() {
        const {articles} = this.props;
        return articles.map((article) => <Article key={article.id} article={article} />)
    }

    render() {
        const articles = this.props.useStateTree ? this.renderUsingStateTree() : this.renderWithoutInternalComponentState()
        return (
            <div className='article-list'>
                {articles}
            </div>
        );
    }
}