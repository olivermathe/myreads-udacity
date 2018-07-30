import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const BookcaseTitle = props => {

  const { classes, title } = props;

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

export default withStyles(styles)(BookcaseTitle);