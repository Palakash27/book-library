import React from "react";
import AuthorListItem from "./AuthorListItem";
import useAuthorsHook from "./useAuthorsHook";

const SortAuthors = authors => {
  let newAuthors = [];
  if (authors != null) {
    authors.forEach(author => {
      newAuthors.push(author.name);
    });
  }
  return newAuthors.sort();
};

const AuthorList = () => {
  const authors = useAuthorsHook();
  const sortedAuthors = SortAuthors(authors);

  return (
    <React.Fragment>
      {!sortedAuthors && <div>Loading Authors</div>}
      {sortedAuthors && (
        <ul className="authors-list">
          {sortedAuthors.map((author, index) => {
            return <AuthorListItem key={index} author={author} />;
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
export default AuthorList;
