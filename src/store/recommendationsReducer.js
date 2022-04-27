const defaultState = {
   recommendations : {},
};

const GET_RECOMMENDATIONS = 'GET_RECOMMENDATIONS';

export const recommendationsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_RECOMMENDATIONS: 
            return {...state, recommendations: {...action.payload}}
        default: 
            return state;
    }
};

export const getRecommendations = (payload) => ({type: GET_RECOMMENDATIONS, payload});