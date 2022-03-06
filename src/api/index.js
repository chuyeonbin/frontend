import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001/';
// const BASE_API_URL = 'https://api-sicksago.herokuapp.com';

const httpInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export default httpInstance;
