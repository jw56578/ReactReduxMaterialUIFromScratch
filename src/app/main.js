/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//REDUX STEP #2 - import the action creator (function) that is used to get some data
import {fetchSomething} from '../actions/action_ajax';
import ShowAjaxResult from '../containers/ajax_promise_consumer';
import {Link} from 'react-router';
//this is how you inline styles in react
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const AppBarExampleIconMenu = () => (
  <AppBar
    title="Title"
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
); 

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
    //this is what you have to do when using es6 and webpack/babel compiler
    //the functions aren't bound properly so you have to manually do it
    this.doAjaxStuff = this.doAjaxStuff.bind(this);
  }
  doAjaxStuff(){
      //REDUX STEP #5 - use the action creator
      this.props.fetchSomething(); 
  }
  render() {
      const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={()=>this.setState({open:false})}
      />
    );
    
    return (
        <div>
          <AppBarExampleIconMenu/>
          <Link to="test" >go to test</Link>
          <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
          <button onClick={this.doAjaxStuff}>Do ajax stuff</button>
          <ShowAjaxResult />
          <BookList />
          <BookDetail />
          {this.props.children}
           <div style={styles.container}>
             <Dialog
            open={this.state.open}
            title="Hello World"
            actions={standardActions}
            onRequestClose={()=>this.setState({open:false})}
          >
            1-2-3-4-5
          </Dialog>
           <RaisedButton
            label="Click to show dialog"
            primary={true}
            onTouchTap={()=>this.setState({open:true})}
            />
           </div>
      </div>
    );
  }
}
//REDUX STEP #3 - Do this which puts the function on the props of the component
/*function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchSomething},dispatch);
}*/
//REDUX STEP #4 - Use connect to export a redux specific component, with mapDispatchToProps and/or mapStateToProps
//WTF!!! you don't have to do the shit with mapDispatchToProps, you can just send in the function directly in an object
//{fetchSomething:fetchSomething} === {fetchSomething}
export default connect(null,{fetchSomething})(Main);
