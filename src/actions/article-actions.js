import * as Constants from '../constants/constants.js';
import fetch from 'isomorphic-fetch';

export function fetchArticles() {
    return (dispatch) => {
        let URL = 'https://api.zalando.com/articles';

        window.fetch(URL, {method: 'GET'})
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response;
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const articles = data.content.slice(0, 3);
                dispatch({
                    type: Constants.ARTICLES_FETCH,
                    articles
                });
            });
    };
}

export function updateOverlayAnimationId(overlayAnimationId) {
    return {
        type: Constants.OVERLAY_ANIMATION_ID_UPDATE,
        overlayAnimationId
    }
}