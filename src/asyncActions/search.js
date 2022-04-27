import { getSearchingMovies } from "../store/searchReducer";

export const fetchSearch = ( title, val = 1 ) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6e1f9c54b527f5f39ad57cbfc93e2ed0&language=ru&query=${title}&page=${val}`)
        .then(res => res.json())
        .then(json => dispatch(getSearchingMovies(json)))
    }
};