import React, { useState } from "react";

const SearchBar = props => {
  const [filteredItems, setFilteredItems] = useState(null);

  const onSearchContentChange = e => {
    if (e.target.value.length === 0) {
      setFilteredItems(null);
    } else {
      setFilteredItems(
        props.items
          .filter(item =>
            item.toLowerCase().includes(e.target.value.toLowerCase())
          )
          .slice(0, 5)
      );
    }
  };

  return (
    <div className="search-bar">
      <input
        onChange={onSearchContentChange}
        type="text"
        placeholder="Search..."
      />
      <ul>{filteredItems && filteredItems.map(item => <li>{item}</li>)}</ul>
    </div>
  );
};
export default SearchBar;
