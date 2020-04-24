import React from "react";
import "./search-box.style.css";

const SearchBox = ({ placeholder, searchHandler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={searchHandler}
    />
  );
};

export default SearchBox;
