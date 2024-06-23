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
}

export default articlesApi