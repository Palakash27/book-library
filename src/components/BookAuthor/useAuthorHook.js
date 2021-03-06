import { useState, useEffect } from "react";
import bookService from "../../services/bookService";

const useAuthorHook = name => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookService
      .getAuthorByName(name)
      .then(data => setAuthors(data))
      .catch(error => console.log(error));
  }, [name]);
  return authors;
};
export default useAuthorHook;
