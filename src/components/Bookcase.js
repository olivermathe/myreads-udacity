import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import BookCard from "./BookCard";
import BookcaseTitle from "./BookcaseTitle";

const Bookcase = props => {
  
  const { classes, books, title } = props;

  return (
    <div className={classes.root}>

      {title && (<BookcaseTitle title={title} />)}

      <div className={classes.body}>
        {books.map(book => (
          <BookCard key={book.id} book={book}/>
        ))}  
      </div>

    </div>
  )
};

const styles = theme => ({
  body: {
    'padding': '5px',
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'overflow': 'hidden',
    'backgroundColor': theme.palette.background.paper,
  },
  root: {
    'margin-bottom': '50px'
  }
});

export default withStyles(styles)(Bookcase);