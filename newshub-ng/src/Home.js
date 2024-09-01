// src/Home.js
import React, { useState, useEffect } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=YOUR_NEWS_API_KEY`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        NewsHub NG - Top Headlines
      </Typography>
      <List>
        {news.map((article, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={article.title}
              secondary={article.description || article.source.name}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;

