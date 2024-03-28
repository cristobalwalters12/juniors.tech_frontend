import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getUser = async () => {
  const { data } = await baseApi.get(API_PATHS.users)
  return data
}

export { getUser }
