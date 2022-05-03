import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

function Book({books}) {
  const state = useSelector(state => state.booksReducer);
  console.log(state);

  return (
    <div>
      <ul>
      {books.map(book => (
        <li key={book.id}>{book.title}{book.author}
        <button>Remove</button>
        </li>
      ))}
    </ul>
    </div>
  )
}

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
