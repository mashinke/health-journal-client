require('dotenv').config();

const config = {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
};

export default config;
