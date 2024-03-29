import { http, HttpResponse } from 'msw'

const getUsers = http.get('api/v1/users', () => {
  return HttpResponse.json({
    users: [
      { id: 1, name: 'John Doe', username: 'johndoe', email: 'jhonDoe@gmail.com', password: '123456' },
      { id: 2, name: 'Jane Doe', username: 'janedoe', email: 'janeDoe@gmail.com', password: '123456' }

    ]
  },
  { status: 200 })
})

const arrayUsers = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: '', password: '' },
  { id: 2, name: 'Jane Doe', username: 'janedoe', email: '', password: '' }
]
const addUsers = http.post('/api/v1/sign-up', async ({ request }) => {
  const user = await request.json()
  const email = user.email ?? ''
  const username = user.username ?? ''
  const password = user.password ?? ''
  const birthdate = user.birthdate ?? ''

  if (email === '' || username === '' || password === '' || birthdate === '') {
    return HttpResponse.json({ error: 'este usuario no es valido' }, { status: 400 })
  }

  if (arrayUsers.some(u => u.username === username)) {
    return HttpResponse.json({ error: 'Username already exists' }, { status: 405 })
  }
  return HttpResponse.json({ message: 'User created' }, { status: 201 })
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
  HttpResponse.json({ token: 'token' }, { status: 200 })
})

export default [getUsers, addUsers, login]
