import axios from 'axios';

export const FETCH_SOMETHING = "FETCH_SOMETHING";

function fetchSomething(){
    var root = 'http://jsonplaceholder.typicode.com';
    var request = axios.get(root + '/posts/1');
    return {
        type:FETCH_SOMETHING,
        payload:request
    }
    
}

export {fetchSomething};