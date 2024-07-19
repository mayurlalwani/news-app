const express = require("express");
const axios = require("axios");
const OpenAI = require("openai");

const router = express.Router();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const summarizeArticle = async (content) => {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Summarize the following text in 100 words or less: ${content}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const summary = response.choices[0].message.content.trim();
  return summary;
};

//GET /?keyword=
//This endpoint retrieves news articles related to a specified keyword and returns them with summaries.
router.get("/", async (req, res) => {
  const { keyword } = req.query;
  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWS_API_KEY}`
    );
    const articles = response.data.articles;

    const summarizedArticles = await Promise.all(
      articles.map(async (article) => {
        const summary = await summarizeArticle(article.content);
        return { ...article, summary };
      })
    );
    res.json(summarizedArticles);
  } catch (error) {
    res.status(500).json({ error: "Error fetching articles" });
  }
});

module.exports = router;
