import { HttpResponse, http } from 'msw'
import { dataComments } from './data/comments'
import { currUser } from './data/global'
import { dataPosts } from './data/posts'

/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */

let commentsCount = dataComments.length + 2
let comments = [...dataComments]
const username = currUser.username
const author_id = currUser.id
const avatar = currUser.avatar

const getComments = http.get('/api/v1/posts/:id/comments', ({ params }) => {
  const id = Number.parseInt(params.id)
  const commentsResponse = comments
    .filter(comment => comment.post_id === id)
    .map(comment => {
      if (comment.deleted_at !== null) {
        return {
          ...comment,
          avatar: null,
          username: null,
          author_id: null,
          body: null,
          vote_direction: 0
        }
      }
      return comment
    })
  return HttpResponse.json(
    commentsResponse,
    { status: 200 }
  )
})

const createComment = http.post('/api/v1/posts/:id/comments', async ({ params, request }) => {
  const post_id = params.id
  const { parent_id, body } = await request.json()

  let post = null
  dataPosts.forEach(p => {
    if (p.id === post_id) post = p
  })

  const parentComment = comments.find(comment => comment.id === parent_id)

  post.comment_count += 1
  if (parentComment !== undefined) parentComment.comment_count += 1

  commentsCount += 1
  const comment = {
    id: commentsCount,
    post_id,
    parent_id,
    avatar,
    username,
    created_at: (new Date()).toISOString(),
    updated_at: null,
    deleted_at: null,
    vote_count: 0,
    comment_count: 0,
    vote_direction: 0,
    author_id,
    body
  }

  comments = [...comments, comment]

  console.log('nuevo comentario')
  console.log({ comment })
  console.log('todos los comentarios')
  console.log({ comments })
  return HttpResponse.json(
    comment,
    { status: 200 }
  )
})

const updateComment = http.put('/api/v1/posts/:postId/comments/:commentId', async ({ params, request }) => {
  const id = Number.parseInt(params.commentId)
  const { body } = await request.json()

  const oldComment = comments.find(comment => comment.id === id)
  const updatedComment = {
    ...oldComment,
    body,
    updated_at: (new Date()).toISOString()
  }

  comments = comments.map(comment => comment.id === id ? updatedComment : comment)

  return HttpResponse.json(
    updatedComment,
    { status: 200 }
  )
})

const deleteComment = http.delete('/api/v1/posts/:postId/comments/:commentId', ({ params }, res, ctx) => {
  const id = Number.parseInt(params.commentId)

  const oldComment = comments.find(comment => comment.id === id)
  const deletedComment = {
    ...oldComment,
    updated_at: (new Date()).toISOString()
  }

  comments = comments.map(comment => comment.id === id ? deletedComment : comment)

  return res(ctx.status(204))
})

const voteComment = http.post('/api/v1/posts/:postId/comments/:commentId/vote', async ({ params, request }) => {
  const id = Number.parseInt(params.commentId)
  const { vote_type: newVote } = await request.json()
  const oldComment = comments.find(c => c.id === id)
  const { vote_direction: currVote } = oldComment

  const votedComment = { ...oldComment }
  // unvote
  if (newVote === currVote) {
    votedComment.vote_direction = 0
    votedComment.vote_count -= newVote
  } else {
    // new vote
    if (currVote === 0) {
      votedComment.vote_count += newVote
    } else { // reverse vote
      votedComment.vote_count += 2 * newVote
    }
    votedComment.vote_direction = newVote
  }

  comments = comments.map(comment => comment.id === id ? votedComment : comment)

  return HttpResponse.json(votedComment, { status: 200 })
})

export default [getComments, createComment, updateComment, deleteComment, voteComment]
