const defaultState = {
    genres: {},
};

const GET_GENRES = 'GET_GENRES';

export const genreReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_GENRES: 
            return {...state, genres: {...action.payload}}
        default: 
            return state;
    }
};

export const getGenres = (payload) => ({type: GET_GENRES, payload});