import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Grid, Grow } from "@material-ui/core";

import BookDetails from "./BookDetails";
import BookActions from "./BookActions";

class BookCard extends Component {

  state = {
    anchorEl: null,
    grow: true
  }

  componentWillUnmount () {

    this.setState({ grow: false })

  }

  toogleMenuActions = anchorEl => {

    this.setState({ anchorEl });

  };

  render() {

    const { classes, book, onUpdateShelf } = this.props;
    const { anchorEl } = this.state;

    const image = book.imageLinks ? book.imageLinks.thumbnail : 'http://localhost:3000/public/default-placeholder-750x415.png';

    return (
      <Grow in={this.state.grow}>
        <Grid item >
          <Card key={book.id} className={classes.card} >

            {/* Book details */}
            <BookDetails
              toogleMenuActions={this.toogleMenuActions}
              book={book}
              anchorEl={anchorEl}
            />

            {/* Book image */}
            <CardMedia
              className={classes.cover}
              image={image}
              title={book.title}
            />
          </Card>

          {/* Shelf control */}
          <BookActions 
            toogleMenuActions={this.toogleMenuActions} 
            anchorEl={anchorEl}
            shelf={book.shelf}
            bookId={book.id}
            onUpdateShelf={onUpdateShelf}
          />
        </Grid>
      </Grow>
    );
  }
};

const styles = {
  card: {
    'background': '#212121',
    'color': 'white',
    'width': '370px',
    'height': '225px',
    'max-height': '225px',
    'max-width': '370px',
    'margin-top': '10px',
    'margin-left': '5px',
    'margin-right': '5px',
    'display': 'flex',
    'boxShadow': '2px 4px 10px rgba(0, 0, 0, 0.25)',
  },
  cover: {
    'position': 'absolute',
    'margin-left': '220px',
    'width': '150px',
    'height': '225px',
  }
}

BookCard.prototypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default withStyles(styles)(BookCard);