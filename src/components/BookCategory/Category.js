import React, { useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import { Link } from "react-router-dom";
import BookList from "../Book/BookList/BookList";

const Category = () => {
  const [categoryListTitle, setCategoryListTitle] = useState("TOP CATEGORIES");

  const onCategoryClicked = category => {
    setCategoryListTitle(category);
  };

  return (
    <div className="category-main">
      <div className="category-list-wrapper">
        <div className="category-list-title">
          <Link
            onClick={() => {
              onCategoryClicked("TOP CATEGORIES");
            }}
            to={"/categories"}
          >
            CATEGORIES
          </Link>
        </div>
        <CategoryList onCategoryClicked={onCategoryClicked} />
      </div>
      <div className="book-category-list">
        <header className="category-list-title">{categoryListTitle}</header>
        <BookList />
      </div>
    </div>
  );
};

export default Category;
