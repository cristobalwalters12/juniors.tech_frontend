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

const addUsers = http.post('api/v1/sign-up', async ({ request }) => {
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
  const id = arrayUsers.length + 1

  arrayUsers.push({ id, email, username, password, birthdate })
  console.log(arrayUsers)

  return HttpResponse.json({ message: 'User created' }, { status: 201 })
})

const login = http.post('api/v1/login', async ({ request }) => {
  const user = await request.json()
  const email = user.email ?? ''
  const password = user.password ?? ''

  if (email === '' || password === '') {
    return HttpResponse.json({ error: 'Usuario Invalido' }, { status: 400 })
  }
  const matchedUser = arrayUsers.find(u => u.email === email && u.password === password)
  if (!matchedUser) {
    return HttpResponse.json({ error: 'Invalid credentials' }, { status: 404 })
  }
  return HttpResponse.json({ token: matchedUser.id }, { status: 200 })
})

const UserData = http.get('api/v1/user-data', async ({ request }) => {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader) {
    return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const token = authHeader.split(' ')[1]
  const user = arrayUsers.find(u => u.id === parseInt(token))
  if (!user) {
    return HttpResponse.json({ error: 'Usuario No Encontrado' }, { status: 404 })
  }
  return HttpResponse.json([{ id: user.id, username: user.username, role: 'usuario' }], { status: 200 })
})

export default [getUsers, addUsers, login, UserData, getUserById]
