import React from "react";

const Article = ({ title, source, publishedAt, summary }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>
        <strong>Source:</strong> {source}
      </p>
      <p>
        <strong>Published At:</strong> {new Date(publishedAt).toLocaleString()}
      </p>
      <p>
        <strong>Summary:</strong> {summary}
      </p>
    </div>
  );
};

export default Article;
