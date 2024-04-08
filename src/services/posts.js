import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getPosts = async () => {
  const { data } = await baseApi.get(API_PATHS.posts)
  return data
}

const createPost = async (post) => {
  const { data } = await baseApi.post(API_PATHS.posts, post)
  return data
}

const getPostById = async (id) => {
  const { data } = await baseApi.get(`${API_PATHS.posts}/${id}`)
  return data
}

const editPost = async ({ id, post }) => await baseApi.put(`${API_PATHS.posts}/${id}`, post)

export { getPosts, createPost, getPostById, editPost }
