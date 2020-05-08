import React from "react";
import CategoryList from "./CategoryList/CategoryList";
import { Link } from "react-router-dom";
import BookList from "../Book/BookList/BookList";
import useBooksHook from "../Book/BookList/useBooksHook";
import useCategoryHook from "./useCategoryHook";

const Category = props => {
  let books = useBooksHook();
  let categoryListTitle;

  if (Object.keys(props).length === 0) {
    categoryListTitle = "TOP CATEGORIES";
  } else {
    categoryListTitle = props.match.params.categoryName.toUpperCase();
  }

  const category = useCategoryHook(categoryListTitle.toLowerCase());
  let categoryBooks;

  if (category != null) {
    categoryBooks = category.books;
  }

  return (
    <div className="category-main">
      <div className="category-list-wrapper">
        <div className="category-list-title">
          <Link to={"/categories"}>CATEGORIES</Link>
        </div>
        <CategoryList />
      </div>
      <div className="book-category-list">
        <header className="category-list-title">{categoryListTitle}</header>
        {categoryListTitle === "TOP CATEGORIES" && <BookList books={books} />}
        {categoryListTitle !== "TOP CATEGORIES" && (
          <BookList books={categoryBooks} />
        )}
      </div>
    </div>
  );
};

export default Category;
