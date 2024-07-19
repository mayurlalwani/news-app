# Assignment: News Search Application with AI

## Overview

This project is a web application that allows users to search for news articles using a keyword. It uses a third-party news API to fetch news articles and uses the OpenAI API to summarize the content of the articles. The application is built with ReactJS and Node.js.

## Features

- **Search News Articles**: Users can search for news articles by entering keywords.
- **Display News Articles**: The application displays a list of news articles with title, source, publication date, and summary.
- **AI-Powered Summarization**: Uses OpenAI API to generate a summary for each news article.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js, Express
- **APIs**: NewsAPI (for fetching news articles), OpenAI API (for summarizing articles)

---

## Setup Instructions

### Prerequisites

- Node.js installed
- NPM installed
- API keys for NewsAPI and OpenAI

### Installation

**Clone the Repository**

````bash
git clone git@github.com:mayurlalwani/news-app.git
cd news-app

**Frontend Setup**

1. **Navigate to the frontend directory:**
```bash
cd frontend
npm install
````

2. **Create a .env file in the frontend and copy content from .env.example.(Replace value with your actual API KEY)**

3. **Start the Frontend application**

```bash
npm run dev
```

**Backend Setup**

1. **Navigate to the backend directory from the root of the project:**

```bash
cd backend
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Create a .env file in the backend directory and add the contents from .env.example with your actual keys**

4. **Start the backend server**

```bash
npm run start
```

**This will start the Node.js server on http://localhost:5000.**
