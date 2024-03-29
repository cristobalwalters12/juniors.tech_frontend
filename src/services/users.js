import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getUser = async () => {
  const { data } = await baseApi.get(API_PATHS.userData)
  return data
}

const createUser = async (user) => {
  const { data } = await baseApi.post(API_PATHS.register, user)
  return data
}

const loginUser = async (user) => {
  const { data } = await baseApi.post(API_PATHS.login, user)
  return data
}
export { getUser, createUser, loginUser }
