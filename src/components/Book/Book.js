import React from "react";
import useBookHook from "./useBookHook";
import Image from "../Image/Image";
import { Link } from "react-router-dom";

const Book = (props) => {
  console.log("book param is", props.match.params.isbn);
  const book = useBookHook(props.match.params.isbn);
  const {
    isbn,
    title,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors = [],
    categories = [],
  } = book;

  return (
    <React.Fragment>
      {!book && <div>Loading book...</div>}
      {book && (
        <div className="book">
          <div>
            <Image src={thumbnailUrl} />
          </div>
          <div className="book-text">
            <p>
              <b className="title-name">
                <i>{title}</i>
              </b>
              <br />
              Authors: |
              <span>
                <i>
                  {authors.map((author, index) => (
                    <Link
                      key={index}
                      to={`/book-library/authors/${author.name}`}
                    >
                      <i className="author-name">{author.name}</i>
                      {" | "}
                    </Link>
                  ))}
                </i>
              </span>
              <br />
              Categories: |
              <i>
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/book-library/categories/${category.name}`}
                  >
                    <i className="category-name">{category.name}</i>
                    {" | "}
                  </Link>
                ))}
              </i>
            </p>
            <div>
              <header className="book-header">Book Information</header>
              <div className="book-header-text">
                <table>
                  <tbody>
                    <tr>
                      <td>ISBN</td>
                      <td>{isbn}</td>
                    </tr>
                    <tr>
                      <td>Number of Pages</td>
                      <td>{pageCount}</td>
                    </tr>
                    <tr>
                      <td>Published Date</td>
                      <td>{new Date(publishedDate).toDateString()}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>{status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <header className="book-header">Book Description</header>
              <div className="book-header-text">
                {shortDescription}
                <br />
                <br />
                {longDescription}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Book;
