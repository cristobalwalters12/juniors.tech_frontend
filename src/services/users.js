import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getUsers = async () => {
  const { data } = await baseApi.get(API_PATHS.users)
  return data
}

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

const getPublicProfile = async (username) => {
  const url = API_PATHS.publicProfile.replace(':username', username)
  const { data } = await baseApi.get(url)
  return data
}
export { getUser, createUser, loginUser, getUsers, getPublicProfile }
