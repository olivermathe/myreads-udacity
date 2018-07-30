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

    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(err => console.error(err))

  }

  render() {

    const { books } = this.state;

    return (
      <div>
        <SearchBar />

        <div className='container'>

          {/* Loader */}
          {books.length === 0 && (<LinearLoader />)}

          {/* Books */}
          {books.length > 0 && (<Bookcase books={books}/>)}

        </div>
      </div>
    );
  }
};

export default SearchPage;