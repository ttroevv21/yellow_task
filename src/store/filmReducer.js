const defaultState = {
    films: {},
};

const GET_FILMS_FROM_API = 'GET_FILMS_FROM_API';

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS_FROM_API: 
            return {...state, films: {...action.payload}}
        default: 
            return state;
    }
};

export const getFilmsFromAPIAction = (payload) => ({type: GET_FILMS_FROM_API, payload});