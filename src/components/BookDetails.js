import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import BookContent from "./BookContent";
import BookControls from "./BoookControls";

const BookDetails = ({ anchorEl, classes, toogleMenuActions, book }) => {

  return (
    <div className={classes.details}>
      <BookContent book={book} />
      <BookControls toogleMenuActions={toogleMenuActions} anchorEl={anchorEl} />
    </div>
  );

}

const styles = {
  details: {
    'display': 'flex',
    'flexDirection': 'column',
  }
}

BookDetails.prototypes = {
  classes: PropTypes.object.isRequired,
  anchorEl: PropTypes.string,
  toogleMenuActions: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default withStyles(styles)(BookDetails);