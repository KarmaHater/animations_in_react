import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as articleActions from '../actions/article-actions.js';
import ArticleList from '../components/article-list/article-list'

class HomePage extends Component {

    componentDidMount() {
        this.props.actions.fetchArticles()
    }

    render() {
        const {articles} = this.props;

        return (
            <div>
                <h1>Connected to the State Tree</h1>
                <ArticleList articles={articles} useStateTree={true}/>
                <h1>Using Internal Component State</h1>
                <ArticleList articles={articles} useStateTree={false}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.article.articles
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(articleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);