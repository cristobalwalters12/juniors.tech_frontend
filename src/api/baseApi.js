import axios from 'axios'
import { API_BASE_URL } from '../config/constants'
import { authStore } from '../stores/authStore'

const baseApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true
})

baseApi.interceptors.request.use(async (config) => {
  const token = authStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { baseApi }
