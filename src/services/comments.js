import { baseApi } from '../api/baseApi'
import { API_PATHS } from '../config/constants'

const getComments = async (postId) => {
  const { data } = await baseApi.get(`${API_PATHS.posts}/${postId}/comments`)
  return data
}

const saveComment = async ({ postId, comment }) => {
  // const isCreating = comment.created_at === undefined
  const isCreating = comment.id === undefined
  const preparedComment = prepareCommentToSave({ postId, comment })
  let result = null
  if (isCreating) {
    result = await baseApi.post(`${API_PATHS.posts}/${postId}/comments`, preparedComment)
  } else {
    result = await baseApi.put(`${API_PATHS.posts}/${postId}/comments/${comment.id}`, preparedComment)
  }
  return result.data
}

const deleteComment = async (comment) => {
  comment.avatar = null
  comment.username = null
  comment.author_id = null
  comment.body = null
  comment.vote_direction = 0
  comment.deleted_at = (new Date()).toISOString()
  await baseApi.put(`${API_PATHS.posts}/${comment.post_id}/comments/${comment.id}`, comment)
}

const prepareCommentToSave = ({ postId, comment }) => {
  comment.post_id = postId
  comment.avatar = 'https://southernplasticsurgery.com.au/wp-content/uploads/2013/10/user-placeholder.png'
  comment.username = 'Eliseo'
  comment.author_id = 1
  comment.vote_count = 0
  comment.comment_count = 0
  comment.vote_direction = 0
  comment.deleted_at = null
  if (comment.created_at) {
    comment.updated_at = (new Date()).toISOString()
  } else {
    comment.created_at = (new Date()).toISOString()
    comment.updated_at = null
  }
  return comment
}

const voteComment = async (comment) => {
  comment.vote_count += comment.vote_direction
  await baseApi.patch(`${API_PATHS.posts}/${comment.post_id}/comments/${comment.id}`, comment)
}

export { getComments, saveComment, deleteComment, voteComment }
