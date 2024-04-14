import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getSearchPost = async () => {
  const { data: { data } } = await baseApi.get(`${API_PATHS.search}/posts/`)
  return data
}

export { getSearchPost }
