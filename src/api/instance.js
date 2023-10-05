import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://vocab-builder-backend.p.goit.global/api',
  // baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
  },
});
