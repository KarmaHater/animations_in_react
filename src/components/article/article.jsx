import React from 'react';
import './article.css'

export default class ArticleList extends React.Component {

    static propTypes = {
        articles: React.PropTypes.object
    }

    render() {
        const {
            name,
            media
        } =this.props.article;

        return (
            <div className="article">
                <div className="article-plus-container">
                    <img className="article-plus" src="https://d30y9cdsu7xlg0.cloudfront.net/png/212203-200.png" alt=""/>
                </div>
                <div>
                    <img className="article-image" src={this.props.article.media.images[0].mediumHdUrl} alt="image"/>
                </div>


                {name}
            </div>
        );
    }
}