import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import BookList from "./components/BookList";

export class App extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    fetch("https://localhost:44368/api/books")
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }
  render() {
    return (
      <div>
        <Header />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
