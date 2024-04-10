import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getComments = async (postId) => {
  const { data: { data: comments } } = await baseApi.get(`${API_PATHS.posts}/${postId}/comments`)
  return comments.map(comment => ({
    id: comment.id,
    postId: comment.postId,
    parentId: comment.parentId,
    body: comment.body,
    authorId: comment.authorId,
    authorUsername: comment.authorUsername,
    avatarUrl: comment.avatarUrl,
    voteDirection: comment.voteDirection,
    voteCount: comment.voteCount,
    commentCount: comment.commentCount,
    createdAt: comment.createdAt,
    deletedAt: comment.deletedAt,
    hasOpenReport: comment.hasOpenReport
  })
  )
}

const saveComment = async ({ postId, parentId, commentId, body }) => {
  let result = null
  if (commentId === undefined) {
    result = await baseApi.post(`${API_PATHS.posts}/${postId}/comments`, { parentId, body })
  } else {
    result = await baseApi.put(`${API_PATHS.posts}/${postId}/comments/${commentId}`, { body })
  }
  const { data } = result.data

  return {
    id: data.id,
    postId: data.postId,
    parentId: data.parentId,
    body: data.body,
    authorId: data.authorId,
    authorUsername: data.authorUsername,
    avatarUrl: data.avatarUrl,
    voteDirection: data.voteDirection,
    voteCount: data.voteCount,
    commentCount: data.commentCount,
    createdAt: data.createdAt,
    deletedAt: data.deletedAt,
    hasOpenReport: data.hasOpenReport
  }
}

const deleteComment = async ({ postId, commentId }) => {
  await baseApi.delete(`${API_PATHS.posts}/${postId}/comments/${commentId}`)
}

const voteComment = async ({ postId, commentId, voteDirection }) => {
  await baseApi.post(`${API_PATHS.posts}/${postId}/comments/${commentId}/vote`, { voteDirection })
}

const reportComment = async ({ postId, commentId, reportReasonId }) => {
  await baseApi.post(`${API_PATHS.posts}/${postId}/${API_PATHS.comments}/${commentId}/report`, { reportReasonId })
}

export { getComments, saveComment, deleteComment, voteComment, reportComment }
