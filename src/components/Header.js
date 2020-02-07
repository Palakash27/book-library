import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <b>Book Library</b>
      </header>
    );
  }
}
const headerStyle = {
  backgroundColor: "#29303b",
  color: "white",
  padding: "15px",
  fontSize: "20px"
};

export default Header;
