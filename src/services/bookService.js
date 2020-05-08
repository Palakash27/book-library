import restClient from "../utils/restClient";

const bookService = {
  getAllBooks: () => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/books`;
    const books = restClient.get(newUrl);
    return books;
  },

  getBookByIsbn: isbn => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/books/${isbn}`;
    const book = restClient.get(newUrl);
    return book;
  },

  getAllCategories: () => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/categories`;
    const categories = restClient.get(newUrl);
    return categories;
  },

  getCategoryByName: name => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/categories/${name}`;
    const category = restClient.get(newUrl);
    return category;
  },

  getAllAuthors: () => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/authors`;
    const authors = restClient.get(newUrl);
    return authors;
  },

  getAuthorByName: name => {
    let url = process.env.REACT_APP_URL;
    const newUrl = `${url}/authors/${name}`;
    const author = restClient.get(newUrl);
    return author;
  }
};

export default bookService;
