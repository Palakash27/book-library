import React from "react";
import { Link } from "react-router-dom";

const AuthorListItem = props => {
  return (
    <li className="authors-item">
      <Link to={`/authors/${props.author}`}>{props.author}</Link>
    </li>
  );
};

export default AuthorListItem;
