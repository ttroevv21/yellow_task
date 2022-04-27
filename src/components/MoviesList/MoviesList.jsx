import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from '../../asyncActions/genre';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

const MoviesList = ({ films }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    });

    const genres = useSelector(state => state.genres.genres.genres);

    if(!genres) {
        return null;
    };

    return (
        <div className='movies'>
            {films.map((movie) => (
                <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}  
        </div>
        
         
    );
};

export default MoviesList;