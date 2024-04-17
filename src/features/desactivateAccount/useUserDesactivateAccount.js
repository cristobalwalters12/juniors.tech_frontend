import { useMutation, useQueryClient } from '@tanstack/react-query'
import { desactivateAccount as desactivateService } from '../../services/users'

const useUserDesactivateAccount = () => {
  const queryClient = useQueryClient()
  const DesactivateUserMutation = useMutation({
    mutationFn: desactivateService,
    onSuccess: (response) => {
      queryClient.invalidateQueries('users')
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    desactivate: DesactivateUserMutation.mutate,
    isError: DesactivateUserMutation.isError
  }
}
export { useUserDesactivateAccount }
