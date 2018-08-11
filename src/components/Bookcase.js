import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import BookcaseTitle from "./BookcaseTitle";

class Bookcase extends Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render () {

    const { classes, books, title, onUpdateShelf } = this.props;

    return (
      <div className={classes.root}>

        {title && (<BookcaseTitle title={title} />)}

        <Grid container className={classes.body}>
          {books.map(book => (
            <BookCard onUpdateShelf={onUpdateShelf} key={book.id} book={book}/>
          ))}  
        </Grid>

      </div>
    )
  }
};

const styles = theme => ({
  body: {
    'padding': '5px',
    // 'display': 'grid',
    // 'flexWrap': 'wrap',
    'gridTemplateColumns': 'repeat(12, 1fr)',
    'gridGap': `${theme.spacing.unit * 3}px`,
    // 'justifyContent': 'center',
    // 'overflow': 'hidden',
    // 'backgroundColor': theme.palette.background.paper,
  },
  root: {
    'margin-bottom': '50px'
  }
});

export default withStyles(styles)(Bookcase);