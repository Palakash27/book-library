import React, { Component } from "react";

export class Book extends Component {
  render() {
    const {
      title,
      isbn,
      pageCount,
      publishedDate,
      thumbnailUrl,
      shortDescription,
      longDescription,
      status
    } = this.props.book;
    // const{ame}=this.props.book.authors;
    // const{ame}=this.props.book.categories;
    console.log(this.props.book);
    return (
      <div>
        {!this.props.book && <div>Loading</div>}
        {this.props.book && (
          <div style={bookStyle}>
            <img
              alt="book"
              src={thumbnailUrl}
              width="200px"
              height="300px"
            ></img>
            <p>
              <b>{title}</b>
            </p>
            {/* <p>Published Date: {new Date(publishedDate).toDateString()}</p>}
            {/* <p>ISBN: {isbn}</p>
            <p>Page Count: {pageCount}</p>
            <p>Thumbnail Url: {thumbnailUrl}</p>
            <p>Short Description: {shortDescription}</p>
            <p>Long Description: {longDescription}</p>
            <p>Status: {status}</p> */}
          </div>
        )}
      </div>
    );
  }
}
const bookStyle = {
  border: "2px #ccc solid",
  boxShadow: "10px 10px 18px grey",
  margin: "10px 10px 20px 0px",
  padding: "20px 20px 20px 20px",
  backgroundColor: "rgb(236, 232, 232)"
};
export default Book;
