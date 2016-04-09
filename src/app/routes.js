import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './main';


const Test1 = ()=>{
    return <div> I'm on test 1</div>
};
const Test2 = ()=>{
    return <div> I'm on test 2</div>
};

export default(
    <Route path='/' component={Main} >
        <Route path="test" component={Test1}/>
        <Route path="test2" component={Test2}/>
    </Route>
)
