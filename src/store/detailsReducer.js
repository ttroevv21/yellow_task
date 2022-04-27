const defaultState = {
    details: {},
};

const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';

export const detailsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS: 
            return {...state, details: {...action.payload}}
        default: 
            return state;
    }
};

export const getMovieDetails = (payload) => ({type: GET_MOVIE_DETAILS, payload});