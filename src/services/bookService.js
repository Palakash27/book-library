import restClient from "../utils/restClient";

const bookService = {
  getBookByIsbn: isbn => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/books/${isbn}`;
    const book = restClient.get(newUrl);
    return book;
  },

  getAllBooks: () => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/books`;
    const books = restClient.get(newUrl);
    return books;
  },

  getAllCategories: () => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/categories`;
    const categories = restClient.get(newUrl);
    return categories;
  }
};

export default bookService;
