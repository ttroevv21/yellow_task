import { getGenres } from "../store/genreReducer";

export const fetchGenres = () => {
    return function(dispatch) {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6e1f9c54b527f5f39ad57cbfc93e2ed0&language=ru')
        .then(res => res.json())
        .then(json => dispatch(getGenres(json)))
    }
};