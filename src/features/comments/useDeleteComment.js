import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComment } from '../../services/comments'

const useDeleteComment = () => {
  const queryClient = useQueryClient()

  const deleteCommentMutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: queryClient.invalidateQueries({ queryKey: ['comments'] })
  })

  return {
    deleteComment: deleteCommentMutation.mutate
  }
}

export { useDeleteComment }
