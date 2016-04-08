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
          <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
          <BookList />
          <BookDetail />
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

export default Main;
