import { create } from 'apisauce';

const api = create({
  baseURL: process.env.BASE_API_URL,
  timeout: 5000
});

export default api;
