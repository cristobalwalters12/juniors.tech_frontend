import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const searchPost = async ({
  q,
  sort,
  order,
  page = 1,
  limit = 20,
  category
}) => {
  if (!q || q.trim() === '') return

  let query = `q=${q}`

  if (sort && /(votes|date)/i.test(sort)) {
    query += `&sort=${sort}`
    query += `&order=${order}`
  }

  const parsedPage = Number.parseInt(page) || 1
  if (parsedPage && parsedPage > 0) {
    query += `&page=${parsedPage}`
  }

  const parsedLimit = Number.parseInt(limit) || 20
  if (parsedLimit && parsedLimit > 0) {
    query += `&limit=${parsedLimit}`
  }

  if (category) {
    query += `&category=${category}`
  }

  const { data: { data } } = await baseApi.get(`${API_PATHS.search}/posts?${query}`)
  return data
}

export { searchPost }
