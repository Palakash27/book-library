import React from "react";
import BookListItem from "./BookListItem";
import useBooksHook from "./useBooksHook";

const BookList = () => {
  const books = useBooksHook();
  return (
    <React.Fragment>
      {!books && <div>Loading books...</div>}
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
