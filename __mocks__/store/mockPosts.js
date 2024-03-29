import { http, HttpResponse } from 'msw'
import { categories } from './data/categories'
import { dataPosts } from './data/posts'
import { currUser } from './data/global'

/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */

let postCount = dataPosts.length
let posts = [...dataPosts]
const username = currUser.username
const author_id = currUser.id
const avatar = currUser.avatar

const getPosts = http.get('/api/v1/posts', () => {
  const postsResponse = posts.filter(post => post.deleted_at !== null)
  return HttpResponse.json(
    postsResponse,
    { status: 200 }
  )
})

const getPostById = http.get('/api/v1/posts/:id', ({ params }) => {
  const id = Number.parseInt(params.id)
  const post = posts.find(p => p.id === id)

  if (post === null) {
    return HttpResponse.json(
      {
        message: 'Post not found'
      },
      { status: 404 }
    )
  }
  return HttpResponse.json(post, { status: 200 })
})

const createPost = http.post('/api/v1/posts', async ({ request }) => {
  const { category: category_id, title, body } = await request.json()

  postCount++
  const category = categories.find(category => category.id === category_id)
  const post = {
    id: postCount,
    category,
    category_id,
    username,
    avatar,
    author_id,
    title,
    body,
    vote_count: 0,
    comment_count: 0,
    created_at: (new Date()).toISOString(),
    updated_at: null,
    vote_direction: 0
  }

  posts = [...posts, post]
  return HttpResponse.json(post, { status: 201 })
})

const editPost = http.put('/api/v1/posts/:id', async ({ params, request }) => {
  const { id } = params

  const { category: category_id, title, body } = await request.json()

  postCount++
  const post = posts.find(post => post.id = id)

  if (post !== null) {
    posts = posts.map(currPost => {
      if (currPost.id !== id) return currPost

      return {
        ...currPost,
        category_id,
        category: categories.find(category => category.id === category_id).name,
        title,
        body
      }
    })

    return HttpResponse.json(
      posts,
      { status: 200 }
    )
  } else {
    return HttpResponse.json(
      {
        message: 'Post not found'
      },
      { status: 404 }
    )
  }
})

const deletePost = http.delete('/api/v1/posts/:postId', ({ params }, res, ctx) => {
  const id = Number.parseInt(params.commentId)
  posts = posts.map(post => {
    if (post.id !== id) return post

    return {
      ...post,
      deleted_at: (new Date()).toISOString()
    }
  })
  return res(ctx.status(204))
})

const votePost = http.post('/api/v1/posts/:id/vote', async ({ params, request }) => {
  const { id } = params
  const { vote_type: newVote } = await request.json()
  const post = posts.find(p => p.id === id)
  const { vote_direction: currVote } = post

  // unvote
  if (newVote === currVote) {
    post.vote_direction = 0
    post.vote_count -= newVote
  } else {
    // new vote
    if (currVote === 0) {
      post.vote_count += newVote
    } else { // reverse vote
      post.vote_count += 2 * newVote
    }
    post.vote_direction = newVote
  }
})

export default [getPosts, getPostById, createPost, editPost, deletePost, votePost]
