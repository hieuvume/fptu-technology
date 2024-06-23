import api from "./api"

const categoryApi = {
  getAll: () => {
    return api.get('/categories')
  },
  getArticles: (categoryId) => {
    return api.get(`/categories/${categoryId}/articles`)
  },
  getById: (id) => {
    return api.get(`/categories/${id}`)
  },
  create: (category) => {
    return api.post('/categories', category)
  },
  update: (category) => {
    return api.put(`/categories/${category.id}`, category)
  },
  delete: (id) => {
    return api.delete(`/categories/${id}`)
  }
}

export default categoryApi