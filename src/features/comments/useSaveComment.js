import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveComment } from '../../services/comments'

const useSaveComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: saveComment,
    onSuccess: (newComment) => {
      queryClient.setQueryData(['comments', newComment.postId], (prevComments) => {
        if (!prevComments) return [newComment]
        return [newComment, ...prevComments]
      })
    },
    retry: 0
  })
}

export { useSaveComment }
