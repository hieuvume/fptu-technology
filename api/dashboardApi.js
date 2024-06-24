import api from "./api"

const dashboardApi = {
    getDataDashboard: (data) => {
      return api.get('/dashboard', data)
    }
  }
  
  export default dashboardApi