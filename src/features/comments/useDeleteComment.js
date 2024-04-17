import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteComment } from '../../services/comments'

const useDeleteComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteComment,
    onMutate: (payload) => payload,
    onSuccess: (result, variables, context) => {
      queryClient.setQueryData(
        ['comments', context.postId],
        (prevComments) => prevComments.map(comment => {
          if (comment.id !== context.commentId) return comment
          return {
            ...comment,
            body: 'Comentario eliminado',
            authorId: null,
            authorUsername: null,
            avatarUrl: null,
            voteCount: null,
            deletedAt: (new Date()).toISOString(),
            voteDirection: 0
          }
        })
      )
    }
  })
}

export { useDeleteComment }
