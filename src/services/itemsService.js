import api from '~config/api';

export default {
  getItems: query => api.get('/items', { q: query })
};
