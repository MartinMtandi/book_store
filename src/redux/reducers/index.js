import {combineReducers} from 'redux';
import booksReducer from './booksReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    booksReducer,
    categoriesReducer
});