import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      token: null,
      user: null,
      id: null,
      roles: [],
      avatarUrl: null,
      setToken: (token) => set({ token, isAuth: token !== null }),
      setUser: (user) => set({ user }),
      setId: (id) => set({ id }),
      setRoles: (roles) => set({ roles }),
      setAvatarUrl: (avatarUrl) => set({ avatarUrl }),
      logout: () => set({ token: null, isAuth: false, user: null, id: null, roles: [], avatarUrl: null })
    }),
    {
      name: 'authStore',
      getStorage: () => localStorage
    }
  )
)

export { useAuthStore }
