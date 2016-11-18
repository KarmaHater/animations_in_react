import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as articleActions from '../actions/article-actions.js';

class HomePage extends Component {

    componentWillMount() {
        this.props.actions.fetchArticles()
    }

    render() {
        debugger
        return (
            <div>
                {this.props.articles}
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