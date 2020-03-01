import api from '~config/api';

export default {
  getItems: (query: string) => api.get('/items', { q: query }),
  getItemById: (id: number) => api.get(`/items/${id}`)
};
