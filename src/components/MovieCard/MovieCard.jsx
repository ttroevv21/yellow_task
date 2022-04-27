import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetails } from '../../asyncActions/details';
import './MovieCard.css';

const MovieCard = ({movie, genres}) => {
    const dispatch = useDispatch();

    return (
            <Link
                onClick={() => {
                    dispatch(fetchDetails(movie.id))
                }}
                style={{ textDecoration: 'none' }} 
                to={`/movies/${movie.id}`}
            >
                <div className='movie-info'>
                    <img 
                        className='movie-img' 
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                        alt="" 
                    />
                    <p>{movie?.title}</p>
                    <div className='genres'>
                        {
                            movie?.genre_ids?.map(genre => (
                                genres.map((title) => {
                                if(title.id === genre) {
                                    return (
                                        <span className='genre-title' key={title.id}>{` ${title.name} `}</span>
                                    )
                                } else {
                                    return null;
                                }
                            })))
                        }
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;