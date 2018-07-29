import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Add as AddIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const FabAddButton = props => {

  const { classes, link } = props;

  return (
    <Link to={link}>
      <Button 
        variant="fab" 
        className={classes.fab} 
        color='secondary'
      >
        <AddIcon />
      </Button>
    </Link>
  );
};

const styles = theme => ({
  fab: {
    'position': 'fixed',
    'bottom': theme.spacing.unit * 2,
    'right': theme.spacing.unit * 2,
  }
})

export default withStyles(styles)(FabAddButton);