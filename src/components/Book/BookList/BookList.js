import React from "react";
import BookListItem from "./BookListItem";

const BookList = props => {
  const books = props.books;

  return (
    <React.Fragment>
      {!books && <div className="loading">Loading books...</div>}
      {books && (
        <ul className="book-list">
          {books.map(book => {
            return <BookListItem key={book.isbn} {...book} />;
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
export default BookList;
