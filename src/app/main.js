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
    return (
        <div>
          <AppBarExampleIconMenu/>
          <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
           <div style={styles.container}>
           <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={()=>this.setState({open:true})}
            />
           </div>
      </div>
    );
  }
}

export default Main;
