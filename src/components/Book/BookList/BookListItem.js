import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Image/Image";

const BookListItem = ({ title, isbn, thumbnailUrl }) => {
  return (
    <li className="book-item">
      <Link to={`/book-library/isbn/${isbn}`}>
        <Image src={thumbnailUrl} />
        <div className="title">{title.slice(0, 20)}...</div>
      </Link>
    </li>
  );
};
export default BookListItem;
