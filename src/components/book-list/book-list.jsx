import React from 'react';
import BookListItem from '../book-list-item';

const BookList = ({ books, onAddedToCart }) => {
  
  return (
    <div className="books-list">
      {
        books.map((book) => {
          const { id } = book;

          return (
            <div className="books-list_item" key={id}>
              <BookListItem 
              book={book} 
              onAddedToCard={() => onAddedToCart(id)} />
            </div>
          )}
        )
      }
    </div>
  )
}

export default BookList;
