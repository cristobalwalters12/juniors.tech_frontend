import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getPostById } from '../../services/users'

const usePublicPostInformation = (id) => {
  const queryClient = useQueryClient()
  const postByIdMutation = useMutation({
    mutationFn: () => getPostById(id),
    onSuccess: (posts) => {
      queryClient.invalidateQueries('publicPost')
    }
  })

  return {
    publicPost: postByIdMutation.mutate,
    isError: postByIdMutation.isError,
    posts: postByIdMutation.data
  }
}
export { usePublicPostInformation }
