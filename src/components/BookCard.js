import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { 
  Card, 
  CardContent, 
  Typography, 
  CardMedia 
} from "@material-ui/core";

const BookCard = props => {

  const { classes, book } = props;

  return (
    <Card key={book.id} className={classes.card}>

      <div className={classes.details}>
        <CardContent className={classes.content}>

          <Typography variant="title" className={classes.title}>
            {book.title}
          </Typography>

          <Typography variant="subheading" >  
            <ul className={classes.authors}>
              {book.authors.map((author, idx) => (
                <li key={idx}>{author}</li>
              ))}
            </ul>
          </Typography>

        </CardContent>
      </div>

      <CardMedia
        className={classes.cover}
        image={book.imageLinks.thumbnail}
        title={book.title}
      />
    </Card>
  );
};

const styles = theme => ({
  details: {
    'display': 'flex',
    'flexDirection': 'column',
  },
  title: {
    'color': '#ffd602',
    'font-style': 'italic',
    'text-decoration': 'underline'
  },
  authors: {
    'color': '#fdfdfd',
    'list-style-type': 'none',
    'padding': '0px',
    'font-size': '13px'
  },
  card: {
    'background': '#212121',
    'color': 'white',
    'width': '370px',
    'height': '200px',
    'max-height': '200px',
    'max-width': '370px',
    'margin-top': '10px',
    'margin-left': '5px',
    'margin-right': '5px',
    'display': 'flex',
  },
  content: {
    'flex': '1 0 auto',
    'width': '200px',
    'padding-left': '12px'
  },
  cover: {
    'position': 'absolute',
    'margin-left': '220px',
    'width': 150,
    'height': 200,
  }
});

export default withStyles(styles)(BookCard);