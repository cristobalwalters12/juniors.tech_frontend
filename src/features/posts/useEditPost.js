import { useMutation, useQueryClient } from '@tanstack/react-query'
import { editPost } from '../../services/posts'

const useEditPost = () => {
  const queryClient = useQueryClient()

  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: queryClient.invalidateQueries({ queryKey: ['posts'] })
  })

  return {
    editPost: editPostMutation.mutate
  }
}

export { useEditPost }
