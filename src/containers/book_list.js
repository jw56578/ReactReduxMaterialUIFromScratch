/*\
Simple example of a container that consumes hard coded data or sync data, maybe from local storage
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
//this is just a function imported from another file
//this could have just been a function inside this file
import {selectBook} from '../actions';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    
    renderList(){
        return this.props.books.map((b)=>{
            //make sure you use arrow function for the click inside of a loop in order to create the closure on the b variable
            return(
                <li
                xxxcomment='use the arrow function to maintain this, else if you use a function directly off the component you have to do the bind thing'
                 onClick={()=>this.props.selectBook(b)}
                 key={b.title} >
                 {b.title}
                 </li>
            );
        });   
    }
    render(){
        return(
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}
//state is whatever is defined in the main reducer '../reducers/index.js'
function mapStateToProps(state){
    //whatever is returned from here will show up as props on BookList
    return{
        books:state.books
    };
}
//anything that is returned from this function will end up as props on the BookList Container
function mapDispatchToProps(dispatch){
    //whenever select book is called the result should be passed to all of our reducers
    //this is suppose to magically put a prop called selectBook onto props, make sure the export of a function is correct
    return bindActionCreators({selectBook},dispatch);
}

//promote book list from component to container
export default connect(mapStateToProps,mapDispatchToProps)(BookList);