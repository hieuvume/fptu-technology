import api from "./api";

const articleApi = {
  getAll: (data) => {
    return api.get('/articles', data);
  },
  getById: (id) => {
    return api.get(`/articles/${id}`);
  },
  create: (data) => {
    return api.post('/articles', data);
  },
  update: (data) => {
    return api.put(`/articles/${data.id}`, data);
  },
  getTrendingList: () => {
    return api.get('/articles/list/trending');
  },
  getBySlug: (slug) => {
    return api.get(`/articles/details/${slug}`);
  },
  getRelatedArticles: (slug) => {
    return api.get(`/articles/related/${slug}`);
  },
  reviewArticle: (state) => {
    return api.put(`/articles/review`, {
      state
    });
  }
};

export default articleApi;