import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './main';


class Test extends Component{
    render(){
        return <div>the route is showing id: {this.props.params.id}</div>
    }
}

const Test1 = ()=>{
    return <div> I'm on test {this.props.params.id}</div>
};
const Test2 = ()=>{
    return <div> I'm on test 2</div>
};

export default(
    <Route path='/' component={Main} >
        <Route path="test" component={Test}/>
        <Route path="test/:id" component={Test}/>
        <Route path="test2" component={Test2}/>
        <Route path="test2/:id" component={Test2}/>
    </Route>
)
