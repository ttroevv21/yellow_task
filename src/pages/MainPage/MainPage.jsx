import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../asyncActions/films';
import './MainPage.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pagination } from '@mui/material';
import { fetchSearch } from '../../asyncActions/search';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MainPage = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchingName, setSearchingName] = useState('');
    
    useEffect(() => {
        dispatch(fetchFilms(currentPage));
    },[currentPage, dispatch]);

    const films = useSelector(state => state.films.films.results);
    const searchingMovies = useSelector(state => state.search.search?.results);

    //* Пагинация
    function handlePaginate(event) {
        event.preventDefault();
        let val = +event.target.innerText;
        if(!isNaN(val) ) {
            dispatch(fetchFilms(val));
            setCurrentPage(val);
        } if(event.target.dataset.testid === 'NavigateBeforeIcon') {
            setCurrentPage(currentPage - 1);
            dispatch(fetchFilms(currentPage));
        } if(event.target.dataset.testid === 'NavigateNextIcon') {
            setCurrentPage(currentPage + 1);
            dispatch(fetchFilms(currentPage));
        }
    };

    if(!films) {
        return <h3>Загрузка...</h3>
    };

    return (
        <div className='container'>
            <SearchForm searchingName={searchingName} setSearchingName={setSearchingName} currentPage={currentPage} />

            <Link to='/favourites' className='favs-btn'>
                Избранное
            </Link>

            <div className='line'></div>

            <div className='title'>
                <h3>Популярные фильмы</h3>
            </div>

            {searchingMovies?.length > 0 && searchingName.length > 0 ? 
                <MoviesList films={searchingMovies} /> 
                : 
                <MoviesList films={films} />
            }

            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    count={
                        searchingMovies?.length > 0 && searchingName.length > 0 ? 
                        searchingMovies?.length < 20 ? 1 : 2
                        :
                        100
                    } 
                    shape="rounded"  
                    theme={darkTheme}
                    onChange={(e) => {
                        handlePaginate(e);
                        if(searchingName.length > 0) {
                            dispatch(fetchSearch(searchingName, currentPage))
                        };
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    }}
                />
            </ThemeProvider>

        </div>
    )
};

export default MainPage;