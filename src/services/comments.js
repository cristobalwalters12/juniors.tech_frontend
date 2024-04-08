import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getComments = async (postId) => {
  const { data } = await baseApi.get(`${API_PATHS.posts}/${postId}/comments`)
  return data
}

const saveComment = async ({ postId, comment }) => {
  const isCreating = comment.id === undefined
  let result = null
  if (isCreating) {
    result = await baseApi.post(`${API_PATHS.posts}/${postId}/comments`, comment)
  } else {
    result = await baseApi.put(`${API_PATHS.posts}/${postId}/comments/${comment.id}`, comment)
  }
  return result.data
}

const deleteComment = async ({ postId, commentId }) => {
  await baseApi.delete(`${API_PATHS.posts}/${postId}/comments/${commentId}`)
}

const voteComment = async ({ postId, commentId, voteDirection }) => {
  await baseApi.post(`${API_PATHS.posts}/${postId}/comments/${commentId}/vote`, { vote_direction: voteDirection })
}

export { getComments, saveComment, deleteComment, voteComment }
