import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getPublicProfile } from '../../services/users'

const usePublicUserInformation = () => {
  const queryClient = useQueryClient()
  const publicProfileMutation = useMutation({
    mutationFn: getPublicProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries('publicProfile')
      console.log(data)
    }
  })

  return {
    publicProfile: publicProfileMutation.mutate,
    isError: publicProfileMutation.isError,
    data: publicProfileMutation.data
  }
}
export { usePublicUserInformation }
