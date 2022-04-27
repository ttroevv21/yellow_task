import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../asyncActions/search';
import './SearchForm.css';


const SearchForm = ({searchingName, setSearchingName, currentPage}) => {
    const dispatch = useDispatch();

    function searchMovies(val, currentPage) {
        setSearchingName(val);
        if(searchingName.length > 0) {
            dispatch(fetchSearch(searchingName, currentPage));
        }
    };

    return (
        <div className='search'>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        searchMovies(searchingName);
                    }}
                >
                    <input 
                    className='search-input' 
                    onChange={(e) =>setSearchingName(e.target.value)} 
                    value={searchingName} 
                    type="text" 
                    placeholder='Поиск...' 
                    />
                    <button className='search-btn' type='sunmit'>Найти</button>
                </form>
            </div>
    )
};

export default SearchForm;