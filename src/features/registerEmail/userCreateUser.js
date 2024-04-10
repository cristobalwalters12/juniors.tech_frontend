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
  const setRole = useAuthStore((state) => state.setRole)
  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      setToken(data.token)
      setId(data.user.id)
      setUser(data.user.username)
      setRole(data.user.role)
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
