import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/engines/davinci-codex/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

export default openai;
