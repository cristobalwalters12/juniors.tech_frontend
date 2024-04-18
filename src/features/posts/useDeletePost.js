import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePostById } from '../../services/posts'

const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deletePostById,
    onMutate: (payload) => payload,
    onSuccess: (result, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['posts', context.postId] })
    }
  })
}

export { useDeletePost }
