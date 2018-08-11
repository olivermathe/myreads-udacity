import React, { Component } from 'react';

import LinearLoader from "../components/LinearLoader";
import Bookcase from "../components/Bookcase";
import SearchBar from "../components/SearchBar";

import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {

  state = {
    books: []
  }

  componentDidMount () {

    BooksAPI.search('SAT')
      .then(books => {this.setState({ books }); console.log(books)})
      .catch(err => console.error(err))

  }

  updateShelf (shelf, id) {
    
    this.setState(state => {

      const books = state.books.map(book => {

        if (book.id === id)
          book.shelf = shelf;

        return book;

      });

      return {
        books
      };

    });

    const book = this.state.books.find(book => book.id === id);

    BooksAPI.update(book, shelf)
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }

  render() {

    const { books } = this.state;

    return (
      <div>
        <SearchBar />

        {/* Loader */}
        {books.length === 0 && (<LinearLoader />)}

        <div className='container'>

          {/* Books */}
          {books.length > 0 && (<Bookcase onUpdateShelf={this.updateShelf.bind(this)} books={books}/>)}

        </div>
      </div>
    );
  }
};

export default SearchPage;