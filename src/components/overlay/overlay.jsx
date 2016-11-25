import React from 'react';
import classnames from 'classnames';
import './overlay.css';

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

        const overlayClassNames = classnames('overlay', { 'overlay-animate': this.props.animateOverlay});

        return (
            <div className={overlayClassNames}>
                {name}
                {price}
            </div>
        );
    }
}