import { useState, useEffect } from "react";
import bookService from "../../services/bookService";

const useCategoryHook = name => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    bookService
      .getCategoryByName(name)
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, [name]);
  return categories;
};
export default useCategoryHook;
