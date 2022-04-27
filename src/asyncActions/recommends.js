import { getRecommendations } from "../store/recommendationsReducer";

export const fetchRecommends = ( id ) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6e1f9c54b527f5f39ad57cbfc93e2ed0&language=ru&page=1`)
        .then(res => res.json())
        .then(json => dispatch(getRecommendations(json)))
    }
};