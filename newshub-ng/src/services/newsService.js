import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const getTopHeadlines = async (category = 'general', country = 'ng') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        category,
        country,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

const searchNews = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        apiKey: API_KEY,
        q: query,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
};

export { getTopHeadlines, searchNews };
