import axios from 'axios';
import { BASE_URL } from './config';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export default api;
