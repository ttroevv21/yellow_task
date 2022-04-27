import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import MainPage from './pages/MainPage/MainPage';
import MovieDetails from './pages/MovieDetails.jsx/MovieDetails';

const MyRoutes = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/movies/:id' element={<MovieDetails />} />
                <Route path='/favourites' element={<FavouritesPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;