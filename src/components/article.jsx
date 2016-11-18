import React from 'react';

export default class ArticleList extends React.Component {

    static propTypes = {
        articles: React.PropTypes.object
    }

    render() {
        const {name} =this.props.article;
        return (
            <div className='article'>
                {name}
            </div>
        );
    }
}