import React, { Component } from "react";
import Book from "./Book";

export class BookList extends Component {
  render() {
    return (
      <div style={bookStyle}>
        {this.props.books.map(book => (
          <Book key={book.isbn} book={book} />
        ))}
      </div>
    );
  }
}
const bookStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
};
export default BookList;
