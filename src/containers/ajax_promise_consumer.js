import React, {Component} from 'react';
import {connect} from 'react-redux';

class ShowAjaxResult extends Component
{
    render(){
        let body  = '';
        if(this.props.ajaxResult)
            body = this.props.ajaxResult.body;
        return <div>{body}</div>
    }
}
 //REDUX STEP #8 - choose what keys in the global state  you care about and map it to props
//this is monitoring the global state of the application which is defined in reducers/index.js
//in this specific case we care about state.ajax
//whenever this changes, take the value and put it onto a property on this component called ajaxResult
//setstate is then called somwhere and the thing is re rendered
function mapStateToProps(state){
    return {ajaxResult:state.ajax}
}

//REDUX STEP #9 - export the component as a container using connect
export default connect(mapStateToProps)(ShowAjaxResult);