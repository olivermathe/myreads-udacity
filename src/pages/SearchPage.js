import React, { Component } from 'react';

import LinearLoader from "../components/LinearLoader";
import Bookcase from "../components/Bookcase";
import SearchBar from "../components/SearchBar";

import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {

  state = {
    books: [],
    isLoading: false
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

  onSearch = query => {

    if (!query.length)
      return false;

    this.setState({
      books: [],
      isLoading: true
    });

    BooksAPI.search(query)
      .then(books => {
        
        this.setState({ 
          books,
          isLoading: false 
        });

      })
      .catch(err => {

        console.error(err);

        this.setState({
          isLoading: false
        });

      });

  }

  render() {

    const { books, isLoading } = this.state;

    return (
      <div>
        <SearchBar onSearch={this.onSearch} />

        {/* Loader */}
        {isLoading && (<LinearLoader />)}

        <div className='container'>

          {/* Books */}
          {books && books.length > 0 && (<Bookcase onUpdateShelf={this.updateShelf.bind(this)} books={books}/>)}

        </div>
      </div>
    );
  }
};

export default SearchPage;