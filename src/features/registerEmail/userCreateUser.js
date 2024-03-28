import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../../services/users'

const useCreateUser = () => {
  const queryClient = useQueryClient()

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: queryClient.invalidateQueries('users')
  })

  return {
    createUser: createUserMutation.mutate,
    isError: createUserMutation.isError
  }
}

export { useCreateUser }
