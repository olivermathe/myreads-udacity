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
  MenuItem
} from "@material-ui/core";

const Content = props => {

  const { classes, book } = props;

  return (
    <CardContent className={classes.content}>
      <Typography variant="title" className={classes.title}>
        {book.title}
      </Typography>
      <Typography variant="subheading" >  
        <ul className={classes.authors}>
          {book.authors.map((author, idx) => (
            <li key={idx} className={classes.author}>{author}</li>
          ))}
        </ul>
      </Typography>
    </CardContent>
  );
}

const Controls = props => {

  const { classes, anchorEl, handleClick } = props;

  return (
    <div className={classes.controls}>
      <IconButton 
        aria-label="Shelfs" 
        color='inherit'  
        aria-owns={anchorEl ? 'more-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreIcon className={classes.playIcon}/>
      </IconButton>
    </div>
  );
}

const MoreActions = props => {

  const { anchorEl, handleClose, classes, shelf } = props;

  const actions = [
    'Want To Read', 
    'Currently Reading', 
    'Read', 
    'None'
  ];

  const normalShelf = shelf.toLowerCase().replace(/ /g,'');

  return (
    <Menu
      id="more-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >

      {actions.length > 0 && actions.map((action, idx) => {
        
        const normalAction = action.toLowerCase().replace(/ /g,'');

        let className = {};

        if (normalAction === normalShelf)
          className = classNames([classes.menuItem, classes.selected]);
        else 
          className = classes.menuItem;

        return (
          <MenuItem key={idx} onClick={handleClose} className={className}>
            {action}
          </MenuItem>
        );
      })}

    </Menu>
  );
}

const Details = props => {

  const { anchorEl, classes, handleClick, book } = props;

  return (
    <div className={classes.details}>
      <Content 
        book={book} 
        classes={classes} 
      />
      <Controls 
        handleClick={handleClick} 
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

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { classes, book } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Card key={book.id} className={classes.card}>

          {/* Book details */}
          <Details
            handleClick={this.handleClick}
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
          handleClose={this.handleClose} 
          anchorEl={anchorEl}
          classes={classes}
          shelf={book.shelf}
        />
      </div>
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
    // 'font-style': 'italic',
    // 'text-decoration': 'underline'
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