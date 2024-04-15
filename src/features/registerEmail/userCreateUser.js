import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../../services/users'
import { useState } from 'react'
import { useAuthStore } from '../../stores/authStore'
const useCreateUser = () => {
  const queryClient = useQueryClient()
  const [errorMessage, setErrorMessage] = useState('')
  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setUser = useAuthStore((state) => state.setUser)
  const setRoles = useAuthStore((state) => state.setRoles)
  const setAvatarUrl = useAuthStore((state) => state.setAvatarUrl)
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      setToken(data.token)
      setId(data.user.id)
      setUser(data.user.username)
      setRoles(data.user.role)
      setAvatarUrl(data.user.userImageURL)
      setErrorMessage('')
    },
    onError: (error) => {
      console.log(error)
      setErrorMessage('el usuario ya existe')
    }
  })

  return {
    createUser: createUserMutation.mutate,
    isError: createUserMutation.isError,
    errorMessage,
    resetError: () => setErrorMessage('')
  }
}

export { useCreateUser }
