import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { filmReducer } from "./filmReducer";
import { genreReducer } from "./genreReducer";
import { searchReducer } from "./searchReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { detailsReducer } from "./detailsReducer";
import { recommendationsReducer } from "./recommendationsReducer";

const rootReducer = combineReducers({
    films: filmReducer,
    search: searchReducer,
    genres: genreReducer,
    details: detailsReducer,
    recommends: recommendationsReducer
});

const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware(thunk)));

export default store;