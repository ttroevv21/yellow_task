import React, {useState, useEffect} from 'react';
import './DetailsContainer.css';

const DetailsContainer = ({data}) => {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        setIsFavourite(checkMovieInFavs(data.id));
    }, [data]);

    function addOrRemoveMovieFromfFavs(movie) {
        let favs = JSON.parse(localStorage.getItem("favs"));
        if (!favs) {
          favs = {
            movies: []
          };
        };
    
        let favMovie = movie;
    
        let check = favs.movies.find((item) => {
          return item.id === movie.id;
        });
    
        if (!check) {
          favs.movies.push(favMovie);
        } else {
          favs.movies = favs.movies.filter((item) => {
            return item.id !== movie.id;
          });
        }
        console.log(favs);
        localStorage.setItem("favs", JSON.stringify(favs));
        setIsFavourite(checkMovieInFavs(data.id));
    };

    function checkMovieInFavs(id) {
        let favs = JSON.parse(localStorage.getItem("favs"));
        if (!favs) {
        favs = {
            movies: [],
        };
        }
        let check = favs.movies.find((item) => {
        return item.id === id;
        });

        if (!check) {
        return false;
        } else {
        return true;
        }
    };

    return (
        <div className="details-container">
            <div className="main-info">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="" />
                </div>
                <div className="info">
                    <h4>{data.title}</h4>
                    <div className="details-genres">
                        <p>Жанр:</p>
                        <div className="genre-list">
                            {
                                data.genres?.map(genre => (
                                    <span className='genre-title' key={genre.id}>
                                        {genre.name}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <p>Дата выхода: {data.release_date}</p>
                    <p>Длительность: {data.runtime} мин.</p>
                    <p>Средняя оценка: {data.vote_average}</p>
                    <p>Кол-во голосов: {data.vote_count}</p>
                    <p>Сюжет:</p>
                    <p>{data.overview}</p>

                    <button onClick={() => addOrRemoveMovieFromfFavs(data)} className='add-remove-btn' >{isFavourite ? 'Убрать из избранных' : 'Добавить в избранное'}</button>
                </div>

            </div>
        </div>
    );
};

export default DetailsContainer;