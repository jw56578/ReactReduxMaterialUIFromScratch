/// reducer is a stupid term for a function that returns data
//returns a specific piece of data per application
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import AjaxReducer from './reducer_ajax';

const rootReducer = combineReducers({
  books:BooksReducer,
  activeBook:ActiveBook,
  //REDUX STEP #7 - add the reducer to the combinerReducers

  ajax:AjaxReducer
  
});

export default rootReducer;
