import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { 
  AppBar, 
  Toolbar, 
  Typography,
  Button,
  Hidden
} from "@material-ui/core";

const HomeHeader = ({ classes }) => {

  return(
    <AppBar position='fixed'>
      <Toolbar>
        <Typography 
          variant='title' 
          color='inherit'
          className={classes.flex}
        >
          <div className={classes.title}>My Reads</div>
        </Typography>
        <Hidden smDown>
          <Link to='/search'>
            <Button variant='contained' color='secondary'>Search</Button>
          </Link>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
};

const styles = {
  title: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase'
  },
  flex: {
    flexGrow: 1,
  },
}

HomeHeader.prototypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeHeader);