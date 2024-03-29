import { HttpResponse, http } from 'msw'
import { dataComments } from './data/comments'
import { currUser } from './data/global'
import { dataPosts } from './data/posts'

let commentsCount = dataComments.length

const getComments = http.get('/api/v1/posts/:id/comments', ({ params }) => {
  const id = Number.parseInt(params.id)
  const commentsResponse = dataComments
    .filter(comment => comment.post_id === id)
    .map(comment => {
      if (comment.deleted_at !== null) {
        return { ...comment, avatar: null, username: null, author_id: null, body: null, vote_direction: 0 }
      }
      return comment
    })

  return HttpResponse.json(commentsResponse, { status: 200 })
})

const createComment = http.post('/api/v1/posts/:id/comments', async ({ params, request }) => {
  const postId = Number.parseInt(params.id)
  const { parent_id: parentId, body } = await request.json()

  const post = dataPosts.find((post) => post.id === postId)
  const parentComment = dataComments.find(comment => comment.id === parentId)

  if (post !== undefined) post.comment_count += 1
  if (parentComment !== undefined) parentComment.comment_count += 1

  commentsCount += 1
  const comment = {
    id: commentsCount,
    post_id: postId,
    parent_id: parentId,
    avatar: currUser.avatar,
    username: currUser.username,
    created_at: (new Date()).toISOString(),
    updated_at: null,
    deleted_at: null,
    vote_count: 0,
    comment_count: 0,
    vote_direction: 0,
    author_id: currUser.id,
    body
  }

  dataComments.push(comment)

  return HttpResponse.json(comment, { status: 201 })
})

const updateComment = http.put('/api/v1/posts/:postId/comments/:commentId', async ({ params, request }) => {
  const id = Number.parseInt(params.commentId)
  const { body } = await request.json()

  const comment = dataComments.find(currComment => currComment.id === id)
  comment.body = body
  comment.updated_at = (new Date()).toISOString()

  return HttpResponse.json(comment, { status: 200 })
})

export default [getComments, createComment, updateComment]
