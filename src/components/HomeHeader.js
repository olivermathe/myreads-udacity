import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { 
  AppBar, 
  Toolbar, 
  Typography
} from "@material-ui/core";

const HomeHeader = props => {

  const { classes } = props;

  return(
    <AppBar position='fixed'>
      <Toolbar>
        <Typography 
          variant='title' 
          color='inherit' 
          align='justify'
        >
          <div className={classes.title}>My Reads</div>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

const styles = {
  title: {
    fontFamily: 'Montserrat',
    textTransform: 'uppercase'
  }
}

export default withStyles(styles)(HomeHeader);