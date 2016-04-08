import axios from 'axios';

export const FETCH_SOMETHING = "FETCH_SOMETHING";

function fetchSomething(){
    var url = 'http://www.google.com';
    var request = axios.get(url);
    debugger;
    return {
        type:FETCH_SOMETHING,
        payload:request
    }
    
}

export {fetchSomething};