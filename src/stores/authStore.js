import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      token: null,
      user: null,
      id: null,
      role: null,
      setToken: (token) => set({ token, isAuth: token !== null }),
      setUser: (user) => set({ user }),
      setId: (id) => set({ id }),
      setRole: (role) => set({ role }),
      logout: () => set({ token: null, isAuth: false, user: null, id: null, role: null })
    }),
    {
      name: 'authStore',
      getStorage: () => localStorage
    }
  )
)

export { useAuthStore }
