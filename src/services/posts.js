import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getPosts = async ({ sort, order, page, limit, category }) => {
  const params = new URLSearchParams()
  if (sort) params.append('sort', sort)
  if (order) params.append('order', order)
  if (page) params.append('page', page)
  if (limit) params.append('limit', limit)
  if (category) params.append('category', category)

  const { data: { data: posts } } = await baseApi.get(API_PATHS.posts, { params })
  return posts
}

const savePost = async ({ id: postId, categoryId, title, body }) => {
  let result = null
  const post = { categoryId, title, body }
  if (postId) {
    result = await baseApi.put(`${API_PATHS.posts}/${postId}`, post)
  } else {
    result = await baseApi.post(API_PATHS.posts, post)
  }
  const { data: savedPost } = result.data
  return savedPost
}

const getPostById = async (postId) => {
  const { data: { data: post } } = await baseApi.get(`${API_PATHS.posts}/${postId}`)
  return post
}

const deletePostById = async ({ postId }) => {
  await baseApi.delete(`${API_PATHS.posts}/${postId}`)
}

const voteOnPost = async ({ postId, voteDirection }) => {
  await baseApi.post(`${API_PATHS.posts}/${postId}/vote`, { voteDirection })
}

export { getPosts, savePost, getPostById, deletePostById, voteOnPost }
