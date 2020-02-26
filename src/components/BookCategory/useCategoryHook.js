import { useState, useEffect } from "react";
import bookService from "../../services/bookService";

const useCategoryHook = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    bookService
      .getAllCategories()
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);
  return categories;
};
export default useCategoryHook;
