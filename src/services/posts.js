import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants/apiUrls'

const getPosts = async () => {
  const { data: { data } } = await baseApi.get(API_PATHS.posts)
  return data
}

const savePost = async ({ id: postId, categoryId, title, body }) => {
  let result = null
  const post = { categoryId, title, body }
  if (postId) {
    result = await baseApi.put(`${API_PATHS.posts}/${postId}`, post)
  } else {
    result = await baseApi.post(API_PATHS.posts, post)
  }
  const { data } = result.data
  return {
    id: data.id,
    title: data.title,
    body: data.body,
    categoryId: data.categoryId,
    category: data.category,
    slug: data.slug,
    authorId: data.authorId,
    authorUsername: data.username,
    avatarUrl: data.avatarUrl,
    voteCount: data.voteCount,
    commentCount: data.commentCount,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    hasOpenReport: data.hasOpenReport,
    voteDirection: data.voteDirection
  }
}

const getPostById = async (postId) => {
  const { data: { data: post } } = await baseApi.get(`${API_PATHS.posts}/${postId}`)
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

const deletePostById = async ({ postId }) => {
  await baseApi.delete(`${API_PATHS.posts}/${postId}`)
}

const voteOnPost = async ({ postId, voteDirection }) => {
  await baseApi.post(`${API_PATHS.posts}/${postId}/vote`, { voteDirection })
}

export { getPosts, savePost, getPostById, deletePostById, voteOnPost }
