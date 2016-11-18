import * as Constants from '../constants/constants.js';

const initialState = {
    articles: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ARTICLES_FETCH:
            return {
                ...state,
                articles: action.articles
            };
        default:
            return state;
    }
};

