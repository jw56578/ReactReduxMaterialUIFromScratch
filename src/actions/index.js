import axios from 'axios';

//select book is an ActionCreator, it needs to return an action, 
//an object with a type property

//this function is being registered in the book_list container as an Action Creator
//whatever is returned from this function will be sent into every registered reducer
export function selectBook(book){
    return {
        type:"BOOK_SELECTED", //must be called "type"
        payload:book // anything else on it can be whatever you want
        
    }
    
}

export const CREATE_SOMETHING= 'CREATE_SOMETHING';

export function createSomethingFromForm(props){
    const request = axios.post('urltoendpoint',props);
    
    return {
        type:CREATE_SOMETHING,
        payload:request
        
    };    
    
}