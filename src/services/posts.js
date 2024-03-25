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

export { getPosts, createPost }
