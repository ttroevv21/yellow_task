import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchDetails } from '../../asyncActions/details';
import { fetchRecommends } from '../../asyncActions/recommends';
import DetailsContainer from '../../components/DetailsContainer/DetailsContainer';
import MoviesList from '../../components/MoviesList/MoviesList';
import './MovieDetails.css';

const MovieDetails = (props) => {
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetails(id));
        dispatch(fetchRecommends(id));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }, [dispatch, id]);

    const data = useSelector(state => state.details?.details);
    const recommends = useSelector(state => state.recommends.recommendations.results);

    if(!(data && recommends)) {
        return <h3>Загрузка...</h3>
    };

    return (
        <>
            <div 
                className='movie-details' 
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                    backgroundSize: '100%',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat'
                }} 
            >
                <Link to='/' className='to-home-btn'  style={{ textDecoration: 'none' }}>
                    На главную
                </Link>
                <DetailsContainer data={data} />
            </div>
            <h4>Смотрите также:</h4>
            <MoviesList films={recommends} />
            
        </>
    )
};

export default MovieDetails;