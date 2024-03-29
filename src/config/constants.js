const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const API_PATHS = {
  login: '/login',
  register: '/sign-up',
  users: '/users',
  userData: '/user-data',
  posts: '/posts',
  comments: '/comments'
}

export { API_BASE_URL, API_PATHS }
