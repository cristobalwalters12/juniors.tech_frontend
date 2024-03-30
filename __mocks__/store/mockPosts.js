import { http, HttpResponse } from 'msw'
import { categories } from './data/categories'
import { dataPosts } from './data/posts'
import { currUser } from './data/global'

let postCount = dataPosts.length

const getPosts = http.get('/api/v1/posts', () => {
  const postsResponse = dataPosts.filter(post => post.deleted_at !== null)
  return HttpResponse.json(
    postsResponse,
    { status: 200 }
  )
})

const getPostById = http.get('/api/v1/posts/:id', ({ params }) => {
  const id = Number.parseInt(params.id)
  const post = dataPosts.find(currPost => currPost.id === id)

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
  const { categoryId, title, body } = await request.json()

  postCount++
  const category = categories.find(category => category.id === +categoryId)
  const post = {
    id: postCount,
    category: category.name,
    category_id: categoryId,
    username: currUser.username,
    avatar: currUser.avatar,
    author_id: currUser.id,
    title,
    body,
    vote_count: 0,
    comment_count: 0,
    created_at: (new Date()).toISOString(),
    updated_at: null,
    vote_direction: 0
  }

  dataPosts.push(post)

  return HttpResponse.json(post, { status: 201 })
})

const editPost = http.put('/api/v1/posts/:id', async ({ params, request }) => {
  const postId = Number.parseInt(params.id)

  const { categoryId, title, body } = await request.json()

  postCount++
  const post = dataPosts.find(post => post.id === postId)

  if (post === null) {
    return HttpResponse.json(
      {
        message: 'Post not found'
      },
      { status: 404 }
    )
  }

  const category = categories.find(category => category.id === +categoryId).name

  post.category_id = categoryId
  post.category = category
  post.title = title
  post.body = body
  post.updated_at = (new Date()).toISOString()

  return HttpResponse.json(post, { status: 200 })
})

/* const deletePost = http.delete('/api/v1/posts/:postId', ({ params }, res, ctx) => {
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
}) */

export default [getPosts, getPostById, createPost, editPost]
