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

const searchUser = async ({ q, sort, order, page = 1, limit = 20, country, otw, it, lang, tech }) => {
  if (!q || q.trim() === '') return

  const params = new URLSearchParams()
  if (q) params.append('q', q)
  if (sort) params.append('sort', sort)
  if (order) params.append('order', order)
  if (page) params.append('page', page)
  if (limit) params.append('limit', limit)
  if (country) params.append('country', country)
  if (otw) params.append('otw', otw)
  if (it) params.append('it', it)
  if (lang) params.append('lang', lang)
  if (tech) params.append('tech', tech)

  const { data: { data } } = await baseApi.get(`${API_PATHS.search}/users`, { params })
  return data
}

export { searchPost, searchUser }
