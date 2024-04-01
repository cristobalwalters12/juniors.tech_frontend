import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../../services/users'
import { useState } from 'react'
const useCreateUser = () => {
  const queryClient = useQueryClient()
  const [errorMessage, setErrorMessage] = useState('')

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
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
