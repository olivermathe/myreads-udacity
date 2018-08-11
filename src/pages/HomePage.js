import React, { Component } from 'react';
import { Hidden } from "@material-ui/core";

import HomeHeader from "../components/HomeHeader";
import LinearLoader from "../components/LinearLoader";
import Bookcase from "../components/Bookcase";
import FabAddButton from "../components/FabAddButton";

import * as BooksAPI from "../BooksAPI";

class HomePage extends Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount () {

    BooksAPI.getAll()
      .then(books => this.fillBooksShelf(books))
      .catch(err => console.error(err))

  }

  updateShelf = (shelf, id) => {

    // LOCAL UPDATE
    const books = this.state.books.map(book => {

      if (book.id === id) 
        book.shelf = shelf;

      return book;

    });

    this.fillBooksShelf(books);

    // SERVER UPDATE
    const book = this.state.books.find(book => book.id === id);

    BooksAPI.update(book, shelf)
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }

  fillBooksShelf = books => {

    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    this.setState({ books, currentlyReading, read, wantToRead });

  }

  render() {

    const { currentlyReading, read, wantToRead, books } = this.state;

    return (
      <div>
        <HomeHeader />

         {/* LOADER */}
         {books.length === 0 && (<LinearLoader/>)} 

        <div className='container'>

          {/* Currently reading books */}
          {currentlyReading.length > 0 && (
            <Bookcase 
              onUpdateShelf={this.updateShelf} 
              title='Currently Reading' 
              books={currentlyReading} 
            />
          )}

          {/* Want to read books */}
          {wantToRead.length > 0 && (
            <Bookcase 
              onUpdateShelf={this.updateShelf} 
              title='Want To Read' 
              books={wantToRead} 
            />
          )}

          {/* Read books */}
          {read.length > 0 && (
            <Bookcase 
              onUpdateShelf={this.updateShelf} 
              title='Read' 
              books={read} 
            />
          )}
          
          {/* Go to search page */}
          <Hidden mdUp>
            <FabAddButton link='/search' />
          </Hidden>
        </div>
      </div>
    );
  }
}

export default HomePage;