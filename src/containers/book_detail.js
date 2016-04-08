import React ,{Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        //this is what happens when the app first runs, the state is null because we are only putting in a state when somethign is clicked
        if(!this.props.book){
            return <div>no book has been selected</div>
        }
        return(
            <div>
            {this.props.book.title}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book:state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);