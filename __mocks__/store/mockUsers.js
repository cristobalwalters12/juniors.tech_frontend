import { http, HttpResponse } from 'msw'

const getUsers = http.get('api/v1/users', () => {
  return HttpResponse.json(arrayUsers,
    { status: 200 })
})

const arrayUsers = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'jhonDoe@gmail.com', password: '123456' },
  { id: 2, name: 'Jane Doe', username: 'janedoe', email: 'janeDoe@gmail.com', password: '123456' }
]

const getUserById = http.get('api/v1/users/:id', ({ params }) => {
  const user = arrayUsers.find(u => u.id === Number(params.id))

  if (!user) {
    return HttpResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return HttpResponse.json(user, { status: 200 })
})

const addUsers = http.post('api/v1/users', async ({ request }) => {
  const user = await request.json()
  const email = user.email ?? ''
  const username = user.username ?? ''
  const password = user.password ?? ''

  if (email === '' || username === '' || password === '') {
    return HttpResponse.json({ error: 'Invalid user' }, { status: 400 })
  }

  if (arrayUsers.some(u => u.username === username)) {
    return HttpResponse.json({ error: 'Username already exists' }, { status: 404 })
  }
})

const login = http.post('api/v1/login', async ({ request }) => {
  const user = await request.json()
  const username = user.username ?? ''
  const password = user.password ?? ''

  if (username === '' || password === '') {
    return HttpResponse.json({ error: 'Invalid user' }, { status: 400 })
  }

  if (!arrayUsers.some(u => u.username === username && u.password === password)) {
    return HttpResponse.json({ error: 'Invalid credentials' }, { status: 404 })
  }

  return HttpResponse.json({ token: 'token' }, { status: 200 })
})

export default [getUsers, addUsers, login, getUserById]
