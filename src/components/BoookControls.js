import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { MoreVert as MoreIcon } from "@material-ui/icons";

const BookControls = ({ classes, anchorEl, toogleMenuActions }) => {

  return (
    <div className={classes.controls}>
      <IconButton 
        aria-label="Shelfs" 
        color='inherit'  
        aria-owns={anchorEl ? 'more-menu' : null}
        aria-haspopup="true"
        onClick={(e) => toogleMenuActions(e.currentTarget)}
      >
        <MoreIcon className={classes.playIcon}/>
      </IconButton>
    </div>
  );

}

const styles = theme => ({
  playIcon: {
    'height': 38,
    'width': 38,
  },
  controls: {
    'display': 'flex',
    'alignItems': 'center',
    'paddingLeft': theme.spacing.unit,
    'paddingBottom': theme.spacing.unit,
  }
});

BookControls.prototypes = {
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.string,
  toogleMenuActions: PropTypes.func.isRequired
}

export default withStyles(styles)(BookControls);