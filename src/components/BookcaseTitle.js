import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const BookcaseTitle = ({ classes, title }) => {

  return (
    <div className={classes.title}>
      <h4 className={classes.zeroMargin}>
        {title}
      </h4>
      <hr className={classes.zeroMargin}/>
    </div>
  );
};

const styles = {
  zeroMargin: {
    'margin': '0px'
  },
  title: {
    'fontFamily': 'Montserrat',
    'textTransform': 'uppercase',
    'padding': '0px 20px 0px 20px'
  }
};

BookcaseTitle.prototypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(BookcaseTitle);