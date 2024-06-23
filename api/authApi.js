import api from "./api"

const authApi = {
  login: (data) => {
    return api.post('/auth/login', data)
  },
  register: (data) => {
    return api.post('/auth/register', data)
  },
  logout: () => {
    return api.post('/auth/logout')
  },
  me: () => {
    return api.get('/auth/me')
  },
  changePassword:(data)=>{
    return api.post('/auth/change-password',data)
  }
}

export default authApi