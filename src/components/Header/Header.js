import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const Header = (props) => {
  return (
    <div className="topnav">
      <Link className="active" to={"/book-library/"}>
        <b>Book Library</b>
      </Link>
      <div className="topnav-right">
        {/* <SearchBar items={props.books} /> */}
        <Link to={"/book-library/"}>Home</Link>
        <Link to={"/book-library/authors"}>Authors</Link>
        <Link to={"/book-library/categories"}>Categories</Link>
        <Link to={"/book-library/about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
