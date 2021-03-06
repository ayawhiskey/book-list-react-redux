import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import BookList from './book-list';

import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks, bookStoreService } = this.props;
    fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator error={error} />;

    return (
      <BookList 
        onAddedToCart={onAddedToCart}
        books={books} />
    );
  }
}

const mapStateToProps = ({ booksList: { books, loading, error } }) => ({ books, loading, error });

const mapDispatchToProps = (dispatch, { bookstoreService }) => {

    return bindActionCreators ({
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart
    }, dispatch)

  };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);
