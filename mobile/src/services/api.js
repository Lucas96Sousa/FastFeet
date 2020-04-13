import axios from 'axios';

const api = axios.create({
  baseURL: 'http://182.15.0.107:3000',
});

export default api;
