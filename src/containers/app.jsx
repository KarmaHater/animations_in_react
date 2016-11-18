import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store.js';
import HomePage from './home-page';
import '../styles/utils/common.scss'
let reactElement = document.getElementById('react');

render(
    <Provider store={store}>
        <HomePage/>
    </Provider>,
    reactElement
);
