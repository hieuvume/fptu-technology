import { getAccessToken } from '@/utils/auth'
import Axios from 'axios'

export function setupAxios(axios) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(
    (config) => {
      const auth = getAccessToken()
      if (auth) {
        config.headers.Authorization = `Bearer ${auth.access_token}`
      }

      return config
    },
    (err) => Promise.reject(err)
  )
  axios.interceptors.response.use(
    function (response) {
      if (response && response.data) {
        if (response.data.message) {
          if (response.data.report) {
            Report.success(response.data.message ?? 'Thực hiện thành công')
          }
          if (response.data.notify) {
            Notify.success(response.data.message ?? 'Thực hiện thành công')
          }
        }
        return response.data
      }
      return response
    },
    function (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          if (error.response.data.errors) {
            const errors = error.response.data.errors
            for (const key in errors) {
              if (errors.hasOwnProperty(key)) {
                const element = errors[key]
                Report.failure(element[0])
              }
            }
          }
        }
        return Promise.reject(error.response.data)
      }
      return Promise.reject(error.response)
    }
  )
}

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

setupAxios(api)

export default api