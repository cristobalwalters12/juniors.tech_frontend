import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getUsers = async () => {
  const { data } = await baseApi.get(API_PATHS.users)
  return data
}

export { getUsers }
