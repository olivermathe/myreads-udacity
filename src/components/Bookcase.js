import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import BookcaseTitle from "./BookcaseTitle";

class Bookcase extends Component {

  render () {

    const { classes, books, title, onUpdateShelf } = this.props;

    return (
      <div className={classes.root}>

        {title && (<BookcaseTitle title={title} />)}

        <Grid container className={classes.body} >
          {books.map(book => (
            <BookCard onUpdateShelf={onUpdateShelf} key={book.id} book={book} />
          ))}  
        </Grid>

      </div>
    )
  }
};

const styles = theme => ({
  body: {
    'padding': '5px',
    'gridTemplateColumns': 'repeat(12, 1fr)',
    'gridGap': `${theme.spacing.unit * 3}px`,
  },
  root: {
    'margin-bottom': '50px'
  }
});

Bookcase.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  onUpdateShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default withStyles(styles)(Bookcase);