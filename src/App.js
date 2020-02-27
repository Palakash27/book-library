import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BookList from "./components/Book/BookList/BookList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Book from "./components/Book/Book";
import Category from "./components/BookCategory/Category";
import Author from "./components/BookAuthor/Author";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/authors">
          <div className="main-content">
            <Author />
          </div>
        </Route>
        <Route path="/categories/:categoryName" component={Category}></Route>
        <Route path="/categories">
          <Category />
        </Route>

        <Route path="/isbn/:isbn" component={Book} />
        <Route exact path="/">
          <div className="main-content">
            <BookList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
