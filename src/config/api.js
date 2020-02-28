import { create } from 'apisauce';

const api = create({
  baseUrl: process.env.BASE_API_URL,
  timeout: 5000
});

export default api;
