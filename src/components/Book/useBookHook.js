import { useState, useEffect } from "react";
import bookService from "../../services/bookService";

const useBookHook = isbn => {
  const [book, setBook] = useState({});

  useEffect(() => {
    bookService
      .getBookByIsbn(isbn)
      .then(data => setBook(data))
      .catch(error => console.log(error));
  }, [isbn]);
  return book;
};

export default useBookHook;
