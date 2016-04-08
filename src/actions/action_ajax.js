import axios from 'axios';

export const FETCH_SOMETHING = "FETCH_SOMETHING";
var counter = 0;

function fetchSomething(){
    var root = 'http://jsonplaceholder.typicode.com';
    counter ++;
    var request = axios.get(root + '/posts/' + counter);
    return {
        type:FETCH_SOMETHING,
        payload:request
    }
    
}

export {fetchSomething};