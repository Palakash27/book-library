import { useState, useEffect } from "react";
import bookService from "../../../services/bookService";

const useAuthorsHook = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookService
      .getAllAuthors()
      .then(data => setAuthors(data))
      .catch(error => console.log(error));
  }, []);
  return authors;
};
export default useAuthorsHook;
