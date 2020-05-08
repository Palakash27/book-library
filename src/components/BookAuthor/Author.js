import React from "react";
import AuthorList from "./AuthorList/AuthorList";
import { Link } from "react-router-dom";
import BookList from "../Book/BookList/BookList";
import useBooksHook from "../Book/BookList/useBooksHook";
import useAuthorHook from "./useAuthorHook";

const Author = props => {
  let books = useBooksHook();
  let authorListTitle;

  if (Object.keys(props).length === 0) {
    authorListTitle = "TOP AUTHORS";
  } else {
    authorListTitle = props.match.params.authorName.toUpperCase();
  }

  const author = useAuthorHook(authorListTitle.toLowerCase());
  let authorBooks;

  if (author != null) {
    authorBooks = author.books;
  }
  console.log(author);

  return (
    <div className="author-main">
      <div className="author-list-wrapper">
        <div className="author-list-title">
          <Link to={"/authors"}>AUTHORS</Link>
        </div>
        <AuthorList />
      </div>
      <div className="book-author-list">
        <header className="author-list-title">{authorListTitle}</header>
        {authorListTitle === "TOP AUTHORS" && <BookList books={books} />}
        {authorListTitle !== "TOP AUTHORS" && <BookList books={authorBooks} />}
      </div>
    </div>
  );
};

export default Author;
