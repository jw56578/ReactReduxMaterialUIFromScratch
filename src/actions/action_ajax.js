import axios from 'axios';

export const FETCH_SOMETHING = "FETCH_SOMETHING";
var counter = 0;

//REDUX STEP #1 - Make a functoin that gets whatever data. Return an object with a "type" property and whatever else you want
//whatever component needs to use this thing will import it
//then it will wire it up with mapDispatchToProps
//that magically puts this function onto the props of the compoennt so that it can be used however needed
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