import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (keyword) => {
    const response = await axios.get(
      `http://localhost:5000/api/news?keyword=${keyword}`
    );
    setArticles(response.data);
  };

  return (
    <div className="App">
      <h1>News Search Application</h1>
      <SearchBar onSearch={fetchArticles} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
