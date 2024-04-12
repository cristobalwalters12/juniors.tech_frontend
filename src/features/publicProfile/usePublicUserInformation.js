import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getPublicProfile } from '../../services/users'

const usePublicUserInformation = (username) => {
  const queryClient = useQueryClient()
  const publicProfileMutation = useMutation({
    mutationFn: () => getPublicProfile(username),
    onSuccess: (data) => {
      queryClient.invalidateQueries('publicProfile')
    }
  })

  return {
    publicProfile: publicProfileMutation.mutate,
    isError: publicProfileMutation.isError,
    data: publicProfileMutation.data
  }
}
export { usePublicUserInformation }
