import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsContainer from '../../components/DetailsContainer/DetailsContainer';
import './FavouritesPage.css';

const FavouritesPage = () => {

    const [favs, setFavs] = useState([]);

    function getFavs() {
        let favs = JSON.parse(localStorage.getItem("favs"));
        if (!favs) {
          favs = {
            movies: [],
          };
        };
    
        return favs;
    };

    useEffect(() => {
        setFavs(getFavs());
    }, [favs]);

    if( !favs?.movies?.length ) {
        return (
            <div className='not-found'>
                <div className="title">
                    <h4>Ваш список избранных пуст</h4>
                </div>
                <div className='btn-div'>
                    <Link className='back-button to-home-btn' to='/'>
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className='favourites-page'>
            <Link to='/' className='to-home-btn'  style={{ textDecoration: 'none' }}>
                На главную
            </Link>
            <div className="title">
                <h4>Ваши избранные фильмы</h4>
            </div>
            {favs.movies.map((movie) => (
                <DetailsContainer key={movie.id} data={movie} />
            ))}
        </div>
    );
};

export default FavouritesPage;