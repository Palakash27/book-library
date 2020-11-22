import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BookList from "./components/Book/BookList/BookList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Book from "./components/Book/Book";
import Category from "./components/BookCategory/Category";
import Author from "./components/BookAuthor/Author";
import useBooksHook from "./components/Book/BookList/useBooksHook";

const App = () => {
  const books = useBooksHook();

  return (
    <Router>
      <div>
        {books && (
          <Header
          // books={books.map((book) => book.title)}
          />
        )}
      </div>
      <Switch>
        <Route
          path="/book-library/authors/:authorName"
          component={Author}
        ></Route>
        <Route path="/book-library/authors">
          <Author />
        </Route>
        <Route
          path="/book-library/categories/:categoryName"
          component={Category}
        ></Route>
        <Route path="/book-library/categories">
          <Category />
        </Route>
        <Route path="/book-library/isbn/:isbn" component={Book} />
        <Route exact path="/book-library/">
          <div className="main-content">
            <BookList books={books} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
