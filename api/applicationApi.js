import api from "./api"

const applicationApi = {
  getAll: (data) => {
    return api.get('/application/getAll', data)
  },
  update: (data) => {
    return api.put(`/application/update`, data)
  },
  get: () => {
    return api.get('/application/get')
  },
  send: (data) => {
    return api.post(`/application/send`, data)
  },
  getById: (id) => {
    return api.get(`/application/${id}`)
  },
  reject: (id) => {
    return api.post(`/application/${id}/reject`)
  },
  approve: (id) => {
    return api.post(`/application/${id}/approve`)
  },
}

export default applicationApi