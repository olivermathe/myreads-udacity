import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, AppBar, Toolbar, TextField } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { DebounceInput } from "react-debounce-input";

const SearchBar = ({ classes, onSearch }) => {

  return (
    <AppBar color='inherit' position='fixed' >
      <Toolbar>
        <Link to='/' >
          <IconButton className={classes.menuButton} color="primary" aria-label="Menu" >
            <ArrowBack />
          </IconButton>
        </Link>
        <DebounceInput
          element={TextField}
          debounceTimeout={700}
          placeholder="SEARCH SOME BOOK"
          margin="normal"
          onChange={e => onSearch(e.target.value)}
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

SearchBar.prototypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default withStyles(styles)(SearchBar);