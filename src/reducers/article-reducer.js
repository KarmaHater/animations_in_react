import * as Constants from '../constants/constants.js';

const initialState = {
    articles: [],
    overlayAnimationId: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ARTICLES_FETCH:
            return {
                ...state,
                articles: action.articles
            };
        case Constants.OVERLAY_ANIMATION_ID_UPDATE:
            return {
                ...state,
                overlayAnimationId: action.overlayAnimationId
            };
                default:
            return state;
    }
};

