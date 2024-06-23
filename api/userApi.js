import api from "./api"

const userApi = {
  getAll: (data) => {
    return api.get('/users', data)
  },
  getById: (id) => {
    return api.get(`/users/${id}`)
  },
  create: (data) => {
    return api.post('/users', data)
  },
  update: (data) => {
    return api.put(`/users/${data.id}`, data)
  },
}

export default userApi