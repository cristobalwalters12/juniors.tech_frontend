import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveComment } from '../../services/comments'

const useSaveComment = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: saveComment,
    onMutate: (payload) => payload,
    onSuccess: (savedComment, variables, context) => {
      let newComment = true
      queryClient.setQueryData(['posts', savedComment.postId, 'comments'], (prevComments) => {
        // Create the first comment on a post
        if (!prevComments) return [savedComment]

        // Comment on a post, when there are other comments
        if (!context.commentId) {
          const updatedComments = prevComments.map(comment => {
            if (comment.id !== savedComment.parentId) return comment
            return {
              ...comment,
              commentCount: comment.commentCount + 1
            }
          })
          return [savedComment, ...updatedComments]
        }

        // Edit an existing comment
        newComment = false
        return prevComments.map(comment => comment.id === savedComment.id ? savedComment : comment)
      })

      if (!newComment) return
      queryClient.setQueryData(['posts', savedComment.postId], (prevPost) => {
        prevPost.commentCount += 1
        return prevPost
      })
    },
    retry: 0
  })
}

export { useSaveComment }
