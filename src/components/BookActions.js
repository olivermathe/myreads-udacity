import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Menu, MenuItem } from "@material-ui/core";

class BookActions extends Component {

  state = {
    actions: [
      {label: 'Currently Reading', value: 'currentlyReading'},
      {label: 'Want To Read', value: 'wantToRead'}, 
      {label: 'Read', value: 'read'}, 
    ]
  }

  onClickHandle (action) {
    
    const { toogleMenuActions, onUpdateShelf, bookId } = this.props;
    
    toogleMenuActions(null);
    onUpdateShelf(action, bookId);

  }

  onCloseHandle () {

    this.propstoogleMenuActions(null);

  }

  render () {

    const { anchorEl, classes } = this.props;
    const { actions } = this.state;

    return (
      <Menu 
        id="more-menu" 
        anchorEl={anchorEl} 
        open={Boolean(anchorEl)} 
        onClose={this.onCloseHandle}
      >

        {actions.length > 0 && actions.map((action, idx) => (
          <MenuItem 
            key={idx} 
            onClick={() => this.onClickHandle(action.value)} 
            className={classes.menuItem}
          >
            {action.label}
          </MenuItem>
        ))}

      </Menu>
    );
  }
}

const styles = {
  menuItem: {
    'fontFamily': 'Montserrat',
    'textTransform': 'uppercase',
    'fontSize': '15px',
    'height': '10px'
  }
}

BookActions.proptypes = {
  classes: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
  toogleMenuActions: PropTypes.func.isRequired,
  anchorEl: PropTypes.string,
  bookId: PropTypes.string.isRequired
}

export default withStyles(styles)(BookActions);
  