import { useState, useEffect } from "react";
import bookService from "../../../services/bookService";

const useBooksHook = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    bookService
      .getAllBooks()
      .then(data => setBooks(data))
      .catch(error => console.log(error));
  }, []);
  return books;
};

export default useBooksHook;
