import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CardContent, Typography } from "@material-ui/core";

const BookContent = ({ classes, book }) => {

  return (
    <CardContent className={classes.content}>

      <Typography variant="title" className={classes.title}>
        {book.title}
      </Typography>

      {book.authors && book.authors.length > 0 && (

        <Typography variant="subheading" >  
          <ul className={classes.authors}>
            {book.authors.map((author, idx) => (
              <li key={idx} className={classes.author}>{author}</li>
            ))}
          </ul>
        </Typography>

      )}
      
    </CardContent>
  );

}

const styles = {
  title: {
    'color': '#ffd602',
    'textTransform': 'uppercase',
    'fontFamily': 'Montserrat',
    'fontSize': '17px',
  },
  authors: {
    'color': '#fdfdfd',
    'list-style-type': 'none',
    'padding': '0px',
    'font-size': '13px',
    'margin': '0px'
  },
  author: {
    'height': '13px;'
  },
  content: {
    'flex': '1 0 auto',
    'width': '200px',
    'padding-left': '12px'
  }
}

BookContent.prototypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired
}

export default withStyles(styles)(BookContent);