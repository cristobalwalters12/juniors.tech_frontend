import axios from 'axios'
import { API_BASE_URL } from '../config/constants'
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

export { baseApi }
