const defaultState = {
    search: {},
};

const GET_SEARCHING_MOVIES = 'GET_SEARCHING_MOVIES';

export const searchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SEARCHING_MOVIES: 
            return {...state, search: {...action.payload}}
        default: 
            return state;
    }
};

export const getSearchingMovies = (payload) => ({type: GET_SEARCHING_MOVIES, payload});