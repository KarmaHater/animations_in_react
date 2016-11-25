import React from 'react';
import Overlay from './../overlay/overlay';
import './article.css';

export default class Article extends React.Component {

    static propTypes = {
        article: React.PropTypes.object
    }

    constructor(props) {
        super(props)
        this.state = {
            animateOverlay: false
        }
    }

    displayOverlay = () => {
        // checkif we are useing internal state here
        this.setState({animateOverlay: true})
    }

    render() {
        const {
            name,
            media
        } = this.props.article;

        return (
            <div className="article">
                <div className="article-plus-container" onClick={this.displayOverlay}>
                    <img className="article-plus" src="https://d30y9cdsu7xlg0.cloudfront.net/png/212203-200.png" alt=""/>
                </div>
                <div>
                    <img className="article-image" src={media.images[0].mediumHdUrl} alt="image"/>
                </div>
                <Overlay name={name} price={"price"} animateOverlay={this.state.animateOverlay}/>
            </div>
        );
    }
}