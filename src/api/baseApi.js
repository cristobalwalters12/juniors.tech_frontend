import axios from 'axios'
import { API_BASE_URL } from '../config/constants/apiUrls'
import { useAuthStore } from '../stores/authStore'

const baseApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false
})

baseApi.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

baseApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      useAuthStore.getState().logout()
    }
    return Promise.reject(error)
  }
)

export { baseApi }
