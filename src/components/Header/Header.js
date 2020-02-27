import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="topnav">
      <Link className="active" to={"/"}>
        <b>Book Library</b>
      </Link>
      <div className="topnav-right">
        <Link to={"/"}>Home</Link>
        <Link to={"/authors"}>Authors</Link>
        <Link to={"/categories/"}>Categories</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
