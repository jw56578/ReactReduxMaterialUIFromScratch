export default function(state=null,action){
    //this is where redux promise does its work
    //the middleware intercepts the payload and sees that it is a promise
    //it then delays calling this reducers until the promise resolves, is there a thing for observables?
    console.log("ajax action",action);
    return state;
}