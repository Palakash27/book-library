import React from "react";
import { Link } from "react-router-dom";

const CategoryListItem = (props) => {
  return (
    <li className="categories-item">
      <Link to={`/book-library/categories/${props.category}`}>
        {props.category}
      </Link>
    </li>
  );
};

export default CategoryListItem;
