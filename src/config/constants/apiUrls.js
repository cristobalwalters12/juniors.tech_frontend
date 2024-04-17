const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const API_PATHS = {
  login: '/auth/login',
  register: '/users/sign-up',
  users: '/users',
  userData: '/user-data',
  publicProfile: '/users/:username',
  desactivateAccount: '/users/:id/desactivateAccount',
  editProfile: '/users/:username',
  changePassword: '/auth/change-password',
  posts: '/posts',
  comments: '/comments',
  mod: '/mod',
  search: '/search',
  categories: '/categories'
}

export { API_BASE_URL, API_PATHS }
