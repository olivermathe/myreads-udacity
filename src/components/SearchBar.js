import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Toolbar, TextField } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const SearchBar = props => {

  const { classes } = props;

  return (
    <AppBar color='inherit' position='fixed' >
      <Toolbar>
        <Link to='/' >
          <IconButton 
            className={classes.menuButton} 
            color="primary" 
            aria-label="Menu"
          >
            <ArrowBack />
          </IconButton>
        </Link>
        <TextField
          placeholder="SEARCH SOME BOOK"
          margin="normal"
          fullWidth
        />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  menuButton: {
    'marginLeft': -12
  }
}

export default withStyles(styles)(SearchBar);