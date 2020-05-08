import { useState, useEffect } from "react";
import bookService from "../../../services/bookService";

const useCategoriesHook = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    bookService
      .getAllCategories()
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);
  return categories;
};
export default useCategoriesHook;
