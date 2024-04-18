import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changePassword as changeService } from '../../services/users'

const useUserChangePassword = () => {
  const queryClient = useQueryClient()
  const changeUserPasswordMutation = useMutation({
    mutationFn: changeService,
    onSuccess: (response) => {
      queryClient.invalidateQueries('users')
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    change: changeUserPasswordMutation.mutate,
    isError: changeUserPasswordMutation.isError
  }
}
export { useUserChangePassword }
