import { create } from 'zustand'

const authStore = create((set) => ({
  isAuth: false,
  token: null,
  user: null,
  setToken: (token) => set({ token, isAuth: token !== null }),
  setUser: (user) => set({ user })
}))

export { authStore }
