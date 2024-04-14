import { create } from 'zustand'

const useModalStore = create((set) => ({
  openName: '',
  close: () => set({ openName: '' }),
  open: (name) => set({ openName: name })
}))

export default useModalStore
