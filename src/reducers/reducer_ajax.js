import {FETCH_SOMETHING} from '../actions/action_ajax';


export default function(state=null,action){
    //this is where redux promise does its work
    //the middleware intercepts the payload and sees that it is a promise
    //it then delays calling this reducers until the promise resolves, is there a thing for observables?
    console.log("ajax action",action);
    //whatever you decide to return needs to be a new instance of something, not a modified version of something
    //make sure you are always working with immutable data
    //use concat or ... with arrays, you can use object.assign with objects but this doesn't work in IE
    switch(action.type){
        case FETCH_SOMETHING:
            return action.payload.data;
    }
    return state;
}