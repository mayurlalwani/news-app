import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchArticles = async (keyword) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/api/news?keyword=${keyword}`
      );
      setArticles(response.data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      throw new Error("Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>News Search Application</h1>
      <SearchBar onSearch={fetchArticles} />
      {loading && <p>Loading...</p>}
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
