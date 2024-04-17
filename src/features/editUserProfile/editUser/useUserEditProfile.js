import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editUser as editUserService } from '../../../services/users'

const useUserEditUser = () => {
  const queryClient = useQueryClient()
  const EditUserMutation = useMutation({
    mutationFn: editUserService,
    onSuccess: (response) => {
      queryClient.invalidateQueries('users')
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    editUser: EditUserMutation.mutate,
    isError: EditUserMutation.isError
  }
}
export { useUserEditUser }
