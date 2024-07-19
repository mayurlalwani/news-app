import React from "react";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          source={article.source.name}
          publishedAt={article.publishedAt}
          summary={article.summary}
        />
      ))}
    </div>
  );
};

export default ArticleList;
