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

function mapStateToProps(state){
    return {ajaxResult:state.ajax}
}


export default connect(mapStateToProps)(ShowAjaxResult);