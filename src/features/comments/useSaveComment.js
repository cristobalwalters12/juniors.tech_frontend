import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveComment } from '../../services/comments'

const useSaveComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: saveComment,
    onMutate: (payload) => payload,
    onSuccess: (savedComment, variables, context) => {
      queryClient.setQueryData(['posts', savedComment.postId, 'comments'], (prevComments) => {
        if (!prevComments) return [savedComment]
        if (!context.commentId) return [savedComment, ...prevComments]
        return prevComments.map(comment => comment.id === savedComment.id ? savedComment : comment)
      })
    },
    retry: 0
  })
}

export { useSaveComment }
