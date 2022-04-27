import { getFilmsFromAPIAction } from "../store/filmReducer"

export const fetchFilms = (pageNum = 1) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6e1f9c54b527f5f39ad57cbfc93e2ed0&language=ru&page=${pageNum}`)
        .then(res => res.json())
        .then(json => dispatch(getFilmsFromAPIAction(json)))
    }
};