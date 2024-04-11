import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getCategories = async () => {
  const { data: { data: categories } } = await baseApi.get(API_PATHS.categories)
  return categories
}

export { getCategories }
