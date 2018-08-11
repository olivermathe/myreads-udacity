import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import { 
  Card, 
  CardContent, 
  Typography, 
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Grid
} from "@material-ui/core";

const Content = props => {

  const { classes, book } = props;

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

const Controls = props => {

  const { classes, anchorEl, toogleMenuActions } = props;

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

const MoreActions = props => {

  const { anchorEl, toogleMenuActions, classes, onUpdateShelf } = props;

  const actions = [
    {label: 'Want To Read', value: 'wantToRead'}, 
    {label: 'Read', value: 'read'}, 
    {label: 'Currently Reading', value: 'currentlyReading'}
  ];

  return (
    <Menu id="more-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => toogleMenuActions(null)} >

      {actions.length > 0 && actions.map((action, idx) => {
        
        const onClick = () => {
          toogleMenuActions(null);
          onUpdateShelf(action.value);
        };

        return (
          <MenuItem key={idx} onClick={onClick} className={classes.menuItem}>
            {action.label}
          </MenuItem>
        );
      })}

    </Menu>
  );
}

const Details = props => {

  const { anchorEl, classes, toogleMenuActions, book } = props;

  return (
    <div className={classes.details}>
      <Content 
        book={book} 
        classes={classes} 
      />
      <Controls 
        toogleMenuActions={toogleMenuActions} 
        anchorEl={anchorEl} 
        classes={classes}
      />
    </div>
  );
}

class BookCard extends Component {

  state = {
    anchorEl: null
  }

  toogleMenuActions = anchorEl => {
    this.setState({ anchorEl });
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (e) => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes, book, onUpdateShelf } = this.props;
    const { anchorEl } = this.state;

    return (
      <Grid item >
        <Card key={book.id} className={classes.card}>

          {/* Book details */}
          <Details
            toogleMenuActions={this.toogleMenuActions}
            classes={classes}
            book={book}
            anchorEl={anchorEl}
          />

          {/* Book image */}
          <CardMedia
            className={classes.cover}
            image={book.imageLinks.thumbnail}
            title={book.title}
          />
        </Card>

        {/* Shelf control */}
        <MoreActions 
          toogleMenuActions={this.toogleMenuActions} 
          anchorEl={anchorEl}
          classes={classes}
          shelf={book.shelf}
          onUpdateShelf={(shelf) => onUpdateShelf(shelf, book.id)}
        />
      </Grid>
    );
  }
};

const styles = theme => ({
  menuItem: {
    'fontFamily': 'Montserrat',
    'textTransform': 'uppercase',
    'fontSize': '15px',
    'height': '10px'
  },
  selected: {
    'background': theme.palette.secondary.light,
  },
  details: {
    'display': 'flex',
    'flexDirection': 'column',
  },
  playIcon: {
    'height': 38,
    'width': 38,
  },
  controls: {
    'display': 'flex',
    'alignItems': 'center',
    'paddingLeft': theme.spacing.unit,
    'paddingBottom': theme.spacing.unit,
  },
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
  content: {
    'flex': '1 0 auto',
    'width': '200px',
    'padding-left': '12px'
  },
  cover: {
    'position': 'absolute',
    'margin-left': '220px',
    'width': '150px',
    'height': '225px',
  }
});

export default withStyles(styles)(BookCard);