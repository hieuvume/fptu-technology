import api from "./api";

const userApi = {
  getAll: () => {
    return api.get('/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Adjust this line based on where you store the token
      }
    });
  },
  getById: (id) => {
    return api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  create: (data) => {678
    return api.post('/users', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  update: (data) => {
    return api.put(`/users/${data._id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
};

export default userApi;