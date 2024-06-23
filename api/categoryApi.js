import api from "./api"

const categoryApi = {
  getAll: () => {
    return api.get('/categories')
  },
  getArticles: (categoryId) => {
    return api.get(`/categories/${categoryId}/articles`)
  }
}

export default categoryApi