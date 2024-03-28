import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveComment } from '../../services/comments'

const useSaveComment = () => {
  const queryClient = useQueryClient()

  const saveCommentMutation = useMutation({
    mutationFn: saveComment,
    onSuccess: queryClient.invalidateQueries({ queryKey: ['comments'] })
  })

  return {
    saveComment: saveCommentMutation.mutate
  }
}

export { useSaveComment }
