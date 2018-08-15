import React, { Component } from 'react';

import LinearLoader from "../components/LinearLoader";
import Bookcase from "../components/Bookcase";
import SearchBar from "../components/SearchBar";

import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {

  state = {
    books: [],
    myBooks: [],
    isLoading: true
  }

  async componentDidMount () {

    try {
      
      const myBooks = await BooksAPI.getAll();

      this.setState({ 
        myBooks,
        isLoading: false
      });

    } catch (err) {
      console.log(err);
    }

  }

  updateShelf = async (shelf, id) => {
    
    this.setState(state => {

      const books = state.books.map(book => {

        if (book.id === id) {
          
          return {
            ...book,
            shelf
          }

        } else {

          return book;

        }

      });

      return {
        books
      }

    });

    const book = this.state.books.find(book => book.id === id);

    try {
      await BooksAPI.update(book, shelf);
    } catch (err) {
      console.error(err);
    }

  }

  setBooksShelf = books => {

    const myBooks = this.state.myBooks;

    return books.map(book => {

      const myBook = myBooks.find(b => b.id === book.id);

      book.shelf = myBook ? myBook.shelf : 'none';

      return book;

    });

  }

  onSearch = async query => {

    if (!query.length) {

      this.setState({
        books: []
      });

      return false;

    }
      
    this.setState({
      books: [],
      isLoading: true
    });

    try {
      
      let books = await BooksAPI.search(query) || [];

      books = this.setBooksShelf(books);

      this.setState({ 
        books,
        isLoading: false 
      });

    } catch (err) {

      console.error(err);

      this.setState({
        isLoading: false
      });
      
    }

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
          {books && books.length > 0 && (<Bookcase onUpdateShelf={this.updateShelf} books={books}/>)}

        </div>
      </div>
    );
  }
};

export default SearchPage;