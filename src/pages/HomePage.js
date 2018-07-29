import React, { Component } from 'react';

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
      .then(books => {

        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = books.filter(book => book.shelf === 'wantToRead');
        const read = books.filter(book => book.shelf === 'read');

        this.setState({ books, currentlyReading, read, wantToRead });

      })
      .catch(err => console.error(err))

  }

  render() {

    const { currentlyReading, read, wantToRead } = this.state;

    return (
      <div>
        <HomeHeader />
        <div className='container'>

          {/* LOADER */}
          {this.state.books.length === 0 && (<LinearLoader/>)} 
          
          {/* Currently reading books */}
          {currentlyReading.length > 0 && (
            <Bookcase title='Currently Reading' books={currentlyReading} />
          )}

          {/* Want to read books */}
          {wantToRead.length > 0 && (
            <Bookcase title='Want To Read' books={wantToRead} />
          )}

          {/* Read books */}
          {read.length > 0 && (
            <Bookcase title='Read' books={read} />
          )}
          
          {/* Go to search page */}
          <FabAddButton link='/search' />
        </div>
      </div>
    );
  }
}

export default HomePage;