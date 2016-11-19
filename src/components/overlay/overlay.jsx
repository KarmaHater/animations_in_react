import React from 'react';
import './overlay.css'

export default class Overlay extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        price: React.PropTypes.string
    }

    render() {
        const {
            name,
            price
        } =this.props;

        return (
            <div className="overlay">
                {name}
                {price}
            </div>
        );
    }
}