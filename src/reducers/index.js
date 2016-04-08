/// reducer is a stupid term for a function that returns data
//returns a specific piece of data per application
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books:BooksReducer
});

export default rootReducer;
