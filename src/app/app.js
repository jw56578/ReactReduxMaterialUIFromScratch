import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './main'; // Our custom react component
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import ReduxPromise from 'redux-promise';
//browserHistory uses the technique without the has but you need to set your server up to serve the same thing regardles of url
//hashHistory is easier
import {Router,Route,Link, browserHistory,hashHistory} from 'react-router';
import routes from './routes';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

//normal way to do it with no middleware
//let store = createStore(reducers);

//use middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//importing the routes from the route file and assigning to routes is not working for some reason
//the route gets exported but when imported its not the same object, no idea why
ReactDOM.render(<div>
<Provider store={createStoreWithMiddleware(reducers)}>
<Router history={hashHistory} routes={
    routes
} />
</Provider>
</div>, document.getElementById('app'));


 
