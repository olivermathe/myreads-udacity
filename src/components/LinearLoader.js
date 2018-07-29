import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const LinearLoader = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

const styles = {
  root: {
    'flexGrow': 1,
  },
};

LinearLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearLoader);