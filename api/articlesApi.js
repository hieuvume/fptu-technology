import api from "./api"

const articlesApi = {
  getAll: (data) => {
    return api.get('/articles', data)
  },
  getById: (id) => {
    return api.get(`/articles/${id}`)
  },
  create: (data) => {
    return api.post('/articles', data)
  },
  update: (data) => {
    return api.put(`/articles/${data.id}`, data)
  },
  getPendingArticles: (data) => {
    return api.get('/dashboard/pending', data)
  },
  approveArticle: (data) => {
    return api.put(`/dashboard/pending/${data._id}`, data)
  },
  getManageArticles: (data) => {
    return api.get('/articles/manage', data)
  },
  reviewArticle: (id, state) => {
    return api.put(`/articles/${id}/review`, {
      state
    });
  },
  searchArticles: (query) => {
    return api.get(`/articles/search/articles?title=${query}`);
  }
}

export default articlesApi