import React from "react";
import "./styles.css";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState("");

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
        className="search-input"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
