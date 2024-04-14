import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getPosts = async () => {
  const { data } = await baseApi.get(API_PATHS.posts)
  return data
}

const createPost = async (post) => {
  const { data } = await baseApi.post(API_PATHS.posts, post)
  return data
}

const getPostById = async (id) => {
  const { data: { data: post } } = await baseApi.get(`${API_PATHS.posts}/${id}`)
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    categoryId: post.categoryId,
    category: post.category,
    slug: post.slug,
    authorId: post.authorId,
    authorUsername: post.username,
    avatarUrl: post.avatarUrl,
    voteCount: post.voteCount,
    commentCount: post.commentCount,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    hasOpenReport: post.hasOpenReport,
    voteDirection: post.voteDirection
  }
}

const editPost = async ({ id, post }) => await baseApi.put(`${API_PATHS.posts}/${id}`, post)

export { getPosts, createPost, getPostById, editPost }
