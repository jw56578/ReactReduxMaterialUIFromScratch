/// reducer is a stupid term for a function that returns data
//returns a specific piece of data per application
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import AjaxReducer from './reducer_ajax';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  books:BooksReducer,
  activeBook:ActiveBook,
  //REDUX STEP #7 - add the reducer to the combinerReducers
  ajax:AjaxReducer,
  //this key is specific, it must be "form"
  form:formReducer
  
});

export default rootReducer;
